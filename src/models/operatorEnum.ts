/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OperatorEnum
 */
export enum OperatorEnum {
  Asc = 'asc',
  Desc = 'desc',
}

/**
 * Schema for OperatorEnum
 */
export const operatorEnumSchema: Schema<OperatorEnum> = stringEnum(OperatorEnum);