import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ks-link-table',
  templateUrl: 'link-table.component.html',
  styleUrls: ['link-table.component.scss']
})
export class LinkTableComponent implements OnInit {

  siteUrl : string = "https://kellenschmidt.com/"

  linkRows : any[] = [
        {
            "code": "abc",
            "long_url": "https://github.com/mgechev/angular-seed/wiki/Deploying-prod-build-to-Apache-2/",
            "date_created": "2017-03-24 09:35:16",
            "count": 4
        },
        {
            "code": "123",
            "long_url": "https://arjunphp.com/creating-restful-api-slim-framework/",
            "date_created": "2017-03-29 10:01:34",
            "count": 1
        },
        {
            "code": "L0l",
            "long_url": "https://v4-alpha.getbootstrap.com/components/carousel/",
            "date_created": "2017-04-05 03:57:15",
            "count": 37
        },
    ];

  constructor() { }

  ngOnInit() {
  }

}
