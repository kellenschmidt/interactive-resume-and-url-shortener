# urlshortener.kellenschmidt.com

[![Build Status](https://travis-ci.org/kellenschmidt/kellenschmidt.com.svg?branch=master)](https://travis-ci.org/kellenschmidt/kellenschmidt.com)
[![Stories in Progress](https://badge.waffle.io/kellenschmidt/urlshortener.kellenschmidt.com.png?label=in%20progress&title=In%20progress)](https://waffle.io/kellenschmidt/urlshortener.kellenschmidt.com?utm_source=badge)
[![Stories in Ready](https://badge.waffle.io/kellenschmidt/urlshortener.kellenschmidt.com.png?staged%20for%20development&title=Staged%20for%20Development)](https://waffle.io/kellenschmidt/urlshortener.kellenschmidt.com?utm_source=badge)

<img src="https://varahund.files.wordpress.com/2016/06/varning.jpg" width=24/><i>  Currently in progress</i>

Angular version of URL shortener to create, manage, and redirect short URLs

https://kellenschmidt.com/url

### Technologies used

- Angular 2 v4 for the front-end
  - Bootstrap 4 https://v4-alpha.getbootstrap.com
  - MDBootstrap for Angular https://mdbootstrap.com/angular
- [Slim Framework](https://www.slimframework.com/) for the API to interact with the database
  - [Apiary](http://docs.urlshortener4.apiary.io/) to document the API
  - API accessed at [api.kellenschmidt.com](api.kellenschmidt.com)
- Travis CI for build testing https://travis-ci.org
- MySQL database

### Shorten a URL
1. Visit [kellenschmidt.com/url](kellenschmidt.com/url)
2. Enter your long URL
3. Click the shorten button
4. Copy your new, short link
5. Paste your short link into the browser to go to the original URL
 
 Then come back later and see how many times your links have been used

## Angular CLI

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
