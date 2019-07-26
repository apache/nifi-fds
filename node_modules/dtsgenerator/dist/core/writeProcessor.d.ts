export interface WriteProcessorOptions {
    indentChar: string;
    indentSize: number;
    normalizeTypeName: (type: string, primitive: boolean) => string;
}
export default class WriteProcessor {
    private options;
    private indent;
    private results;
    private alreadyIndentThisLine;
    constructor(options?: Partial<WriteProcessorOptions>);
    clear(): void;
    output(str: string): this;
    outputType(type: string, primitive?: boolean): this;
    outputKey(name: string, optional?: boolean): this;
    outputLine(str?: string): this;
    private protectComment;
    outputJSDoc(...comments: any[]): this;
    doIndent(): this;
    readonly indentLevel: number;
    increaseIndent(): this;
    decreaseIndent(): this;
    getIndent(): string;
    private repeatString;
    toDefinition(): string;
}
