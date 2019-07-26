import { TypeNameConvertor } from './typeNameConvertor';
import { WriteProcessorOptions } from './writeProcessor';
export { default as SchemaId } from './schemaId';
export { DefaultTypeNameConvertor } from './typeNameConvertor';
export interface Options extends Partial<WriteProcessorOptions> {
    contents?: any[];
    inputUrls?: string[];
    typeNameConvertor?: TypeNameConvertor;
    namespaceName?: string;
}
export default function dtsGenerator(options: Options): Promise<string>;
