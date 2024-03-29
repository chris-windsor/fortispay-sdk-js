/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema, string } from '../schema';
import { Data2, data2Schema } from './data2';

export interface ResponseContact {
  /** Resource Type */
  type: string;
  data?: Data2;
  [key: string]: unknown;
}

export const responseContactSchema: Schema<ResponseContact> = expandoObject({
  type: ['type', string()],
  data: ['data', optional(lazy(() => data2Schema))],
});
