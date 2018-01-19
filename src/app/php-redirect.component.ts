import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { environment } from 'environments/environment';

@Component({
  selector: 'ks-php-redirect',
  template: '',
  styleUrls: []
})
export class PhpRedirectComponent implements OnInit {
    
    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        let code = this.route.snapshot.paramMap.get('code');
        window.location.href = environment.phpLinkShortenerUrl + '/' + (code !== null ? code : ''); 
    }

}
