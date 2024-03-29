/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  lazy,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import { AltBankAccount, altBankAccountSchema } from './altBankAccount';
import { AppDeliveryEnum, appDeliveryEnumSchema } from './appDeliveryEnum';
import { BankAccount1, bankAccount1Schema } from './bankAccount1';
import {
  BusinessCategoryEnum,
  businessCategoryEnumSchema,
} from './businessCategoryEnum';
import { BusinessTypeEnum, businessTypeEnumSchema } from './businessTypeEnum';
import { Contact, contactSchema } from './contact';
import { Location5, location5Schema } from './location5';
import { OwnershipTypeEnum, ownershipTypeEnumSchema } from './ownershipTypeEnum';
import { PrimaryPrincipal, primaryPrincipalSchema } from './primaryPrincipal';

export interface V1OnboardingRequest {
  /** Location ID */
  parentId?: string | null;
  /** The Primary Principal. */
  primaryPrincipal: PrimaryPrincipal;
  /** The ID of the template to be used - this value will be provided by Fortis. */
  templateCode: string;
  /** Merchant email address. */
  email: string;
  /** Merchant 'Doing Business As' name. */
  dbaName: string;
  /** The Location. */
  location: Location5;
  /** The delivery method of the app to the merchant. */
  appDelivery: AppDeliveryEnum;
  /** The Category of the merchant's business */
  businessCategory?: BusinessCategoryEnum | null;
  /** The Type of a merchant's business. */
  businessType?: BusinessTypeEnum | null;
  /** Description of Goods or Services. */
  businessDescription?: string | null;
  /** Card present/swiped percentage */
  swipedPercent?: number | null;
  /** Card not present/keyed percentage */
  keyedPercent?: number | null;
  /** eCommerce percentage. */
  ecommercePercent?: number | null;
  /** The Ownership Type of the merchant's business. */
  ownershipType?: OwnershipTypeEnum | null;
  /** Federal Tax ID (EIN). */
  fedTaxId?: string | null;
  /** Average Transaction Amount Range */
  ccAverageTicketRange?: number | null;
  /** Monthly Processing Volume Range */
  ccMonthlyVolumeRange?: number | null;
  /** Highest transaction amount rounded to the next dollar */
  ccHighTicket?: number | null;
  /** Average Transaction Amount Range */
  ecAverageTicketRange?: number | null;
  /** Monthly Processing Volume Range */
  ecMonthlyVolumeRange?: number | null;
  /** Highest transaction amount rounded to the next dollar */
  ecHighTicket?: number | null;
  /** Merchant's business website. */
  website?: string | null;
  /** The Bank Account. */
  bankAccount: BankAccount1;
  /** The Alternative Bank Account. */
  altBankAccount: AltBankAccount;
  /** Merchant legal name. */
  legalName?: string | null;
  /** The Contact. */
  contact: Contact;
  /** Client Issues Id to track that can be used to track each submitted merchant application. This id should be generated and sent in the request payload, and will be returned in the response payload. If no id is submitted in the payload request, this field will be null in the response. */
  clientAppId?: string | null;
  [key: string]: unknown;
}

export const v1OnboardingRequestSchema: Schema<V1OnboardingRequest> = expandoObject(
  {
    parentId: ['parent_id', optional(nullable(string()))],
    primaryPrincipal: ['primary_principal', lazy(() => primaryPrincipalSchema)],
    templateCode: ['template_code', string()],
    email: ['email', string()],
    dbaName: ['dba_name', string()],
    location: ['location', lazy(() => location5Schema)],
    appDelivery: ['app_delivery', appDeliveryEnumSchema],
    businessCategory: [
      'business_category',
      optional(nullable(businessCategoryEnumSchema)),
    ],
    businessType: ['business_type', optional(nullable(businessTypeEnumSchema))],
    businessDescription: ['business_description', optional(nullable(string()))],
    swipedPercent: ['swiped_percent', optional(nullable(number()))],
    keyedPercent: ['keyed_percent', optional(nullable(number()))],
    ecommercePercent: ['ecommerce_percent', optional(nullable(number()))],
    ownershipType: [
      'ownership_type',
      optional(nullable(ownershipTypeEnumSchema)),
    ],
    fedTaxId: ['fed_tax_id', optional(nullable(string()))],
    ccAverageTicketRange: [
      'cc_average_ticket_range',
      optional(nullable(number())),
    ],
    ccMonthlyVolumeRange: [
      'cc_monthly_volume_range',
      optional(nullable(number())),
    ],
    ccHighTicket: ['cc_high_ticket', optional(nullable(number()))],
    ecAverageTicketRange: [
      'ec_average_ticket_range',
      optional(nullable(number())),
    ],
    ecMonthlyVolumeRange: [
      'ec_monthly_volume_range',
      optional(nullable(number())),
    ],
    ecHighTicket: ['ec_high_ticket', optional(nullable(number()))],
    website: ['website', optional(nullable(string()))],
    bankAccount: ['bank_account', lazy(() => bankAccount1Schema)],
    altBankAccount: ['alt_bank_account', lazy(() => altBankAccountSchema)],
    legalName: ['legal_name', optional(nullable(string()))],
    contact: ['contact', lazy(() => contactSchema)],
    clientAppId: ['client_app_id', optional(nullable(string()))],
  }
);
