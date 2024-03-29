/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema, string } from '../schema';
import { Data5, data5Schema } from './data5';

export interface ResponseDeclinedRecurringTransactionResend {
  /** Resource Type */
  type: string;
  data?: Data5;
  [key: string]: unknown;
}

export const responseDeclinedRecurringTransactionResendSchema: Schema<ResponseDeclinedRecurringTransactionResend> = expandoObject(
  {
    type: ['type', string()],
    data: ['data', optional(lazy(() => data5Schema))],
  }
);
