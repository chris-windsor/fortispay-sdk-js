/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, nullable, optional, Schema, string } from '../schema';

/** Billing Address Object */
export interface BillingAddress5 {
  /** The Zip or 'Postal Code' portion of the address associated with the Credit Card. */
  postalCode?: string | null;
  /** The Street portion of the address associated with the Credit Card. */
  street?: string | null;
  [key: string]: unknown;
}

export const billingAddress5Schema: Schema<BillingAddress5> = expandoObject({
  postalCode: ['postal_code', optional(nullable(string()))],
  street: ['street', optional(nullable(string()))],
});
