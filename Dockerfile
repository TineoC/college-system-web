FROM node:20-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm ci --production

COPY . .

RUN npm i typescript

RUN npm run build

# NGINX Web Server
FROM nginx:alpine as prod

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]