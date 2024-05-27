// Dependencies - Vendor
import type { Timestamp } from 'firebase/firestore';

// Dependencies - Framework
import type { Component, ComponentConfig } from '../component';

// Interfaces/Types - Connection
export interface Connection extends Component {
    config: ConnectionConfig;
}

// Interfaces/Types - Connection Configuration
export interface ConnectionConfig extends ComponentConfig {
    authorisation: Record<string, ConnectionAuthorization>;
    connectorId: string;
    connectorImplementationId: string;
    lastVerifiedAt: Timestamp;
    notation: string;
}
interface ConnectionAuthorization {
    access_token: string; // Dropbox.
    account_id: string; // Dropbox.
    expires_at: number; // Dropbox.
    expires_in: number; // Dropbox.
    refresh_token: string; // Dropbox.
    scope: string; // Dropbox.
    token_type: string; // Dropbox.
    uid: string; // Dropbox.
}

// Interfaces/Types - Connection Description
export type ConnectionDescription = { itemEntries: Record<string, ItemEntry>; objectTypes: Record<string, ObjectType> };
interface ItemEntry {
    description?: string;
    fields: Record<string, Field>;
    folderIds: string[];
    label?: string;
    summary?: string;
}
export interface ObjectType {
    description?: string;
    fields: Record<string, Field>;
    folderIds: string[];
    label?: string;
    summary?: string;
}
interface Field {
    dataType: FieldDataType;
    isIgnored: boolean;
    label: string;
    maxLength?: number;
}
export interface FieldDataType {
    maximumLength?: number;
    objectName?: string;
    storageTypeId:
        | 'binary'
        | 'boolean'
        | 'byte'
        | 'date'
        | 'dateTime'
        | 'dateTimeOffset'
        | 'decimal'
        | 'double'
        | 'int8'
        | 'int16'
        | 'int32'
        | 'int64'
        | 'object'
        | 'single'
        | 'string'
        | 'time'
        | 'unknown';
    usageTypeId: 'boolean' | 'decimalNumber' | 'moment' | 'string' | 'wholeNumber' | 'unknown';
}
