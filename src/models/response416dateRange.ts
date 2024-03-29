/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema, string } from '../schema';

export interface Response416dateRange {
  /** Response code */
  statusCode?: number;
  /** Requested Range Not Satisfiable */
  error?: string;
  /** The "fieldDate" should be less or equal to "ISODate". */
  message?: string;
  [key: string]: unknown;
}

export const response416dateRangeSchema: Schema<Response416dateRange> = expandoObject(
  {
    statusCode: ['statusCode', optional(number())],
    error: ['error', optional(string())],
    message: ['message', optional(string())],
  }
);
