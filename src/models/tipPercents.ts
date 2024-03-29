/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, nullable, number, optional, Schema } from '../schema';

/** A JSON of tip percents the JSON MUST contain only these three fields: percent_1, percent_2, percent_3 */
export interface TipPercents {
  /** field can only contain a value from 0 to 99, if 1 field is NULL, all fields must be null. */
  percent1?: number | null;
  /** field can only contain a value from 0 to 99, if 1 field is NULL, all fields must be null. */
  percent2?: number | null;
  /** field can only contain a value from 0 to 99, if 1 field is NULL, all fields must be null. */
  percent3?: number | null;
  [key: string]: unknown;
}

export const tipPercentsSchema: Schema<TipPercents> = expandoObject({
  percent1: ['percent_1', optional(nullable(number()))],
  percent2: ['percent_2', optional(nullable(number()))],
  percent3: ['percent_3', optional(nullable(number()))],
});
