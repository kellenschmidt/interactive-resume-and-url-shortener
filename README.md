# urlshortener.kellenschmidt.com

[![Build Status](https://travis-ci.org/kellenschmidt/kellenschmidt.com.svg?branch=master)](https://travis-ci.org/kellenschmidt/kellenschmidt.com)
[![Waffle.io](https://badge.waffle.io/kellenschmidt/urlshortener.kellenschmidt.com.png?staged%20for%20development&title=Staged%20for%20Development)](https://waffle.io/kellenschmidt/urlshortener.kellenschmidt.com?utm_source=badge)

Angular version of URL shortener to create, manage, and redirect short URLs

https://kellenschmidt.com/url

### Technologies used

- Angular 4 for the front-end
  - Bootstrap 4 https://getbootstrap.com
  - MDBootstrap for Angular https://mdbootstrap.com/angular
  - Material Angular https://material.angular.io
- Backend MySQL database interaction via RESTful API https://api.kellenschmidt.com

### Shorten a URL
1. Visit [kellenschmidt.com/url](kellenschmidt.com/url)
2. Enter your long URL
3. Click the shorten button
4. Copy your new, short link
5. Paste your short link into the browser to go to the original URL
 
 Then come back later and see how many times your links have been used

## How to run the project locally

1. Download all of the files from github
    ```
    git clone https://github.com/kellenschmidt/urlshortener.kellenschmidt.com.git
    cd urlshortener.kellenschmidt.com/
    ```
2. Install dependencies
    ```
    npm install
    ```
3. Start development server and open website
    ```
    ng serve -open
    ```
