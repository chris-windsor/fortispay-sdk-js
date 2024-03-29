/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema, string } from '../schema';
import { Data4, data4Schema } from './data4';

export interface ResponseDeclinedRecurringTransactionPayment {
  /** Resource Type */
  type: string;
  data?: Data4;
  [key: string]: unknown;
}

export const responseDeclinedRecurringTransactionPaymentSchema: Schema<ResponseDeclinedRecurringTransactionPayment> = expandoObject(
  {
    type: ['type', string()],
    data: ['data', optional(lazy(() => data4Schema))],
  }
);
