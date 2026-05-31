# URBIO.AUTO

## Docker

Проект можно запускать в Docker по тому же шаблону, что и `frontend`.
Для управления внешним портом создай файл `.env` в директории `auto`.

Запуск в режиме разработки:

```bash
docker compose up --build
```

Запуск на другом порту:

```bash
DOCKER_PORT_AUTO=3010 docker compose up --build
```

Запуск в режиме production:

```bash
APP_ENV=production DOCKER_PORT_AUTO=3010 docker compose up --build
```

По умолчанию:

- внутренний порт контейнера всегда: `3000`
- внешний порт по умолчанию: `3000`
- внешний порт можно менять через `DOCKER_PORT_AUTO`

Пример `auto/.env`:

```env
DOCKER_PORT_AUTO=3010
```

## Task

Есть `Taskfile.yml` с тем же базовым набором команд, что и в `frontend`.

Примеры:

```bash
task up
task down
task bash
task c -- ps
```

## shadcn/ui

Добавление компонентов:

```bash
npx shadcn@latest add button
```
