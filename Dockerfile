FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

COPY ./dist /var/www/html

RUN apk update && apk add nginx

COPY nginx.conf /etc/nginx/sites-enabled/default.conf

EXPOSE 8000

CMD ["npm", "run", "dev"]

# FROM node:16-alpine as build

# WORKDIR /app

# COPY package*.json ./

# RUN npm ci --silent

# COPY . .

# RUN npm run build

# FROM nginx:alpine

# RUN rm -rf /usr/share/nginx/html/*

# COPY --from=build /app/build /usr/share/nginx/html

# COPY nginx.conf /etc/nginx/conf.d/default.conf

# # Declare environment variables
# ENV REACT_APP_ENDPOINT_URL=''

# EXPOSE 80:8080

# CMD ["nginx", "-g", "daemon off;"]