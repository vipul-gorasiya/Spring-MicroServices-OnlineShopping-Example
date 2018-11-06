import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatDialogModule, MatDialogRef, MatInputModule, MatButtonModule } from '@angular/material'
import { HttpClientModule } from '@angular/common/http';
import { UIHeaderComponent } from './uiheader/uiheader.component';
import { CustomerUIComponent, CustomerDialog } from './customer-ui/customer-ui.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeUIComponent } from './welcome-ui/welcome-ui.component';
import { ItemUIComponent } from './item-ui/item-ui.component';
import { SalesOrderUIComponent } from './sales-order-ui/sales-order-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    UIHeaderComponent,
    CustomerUIComponent,
    CustomerDialog,
    WelcomeUIComponent,
    ItemUIComponent,
    SalesOrderUIComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule
  ],
  entryComponents:[CustomerDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
