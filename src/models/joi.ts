/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema';
import { Conditions, conditionsSchema } from './conditions';

export interface Joi {
  conditions?: Conditions;
  [key: string]: unknown;
}

export const joiSchema: Schema<Joi> = expandoObject({
  conditions: ['conditions', optional(lazy(() => conditionsSchema))],
});
