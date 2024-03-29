/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';

export interface V1QuickInvoicesTransactionRequest {
  /** Transaction ID */
  transactionId: string;
  [key: string]: unknown;
}

export const v1QuickInvoicesTransactionRequestSchema: Schema<V1QuickInvoicesTransactionRequest> = expandoObject(
  { transactionId: ['transaction_id', string()] }
);
