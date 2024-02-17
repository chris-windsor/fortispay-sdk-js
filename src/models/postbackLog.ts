/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import {
  PostbackStatusIdEnum,
  postbackStatusIdEnumSchema,
} from './postbackStatusIdEnum';

export interface PostbackLog {
  /** Postback Status Id */
  postbackStatusId?: PostbackStatusIdEnum | null;
  /** Postback Log Id */
  id: string;
  /** Postback Config Id */
  postbackConfigId: string;
  /** Changelog Id */
  changelogId: string;
  /** Http Verb */
  httpVerb?: string | null;
  /** Next Run */
  nextRunTs?: number | null;
  /** Created Time Stamp */
  createdTs?: number | null;
  /** MOdel */
  model?: string | null;
  /** Model Id */
  modelId?: string | null;
  [key: string]: unknown;
}

export const postbackLogSchema: Schema<PostbackLog> = expandoObject({
  postbackStatusId: [
    'postback_status_id',
    optional(nullable(postbackStatusIdEnumSchema)),
  ],
  id: ['id', string()],
  postbackConfigId: ['postback_config_id', string()],
  changelogId: ['changelog_id', string()],
  httpVerb: ['http_verb', optional(nullable(string()))],
  nextRunTs: ['next_run_ts', optional(nullable(number()))],
  createdTs: ['created_ts', optional(nullable(number()))],
  model: ['model', optional(nullable(string()))],
  modelId: ['model_id', optional(nullable(string()))],
});