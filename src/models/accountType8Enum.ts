/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AccountType8Enum
 */
export enum AccountType8Enum {
  Savings = 'savings',
  Checking = 'checking',
}

/**
 * Schema for AccountType8Enum
 */
export const accountType8EnumSchema: Schema<AccountType8Enum> = stringEnum(AccountType8Enum);