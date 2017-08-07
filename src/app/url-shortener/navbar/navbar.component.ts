import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ks-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loginTab = false;
  currentUser = {"name": "Kellen Schmidt"};

  logout() {

  }

  constructor() { }

  ngOnInit() {
  }

}
