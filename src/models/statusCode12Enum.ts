/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, numberEnum } from '../schema';

/**
 * Enum for StatusCode12Enum
 */
export enum StatusCode12Enum {
  Enum0 = 0,
  Enum1 = 1,
}

/**
 * Schema for StatusCode12Enum
 */
export const statusCode12EnumSchema: Schema<StatusCode12Enum> = numberEnum(StatusCode12Enum);