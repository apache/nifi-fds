/**
 * Read file as UTF-8 text. Return string contents on read completion.
 *
 * @param file filename or File object
 * @returns promise that resolves to file content string
 */
export declare function readFile(file: File): Promise<string>;
