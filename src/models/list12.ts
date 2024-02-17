/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  lazy,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import { Location, locationSchema } from './location';

export interface List12 {
  /** Location ID */
  locationId: string;
  /** Tag Title */
  title: string;
  /** Tag ID */
  id: string;
  /** Created Time Stamp */
  createdTs: number;
  /** Modified Time Stamp */
  modifiedTs: number;
  /** Location Information on `expand` */
  location?: Location;
  [key: string]: unknown;
}

export const list12Schema: Schema<List12> = expandoObject({
  locationId: ['location_id', string()],
  title: ['title', string()],
  id: ['id', string()],
  createdTs: ['created_ts', number()],
  modifiedTs: ['modified_ts', number()],
  location: ['location', optional(lazy(() => locationSchema))],
});