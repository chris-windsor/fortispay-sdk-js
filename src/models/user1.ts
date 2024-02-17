/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  expandoObject,
  lazy,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import { Address2, address2Schema } from './address2';
import { StatusCodeEnum, statusCodeEnumSchema } from './statusCodeEnum';
import { UiPrefs, uiPrefsSchema } from './uiPrefs';
import { UserTypeCodeEnum, userTypeCodeEnumSchema } from './userTypeCodeEnum';

/** User Information on `expand` */
export interface User1 {
  /** Account Number */
  accountNumber?: string | null;
  /** Branding Domain Url */
  brandingDomainUrl?: string | null;
  /** Cell Phone */
  cellPhone?: string | null;
  /** Company Name */
  companyName?: string | null;
  /** Contact */
  contactId?: string | null;
  /** Date Of Birth */
  dateOfBirth?: string | null;
  /** Domain */
  domainId?: string | null;
  /** Email */
  email: string;
  /** Email Trx Receipt */
  emailTrxReceipt?: boolean;
  /** Home Phone */
  homePhone?: string | null;
  /** First Name */
  firstName?: string | null;
  /** Last Name */
  lastName: string;
  /** Locale */
  locale?: string | null;
  /** Office Phone */
  officePhone?: string | null;
  /** Office Ext Phone */
  officeExtPhone?: string | null;
  /** Primary Location ID */
  primaryLocationId: string;
  /** Requires New Password */
  requiresNewPassword?: string | null;
  /** Terms Condition (This field is required when updating your own password). */
  termsConditionCode?: string | null;
  /** Time zone */
  tz: string;
  /** Ui Prefs */
  uiPrefs?: UiPrefs;
  /** Username */
  username: string;
  /** User Api Key */
  userApiKey?: string | null;
  /** User Hash Key */
  userHashKey?: string | null;
  /** User Type */
  userTypeCode: UserTypeCodeEnum;
  /** Password */
  password?: string | null;
  /** Zip */
  zip?: string | null;
  /** Location ID */
  locationId?: string | null;
  /** ContactApi Id */
  contactApiId?: string | null;
  /** Primary LocationApi ID */
  primaryLocationApiId?: string | null;
  /** Status Code */
  statusCode?: StatusCodeEnum | null;
  /** API Only */
  apiOnly?: boolean;
  /** Is Invitation */
  isInvitation?: boolean;
  /** Address */
  address?: Address2;
  /** User ID */
  id: string;
  /** Status */
  status: boolean;
  /** Login Attempts */
  loginAttempts: number;
  /** Last Login */
  lastLoginTs: number;
  /** Created Time Stamp */
  createdTs: number;
  /** Modified Time Stamp */
  modifiedTs: number;
  /** Created User */
  createdUserId: string;
  /** Terms Accepted */
  termsAcceptedTs?: number | null;
  /** Terms Agree Ip */
  termsAgreeIp?: string | null;
  /** Current Date Time */
  currentDateTime: string;
  /** Current Login Ip */
  currentLoginIp?: string | null;
  /** Current Login Timestamp */
  currentLogin?: number | null;
  /** SFTP Access */
  sftpAccess?: boolean;
  /** Log Api Response Body */
  logApiResponseBodyTs?: number | null;
  [key: string]: unknown;
}

export const user1Schema: Schema<User1> = expandoObject({
  accountNumber: ['account_number', optional(nullable(string()))],
  brandingDomainUrl: ['branding_domain_url', optional(nullable(string()))],
  cellPhone: ['cell_phone', optional(nullable(string()))],
  companyName: ['company_name', optional(nullable(string()))],
  contactId: ['contact_id', optional(nullable(string()))],
  dateOfBirth: ['date_of_birth', optional(nullable(string()))],
  domainId: ['domain_id', optional(nullable(string()))],
  email: ['email', string()],
  emailTrxReceipt: ['email_trx_receipt', optional(boolean())],
  homePhone: ['home_phone', optional(nullable(string()))],
  firstName: ['first_name', optional(nullable(string()))],
  lastName: ['last_name', string()],
  locale: ['locale', optional(nullable(string()))],
  officePhone: ['office_phone', optional(nullable(string()))],
  officeExtPhone: ['office_ext_phone', optional(nullable(string()))],
  primaryLocationId: ['primary_location_id', string()],
  requiresNewPassword: ['requires_new_password', optional(nullable(string()))],
  termsConditionCode: ['terms_condition_code', optional(nullable(string()))],
  tz: ['tz', string()],
  uiPrefs: ['ui_prefs', optional(lazy(() => uiPrefsSchema))],
  username: ['username', string()],
  userApiKey: ['user_api_key', optional(nullable(string()))],
  userHashKey: ['user_hash_key', optional(nullable(string()))],
  userTypeCode: ['user_type_code', userTypeCodeEnumSchema],
  password: ['password', optional(nullable(string()))],
  zip: ['zip', optional(nullable(string()))],
  locationId: ['location_id', optional(nullable(string()))],
  contactApiId: ['contact_api_id', optional(nullable(string()))],
  primaryLocationApiId: [
    'primary_location_api_id',
    optional(nullable(string())),
  ],
  statusCode: ['status_code', optional(nullable(statusCodeEnumSchema))],
  apiOnly: ['api_only', optional(boolean())],
  isInvitation: ['is_invitation', optional(boolean())],
  address: ['address', optional(lazy(() => address2Schema))],
  id: ['id', string()],
  status: ['status', boolean()],
  loginAttempts: ['login_attempts', number()],
  lastLoginTs: ['last_login_ts', number()],
  createdTs: ['created_ts', number()],
  modifiedTs: ['modified_ts', number()],
  createdUserId: ['created_user_id', string()],
  termsAcceptedTs: ['terms_accepted_ts', optional(nullable(number()))],
  termsAgreeIp: ['terms_agree_ip', optional(nullable(string()))],
  currentDateTime: ['current_date_time', string()],
  currentLoginIp: ['current_login_ip', optional(nullable(string()))],
  currentLogin: ['current_login', optional(nullable(number()))],
  sftpAccess: ['sftp_access', optional(boolean())],
  logApiResponseBodyTs: [
    'log_api_response_body_ts',
    optional(nullable(number())),
  ],
});