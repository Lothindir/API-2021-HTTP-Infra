FROM node:alpine

WORKDIR /app

COPY --chown=node:node package*.json /app/

RUN npm install

COPY --chown=node:node . /app/

USER node

ENTRYPOINT [ "node", "server.js" ]
