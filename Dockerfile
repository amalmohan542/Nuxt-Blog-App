# build environment
FROM node:20.17.0-alpine3.20 as builder
RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install --silent
# RUN npm install react-scripts@1.1.1 -g --silent
COPY . /app
RUN npm run build

CMD ["npm", "run", "dev"]

# production environment
# FROM nginx:1.13.9-alpine
# COPY --from=builder /usr/src/app/build /usr/share/nginx/html
# ADD nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 3001
# CMD ["nginx", "-g", "daemon off;"]