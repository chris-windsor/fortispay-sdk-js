
# Trx Source Id Enum

How the transaction was obtained by the API.

> 1 - Unknown - The origination of this transaction could not be determined.
> 
> 2 - Mobile - The origination of this transaction is through the mobile application. This is always a merchant submitted payment.
> 
> 3 - Web - The origination of this transaction is through a web browser. This is always a merchant submitted payment. Examples include Virtual Terminal, Contact Charge, and Transaction Details - Run Again pages.
> 
> 4 - IVR Transaction - The origination of this transaction is over the phone. This payment is submitted by an automated system initiated by the cardholder.
> 
> 5 - Contact Statement - The orignation of this transaction is through a Vericle statement.
> 
> 6 - Contact Payment Mobile - The origination of this transaction is through the mobile application. This is always submitted by a contact user.
> 
> 7 - Contact Payment - The origination of this transaction is through a web browser. This is always submitted by a contact user.
> 
> 8 - Quick Invoice - The orignation of this transaction is through a Quick Invoice. This is typically submitted by a contact user, however the transaction can also be submitted by a merchant.
> 
> 9 - Payform - The origination of this transaction is through a Payform. This is typically a merchant submitted transaction, and is always from an internal developer.
> 
> 10 - Hosted Payment Page - The orignation of this transaction is through a Hosted Payment Page. This is typically a cardholder submitted transaction.
> 
> 11 - Emulator -  The origination of this transaction is through Auth.Net emulator. This is typically submitted through an integration to a website or a shopping cart.
> 
> 12 - Integration - The orignation of this transaction is through an integrated solution. This will always be from an external developer.
> 
> 13 - Recurring Billing - The orignation of this transaction is through a scheduled recurring payment. This payment is system-initiated based on a payment schedule that has been configured.
> 
> 14 - Recurring Secondary - This feature has not been implented yet.
> 
> 15 - Declined Recurring Email - The orignation of this transaction is through the email notification sent when a recurring payment has been declined. This is typically submitted by a cardholder.
> 
> 16 - Paylink - The orignation of this transaction is through a Paylink. This is typically submitted by a contact user, however the transaction can also be submitted by a merchant.
> 
> 17 - Elements - The origination of this transaction is through the Elements payments page. This can be a cardholder submitted or a merchant submitted transaction.
> 
> 18 - ACH Import - The origination of this transaction is through an ACH file import. This is a merchant initiated process.

## Enumeration

`TrxSourceIdEnum`

## Fields

| Name |
|  --- |
| `enum1` |
| `enum2` |
| `enum3` |
| `enum4` |
| `enum5` |
| `enum6` |
| `enum7` |
| `enum8` |
| `enum9` |
| `enum10` |
| `enum11` |
| `enum12` |
| `enum13` |
| `enum14` |
| `enum15` |
| `enum16` |
| `enum17` |
| `enum18` |

## Example

```
8
```

