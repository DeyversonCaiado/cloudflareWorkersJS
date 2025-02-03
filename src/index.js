import { unzip } from 'unzipit'

export default {
  async fetch(request, env) {
    if (!env || !env.R2) {
      return new Response("Erro: R2 não está definido no ambiente.", { status: 500 })
    }

    const key = 'vista.zip'

    try {
      const response = await env.R2.get(key)

      if (!response) {
        return new Response('Arquivo não encontrado no R2.', { status: 404 })
      }

      const arrayBuffer = await response.arrayBuffer()
      const { entries } = await unzip(new Uint8Array(arrayBuffer))

      for (const [name, entry] of Object.entries(entries)) {
        if (entry.isDirectory) continue

        const fileBlob = await entry.blob()
        const blobStream = fileBlob.stream()

        //await env.R2.put(`descompactado/${name}`, blobStream)
        await env.R2.put(name, blobStream)
      }

      return new Response('Descompactação e upload bem-sucedidos.', { status: 200 })
    } catch (error) {
      return new Response(`Erro ao acessar R2: ${error.message}`, { status: 500 })
    }
  }
}
