// // Exports - Base
// export interface BaseConfig {
//     id: string;
//     label: string;
// }

// Exports - Components
export { type ComponentConfig, type ComponentStatus, getComponentStatus } from './component';

// Exports - Components - Connector
export { ConnectorAuthMethodId, type ConnectorCallbackData, type ConnectorConfig, ConnectorUsageId } from './connector';
export type {
    Connector,
    ConnectorFieldInfo,
    ObjectInfo,
    ConnectorRecord,
    ItemConfig,
    ListItemsResponse,
    ListItemsResult,
    ListItemsSettings,
    PreviewInterface,
    PreviewInterfaceSettings,
    PreviewResult,
    ReadInterface,
    ReadInterfaceSettings,
    WriteInterface
} from './connector';

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
    ContextViewConfig,
    Event
} from './context';

// Exports - Components - Data View
export type { DataViewConfig, DataViewContentAuditConfig, DataViewPreviewConfig, DataViewRelationshipsAuditConfig, Encoding, EncodingConfig, ObjectSchema } from './dataView';
export { DataFormatId, getDataFormats, getValueDelimiters, ValueDelimiterId } from './dataView';
export { PreviewColumn } from './dataView/PreviewColumn';
export { ContentAuditColumn, type ParsedValue } from './dataView/ContentAuditColumn';

// Exports - Components - Event Query
export type { EventQueryConfig } from './eventQuery';

// Exports - Components - Usage Kit
export type { TutorialConfig } from './usageKit';

// Exports - Errors
export { AbortError, BackendError, ConnectorError, DataPosError, EngineError, EngineWorkerError, FetchError, FrontendError } from './errors';

// Exports - Utilities
export {
    convertODataTypeToDataType,
    establishVendorAccessToken,
    extractExtensionFromPath,
    extractNameFromPath,
    formatNumberAsDecimalNumber,
    formatNumberAsDuration,
    formatNumberAsStorageSize,
    formatNumberAsWholeNumber,
    lookupMimeTypeForExtension
} from './utilities';
