/**
 * Download CSV content to the specified file with .csv extension
 * appended to the provided base file name.
 *
 * @param fileBaseName base name of destination file
 * @param csv CSV contents
 */
export declare function downloadCSV(fileBaseName: string, csv: string): void;
/**
 * Download JSON content to the specified file with .json extension
 * appended to the provided base file name.
 *
 * @param fileBaseName base name of destination file
 * @param json JSON contents
 * @param format indicates if JSON should be prettied
 * @param indent optional parameter indicating space indentation for pretty output. Default is 2
 */
export declare function downloadJSON(fileBaseName: string, json: string, format?: boolean, indent?: number): void;
/**
 * Convert objects to CSV format and download to file with .csv
 * extension appended to the provided base file name. Custom key
 * separator and line separator can be specified.
 *
 * @param fileBaseName base name of destination file
 * @param objects object array to be converted to CSV format
 *   prior to writing to download destination
 * @param keySeparator optional parameter to specify custom value separator
 * @param lineSeparator optional parameter to specify custom end of line separator
 */
export declare function downloadObjectsToCSV(fileBaseName: string, objects: any[], keySeparator?: string, lineSeparator?: string): void;
/**
 * Convert objects to JSON format and download to file with .json
 * extension appended to the provided base file name.
 *
 * @param fileBaseName base name of destination file
 * @param objects object array to be converted to JSON format
 *   prior to writing to download destination
 * @param indent optional parameter indicating space indentation for pretty output. Default is 2
 */
export declare function downloadObjectsToJSON(fileBaseName: string, objects: any[], indent?: number): void;
/**
 * Download string content to the specified file with desired mime type.
 *
 * @param fileName full filename (including appropriate extension) of destination file
 * @param contents string contents to be written to download destination
 * @param mimeType mime type appropriate to file content to support consumption of destination file
 */
export declare function downloadFile(fileName: string, contents: string, mimeType?: string): void;
