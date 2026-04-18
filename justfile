set dotenv-load := true

# 🔧 Build da imagem
docker-build:
    docker compose build

# 🚀 Sobe o container
docker-up:
    docker compose up

# 🔄 Sobe rebuildando
docker-rebuild:
    docker compose up --build

# 🛑 Derruba tudo
docker-down:
    docker compose down

# 📦 Remove containers + volumes (reset total)
docker-reset:
    docker compose down -v --remove-orphans

# 📜 Logs
logs:
    docker compose logs -f

# 🐚 Acessa container
shell:
    docker exec -it yieldreal-frontend sh

# 🚀 Fluxo completo (build + up)
start:
    just docker-rebuild

# 🧹 Limpeza geral do docker (cuidado)
docker-prune:
    docker system prune -af

run-dev:
    npm run dev --prefix ./frontend