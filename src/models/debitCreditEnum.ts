/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for DebitCreditEnum
 */
export enum DebitCreditEnum {
  D = 'D',
  C = 'C',
}

/**
 * Schema for DebitCreditEnum
 */
export const debitCreditEnumSchema: Schema<DebitCreditEnum> = stringEnum(DebitCreditEnum);