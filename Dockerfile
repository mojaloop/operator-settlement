
FROM node:8.11.3-alpine

WORKDIR /src

CMD ["node", "/server.js"]

COPY ./src/package.json ./src/package-lock.json /src/
COPY ./src/model/package.json /src/model/package.json
RUN npm install --production

COPY ./model/ ./handlers/ ./config/ /src/
