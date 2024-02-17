/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema, string } from '../schema';
import { Data, dataSchema } from './data';

export interface ResponseAsyncStatus {
  /** Resource Type */
  type: string;
  data?: Data;
  [key: string]: unknown;
}

export const responseAsyncStatusSchema: Schema<ResponseAsyncStatus> = expandoObject(
  { type: ['type', string()], data: ['data', optional(lazy(() => dataSchema))] }
);