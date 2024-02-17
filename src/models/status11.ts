/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';

/** Status Information on `expand` */
export interface Status11 {
  /** ID */
  id?: number | null;
  /** Title */
  title?: string;
  [key: string]: unknown;
}

export const status11Schema: Schema<Status11> = expandoObject({
  id: ['id', optional(nullable(number()))],
  title: ['title', optional(string())],
});