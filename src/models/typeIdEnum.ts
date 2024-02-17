/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, numberEnum } from '../schema';

/**
 * Enum for TypeIdEnum
 */
export enum TypeIdEnum {
  Enum20 = 20,
  Enum21 = 21,
  Enum22 = 22,
  Enum30 = 30,
  Enum40 = 40,
  Enum50 = 50,
}

/**
 * Schema for TypeIdEnum
 */
export const typeIdEnumSchema: Schema<TypeIdEnum> = numberEnum(TypeIdEnum);