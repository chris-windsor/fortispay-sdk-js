/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import { ProcessMethodEnum, processMethodEnumSchema } from './processMethodEnum';
import {
  ReportExportTypeEnum,
  reportExportTypeEnumSchema,
} from './reportExportTypeEnum';

/** Ui Prefs */
export interface UiPrefs {
  /** Ui Prefs Entry Page */
  entryPage?: string | null;
  /** Ui Prefs Page Size */
  pageSize?: number | null;
  /** Ui Prefs Export Type */
  reportExportType?: ReportExportTypeEnum | null;
  /** Ui Prefs Process Method */
  processMethod?: ProcessMethodEnum | null;
  /** Ui Prefs Default Termianl */
  defaultTerminal?: string | null;
  [key: string]: unknown;
}

export const uiPrefsSchema: Schema<UiPrefs> = expandoObject({
  entryPage: ['entry_page', optional(nullable(string()))],
  pageSize: ['page_size', optional(nullable(number()))],
  reportExportType: [
    'report_export_type',
    optional(nullable(reportExportTypeEnumSchema)),
  ],
  processMethod: [
    'process_method',
    optional(nullable(processMethodEnumSchema)),
  ],
  defaultTerminal: ['default_terminal', optional(nullable(string()))],
});