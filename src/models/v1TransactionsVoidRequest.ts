/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  nullable,
  optional,
  Schema,
  string,
} from '../schema';

export interface V1TransactionsVoidRequest {
  /** Tags */
  tags?: string[] | null;
  /** Description */
  description?: string | null;
  [key: string]: unknown;
}

export const v1TransactionsVoidRequestSchema: Schema<V1TransactionsVoidRequest> = expandoObject(
  {
    tags: ['tags', optional(nullable(array(string())))],
    description: ['description', optional(nullable(string()))],
  }
);
