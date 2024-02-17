/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Field53Enum
 */
export enum Field53Enum {
  UserId = 'user_id',
  Id = 'id',
  CreatedTs = 'created_ts',
}

/**
 * Schema for Field53Enum
 */
export const field53EnumSchema: Schema<Field53Enum> = stringEnum(Field53Enum);