#### Build
FROM node:latest AS build

WORKDIR /app

RUN npm i -g @angular/cli@8.3.20

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

#### Serve
FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

# copy artifact build from the 'build environment'
COPY --from=build /app/dist /usr/share/nginx/html

# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
