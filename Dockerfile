
FROM node:8.11.3-alpine

WORKDIR /src

CMD ["node", "./server.js"]

COPY ./package.json ./package-lock.json /src/
COPY ./model/package.json /src/model/package.json
RUN npm install --production

COPY ./model /src/model
COPY ./handlers /src/handlers
COPY ./config /src/config
COPY ./server.js /src/
