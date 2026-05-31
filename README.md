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
NEXT_PUBLIC_YANDEX_MAPS_API_KEY=your-yandex-maps-api-key
NEXT_PUBLIC_PHONE_DISPLAY=+7 (800) 000 00 00
NEXT_PUBLIC_PHONE_HREF=+78000000000
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
