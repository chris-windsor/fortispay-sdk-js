/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ActionEnum
 */
export enum ActionEnum {
  Sale = 'sale',
  Authonly = 'auth-only',
  Avsonly = 'avs-only',
  Refund = 'refund',
  Tokenization = 'tokenization',
}

/**
 * Schema for ActionEnum
 */
export const actionEnumSchema: Schema<ActionEnum> = stringEnum(ActionEnum);
