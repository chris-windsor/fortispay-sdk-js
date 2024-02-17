/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, expandoObject, optional, Schema, string } from '../schema';

export interface Data5 {
  /** Id */
  id?: string;
  /** Email Log Id */
  emailLogId?: string;
  /** Success */
  success?: boolean;
  /** Email */
  email?: string;
  [key: string]: unknown;
}

export const data5Schema: Schema<Data5> = expandoObject({
  id: ['id', optional(string())],
  emailLogId: ['email_log_id', optional(string())],
  success: ['success', optional(boolean())],
  email: ['email', optional(string())],
});