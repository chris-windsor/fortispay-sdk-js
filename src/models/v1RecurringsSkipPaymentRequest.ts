/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, Schema } from '../schema';

export interface V1RecurringsSkipPaymentRequest {
  /** Skip Count */
  skipCount: number;
  [key: string]: unknown;
}

export const v1RecurringsSkipPaymentRequestSchema: Schema<V1RecurringsSkipPaymentRequest> = expandoObject(
  { skipCount: ['skip_count', number()] }
);
