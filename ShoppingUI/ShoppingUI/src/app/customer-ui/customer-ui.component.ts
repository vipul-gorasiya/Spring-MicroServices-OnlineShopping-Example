import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export class Customer {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
}

const CUSTOMER_SERVICE: string = "http://localhost:5555/customersApi/customers/";
// const CUSTOMER_SERVICE : string = "http://localhost:5051/customers/";
@Component({
  selector: 'app-customer-ui',
  templateUrl: './customer-ui.component.html',
  styleUrls: ['./customer-ui.component.css']
})
export class CustomerUIComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email'];
  dataSource = [];
  constructor(private http: HttpClient, public dialog: MatDialog) { }
  ngOnInit() {
    this.retrieveCustomers();
  }

  retrieveCustomers(){
    this.http.get<Customer[]>(CUSTOMER_SERVICE).subscribe(
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
    const dialogRef = this.dialog.open(CustomerDialog, {
      width: '250px',
      data: new Customer()
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.retrieveCustomers();
    });
  }
}

@Component({
  selector: 'dialog-customer',
  templateUrl: './customer-dialog-ui.component.html',
})
export class CustomerDialog {

  constructor(
    public dialogRef: MatDialogRef<CustomerDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Customer,
    private http: HttpClient) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onOkClick(): void {
    this.data.id=0;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    console.log(this.data);
    this.http.post(CUSTOMER_SERVICE, JSON.stringify(this.data),httpOptions).subscribe(
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

