/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema, string } from '../schema';
import { Data1, data1Schema } from './data1';

export interface ResponseAsyncProcessing {
  /** Resource Type */
  type: string;
  data?: Data1;
  [key: string]: unknown;
}

export const responseAsyncProcessingSchema: Schema<ResponseAsyncProcessing> = expandoObject(
  {
    type: ['type', string()],
    data: ['data', optional(lazy(() => data1Schema))],
  }
);