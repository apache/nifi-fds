/// <reference types="node" />
import url from 'url';
export default class SchemaId {
    readonly inputId: string;
    static empty: SchemaId;
    readonly id: url.Url;
    private readonly absoluteId;
    constructor(inputId: string, parentIds?: string[]);
    getAbsoluteId(): string;
    isEmpty(): boolean;
    isFetchable(): boolean;
    getFileId(): string;
    existsJsonPointerHash(): boolean;
    getJsonPointerHash(): string;
}
