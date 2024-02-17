/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, nullable, optional, Schema, string } from '../schema';

/** This field is a read only field. This field will only be populated for EMV transactions and will contain proper JSON formatted data with some or all of the following fields: TC,TVR,AID,TSI,ATC,APPLAB,APPN,CVM */
export interface EmvReceiptData {
  /** This field is a read only field. This field will only be populated for EMV transactions and will contain proper JSON formatted data with some or all of the following fields: TC,TVR,AID,TSI,ATC,APPLAB,APPN,CVM */
  aID?: string | null;
  /** This field is a read only field. This field will only be populated for EMV transactions and will contain proper JSON formatted data with some or all of the following fields: TC,TVR,AID,TSI,ATC,APPLAB,APPN,CVM */
  aPPLAB?: string | null;
  /** This field is a read only field. This field will only be populated for EMV transactions and will contain proper JSON formatted data with some or all of the following fields: TC,TVR,AID,TSI,ATC,APPLAB,APPN,CVM */
  aPPN?: string | null;
  /** This field is a read only field. This field will only be populated for EMV transactions and will contain proper JSON formatted data with some or all of the following fields: TC,TVR,AID,TSI,ATC,APPLAB,APPN,CVM */
  cVM?: string | null;
  /** This field is a read only field. This field will only be populated for EMV transactions and will contain proper JSON formatted data with some or all of the following fields: TC,TVR,AID,TSI,ATC,APPLAB,APPN,CVM */
  tSI?: string | null;
  /** This field is a read only field. This field will only be populated for EMV transactions and will contain proper JSON formatted data with some or all of the following fields: TC,TVR,AID,TSI,ATC,APPLAB,APPN,CVM */
  tVR?: string | null;
  [key: string]: unknown;
}

export const emvReceiptDataSchema: Schema<EmvReceiptData> = expandoObject({
  aID: ['AID', optional(nullable(string()))],
  aPPLAB: ['APPLAB', optional(nullable(string()))],
  aPPN: ['APPN', optional(nullable(string()))],
  cVM: ['CVM', optional(nullable(string()))],
  tSI: ['TSI', optional(nullable(string()))],
  tVR: ['TVR', optional(nullable(string()))],
});