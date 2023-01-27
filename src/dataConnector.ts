/**
 * @author Jonathan Terrell <terrell.jm@gmail.com>
 * @copyright 2023 Jonathan Terrell
 * @file datapos-engine-support/src/dataConnector.ts
 * @license ISC
 */

// ...
import type { Progress, CallbackProperties } from '.';
import type { ConnectionEntriesPage, ConnectionEntriesRetrievalProperties, ConnectionItem } from './connection';
import type { ConnectionEntry, ConnectionEntryPreview, DataUsageTypeId } from './connectionEntry';
import type { Connector } from './connector';
import type { SourceViewProperties } from './sourceView';

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Data Connector
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export interface DataConnectorConstructor {
    new (connectionItem: ConnectionItem): DataConnector;
}

export interface DataConnector extends Connector {
    abortController?: AbortController;
    readonly connectionItem: ConnectionItem;
    abort?(): void;
    authenticate?(accountId: string, windowCenterX: number, windowCenterY: number): Window;
    describe?(
        accountId: string | undefined,
        sessionAccessToken: string | undefined,
        connectionEntryId: string | undefined,
        progressCallback: (progress: Progress) => void
    ): Promise<ConnectionDescription>;
    getCreateInterface?(): DataConnectorCreateInterface;
    getPreviewInterface?(): DataConnectorPreviewInterface;
    getReadInterface?(): DataConnectorReadInterface;
    getWriteInterface?(): DataConnectorWriteInterface;
    retrieveEntries?(
        accountId: string | undefined,
        sessionAccessToken: string | undefined,
        parentConnectionEntry: ConnectionEntry,
        properties: ConnectionEntriesRetrievalProperties,
        folderChildEntryCountCallback?: (folderChildEntryCount: CallbackProperties) => void
    ): Promise<ConnectionEntriesPage>;
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Data Connector - Describe
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

type ConnectionDescription = { fileEntries: Record<string, FileEntry>; objectTypes: Record<string, ObjectType> };

interface FileEntry {
    description?: string;
    fields: Record<string, Field>;
    folderIds: string[];
    label?: string;
    summary?: string;
}

interface ObjectType {
    description?: string;
    fields: Record<string, Field>;
    folderIds: string[];
    label?: string;
    summary?: string;
}

interface Field {
    dataType: DataType;
    isIgnored: boolean;
    label: string;
    maxLength?: number;
}

interface DataType {
    maximumLength?: number;
    objectName?: string;
    storageTypeId: DataStorageTypeId;
    usageTypeId: DataUsageTypeId;
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Data Connector - Create Interface
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

interface DataConnectorCreateInterface {
    connector: DataConnector;
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Data Connector - Preview Interface
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export interface DataConnectorPreviewInterface {
    connector: DataConnector;
    previewFileEntry(
        connector: DataConnector,
        sourceViewProperties: SourceViewProperties,
        accountId: string | undefined,
        sessionAccessToken: string | undefined,
        previewInterfaceSettings: DataConnectorPreviewInterfaceSettings
    ): Promise<ConnectionEntryPreview>;
}

export interface DataConnectorPreviewInterfaceSettings {
    chunkSize?: number;
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Data Connector - Read Interface
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export interface DataConnectorReadInterface {
    connector: DataConnector;
    readFileEntry(
        connector: DataConnector,
        sourceViewProperties: SourceViewProperties,
        accountId: string | undefined,
        sessionAccessToken: string | undefined,
        readInterfaceSettings: DataConnectorReadInterfaceSettings,
        csvParse: typeof import('csv-parse/browser/esm')
    ): Promise<void>;
}

export interface DataConnectorReadInterfaceSettings {
    chunk(records: { fieldInfos: FieldInfos[]; fieldValues: string[] }[]): void;
    chunkSize?: number;
    complete(info: FileInfo): void;
    error(error: unknown): void;
}

export interface FieldInfos {
    isQuoted: boolean;
}

interface FileInfo {
    commentLineCount: number;
    emptyLineCount: number;
    lineCount: number;
    recordCount: number;
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Data Connector - Write Interface
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export interface DataConnectorWriteInterface {
    connector: DataConnector;
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Data Connector - Enumerations
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

enum DataStorageTypeId {
    Binary = 'binary',
    Boolean = 'boolean',
    Byte = 'byte',
    Date = 'date',
    DateTime = 'dateTime',
    DateTimeOffset = 'dateTimeOffset',
    Decimal = 'decimal',
    Double = 'double',
    Int8 = 'int8',
    Int16 = 'int16',
    Int32 = 'int32',
    Int64 = 'int64',
    Object = 'object',
    Single = 'single',
    String = 'string',
    Time = 'time',
    Unknown = 'unknown'
}
