FROM node:21 as build
RUN npm install -g gatsby-cli
WORKDIR /app
ADD . ./
RUN npm install .
RUN gatsby telemetry --disable
RUN gatsby build

FROM nginx
COPY --from=build /app/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
