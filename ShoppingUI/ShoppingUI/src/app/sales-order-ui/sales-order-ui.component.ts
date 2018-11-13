import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from 'primeng/components/common/messageservice';
import { Customer } from '../customer-ui/customer';
import { Item } from '../item-ui/item';
import { CUSTOMER_SERVICE, ITEM_SERVICE, SALESORDER_SERVICE } from '../app.constants';
import { OrderLineItem } from './orderlineitem';
import { SalesOrder } from './salesorder';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-sales-order-ui',
  templateUrl: './sales-order-ui.component.html',
  styleUrls: ['./sales-order-ui.component.css']
})
export class SalesOrderUIComponent implements OnInit {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  // Variable declaration
  displayedColumns: any[] = [
    { field: 'id', header: 'Order Id' },
    { field: 'orderDesc', header: 'Description' }];
  orders = [];
  displayDialog: boolean = false;

  // Variables for Modal window
  customerList: Customer[];
  orderLineItem: OrderLineItem = new OrderLineItem();
  itemList: Item[];
  data: SalesOrder = new SalesOrder();
  lineItemColumns: any[] = [
    { field: 'itemName', header: 'Name' },
    { field: 'itemprice', header: 'Price' },
    { field: 'itemQuantity', header: 'Quantity' }];
  newOrder: boolean = false;


  ngOnInit() {
    // On initialization retrieve orders
    this.retrieveSalesOrders();
  }

  // Retrieve customers for autocomplete
  searchCustomer(event) {
    console.log(event.query)
    this.http.get<Customer[]>(CUSTOMER_SERVICE).subscribe(
      (data) => {
        console.log(data);
        this.customerList = data;
      },
      (error) => {
        console.log(error);
        this.messageService.add({ severity: 'warn', summary: 'Error Message', detail: 'Orders could not be retrieved.' });
      }
    );
  }

  // Retrieve items for autocomplete
  searchItem(event) {
    console.log(event.query)
    this.http.get<Item[]>(ITEM_SERVICE).subscribe(
      (data) => {
        console.log(data);
        this.itemList = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Method to retrieve Sales orders
  retrieveSalesOrders() {
    this.http.get<SalesOrder[]>(SALESORDER_SERVICE).subscribe(
      (data) => {
        console.log(data);
        this.orders = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Method to open dialog for add order
  openDialog(): void {
    this.data = new SalesOrder();
    this.displayDialog = true;
    this.newOrder = true;
  }

  // Method to handle Cancel button click in dialog
  onNoClick(): void {
    this.displayDialog = false;
    this.data = new SalesOrder();
  }

  // Method to add item when Add Item button is clicked
  onAddItemClick(): void {
    console.log(this.orderLineItem);
    this.data.totalPrice = this.data.totalPrice + (this.orderLineItem.itemQuantity * this.orderLineItem.item.price);
    this.orderLineItem.itemName = this.orderLineItem.item.name;
    this.data.orderLineItems.push(this.orderLineItem);
    this.orderLineItem = new OrderLineItem();
  }

  // Method to handle Add button click on add order dialog
  onOkClick(): void {
    this.data.id = 0;
    this.data.custId = this.data.customer.id;
    console.log(this.data);
    this.http.post(SALESORDER_SERVICE, JSON.stringify(this.data), httpOptions).subscribe(
      (data) => {
        console.log(data);
        this.data = new SalesOrder();
        this.displayDialog = false;
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Order added successfully.' });
        this.retrieveSalesOrders();
      },
      (error) => {
        console.log(error);
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Order not added.' });
      }
    );
  }

  // Method to handle save button click on update order dialog
  onSaveClick(): void {
    console.log(this.data);
    this.data.custId = this.data.customer.id;
    this.http.put(SALESORDER_SERVICE, JSON.stringify(this.data), httpOptions).subscribe(
      (data) => {
        console.log(data);
        this.data = new SalesOrder();
        this.displayDialog = false;
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Order saved successfully.' });
        this.retrieveSalesOrders();
      },
      (error) => {
        console.log(error);
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Order not saved.' });
      }
    );
  }

  // Method to handle row click or select
  onRowSelect(event) {
    console.log(event.data);
    this.newOrder = false;
    this.data = event.data;
    this.http.get<Customer>(CUSTOMER_SERVICE + this.data.custId).subscribe(
      (response) => {
        console.log(response);
        this.data.customer = response;
      },
      (error) => {
        console.log(error);
      }
    );
    for (let index = 0; index < this.data.orderLineItems.length; index++) {
      this.getItemForOrderLine(this.data.orderLineItems[index]);
    }
    this.displayDialog = true;
  }

  getItemForOrderLine(orderLine: OrderLineItem) {
    this.http.get<Item>(ITEM_SERVICE + orderLine.itemName).subscribe(
      (response) => {
        console.log(response);
        orderLine.item = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}

