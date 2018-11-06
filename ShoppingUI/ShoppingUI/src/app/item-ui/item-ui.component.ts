import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PROXY_SERVER } from '../app.component';

export class Item {
  id?: number;
  name?: string;
  description?: string;
  price?: Number;
}

export const ITEM_SERVICE: string = PROXY_SERVER+"/itemsAPi/items/";


@Component({
  selector: 'app-item-ui',
  templateUrl: './item-ui.component.html',
  styleUrls: ['./item-ui.component.css']
})
export class ItemUIComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'description', 'price'];
  dataSource = [];
  constructor(private http: HttpClient, public dialog: MatDialog) { }
  ngOnInit() {
    this.retrieveItems();
  }

  retrieveItems() {
    this.http.get<Item[]>(ITEM_SERVICE).subscribe(
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
    const dialogRef = this.dialog.open(ItemDialog, {
      width: '400px',
      data: new Item()
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.retrieveItems();
    });
  }
}

@Component({
  selector: 'dialog-item',
  templateUrl: './item-dialog-ui.component.html',
})
export class ItemDialog {

  constructor(
    public dialogRef: MatDialogRef<ItemDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Item,
    private http: HttpClient) { }

  onNoClick(): void {
    this.dialogRef.close();
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
        this.dialogRef.close();
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
