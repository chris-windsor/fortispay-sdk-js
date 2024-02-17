/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Field26Enum
 */
export enum Field26Enum {
  LocationId = 'location_id',
  AccountNumber = 'account_number',
  ContactApiId = 'contact_api_id',
  FirstName = 'first_name',
  LastName = 'last_name',
  CellPhone = 'cell_phone',
  Balance = 'balance',
  Address = 'address',
  CompanyName = 'company_name',
  HeaderMessage = 'header_message',
  DateOfBirth = 'date_of_birth',
  EmailTrxReceipt = 'email_trx_receipt',
  HomePhone = 'home_phone',
  OfficePhone = 'office_phone',
  OfficePhoneExt = 'office_phone_ext',
  HeaderMessageType = 'header_message_type',
  UpdateIfExists = 'update_if_exists',
  ContactC1 = 'contact_c1',
  ContactC2 = 'contact_c2',
  ContactC3 = 'contact_c3',
  ParentId = 'parent_id',
  Email = 'email',
  Id = 'id',
  CreatedTs = 'created_ts',
  ModifiedTs = 'modified_ts',
  Active = 'active',
  CreatedUserId = 'created_user_id',
  ReceivedEmails = 'received_emails',
  IsDeletable = 'is_deletable',
  Location = 'location',
  User = 'user',
  Recurrings = 'recurrings',
  EmailBlacklist = 'email_blacklist',
  SmsBlacklist = 'sms_blacklist',
  Changelogs = 'changelogs',
  PostbackLogs = 'postback_logs',
  CreatedUser = 'created_user',
  Parent = 'parent',
  Children = 'children',
}

/**
 * Schema for Field26Enum
 */
export const field26EnumSchema: Schema<Field26Enum> = stringEnum(Field26Enum);