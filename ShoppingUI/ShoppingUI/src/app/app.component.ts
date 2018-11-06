import { Component, OnInit } from '@angular/core';

export const PROXY_SERVER = "http://localhost:5555"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ShoppingUI';
  constructor() { }

  ngOnInit() {
    console.log("Init: AppComponent");
  }
}
