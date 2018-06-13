import { Component, OnInit, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from '../../user-authentication/shared/authentication.service';

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

  // Logout of current account and reset values
  logout() {
    this.authentication.logout();
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

  constructor(private authentication: AuthenticationService) { }

  ngOnInit() {
  }

}
