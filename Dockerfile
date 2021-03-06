FROM node:14.18.0-alpine as build

WORKDIR /app/koa-enterprise

ENV NODE_ENV prod

RUN npm config set registry https://registry.npm.taobao.org 

RUN npm install pm2 -g

COPY . .

RUN npm ci --production

EXPOSE 3001

CMD [ "npm", "start" ]
