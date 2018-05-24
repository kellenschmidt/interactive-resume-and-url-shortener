# docker build -t kellenschmidt/kspw-angular .
# docker run -p 80:80 -d kellenschmidt/kspw-angular

FROM node:9 as builder
RUN mkdir /angular
WORKDIR /angular
ENV PATH /angular/node_modules/.bin:$PATH
COPY package.json ./package.json
COPY yarn.lock ./yarn.lock
RUN yarn install --silent
COPY . .
RUN ng build --prod --no-progress

FROM nginx:1.13-alpine
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
COPY --from=builder /angular/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
