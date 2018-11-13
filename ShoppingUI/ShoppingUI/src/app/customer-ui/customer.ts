/**
 * Class to store Customer Information
 */
export class Customer {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  get name(): string {
    return this.lastName + ", " + this.firstName;
  }
}


