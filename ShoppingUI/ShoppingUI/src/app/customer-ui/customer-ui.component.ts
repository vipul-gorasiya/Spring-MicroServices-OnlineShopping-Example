/**
 * Customer UI component to add, update and view customers
 */
import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from 'primeng/components/common/messageservice';
import { Customer } from './customer';
import { CUSTOMER_SERVICE } from '../app.constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Component({
  selector: 'app-customer-ui',
  templateUrl: './customer-ui.component.html',
  styleUrls: ['./customer-ui.component.css']
})
export class CustomerUIComponent implements OnInit {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  // Variables
  displayDialog: boolean = false;
  data: Customer = new Customer();
  customers = [];
  newCustomer: boolean = false;
  displayedColumns: any[] = [
    { field: 'id', header: 'Customer Id' },
    { field: 'firstName', header: 'First Name' },
    { field: 'lastName', header: 'Last Name' },
    { field: 'email', header: 'Email' }];

  ngOnInit() {
    // On initialization retrieve customers
    this.retrieveCustomers();
  }

  // Method to retrieve customers
  retrieveCustomers() {
    this.http.get<Customer[]>(CUSTOMER_SERVICE).subscribe(
      (data) => {
        console.log(data);
        this.customers = data;
      },
      (error) => {
        console.log(error);
        this.messageService.add({ severity: 'warn', summary: 'Error Message', detail: 'Customers could not be retrieved.' });
      }
    );
  }

  // Method to open dialog to add customer
  openDialog(): void {
    this.data = new Customer();
    this.newCustomer = true;
    this.displayDialog = true;
  }
  // On cancel click in dialog
  onNoClick(): void {
    this.displayDialog = false;
  }

  // Method to handle Add button click in add customer dialog
  onOkClick(): void {
    this.data.id = 0;
    console.log(this.data);
    this.http.post(CUSTOMER_SERVICE, JSON.stringify(this.data), httpOptions).subscribe(
      (data) => {
        console.log(data);
        this.displayDialog = false;
        data = new Customer();
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Customer added successfully.' });
        this.retrieveCustomers();
      },
      (error) => {
        console.log(error);
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Customer not added.' });
      }
    );
  }

  // Method to handle Save button click in edit customer dialog
  onSaveClick(): void {
    console.log(this.data);
    this.http.put(CUSTOMER_SERVICE, JSON.stringify(this.data), httpOptions).subscribe(
      (data) => {
        console.log(data);
        this.displayDialog = false;
        data = new Customer();
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Customer saved successfully.' });
        this.retrieveCustomers();
      },
      (error) => {
        console.log(error);
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Customer not saved.' });
      }
    );
  }

  // Method to handle on click of row
  onRowSelect(event) {
    console.log(event.data);
    this.newCustomer = false;
    this.data = event.data;
    this.displayDialog = true;
  }

}

