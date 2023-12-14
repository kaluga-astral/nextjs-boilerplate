FROM node:18-alpine

WORKDIR /usr/src/app

COPY . ./

RUN npm install

RUN npm run tests:ci
