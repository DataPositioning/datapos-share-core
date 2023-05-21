/**
 * @file datapos-engine-support/src/connector.ts
 * @license ISC Licensed under the ISC license, Version 2.0. See the LICENSE.md file for details.
 * @author Jonathan Terrell <terrell.jm@gmail.com>
 * @copyright 2023 Jonathan Terrell
 */

// Dependencies - Engine
import { ConnectionConfig } from './connection';
import type { Component, ComponentConfig } from './component';

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Connector
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export interface Connector extends Component {
    config: ConnectorConfig;
    connectionConfig: ConnectionConfig;
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Connector - Config
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export interface ConnectorConfig extends ComponentConfig {
    category: ConnectorCategory;
    implementations: ConnectorImplementation[];
    logo: string;
    reference: string;
    usageId: ConnectorUsageId;
    version: string;
}

export interface ConnectorImplementation {
    activeConnectionCount: number;
    canDescribe: boolean;
    id: string;
    authMethodId: ConnectorAuthMethodId; // TODO: Checked
    label: string;
    maxConnectionCount: number; // TODO: Checked
    params: Record<string, string>[];
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Connector - Enumerations
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export enum ConnectorAuthMethodId {
    /* eslint-disable no-unused-vars */
    APIKey = 'apiKey',
    Disabled = 'disabled',
    OAuth2 = 'oAuth2',
    None = 'none'
    /* eslint-enable no-unused-vars */
}

export type ConnectorCategory = { label: string };
const componentCategories: Record<string, ConnectorCategory> = {
    application: { label: 'Application' },
    curatedDataset: { label: 'Curated Dataset' },
    database: { label: 'Database' },
    fileStore: { label: 'File Store' }
};
export const lookupConnectorCategory = (id: string): ConnectorCategory => (componentCategories[id] ? componentCategories[id] : { label: id });

export enum ConnectorUsageId {
    /* eslint-disable no-unused-vars */
    Bidirectional = 'bidirectional',
    Destination = 'destination',
    Node = 'node',
    Source = 'source',
    None = 'none'
    /* eslint-enable no-unused-vars */
}
