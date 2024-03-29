/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema, string } from '../schema';
import { Data16, data16Schema } from './data16';

export interface ResponseRecurring {
  /** Resource Type */
  type: string;
  data?: Data16;
  [key: string]: unknown;
}

export const responseRecurringSchema: Schema<ResponseRecurring> = expandoObject(
  {
    type: ['type', string()],
    data: ['data', optional(lazy(() => data16Schema))],
  }
);
