/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, numberEnum } from '../schema';

/**
 * Enum for UpdateIfExistsEnum
 */
export enum UpdateIfExistsEnum {
  Enum1 = 1,
}

/**
 * Schema for UpdateIfExistsEnum
 */
export const updateIfExistsEnumSchema: Schema<UpdateIfExistsEnum> = numberEnum(UpdateIfExistsEnum);