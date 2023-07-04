// Dependencies - Engine - Support
import type { ConnectionConfig } from '../connection';
import type { Component, ComponentConfig } from '../component';

// Declarations - Connector
export interface Connector extends Component {
    config: ConnectorConfig;
    connectionConfig: ConnectionConfig;
}

// Declarations - Connector Config
export interface ConnectorConfig extends ComponentConfig {
    category: ConnectorCategory;
    categoryId: string;
    implementations: Record<string, ConnectorImplementation>;
    usageId: ConnectorUsageId;
    vendorAccountURL: string;
    vendorDocumentationURL: string;
    vendorHomeURL: string;
    version: string;
}

// Declarations - Connector Implementation
export interface ConnectorImplementation {
    activeConnectionCount: number;
    canDescribe: boolean;
    id: string;
    authMethodId: ConnectorAuthMethodId;
    label: Record<string, string>;
    maxConnectionCount: number;
    params: Record<string, string>[];
}

// Declarations - Connector Auth Method
export enum ConnectorAuthMethodId {
    APIKey = 'apiKey',
    Disabled = 'disabled',
    OAuth2 = 'oAuth2',
    None = 'none'
}

// Declarations - Connector Category
type ConnectorCategory = { id: string; label: string };
type ConnectorCategoryConfig = { id: string; label: Record<string, string> };
const connectorCategories: ConnectorCategoryConfig[] = [
    { id: 'application', label: { en: 'Application' } },
    { id: 'curatedDataset', label: { en: 'Curated Dataset' } },
    { id: 'database', label: { en: 'Database' } },
    { id: 'fileStore', label: { en: 'File Store' } }
];
export const getConnectorCategory = (id: string, localeId = 'en'): ConnectorCategory => {
    const connectorCategory = connectorCategories.find((connectorCategory) => connectorCategory.id === id);
    if (connectorCategory) return { ...connectorCategory, label: connectorCategory.label[localeId] || connectorCategory.label['en'] || id };
    return { id, label: id };
};

// Declarations - Connector Usage
export enum ConnectorUsageId {
    Bidirectional = 'bidirectional',
    Destination = 'destination',
    Node = 'node',
    Source = 'source',
    None = 'none'
}
