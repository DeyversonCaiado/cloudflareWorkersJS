# cloudflareWorkersJS
Exemplo de Workder JS para descompactar arquivos dendo do bucket R2 da Cloudflare

# Instalar o CLI, para te dar acesso ao worker
* npm install wrangler --save-dev
# Criar um novo worker
* npm create cloudflare@latest -- my-first-worker

# Vocâ vai desenvolver offline, depois de tudo pronto fazer deploy(alteração vai direto para o cloudflare)
* npx wrangler deploy
