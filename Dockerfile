## STEP: BUILD

FROM node:17-alpine3.15 as build

WORKDIR /usr/src/relay-app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . ./

ENV PORT 3000

RUN yarn build

## STEP: SERVE

FROM nginx:1.21.6-alpine

COPY --from=build /usr/src/relay-app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
