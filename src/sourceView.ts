/**
 * @author Jonathan Terrell <terrell.jm@gmail.com>
 * @copyright 2023 Jonathan Terrell
 * @file datapos-engine-support/src/sourceView.ts
 * @license ISC Licensed under the ISC license, Version 2.0. See the LICENSE.md file for details.
 */

// Engine Dependencies
import type { DPAFileSystemFileHandle } from '.';
import type { Component } from './component';
import type { DataFormatId, DataUsageTypeId, ParsedValue, PreviewField, ValueDelimiterId } from './connectionEntry';

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Source View
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

interface SourceView extends Component {
    properties: SourceViewProperties;
    preview: SourceViewPreview;
    contentAudit: SourceViewContentAudit;
    relationshipsAudit: SourceViewRelationshipsAudit;
}

export interface SourceViewProperties extends Record<string, unknown> {
    connectionId?: string;
    folderPath?: string;
    fileExtension?: string;
    fileHandle?: DPAFileSystemFileHandle;
    fileId?: string;
    fileName?: string;
    preview?: SourceViewPreview;
    contentAudit?: SourceViewContentAudit;
    relationshipsAudit?: SourceViewRelationshipsAudit;
}

export interface SourceViewPreview {
    asAt: number;
    commentPrefixId?: string;
    dataFormatId: DataFormatId;
    fields?: PreviewField[];
    encodingConfidenceLevel?: number;
    encodingId?: string;
    hasHeaderLine?: boolean;
    lineDelimiterId?: string;
    linesToSkipBeforeHeader?: number;
    linesToSkipAfterHeader?: number;
    linesToSkipAtEndOfFile?: number;
    previewSize: number;
    quoteEscapeCharacterId?: string;
    quoteMarkId?: string;
    records?: ParsedValue[][];
    skipEmptyLines?: boolean;
    skipLinesWithEmptyValues?: boolean;
    skipLinesWithErrors?: boolean;
    text?: string;
    totalSize?: number;
    valueDelimiterId?: ValueDelimiterId;
    valueTrimMethodId?: string;
}

interface SourceViewContentAudit {
    asAt: number;
    fields: SourceViewContentAuditField[];
    lineCount: number;
}

interface SourceViewContentAuditField extends PreviewField {
    dataUsageTypeId?: DataUsageTypeId;
    id?: string;
    invalidValueCount: number;
    missingValueCount: number;
    uniqueValueCount: number;
    validValueCount: number;
    values: Record<string, number>;
}

interface SourceViewRelationshipsAudit {
    placeholder?: string;
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Source View - Enumerations
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
