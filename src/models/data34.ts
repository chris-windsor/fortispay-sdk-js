/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  expandoObject,
  lazy,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import { FormatEnum, formatEnumSchema } from './formatEnum';
import { PostbackLog, postbackLogSchema } from './postbackLog';
import { Resource12Enum, resource12EnumSchema } from './resource12Enum';

export interface Data34 {
  /** Number of seconds before another retry is submitted */
  attemptInterval?: number | null;
  /** Basic Auth Username Information on `expand` */
  basicAuthUsername?: string | null;
  /** Basic Auth Password Information on `expand` */
  basicAuthPassword?: string | null;
  /** An option list of expanded data to send with base data. (i.e. set this field to “contact,account_vault” to get the contact an accountvault used to run a transaction.) */
  expands?: string | null;
  /** Options include: api-default */
  format?: FormatEnum | null;
  /** Flag to indicate whether configuration is active (in effect). */
  isActive: boolean;
  /** The location identifier of the resource you want to recieve postbacks from. */
  locationId: string;
  /** Location Api ID */
  locationApiId?: string | null;
  /** To receive postbacks on the creation of a resource */
  onCreate: boolean;
  /** To receive postbacks on the updating of a resource */
  onUpdate: boolean;
  /** To receive postbacks when the record is deleted */
  onDelete: boolean;
  /** Postback Config ID */
  postbackConfigId?: string | null;
  /** Required when using 'transaction' or 'transactionbatch' resource */
  productTransactionId?: string | null;
  /** The resource you want to subscribe the postbacks to. */
  resource: Resource12Enum;
  /** Maximum number of attempts on failure */
  numberOfAttempts: number;
  /** The URL where the postback will be submitted */
  url: string;
  /** Postback Config ID */
  id: string;
  /** Postback Log Information on `expand` */
  postbackLogs?: PostbackLog[];
  [key: string]: unknown;
}

export const data34Schema: Schema<Data34> = expandoObject({
  attemptInterval: ['attempt_interval', optional(nullable(number()))],
  basicAuthUsername: ['basic_auth_username', optional(nullable(string()))],
  basicAuthPassword: ['basic_auth_password', optional(nullable(string()))],
  expands: ['expands', optional(nullable(string()))],
  format: ['format', optional(nullable(formatEnumSchema))],
  isActive: ['is_active', boolean()],
  locationId: ['location_id', string()],
  locationApiId: ['location_api_id', optional(nullable(string()))],
  onCreate: ['on_create', boolean()],
  onUpdate: ['on_update', boolean()],
  onDelete: ['on_delete', boolean()],
  postbackConfigId: ['postback_config_id', optional(nullable(string()))],
  productTransactionId: [
    'product_transaction_id',
    optional(nullable(string())),
  ],
  resource: ['resource', resource12EnumSchema],
  numberOfAttempts: ['number_of_attempts', number()],
  url: ['url', string()],
  id: ['id', string()],
  postbackLogs: [
    'postback_logs',
    optional(array(lazy(() => postbackLogSchema))),
  ],
});