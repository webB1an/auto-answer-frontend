FROM nginx
COPY dist/ /usr/share/nginx/html/
COPY ./default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80


# build stage
# FROM node:16.0.0 as build-stage
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run docker

# production stage
# FROM nginx as production-stage
# COPY --from=build-stage /app/dist /usr/share/nginx/html
# COPY --from=build-stage /app/default.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80

# docker run -p 8888:80 -d --name auto-answer-frontend auto-answer-frontend