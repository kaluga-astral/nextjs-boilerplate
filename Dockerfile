FROM node:18-alpine AS build

RUN apk add --no-cache libc6-compat

WORKDIR /usr/src/app

COPY package.json package-lock.json* ./

# Удаляем prepare скрипт, чтобы исключить установку husky
RUN npm pkg delete scripts.prepare
# Игнорируются devDependency при установке зависимостей
RUN npm i --production

COPY . .

ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_SENTRY_DSN
ARG NEXT_PUBLIC_SENTRY_ENV

RUN npm run build

FROM fholzer/nginx-brotli:v1.19.1
COPY .devops/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/out /usr/share/nginx/html
