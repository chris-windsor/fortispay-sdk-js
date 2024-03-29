/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema, string } from '../schema';
import { Links, linksSchema } from './links';
import { List13, list13Schema } from './list13';
import { Pagination, paginationSchema } from './pagination';
import { Sort, sortSchema } from './sort';

export interface ResponseTerminalsCollection {
  /** Resource Type */
  type: string;
  /** Resource Members */
  list: List13[];
  /** Pagination page links */
  links?: Links;
  /** Pagination info */
  pagination?: Pagination;
  /** Sort information used on the results */
  sort?: Sort;
  [key: string]: unknown;
}

export const responseTerminalsCollectionSchema: Schema<ResponseTerminalsCollection> = expandoObject(
  {
    type: ['type', string()],
    list: ['list', array(lazy(() => list13Schema))],
    links: ['links', optional(lazy(() => linksSchema))],
    pagination: ['pagination', optional(lazy(() => paginationSchema))],
    sort: ['sort', optional(lazy(() => sortSchema))],
  }
);
