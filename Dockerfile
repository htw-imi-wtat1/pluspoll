FROM node:14.2-alpine3.11
RUN set -ex \
  && apk add --no-cache  bash
RUN mkdir -p /usr/src/pollplus
WORKDIR /usr/src/pollplus
COPY . .
RUN yarn install --production=true
RUN yarn run build

EXPOSE 3011
CMD ["node", "backend/server.js"]
