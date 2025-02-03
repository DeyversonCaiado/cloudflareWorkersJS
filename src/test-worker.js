export default {
    async fetch(request, env) {
      if (!env.R2) {
        return new Response("Erro: R2 não está definido..", { status: 500 });
      }
      return new Response("R2 está disponível!", { status: 200 });
    }
  }
  