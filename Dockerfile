FROM node:8.11.3-alpine AS builder

RUN apk update && apk add bash mysql-client

WORKDIR /src

COPY ./init.sql /src/
COPY ./package.json ./package-lock.json /src/
COPY ./model /src/model

RUN npm install

FROM node:8.11.3-alpine

WORKDIR /src

CMD ["node", "./server.js"]

COPY --from=builder /src /src
COPY ./handlers /src/handlers
COPY ./config /src/config
COPY ./server.js /src/
