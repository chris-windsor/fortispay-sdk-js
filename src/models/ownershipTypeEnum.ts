/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OwnershipTypeEnum
 */
export enum OwnershipTypeEnum {
  C = 'c',
  Gov = 'gov',
  Llc = 'llc',
  Llp = 'llp',
  Np = 'np',
  P = 'p',
  Po = 'po',
  S = 's',
  Sp = 'sp',
  Te = 'te',
}

/**
 * Schema for OwnershipTypeEnum
 */
export const ownershipTypeEnumSchema: Schema<OwnershipTypeEnum> = stringEnum(OwnershipTypeEnum);