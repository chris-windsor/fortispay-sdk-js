/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, Schema, string } from '../schema';

export interface List17 {
  id: string;
  userId: string;
  hash: string;
  /** Created Time Stamp */
  createdTs: number;
  [key: string]: unknown;
}

export const list17Schema: Schema<List17> = expandoObject({
  id: ['id', string()],
  userId: ['user_id', string()],
  hash: ['hash', string()],
  createdTs: ['created_ts', number()],
});
