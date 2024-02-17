/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Field43Enum
 */
export enum Field43Enum {
  LocationId = 'location_id',
  Title = 'title',
  Id = 'id',
  CreatedTs = 'created_ts',
  ModifiedTs = 'modified_ts',
  Location = 'location',
}

/**
 * Schema for Field43Enum
 */
export const field43EnumSchema: Schema<Field43Enum> = stringEnum(Field43Enum);