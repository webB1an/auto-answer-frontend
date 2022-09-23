# FROM node:16.0.0
# COPY . /web
# WORKDIR /web
# RUN npm install
# RUN npm run docker
# RUN ll -a
FROM nginx
COPY dist/ /usr/share/nginx/html/
COPY ./default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80