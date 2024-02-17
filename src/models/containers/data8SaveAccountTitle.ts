/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, Schema, string } from '../../schema';

/** This is a container type for any-of types. */
export type Data8SaveAccountTitle = string;

export const data8SaveAccountTitleSchema: Schema<Data8SaveAccountTitle> = anyOf(
  [string()]
);

export namespace Data8SaveAccountTitle {
  /**
  * Validation method to narrow down union type to string type case.
  *
  * This is String case.
  */
  export function isString(value: unknown): value is string {
    return typeof value === 'string';
  }
}