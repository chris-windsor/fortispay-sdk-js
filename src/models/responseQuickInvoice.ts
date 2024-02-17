/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema, string } from '../schema';
import { Data14, data14Schema } from './data14';

export interface ResponseQuickInvoice {
  /** Resource Type */
  type: string;
  data?: Data14;
  [key: string]: unknown;
}

export const responseQuickInvoiceSchema: Schema<ResponseQuickInvoice> = expandoObject(
  {
    type: ['type', string()],
    data: ['data', optional(lazy(() => data14Schema))],
  }
);