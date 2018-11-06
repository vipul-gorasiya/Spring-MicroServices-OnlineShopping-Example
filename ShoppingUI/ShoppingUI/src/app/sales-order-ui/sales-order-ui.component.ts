import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PROXY_SERVER } from '../app.component';
import { Customer, CUSTOMER_SERVICE } from '../customer-ui/customer-ui.component';
import { Item, ITEM_SERVICE } from '../item-ui/item-ui.component';

export class SalesOrder {
  id?: number;
  orderDate?: Date = new Date();
  orderDesc?: string;
  totalPrice?: number;
  orderLineItems: OrderLineItem[] = [];
  custId: number;
}

export class OrderLineItem {
  id?: number;
  itemName?: string;
  itemQuantity?: number;
}

export const SALESORDER_SERVICE: string = PROXY_SERVER + "/salesApi/orders/";

@Component({
  selector: 'app-sales-order-ui',
  templateUrl: './sales-order-ui.component.html',
  styleUrls: ['./sales-order-ui.component.css']
})
export class SalesOrderUIComponent implements OnInit {

  displayedColumns: string[] = ['id', 'orderDesc', 'custId', 'count'];
  dataSource = [];
  constructor(private http: HttpClient, public dialog: MatDialog) { }
  ngOnInit() {
    this.retrieveSalesOrders();
  }

  retrieveSalesOrders() {
    this.http.get<SalesOrder[]>(SALESORDER_SERVICE).subscribe(
      (data) => {
        console.log(data);
        this.dataSource = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SalesOrderDialog, {
      width: '400px',
      data: new SalesOrder()
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.retrieveSalesOrders();
    });
  }
}

@Component({
  selector: 'dialog-sales-order',
  templateUrl: './sales-order-dialog-ui.component.html',
  styleUrls: ['./sales-order-ui.component.css']
})
export class SalesOrderDialog implements OnInit {

  customerList: Customer[];
  orderLineItem: OrderLineItem = new OrderLineItem();
  itemList: Item[];

  constructor(
    public dialogRef: MatDialogRef<SalesOrderDialog>,
    @Inject(MAT_DIALOG_DATA) public data: SalesOrder,
    private http: HttpClient) { }
  ngOnInit() {
    this.http.get<Customer[]>(CUSTOMER_SERVICE).subscribe(
      (data) => {
        console.log(data);
        this.customerList = data;
      },
      (error) => {
        console.log(error);
      }
    );
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
  onNoClick(): void {
    this.dialogRef.close();
  }
  onAddItemClick(): void {
    console.log(this.orderLineItem);
    this.data.orderLineItems.push(this.orderLineItem);
    this.orderLineItem = new OrderLineItem();
  }
  onOkClick(): void {
    this.data.id = 0;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    console.log(this.data);
    this.http.post(SALESORDER_SERVICE, JSON.stringify(this.data), httpOptions).subscribe(
      (data) => {
        console.log(data);
        this.dialogRef.close();
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
