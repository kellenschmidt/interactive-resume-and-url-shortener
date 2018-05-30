# docker build --build-arg ENVIRONMENT=dev -t kellenschmidt/kspw-angular .
# docker run -p 80:80 -d kellenschmidt/kspw-angular

FROM node:9 as builder
ARG ENVIRONMENT
RUN mkdir /angular
WORKDIR /angular
ENV PATH /angular/node_modules/.bin:$PATH
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
RUN npm install --silent
COPY . .
RUN mv ./src/kellen-mdb-free.scss ./node_modules/angular-bootstrap-md/scss
RUN ng build --configuration=${ENVIRONMENT} --no-progress

FROM httpd:2.4-alpine
COPY httpd.conf /home/httpd.conf
RUN cat /home/httpd.conf >> /usr/local/apache2/conf/httpd.conf
COPY --from=builder /angular/dist/personal-website /usr/local/apache2/htdocs
EXPOSE 80
CMD ["apachectl", "start", "-DFOREGROUND"]
