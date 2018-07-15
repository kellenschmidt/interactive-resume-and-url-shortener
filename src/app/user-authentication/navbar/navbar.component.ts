import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../../user-authentication/shared/authentication.service';
import { UrlVariablesService } from '../../shared/url-variables.service';
import { TableHandlerService } from '../../url-shortener/shared/table-handler.service';

@Component({
  selector: 'ks-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() title: string;
  @Input() color: string;
  @Input() showLogin: boolean;
  loginTab: boolean = false;
  magicMargin: boolean = false;
  dqcUrl: string = this.urlVars.dqcUrl;

  logout() {
    this.authentication.logout();
    this.tableHandler.getLinks();
  }

  toggleMagicMargin() {
    this.magicMargin = !this.magicMargin;
  }

  getNameOfUser(): String {
    return this.authentication.currentUser.name;
  }

  getEmailOfUser(): String {
    return this.authentication.currentUser.email;
  }

  constructor(private authentication: AuthenticationService,
    private urlVars: UrlVariablesService,
    private tableHandler: TableHandlerService) { }

  ngOnInit() {
  }

}
