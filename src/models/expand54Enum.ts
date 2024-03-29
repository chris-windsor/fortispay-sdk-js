/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Expand54Enum
 */
export enum Expand54Enum {
  LogEmails = 'log_emails',
  IsVoidable = 'is_voidable',
  IsReversible = 'is_reversible',
  IsRefundable = 'is_refundable',
  IsCompletable = 'is_completable',
  IsSettled = 'is_settled',
  CreatedUser = 'created_user',
  Location = 'location',
  Contact = 'contact',
  Changelogs = 'changelogs',
  ProductTransaction = 'product_transaction',
  Tags = 'tags',
  AllTags = 'all_tags',
  Recurring = 'recurring',
  TagTransactions = 'tagTransactions',
  DeclinedRecurringNotification = 'declined_recurring_notification',
  PaymentRecurringNotification = 'payment_recurring_notification',
  AccountVault = 'account_vault',
  QuickInvoice = 'quick_invoice',
  DeveloperCompany = 'developer_company',
  Terminal = 'terminal',
  HostedPaymentPage = 'hosted_payment_page',
  TransactionLevel3 = 'transaction_level3',
  DeveloperCompanyId = 'developer_company_id',
  TransactionHistories = 'transaction_histories',
  SurchargeTransaction = 'surcharge_transaction',
  Surcharge = 'surcharge',
  Signature = 'signature',
  ReasonCode = 'reason_code',
  Type = 'type',
  Status = 'status',
  TransactionBatch = 'transaction_batch',
  TransactionSplits = 'transaction_splits',
  PostbackLogs = 'postback_logs',
  CurrencyType = 'currency_type',
  TransactionReferences = 'transaction_references',
  SavedAccount = 'saved_account',
}

/**
 * Schema for Expand54Enum
 */
export const expand54EnumSchema: Schema<Expand54Enum> = stringEnum(Expand54Enum);
