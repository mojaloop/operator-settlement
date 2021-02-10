## Builder Image
FROM node:12.16.1-alpine as builder
USER root

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
FROM node:12.16.0-alpine
WORKDIR /opt/operator-settlement

# Create empty log file & link stdout to the application log file
RUN mkdir ./logs && touch ./logs/combined.log
RUN ln -sf /dev/stdout ./logs/combined.log

# Create a non-root user: ml-user
RUN adduser -D ml-user 
USER ml-user

RUN apk update && apk add bash mysql-client

COPY --chown=ml-user --from=builder /opt/operator-settlement .
RUN npm prune --production

CMD ["node", "./server.js"]
