import SimpleTypes = JsonSchemaOrg.Draft04.Schema.Definitions.SimpleTypes;
export declare function toTSType(type: string, debugSource?: any): string | undefined;
export declare function reduceTypes(types: SimpleTypes[]): SimpleTypes[];
export declare function mergeSchema(a: any, b: any): any;
