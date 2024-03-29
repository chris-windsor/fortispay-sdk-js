/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema';
import {
  Joi17Conditions,
  joi17ConditionsSchema,
} from './containers/joi17Conditions';

export interface Joi17 {
  conditions?: Joi17Conditions;
  [key: string]: unknown;
}

export const joi17Schema: Schema<Joi17> = expandoObject({
  conditions: ['conditions', optional(lazy(() => joi17ConditionsSchema))],
});
