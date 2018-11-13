import { Item } from "../item-ui/item";

/**
 * Class to store Order Line item Information
 */

export class OrderLineItem {
  id?: number;
  itemQuantity?: number;
  item?: Item;
  itemName?: string;
}



