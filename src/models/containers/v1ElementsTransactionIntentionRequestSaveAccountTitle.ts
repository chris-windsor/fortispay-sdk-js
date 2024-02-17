/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, Schema, string } from '../../schema';

/** This is a container type for any-of types. */
export type V1ElementsTransactionIntentionRequestSaveAccountTitle = string;

export const v1ElementsTransactionIntentionRequestSaveAccountTitleSchema: Schema<V1ElementsTransactionIntentionRequestSaveAccountTitle> = anyOf(
  [string()]
);

export namespace V1ElementsTransactionIntentionRequestSaveAccountTitle {
  /**
  * Validation method to narrow down union type to string type case.
  *
  * This is String case.
  */
  export function isString(value: unknown): value is string {
    return typeof value === 'string';
  }
}