FROM node:14.2-alpine3.11
RUN set -ex && apk add --no-cache  bash
RUN mkdir -p /usr/src/pollplus
WORKDIR /usr/src/pollplus
COPY . .
RUN yarn install --production=true
ENV REACT_APP_ENDPOINT=http://localhost:3011
RUN yarn run build
EXPOSE 3011
CMD ["node", "backend/server.js"]
