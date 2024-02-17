/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PreferredLanguageEnum
 */
export enum PreferredLanguageEnum {
  EnUS = 'en-US',
  FrCA = 'fr-CA',
}

/**
 * Schema for PreferredLanguageEnum
 */
export const preferredLanguageEnumSchema: Schema<PreferredLanguageEnum> = stringEnum(PreferredLanguageEnum);