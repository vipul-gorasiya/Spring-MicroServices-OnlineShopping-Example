import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from 'primeng/components/common/messageservice';
import { ITEM_SERVICE } from '../app.constants';
import { Item } from './item';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-item-ui',
  templateUrl: './item-ui.component.html',
  styleUrls: ['./item-ui.component.css']
})
export class ItemUIComponent implements OnInit {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  // variable declaration
  displayDialog: boolean = false;
  items = [];
  data: Item = new Item();
  newItem: boolean = false;
  displayedColumns: any[] = [
    { field: 'id', header: 'Item Id' },
    { field: 'name', header: 'Item Name' },
    { field: 'description', header: 'Description' },
    { field: 'price', header: 'Price' }];
    
  ngOnInit() {
    // On initialization retrieve items
    this.retrieveItems();
  }

  // Method to retrieve items
  retrieveItems() {
    this.http.get<Item[]>(ITEM_SERVICE).subscribe(
      (data) => {
        console.log(data);
        this.items = data;
      },
      (error) => {
        console.log(error);
        this.messageService.add({ severity: 'warn', summary: 'Error Message', detail: 'Items could not be retrieved.' });
      }
    );
  }

  // Method to display add item dialog
  openDialog(): void {
    this.displayDialog = true;
    this.newItem = true;
    this.data = new Item();
  }

  // Method to handle Cancel button click in dialog
  onNoClick(): void {
    this.displayDialog = false;
  }

  // Method to handle Add button click in add Item dialog
  onOkClick(): void {
    this.data.id = 0;
    console.log(this.data);
    this.http.post(ITEM_SERVICE, JSON.stringify(this.data), httpOptions).subscribe(
      (data) => {
        console.log(data);
        this.data = new Item();
        this.displayDialog = false;
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Item added successfully.' });
        this.retrieveItems();
      },
      (error) => {
        console.log(error);
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Item not added.' });
      }
    );
  }

  // Method to handle Save button click in save Item dialog
  onSaveClick(): void {
    console.log(this.data);
    this.http.put(ITEM_SERVICE, JSON.stringify(this.data), httpOptions).subscribe(
      (data) => {
        console.log(data);
        this.data = new Item();
        this.displayDialog = false;
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Item saved successfully.' });
        this.retrieveItems();
      },
      (error) => {
        console.log(error);
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Item not saved.' });
      }
    );
  }

  // Method to handle row click
  onRowSelect(event) {
    console.log(event.data);
    this.newItem = false;
    this.data = event.data;
    this.displayDialog = true;
  }
}