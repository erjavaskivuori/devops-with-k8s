FROM node:24-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY --chown=node:node . .

ENV DEBUG=todoapp:*

USER node

CMD ["npm", "run", "start", "--", "--host"]