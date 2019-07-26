import SchemaId from './schemaId';
export declare type TypeNameConvertor = (id: SchemaId) => string[];
export declare const DefaultTypeNameConvertor: TypeNameConvertor;
export declare function normalizeTypeName(type: string): string;
