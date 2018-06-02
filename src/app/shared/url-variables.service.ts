import { Injectable } from '@angular/core';

@Injectable()
export class UrlVariablesService {

  private urls: UrlEnvironment;

  constructor() {
    let url: string = this.getSiteFromUrl();

    if (url == "http://localhost:4200") {
      this.urls = serve;
    } else if (url == "http://kspw") {
      this.urls = dev;
    } else if (url == "https://test.kellenforthe.win") {
      this.urls = test2;
    } else if (url == "https://test.kellenschmidt.com") {
      this.urls = test;
    } else if (url == "https://kellenforthe.win") {
      this.urls = prod2;
    } else if (url == "https://kellenschmidt.com") {
      this.urls = prod;
    } else {
      this.urls = {
        siteUrl: `${url}`,
        apiUrl: `${url}/api/v1`,
        phpLinkShortenerUrl: `${url}/urlshortenerphp`,
        projectsUrl: `${url}/projects`,
        analyticsUrl: `${url}/analytics`,
      }
    }
  }

  get siteUrl(): string {
    return this.urls.siteUrl;
  }
  get apiUrl(): string {
    return this.urls.apiUrl;
  }
  get phpLinkShortenerUrl(): string {
    return this.urls.phpLinkShortenerUrl;
  }
  get projectsUrl(): string {
    return this.urls.projectsUrl;
  }
  get analyticsUrl(): string {
    return this.urls.analyticsUrl;
  }

  getSiteFromUrl(): string {
    const url = window.location.href;
    const index1 = url.indexOf('/', 8);
    if (index1 >= 0) {
      return url.substring(0, index1);
    } else {
      return url;
    }
  }
  
}

const serve: UrlEnvironment = {
  siteUrl: "http://localhost:4200",
  apiUrl: "https://api.kellenschmidt.com",
  phpLinkShortenerUrl: "https://kellenschmidt.com/urlshortenerphp",
  projectsUrl: "https://kellenschmidt.com/projects",
  analyticsUrl: "https://kellenschmidt.com/analytics",
};

const dev: UrlEnvironment = {
  siteUrl: "http://kspw",
  apiUrl: "http://kspw/api/v1",
  phpLinkShortenerUrl: "http://kspw/urlshortenerphp",
  projectsUrl: "http://kspw/projects",
  analyticsUrl: "http://kspw/analytics",
};

const test2: UrlEnvironment = {
  siteUrl: "https://test.kellenforthe.win",
  apiUrl: "https://test.kellenforthe.win/api/v1",
  phpLinkShortenerUrl: "https://test.kellenforthe.win/urlshortenerphp",
  projectsUrl: "https://test.kellenforthe.win/projects",
  analyticsUrl: "https://test.kellenforthe.win/analytics",
};

const test: UrlEnvironment = {
  siteUrl: "https://test.kellenschmidt.com",
  apiUrl: "https://test.kellenschmidt.com/api/v1",
  phpLinkShortenerUrl: "https://test.kellenschmidt.com/urlshortenerphp",
  projectsUrl: "https://test.kellenschmidt.com/projects",
  analyticsUrl: "https://test.kellenschmidt.com/analytics",
};

const prod2: UrlEnvironment = {
  siteUrl: "https://kellenforthe.win",
  apiUrl: "https://kellenforthe.win/api/v1",
  phpLinkShortenerUrl: "https://kellenforthe.win/urlshortenerphp",
  projectsUrl: "https://kellenforthe.win/projects",
  analyticsUrl: "https://kellenforthe.win/analytics",
};

const prod: UrlEnvironment = {
  siteUrl: "https://kellenschmidt.com",
  apiUrl: "https://kellenschmidt.com/api/v1",
  phpLinkShortenerUrl: "https://kellenschmidt.com/urlshortenerphp",
  projectsUrl: "https://kellenschmidt.com/projects",
  analyticsUrl: "https://kellenschmidt.com/analytics",
};

interface UrlEnvironment {
  siteUrl: string,
  apiUrl: string,
  phpLinkShortenerUrl: string,
  projectsUrl: string,
  analyticsUrl: string,
}
