# docker build --build-arg ENVIRONMENT=dev -t kellenschmidt/kspw-angular .
# docker run -p 80:80 -d kellenschmidt/kspw-angular

FROM node:9 as builder
ARG ENVIRONMENT
RUN mkdir /angular
WORKDIR /angular
ENV PATH /angular/node_modules/.bin:$PATH
COPY package.json ./package.json
COPY yarn.lock ./yarn.lock
RUN yarn install --silent
COPY . .
RUN ng build --prod --env=${ENVIRONMENT} --no-progress

FROM httpd:2.4-alpine
COPY httpd.conf /home/httpd.conf
RUN cat /home/httpd.conf >> /usr/local/apache2/conf/httpd.conf
COPY --from=builder /angular/build /usr/local/apache2/htdocs
EXPOSE 80
CMD ["apachectl", "start", "-DFOREGROUND"]
