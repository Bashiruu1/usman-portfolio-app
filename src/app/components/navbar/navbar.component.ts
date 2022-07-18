import { Component, OnInit } from '@angular/core';
import { navbarData } from './navbar-data';

@Component({
  selector: 'portfolio-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  collapsed = false;
  navData = navbarData;

  ngOnInit(): void {}
}
