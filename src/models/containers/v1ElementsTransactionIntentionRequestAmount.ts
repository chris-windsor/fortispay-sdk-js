/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, number, Schema, validateAndMap } from '../../schema';
import {
  V1ElementsTransactionIntentionRequestAmountCase1,
  v1ElementsTransactionIntentionRequestAmountCase1Schema,
} from './v1ElementsTransactionIntentionRequestAmountCase1';

/** This is a container type for any-of types. */
export type V1ElementsTransactionIntentionRequestAmount = number | V1ElementsTransactionIntentionRequestAmountCase1;

export const v1ElementsTransactionIntentionRequestAmountSchema: Schema<V1ElementsTransactionIntentionRequestAmount> = anyOf(
  [number(), v1ElementsTransactionIntentionRequestAmountCase1Schema]
);

export namespace V1ElementsTransactionIntentionRequestAmount {
  /**
  * Validation method to narrow down union type to number type case.
  *
  * This is Number case.
  */
  export function isNumber(value: unknown): value is number {
    return typeof value === 'number';
  }

  /**
  * Validation method to narrow down union type to V1ElementsTransactionIntentionRequestAmountCase1 type case.
  *
  * This is V1ElementsTransactionIntentionRequestAmountCase1 case.
  */
  export function isV1ElementsTransactionIntentionRequestAmountCase1(value: unknown): value is V1ElementsTransactionIntentionRequestAmountCase1 {
    const validationResult = validateAndMap(value, v1ElementsTransactionIntentionRequestAmountCase1Schema);
    return validationResult.errors === false;
  }
}