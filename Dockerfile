## Builder Image
FROM node:8.11.3-alpine AS builder

WORKDIR /opt/operator-settlement

RUN apk update && apk add bash

COPY ./init.sql /opt/operator-settlement/
COPY ./package.json ./package-lock.json /opt/operator-settlement/
COPY ./model /opt/operator-settlement/model
COPY ./handlers /opt/operator-settlement/handlers
COPY ./config /opt/operator-settlement/config
COPY ./server.js /opt/operator-settlement/

RUN npm install

## Run-time Image
FROM node:8.11.3-alpine
WORKDIR /opt/operator-settlement

RUN apk update && apk add bash mysql-client

COPY --from=builder /opt/operator-settlement .

RUN npm prune --production

CMD ["node", "./server.js"]
