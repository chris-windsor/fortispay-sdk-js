/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, number, Schema, validateAndMap } from '../../schema';
import { Data8AmountCase1, data8AmountCase1Schema } from './data8AmountCase1';

/** This is a container type for any-of types. */
export type Data8Amount = number | Data8AmountCase1;

export const data8AmountSchema: Schema<Data8Amount> = anyOf([
  number(),
  data8AmountCase1Schema,
]);

export namespace Data8Amount {
  /**
  * Validation method to narrow down union type to number type case.
  *
  * This is Number case.
  */
  export function isNumber(value: unknown): value is number {
    return typeof value === 'number';
  }

  /**
  * Validation method to narrow down union type to Data8AmountCase1 type case.
  *
  * This is Data8AmountCase1 case.
  */
  export function isData8AmountCase1(value: unknown): value is Data8AmountCase1 {
    const validationResult = validateAndMap(value, data8AmountCase1Schema);
    return validationResult.errors === false;
  }
}
