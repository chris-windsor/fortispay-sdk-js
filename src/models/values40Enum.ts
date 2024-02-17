/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Values40Enum
 */
export enum Values40Enum {
  AccountNumber = 'account_number',
  PreviousAccountVaultId = 'previous_account_vault_id',
}

/**
 * Schema for Values40Enum
 */
export const values40EnumSchema: Schema<Values40Enum> = stringEnum(Values40Enum);