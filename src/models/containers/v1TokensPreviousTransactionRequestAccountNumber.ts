/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, string } from '../../schema';

/** This is a container type for one-of types. */
export type V1TokensPreviousTransactionRequestAccountNumber = string;

export const v1TokensPreviousTransactionRequestAccountNumberSchema: Schema<V1TokensPreviousTransactionRequestAccountNumber> = oneOf(
  [string()]
);

export namespace V1TokensPreviousTransactionRequestAccountNumber {
  /**
  * Validation method to narrow down union type to string type case.
  *
  * This is String case.
  */
  export function isString(value: unknown): value is string {
    return typeof value === 'string';
  }
}