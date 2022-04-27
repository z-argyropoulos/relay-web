## STEP: BUILD

FROM node:17-alpine3.15 as build

WORKDIR /usr/src/relay-app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . ./

RUN yarn build

## STEP: SERVE

FROM nginx:1.21.6-alpine

COPY --from=build /usr/src/relay-app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
