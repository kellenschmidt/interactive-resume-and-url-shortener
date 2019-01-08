import { Injectable } from '@angular/core';

@Injectable()
export class UrlVariablesService {

  private urls: UrlEnvironment;

  constructor() {
    let url: string = this.getSiteFromUrl();

    if (url == "http://localhost:4200") {
      this.urls = serve;
    } else if (url == "http://kspw") {
      this.urls = kspw;
    } else if (url == "https://kellenforthe.win") {
      this.urls = kellenforthewin;
    } else if (url == "https://kellenschmidt.com") {
      this.urls = kellenschmidtcom;
    } else {
      this.urls = {
        siteUrl: `${url}`,
        apiUrl: `${url}/api/v1`,
        apiv2Url: `${url}/api/v2`,
        phpLinkShortenerUrl: `${url}/urlshortenerphp`,
        projectsUrl: `${url}/projects`,
        analyticsUrl: `${url}/analytics`,
        dqcUrl: `${url}/data-quality-checker`,
      }
    }
  }

  get siteUrl(): string {
    return this.urls.siteUrl;
  }
  get apiUrl(): string {
    return this.urls.apiUrl;
  }
  get apiv2Url(): string {
    return this.urls.apiv2Url;
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
  get dqcUrl(): string {
    return this.urls.dqcUrl;
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
  apiUrl: "https://kellenforthe.win/api/v1",
  // apiv2Url: "https://kellenforthe.win/api/v2",
  apiv2Url: "http://localhost:3000",
  phpLinkShortenerUrl: "https://kellenschmidt.com/urlshortenerphp",
  projectsUrl: "https://kellenschmidt.com/projects",
  analyticsUrl: "https://kellenschmidt.com/analytics",
  dqcUrl: "https://kellenschmidt.com/data-quality-checker",
};

const kspw: UrlEnvironment = {
  siteUrl: "http://kspw",
  apiUrl: "http://kspw/api/v1",
  apiv2Url: "http://kspw/api/v2",
  phpLinkShortenerUrl: "http://kspw/urlshortenerphp",
  projectsUrl: "http://kspw/projects",
  analyticsUrl: "http://kspw/analytics",
  dqcUrl: "http://kspw/data-quality-checker",
};

const kellenforthewin: UrlEnvironment = {
  siteUrl: "https://kellenforthe.win",
  apiUrl: "https://kellenforthe.win/api/v1",
  apiv2Url: "https://kellenforthe.win/api/v2",
  phpLinkShortenerUrl: "https://kellenforthe.win/urlshortenerphp",
  projectsUrl: "https://kellenforthe.win/projects",
  analyticsUrl: "https://kellenforthe.win/analytics",
  dqcUrl: "https://kellenforthe.win/data-quality-checker",
};

const kellenschmidtcom: UrlEnvironment = {
  siteUrl: "https://kellenschmidt.com",
  apiUrl: "https://kellenschmidt.com/api/v1",
  apiv2Url: "https://kellenschmidt.com/api/v2",
  phpLinkShortenerUrl: "https://kellenschmidt.com/urlshortenerphp",
  projectsUrl: "https://kellenschmidt.com/projects",
  analyticsUrl: "https://kellenschmidt.com/analytics",
  dqcUrl: "https://kellenschmidt.com/data-quality-checker",
};

interface UrlEnvironment {
  siteUrl: string,
  apiUrl: string,
  apiv2Url: string,
  phpLinkShortenerUrl: string,
  projectsUrl: string,
  analyticsUrl: string,
  dqcUrl: string,
}
