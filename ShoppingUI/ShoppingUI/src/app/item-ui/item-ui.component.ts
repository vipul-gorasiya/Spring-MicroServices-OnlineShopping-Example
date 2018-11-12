import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PROXY_SERVER } from '../app.component';

export class Item {
  id?: number;
  name?: string;
  description?: string;
  price?: Number;
}

export const ITEM_SERVICE: string = PROXY_SERVER + "/itemsAPi/items/";


@Component({
  selector: 'app-item-ui',
  templateUrl: './item-ui.component.html',
  styleUrls: ['./item-ui.component.css']
})
export class ItemUIComponent implements OnInit {
  displayDialog: boolean = false;
  displayedColumns: any[] = [
    { field: 'id', header: 'Item Id' },
    { field: 'name', header: 'Item Name' },
    { field: 'description', header: 'Description' },
    { field: 'price', header: 'Price' }];
  items = [];
  data: Item = new Item();
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.retrieveItems();
  }

  retrieveItems() {
    this.http.get<Item[]>(ITEM_SERVICE).subscribe(
      (data) => {
        console.log(data);
        this.items = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openDialog(): void {
    this.displayDialog = true;
  }

  onNoClick(): void {
    this.displayDialog = false;
  }
  onOkClick(): void {
    this.data.id = 0;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    console.log(this.data);
    this.http.post(ITEM_SERVICE, JSON.stringify(this.data), httpOptions).subscribe(
      (data) => {
        console.log(data);
        this.data = new Item();
        this.displayDialog = false;
        this.retrieveItems();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}