/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, numberEnum } from '../schema';

/**
 * Enum for UserTypeCodeEnum
 */
export enum UserTypeCodeEnum {
  Enum200 = 200,
  Enum250 = 250,
  Enum300 = 300,
  Enum400 = 400,
  Enum500 = 500,
  Enum600 = 600,
  Enum700 = 700,
  Enum800 = 800,
  Enum900 = 900,
  Enum1000 = 1000,
  Enum100 = 100,
}

/**
 * Schema for UserTypeCodeEnum
 */
export const userTypeCodeEnumSchema: Schema<UserTypeCodeEnum> = numberEnum(UserTypeCodeEnum);