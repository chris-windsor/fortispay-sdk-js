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

export interface TransactionReference {
  /** ID */
  id?: string;
  /** Transaction ID */
  transactionId?: string | null;
  /** Previous Transaction ID */
  previousTransactionId?: string | null;
  /** Transaction Amount */
  transactionAmount?: number | null;
  /** Previous Transaction Amount */
  previousTransactionAmount?: number | null;
  /** Previous Transaction Created Timestamp */
  previousTransactionCreatedTs?: number | null;
  /** Reference Type */
  referenceType?: string | null;
  /** Created Time Stamp */
  createdTs?: number | null;
  /** User ID Created the register */
  createdUserId?: string | null;
  [key: string]: unknown;
}

export const transactionReferenceSchema: Schema<TransactionReference> = expandoObject(
  {
    id: ['id', optional(string())],
    transactionId: ['transaction_id', optional(nullable(string()))],
    previousTransactionId: [
      'previous_transaction_id',
      optional(nullable(string())),
    ],
    transactionAmount: ['transaction_amount', optional(nullable(number()))],
    previousTransactionAmount: [
      'previous_transaction_amount',
      optional(nullable(number())),
    ],
    previousTransactionCreatedTs: [
      'previous_transaction_created_ts',
      optional(nullable(number())),
    ],
    referenceType: ['reference_type', optional(nullable(string()))],
    createdTs: ['created_ts', optional(nullable(number()))],
    createdUserId: ['created_user_id', optional(nullable(string()))],
  }
);