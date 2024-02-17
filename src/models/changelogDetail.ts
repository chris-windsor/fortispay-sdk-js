/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, nullable, optional, Schema, string } from '../schema';

export interface ChangelogDetail {
  /** ID */
  id?: string | null;
  /** Changelog ID */
  changelogId?: string | null;
  /** Field */
  field?: string | null;
  /** Old Value */
  oldValue?: string | null;
  [key: string]: unknown;
}

export const changelogDetailSchema: Schema<ChangelogDetail> = expandoObject({
  id: ['id', optional(nullable(string()))],
  changelogId: ['changelog_id', optional(nullable(string()))],
  field: ['field', optional(nullable(string()))],
  oldValue: ['old_value', optional(nullable(string()))],
});