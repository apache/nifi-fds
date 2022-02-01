/**
 * Conversion function that takes an array of objects and converts
 * them to CSV format. Custom key and line separators can be specified.
 *
 * @param objects list of strings in JSON format or actual objects
 * @param keySeparator optional parameter to specify custom value separator
 * @param lineSeparator optional parameter to specify custom end of line separator
 * @returns CSV formatted string
 */
export declare function convertObjectsToCSV(objects: any[], keySeparator?: string, lineSeparator?: string): string;
/**
 * Conversion function that takes a CSV representation
 * of objects and converts them to JSON.
 * The first row in the input must be the object keys.
 * Custom key separator and line separator can be specified.
 * Indentation size for output JSON can be specified.
 *
 * @param csv list of strings in JSON format or actual objects
 * @param keySeparator optional parameter to specify custom value separator
 * @param lineSeparator optional parameter to specify custom end of line separator
 * @param indent optional parameter indicating space indentation for pretty output. Default is 2.
 * @returns JSON formatted string
 */
export declare function convertCSVToJSON(csv: string, keySeparator?: string, lineSeparator?: string, indent?: number): string;
/**
 * Convert object to JSON using stringify. Indentation size for output JSON can be specified.
 *
 * @param json object to be converted
 * @param indent optional parameter indicating space indentation for pretty output. Default is 2.
 */
export declare function formatJSON(json: object, indent?: number): string;
