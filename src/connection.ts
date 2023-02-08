/**
 * @author Jonathan Terrell <terrell.jm@gmail.com>
 * @copyright 2023 Jonathan Terrell
 * @file datapos-engine-support/src/connection.ts
 * @license ISC
 */

// Engine Dependencies
import type { ComponentStatusId, ComponentTypeId, FirebaseTimestamp } from '.';
import type { ComponentItem, Component } from './component';
import type { ConnectionEntry } from './connectionEntry';
import type { ConnectorImplementation, ConnectorItem } from './connector';

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Connection
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

interface Connection extends Component {}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Connection - Config
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export interface ComponentConfig {
    firstCreatedAt: FirebaseTimestamp;
    id?: string;
    lastUpdatedAt: FirebaseTimestamp;
    statusId: ComponentStatusId;
    typeId: ComponentTypeId;
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Connection - Item
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export interface ConnectionItem extends ComponentItem {
    authorization?: Record<string, ConnectionItemAuthorization>;
    connectorItem: ConnectorItem;
    implementation: ConnectorImplementation;
    implementationId?: string;
    notation?: string;
    verifiedAt?: FirebaseTimestamp;
}

interface ConnectionItemAuthorization {
    access_token: string; // Dropbox.
    account_id: string; // Dropbox.
    expires_at: number; // Dropbox.
    expires_in: number; // Dropbox.
    refresh_token: string; // Dropbox.
    scope: string; // Dropbox.
    token_type: string; // Dropbox.
    uid: string; // Dropbox.
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Connection - Retrieve Entries
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export interface ConnectionEntriesPage {
    cursor: string | number | undefined;
    entries: ConnectionEntry[];
    isMore: boolean;
    totalCount: number;
}

export interface ConnectionEntriesRetrievalProperties {
    limit: number;
    offset: number;
    totalCount?: number;
}
