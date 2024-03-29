/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema, string } from '../schema';
import { Data24, data24Schema } from './data24';

export interface ResponseTransactionLevel3 {
  /** Resource Type */
  type: string;
  data?: Data24;
  [key: string]: unknown;
}

export const responseTransactionLevel3Schema: Schema<ResponseTransactionLevel3> = expandoObject(
  {
    type: ['type', string()],
    data: ['data', optional(lazy(() => data24Schema))],
  }
);
