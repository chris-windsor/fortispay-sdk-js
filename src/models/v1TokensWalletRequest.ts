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
  optional,
  Schema,
  string,
} from '../schema';
import { AchSecCode3Enum, achSecCode3EnumSchema } from './achSecCode3Enum';
import { BillingAddress, billingAddressSchema } from './billingAddress';
import {
  V1TokensWalletRequestAccountNumber,
  v1TokensWalletRequestAccountNumberSchema,
} from './containers/v1TokensWalletRequestAccountNumber';
import {
  IdentityVerification2,
  identityVerification2Schema,
} from './identityVerification2';
import { Joi4, joi4Schema } from './joi4';
import {
  WalletProviderEnum,
  walletProviderEnumSchema,
} from './walletProviderEnum';

export interface V1TokensWalletRequest {
  /** Account holder name */
  accountHolderName?: string | null;
  /** This field can be used to correlate Tokens in our system to data within an outside software integration */
  accountVaultApiId?: string | null;
  /** This field can be used to correlate Tokens in our system to data within an outside software integration */
  tokenApiId?: string | null;
  /** DEPRECATED (Use token_c1 instead) */
  accountvaultC1?: string | null;
  /** DEPRECATED (Use token_c2 instead) */
  accountvaultC2?: string | null;
  /** DEPRECATED (Use token_c3 instead) */
  accountvaultC3?: string | null;
  /** Custom field 1 for API users to store custom data */
  tokenC1?: string | null;
  /** Custom field 2 for API users to store custom data */
  tokenC2?: string | null;
  /** Custom field 3 for API users to store custom data */
  tokenC3?: string | null;
  /** SEC code for the account */
  achSecCode?: AchSecCode3Enum | null;
  /** Billing Address Object */
  billingAddress?: BillingAddress;
  /** Used to associate the Token with a Contact. */
  contactId?: string | null;
  /** Used to store a customer identification number. */
  customerId?: string | null;
  /** Identity verification */
  identityVerification?: IdentityVerification2;
  /** A valid Location Id associated with the Contact for this Token */
  locationId: string;
  /** Can be used to pull payment info from a previous token api id. */
  previousAccountVaultApiId?: string | null;
  /** Can be used to pull payment info from a previous token api id. */
  previousTokenApiId?: string | null;
  /** Can be used to pull payment info from a previous token. */
  previousAccountVaultId?: string | null;
  /** Can be used to pull payment info from a previous token. */
  previousTokenId?: string | null;
  /** Can be used to pull payment info from a previous transaction. */
  previousTransactionId?: string | null;
  /** Account number */
  accountNumber?: V1TokensWalletRequestAccountNumber | null;
  /** Terms agreement. */
  termsAgree?: boolean;
  /** The ip address of the client that agreed to terms. */
  termsAgreeIp?: string | null;
  /** Used to describe the Token for easier identification within our UI. */
  title?: string | null;
  joi?: Joi4;
  /** Wallet Data */
  walletData: string;
  /** Wallet Provider */
  walletProvider: WalletProviderEnum;
  /** Wallet Key ID */
  walletKeyId?: string | null;
  [key: string]: unknown;
}

export const v1TokensWalletRequestSchema: Schema<V1TokensWalletRequest> = expandoObject(
  {
    accountHolderName: ['account_holder_name', optional(nullable(string()))],
    accountVaultApiId: ['account_vault_api_id', optional(nullable(string()))],
    tokenApiId: ['token_api_id', optional(nullable(string()))],
    accountvaultC1: ['accountvault_c1', optional(nullable(string()))],
    accountvaultC2: ['accountvault_c2', optional(nullable(string()))],
    accountvaultC3: ['accountvault_c3', optional(nullable(string()))],
    tokenC1: ['token_c1', optional(nullable(string()))],
    tokenC2: ['token_c2', optional(nullable(string()))],
    tokenC3: ['token_c3', optional(nullable(string()))],
    achSecCode: ['ach_sec_code', optional(nullable(achSecCode3EnumSchema))],
    billingAddress: [
      'billing_address',
      optional(lazy(() => billingAddressSchema)),
    ],
    contactId: ['contact_id', optional(nullable(string()))],
    customerId: ['customer_id', optional(nullable(string()))],
    identityVerification: [
      'identity_verification',
      optional(lazy(() => identityVerification2Schema)),
    ],
    locationId: ['location_id', string()],
    previousAccountVaultApiId: [
      'previous_account_vault_api_id',
      optional(nullable(string())),
    ],
    previousTokenApiId: ['previous_token_api_id', optional(nullable(string()))],
    previousAccountVaultId: [
      'previous_account_vault_id',
      optional(nullable(string())),
    ],
    previousTokenId: ['previous_token_id', optional(nullable(string()))],
    previousTransactionId: [
      'previous_transaction_id',
      optional(nullable(string())),
    ],
    accountNumber: [
      'account_number',
      optional(nullable(v1TokensWalletRequestAccountNumberSchema)),
    ],
    termsAgree: ['terms_agree', optional(boolean())],
    termsAgreeIp: ['terms_agree_ip', optional(nullable(string()))],
    title: ['title', optional(nullable(string()))],
    joi: ['_joi', optional(lazy(() => joi4Schema))],
    walletData: ['wallet_data', string()],
    walletProvider: ['wallet_provider', walletProviderEnumSchema],
    walletKeyId: ['wallet_key_id', optional(nullable(string()))],
  }
);