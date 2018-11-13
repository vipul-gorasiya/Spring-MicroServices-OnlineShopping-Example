import { Customer } from "../customer-ui/customer";
import { OrderLineItem } from "./orderlineitem";

/**
 * Class to store Order Information
 */
export class SalesOrder {
  id?: number;
  orderDesc?: string;
  totalPrice?: number = 0;
  orderLineItems: OrderLineItem[] = [];
  customer: Customer;
  orderDate: Date = new Date();
  custId: number;
}


