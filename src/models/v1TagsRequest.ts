/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';

export interface V1TagsRequest {
  /** Location ID */
  locationId: string;
  /** Tag Title */
  title: string;
  [key: string]: unknown;
}

export const v1TagsRequestSchema: Schema<V1TagsRequest> = expandoObject({
  locationId: ['location_id', string()],
  title: ['title', string()],
});
