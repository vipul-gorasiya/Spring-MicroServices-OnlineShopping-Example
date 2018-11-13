import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ShoppingUI';
  constructor() { }
  menuItems: MenuItem[];

  ngOnInit() {
    console.log("Init: AppComponent");
    this.menuItems = [
      {
        label: 'Home',
        icon: 'fa fa-fw fa-check',
        routerLink: '/welcome'
      },
      {
        label: 'Customers',
        routerLink: '/customers'
      },
      {
        label: 'Items',
        routerLink: '/items'
      },
      {
        label: 'Sales Orders',
        routerLink: '/sales'
      }
    ];
  }
}
