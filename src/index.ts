// Exports - Base
export interface BaseConfig {
    id: string;
    label: string;
}

// Exports - Components
export { type ComponentConfig, ComponentTypeId, getComponentStatus } from './component';

// Exports - Components - Connector
export { ConnectorAuthMethodId, type ConnectorCallbackData, type ConnectorConfig, ConnectorUsageId } from './connector/index';
export type {
    DataConnector,
    DataConnectorFieldInfo,
    DataConnectorFileInfo,
    DataConnectorRecord,
    Encoding,
    EncodingConfig,
    FileSchema,
    ListEntriesResponse,
    ListEntriesSettings,
    ListEntryConfig,
    ListEntryDrilldownResult,
    ListEntryPreview,
    PreviewListEntryResponse,
    PreviewListEntryInterface,
    PreviewListEntryInterfaceSettings,
    ReadInterface,
    ReadInterfaceSettings,
    WriteInterface,
    WriteInterfaceSettings
} from './connector/dataConnector';
export { ListEntryPreviewTypeId, ListEntryTypeId } from './connector/dataConnector';
export type {} from './nodeConnector';

// Exports - Components - Connection
export type { ConnectionConfig } from './connection';
export { FieldStorageTypeId, FieldUsageTypeId } from './connection';

// Exports - Components - Context
export type {
    ContextConfig,
    ContextModelConfig,
    ContextDimensionConfig,
    ContextEntityCharacteristicConfig,
    ContextEntityComputationConfig,
    ContextEntityConfig,
    ContextEntityEventConfig,
    ContextHierarchyConfig,
    ContextViewConfig
} from './context';

// Exports - Components - Event Query
export type { EventQueryConfig } from './eventQuery';

// Exports - Components - Source View
export type { SourceViewConfig, SourceViewContentAudit, SourceViewPreview, SourceViewRelationshipsAudit } from './sourceView';
export { DataFormatId, getDataFormats, getValueDelimiters, ValueDelimiterId } from './sourceView';
export { PreviewColumn } from './sourceView/PreviewColumn';
export { ContentAuditColumn, type ParsedValue } from './sourceView/ContentAuditColumn';

// Exports - Components - Usage Kit
export type { UsageKitConfig } from './usageKit';

// Exports - Errors
export { AbortError, BackendError, ConnectorError, EngineError, EngineCoreError, EngineWorkerError, FetchError, FrontendError, type SerialisedErrorData } from './errors';

// Exports - Utilities
export {
    convertODataTypeToDataType,
    extractFileExtensionFromFilePath,
    formatNumberAsDecimalNumber,
    formatNumberAsDuration,
    formatNumberAsStorageSize,
    formatNumberAsWholeNumber,
    lookupMimeTypeForFileExtension
} from './utilities';
