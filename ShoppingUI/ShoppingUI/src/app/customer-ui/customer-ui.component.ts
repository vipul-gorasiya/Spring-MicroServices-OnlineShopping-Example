import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PROXY_SERVER } from '../app.component';

export class Customer {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  get name(): string{
    return this.lastName+", "+this.firstName;
  }
}

export const CUSTOMER_SERVICE: string = PROXY_SERVER + "/customersApi/customers/";

@Component({
  selector: 'app-customer-ui',
  templateUrl: './customer-ui.component.html',
  styleUrls: ['./customer-ui.component.css']
})
export class CustomerUIComponent implements OnInit {
  displayDialog: boolean = false;
  data: Customer = new Customer();
  displayedColumns: any[] = [
    { field: 'id', header: 'Customer Id' },
    { field: 'firstName', header: 'First Name' },
    { field: 'lastName', header: 'Last Name' },
    { field: 'email', header: 'Email' }];
  customers = [];
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.retrieveCustomers();
  }

  retrieveCustomers() {
    this.http.get<Customer[]>(CUSTOMER_SERVICE).subscribe(
      (data) => {
        console.log(data);
        this.customers = data;
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
    this.http.post(CUSTOMER_SERVICE, JSON.stringify(this.data), httpOptions).subscribe(
      (data) => {
        console.log(data);
        this.displayDialog = false;
        data = new Customer();
        this.retrieveCustomers();
      },
      (error) => {
        console.log(error);
      }
    );
  }

}

