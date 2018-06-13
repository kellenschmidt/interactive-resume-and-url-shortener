import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UrlVariablesService } from './shared/url-variables.service';

@Component({
  selector: 'ks-php-redirect',
  template: '',
  styleUrls: []
})
export class PhpRedirectComponent implements OnInit {
    
    constructor(private route: ActivatedRoute,
        private urlVars: UrlVariablesService) { }

    ngOnInit() {
        let code = this.route.snapshot.paramMap.get('code');
        window.location.href = this.urlVars.phpLinkShortenerUrl + '/' + (code !== null ? code : ''); 
    }

}
