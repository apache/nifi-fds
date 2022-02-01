/**
 * @fileoverview added by tsickle
 * Generated from: functions/download.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { convertObjectsToCSV, formatJSON } from './convert';
/**
 * Download CSV content to the specified file with .csv extension
 * appended to the provided base file name.
 *
 * @param {?} fileBaseName base name of destination file
 * @param {?} csv CSV contents
 * @return {?}
 */
export function downloadCSV(fileBaseName, csv) {
    downloadFile(`${fileBaseName}.csv`, csv, 'text/csv');
}
/**
 * Download JSON content to the specified file with .json extension
 * appended to the provided base file name.
 *
 * @param {?} fileBaseName base name of destination file
 * @param {?} json JSON contents
 * @param {?=} format indicates if JSON should be prettied
 * @param {?=} indent optional parameter indicating space indentation for pretty output. Default is 2
 * @return {?}
 */
export function downloadJSON(fileBaseName, json, format = false, indent = 2) {
    downloadFile(`${fileBaseName}.json`, format ? formatJSON(JSON.parse(json), indent) : json, 'application/json');
}
/**
 * Convert objects to CSV format and download to file with .csv
 * extension appended to the provided base file name. Custom key
 * separator and line separator can be specified.
 *
 * @param {?} fileBaseName base name of destination file
 * @param {?} objects object array to be converted to CSV format
 *   prior to writing to download destination
 * @param {?=} keySeparator optional parameter to specify custom value separator
 * @param {?=} lineSeparator optional parameter to specify custom end of line separator
 * @return {?}
 */
export function downloadObjectsToCSV(fileBaseName, objects, keySeparator = ',', lineSeparator = '\r\n') {
    downloadFile(`${fileBaseName}.csv`, convertObjectsToCSV(objects, keySeparator, lineSeparator), 'text/csv');
}
/**
 * Convert objects to JSON format and download to file with .json
 * extension appended to the provided base file name.
 *
 * @param {?} fileBaseName base name of destination file
 * @param {?} objects object array to be converted to JSON format
 *   prior to writing to download destination
 * @param {?=} indent optional parameter indicating space indentation for pretty output. Default is 2
 * @return {?}
 */
export function downloadObjectsToJSON(fileBaseName, objects, indent = 2) {
    downloadFile(`${fileBaseName}.json`, formatJSON(objects, indent), 'application/json');
}
/**
 * Download string content to the specified file with desired mime type.
 *
 * @param {?} fileName full filename (including appropriate extension) of destination file
 * @param {?} contents string contents to be written to download destination
 * @param {?=} mimeType mime type appropriate to file content to support consumption of destination file
 * @return {?}
 */
export function downloadFile(fileName, contents, mimeType = 'text/plain') {
    if (!fileName || !contents) {
        return;
    }
    // Create blob object and assign URL
    /** @type {?} */
    const blob = new Blob([contents], { type: mimeType });
    /** @type {?} */
    const url = window.URL.createObjectURL(blob);
    // Construct anchor for URL, append to DOM, click and cleanup.
    /** @type {?} */
    const a = document.createElement('a');
    a.setAttribute('style', 'display: none');
    a.setAttribute('download', fileName);
    a.href = url;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bmxvYWQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2NvcmUvY29tbW9uLyIsInNvdXJjZXMiOlsiZnVuY3Rpb25zL2Rvd25sb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFVBQVUsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7Ozs7Ozs7O0FBUzVELE1BQU0sVUFBVSxXQUFXLENBQUMsWUFBb0IsRUFBRSxHQUFXO0lBQzNELFlBQVksQ0FBQyxHQUFHLFlBQVksTUFBTSxFQUFFLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUN2RCxDQUFDOzs7Ozs7Ozs7OztBQVdELE1BQU0sVUFBVSxZQUFZLENBQUMsWUFBb0IsRUFBRSxJQUFZLEVBQUUsU0FBa0IsS0FBSyxFQUFFLFNBQWlCLENBQUM7SUFDMUcsWUFBWSxDQUFDLEdBQUcsWUFBWSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFDakgsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWFELE1BQU0sVUFBVSxvQkFBb0IsQ0FDbEMsWUFBb0IsRUFDcEIsT0FBYyxFQUNkLGVBQXVCLEdBQUcsRUFDMUIsZ0JBQXdCLE1BQU07SUFFOUIsWUFBWSxDQUFDLEdBQUcsWUFBWSxNQUFNLEVBQUUsbUJBQW1CLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUM3RyxDQUFDOzs7Ozs7Ozs7OztBQVdELE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxZQUFvQixFQUFFLE9BQWMsRUFBRSxTQUFpQixDQUFDO0lBQzVGLFlBQVksQ0FBQyxHQUFHLFlBQVksT0FBTyxFQUFFLFVBQVUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztBQUN4RixDQUFDOzs7Ozs7Ozs7QUFTRCxNQUFNLFVBQVUsWUFBWSxDQUFDLFFBQWdCLEVBQUUsUUFBZ0IsRUFBRSxXQUFtQixZQUFZO0lBQzlGLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDMUIsT0FBTztLQUNSOzs7VUFHSyxJQUFJLEdBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQzs7VUFDckQsR0FBRyxHQUFXLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQzs7O1VBRzlDLENBQUMsR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7SUFDeEQsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDekMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7SUFDYixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDVixNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QixNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNsQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29udmVydE9iamVjdHNUb0NTViwgZm9ybWF0SlNPTiB9IGZyb20gJy4vY29udmVydCc7XG5cbi8qKlxuICogRG93bmxvYWQgQ1NWIGNvbnRlbnQgdG8gdGhlIHNwZWNpZmllZCBmaWxlIHdpdGggLmNzdiBleHRlbnNpb25cbiAqIGFwcGVuZGVkIHRvIHRoZSBwcm92aWRlZCBiYXNlIGZpbGUgbmFtZS5cbiAqXG4gKiBAcGFyYW0gZmlsZUJhc2VOYW1lIGJhc2UgbmFtZSBvZiBkZXN0aW5hdGlvbiBmaWxlXG4gKiBAcGFyYW0gY3N2IENTViBjb250ZW50c1xuICovXG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWRDU1YoZmlsZUJhc2VOYW1lOiBzdHJpbmcsIGNzdjogc3RyaW5nKTogdm9pZCB7XG4gIGRvd25sb2FkRmlsZShgJHtmaWxlQmFzZU5hbWV9LmNzdmAsIGNzdiwgJ3RleHQvY3N2Jyk7XG59XG5cbi8qKlxuICogRG93bmxvYWQgSlNPTiBjb250ZW50IHRvIHRoZSBzcGVjaWZpZWQgZmlsZSB3aXRoIC5qc29uIGV4dGVuc2lvblxuICogYXBwZW5kZWQgdG8gdGhlIHByb3ZpZGVkIGJhc2UgZmlsZSBuYW1lLlxuICpcbiAqIEBwYXJhbSBmaWxlQmFzZU5hbWUgYmFzZSBuYW1lIG9mIGRlc3RpbmF0aW9uIGZpbGVcbiAqIEBwYXJhbSBqc29uIEpTT04gY29udGVudHNcbiAqIEBwYXJhbSBmb3JtYXQgaW5kaWNhdGVzIGlmIEpTT04gc2hvdWxkIGJlIHByZXR0aWVkXG4gKiBAcGFyYW0gaW5kZW50IG9wdGlvbmFsIHBhcmFtZXRlciBpbmRpY2F0aW5nIHNwYWNlIGluZGVudGF0aW9uIGZvciBwcmV0dHkgb3V0cHV0LiBEZWZhdWx0IGlzIDJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRvd25sb2FkSlNPTihmaWxlQmFzZU5hbWU6IHN0cmluZywganNvbjogc3RyaW5nLCBmb3JtYXQ6IGJvb2xlYW4gPSBmYWxzZSwgaW5kZW50OiBudW1iZXIgPSAyKTogdm9pZCB7XG4gIGRvd25sb2FkRmlsZShgJHtmaWxlQmFzZU5hbWV9Lmpzb25gLCBmb3JtYXQgPyBmb3JtYXRKU09OKEpTT04ucGFyc2UoanNvbiksIGluZGVudCkgOiBqc29uLCAnYXBwbGljYXRpb24vanNvbicpO1xufVxuXG4vKipcbiAqIENvbnZlcnQgb2JqZWN0cyB0byBDU1YgZm9ybWF0IGFuZCBkb3dubG9hZCB0byBmaWxlIHdpdGggLmNzdlxuICogZXh0ZW5zaW9uIGFwcGVuZGVkIHRvIHRoZSBwcm92aWRlZCBiYXNlIGZpbGUgbmFtZS4gQ3VzdG9tIGtleVxuICogc2VwYXJhdG9yIGFuZCBsaW5lIHNlcGFyYXRvciBjYW4gYmUgc3BlY2lmaWVkLlxuICpcbiAqIEBwYXJhbSBmaWxlQmFzZU5hbWUgYmFzZSBuYW1lIG9mIGRlc3RpbmF0aW9uIGZpbGVcbiAqIEBwYXJhbSBvYmplY3RzIG9iamVjdCBhcnJheSB0byBiZSBjb252ZXJ0ZWQgdG8gQ1NWIGZvcm1hdFxuICogICBwcmlvciB0byB3cml0aW5nIHRvIGRvd25sb2FkIGRlc3RpbmF0aW9uXG4gKiBAcGFyYW0ga2V5U2VwYXJhdG9yIG9wdGlvbmFsIHBhcmFtZXRlciB0byBzcGVjaWZ5IGN1c3RvbSB2YWx1ZSBzZXBhcmF0b3JcbiAqIEBwYXJhbSBsaW5lU2VwYXJhdG9yIG9wdGlvbmFsIHBhcmFtZXRlciB0byBzcGVjaWZ5IGN1c3RvbSBlbmQgb2YgbGluZSBzZXBhcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRvd25sb2FkT2JqZWN0c1RvQ1NWKFxuICBmaWxlQmFzZU5hbWU6IHN0cmluZyxcbiAgb2JqZWN0czogYW55W10sXG4gIGtleVNlcGFyYXRvcjogc3RyaW5nID0gJywnLFxuICBsaW5lU2VwYXJhdG9yOiBzdHJpbmcgPSAnXFxyXFxuJyxcbik6IHZvaWQge1xuICBkb3dubG9hZEZpbGUoYCR7ZmlsZUJhc2VOYW1lfS5jc3ZgLCBjb252ZXJ0T2JqZWN0c1RvQ1NWKG9iamVjdHMsIGtleVNlcGFyYXRvciwgbGluZVNlcGFyYXRvciksICd0ZXh0L2NzdicpO1xufVxuXG4vKipcbiAqIENvbnZlcnQgb2JqZWN0cyB0byBKU09OIGZvcm1hdCBhbmQgZG93bmxvYWQgdG8gZmlsZSB3aXRoIC5qc29uXG4gKiBleHRlbnNpb24gYXBwZW5kZWQgdG8gdGhlIHByb3ZpZGVkIGJhc2UgZmlsZSBuYW1lLlxuICpcbiAqIEBwYXJhbSBmaWxlQmFzZU5hbWUgYmFzZSBuYW1lIG9mIGRlc3RpbmF0aW9uIGZpbGVcbiAqIEBwYXJhbSBvYmplY3RzIG9iamVjdCBhcnJheSB0byBiZSBjb252ZXJ0ZWQgdG8gSlNPTiBmb3JtYXRcbiAqICAgcHJpb3IgdG8gd3JpdGluZyB0byBkb3dubG9hZCBkZXN0aW5hdGlvblxuICogQHBhcmFtIGluZGVudCBvcHRpb25hbCBwYXJhbWV0ZXIgaW5kaWNhdGluZyBzcGFjZSBpbmRlbnRhdGlvbiBmb3IgcHJldHR5IG91dHB1dC4gRGVmYXVsdCBpcyAyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZE9iamVjdHNUb0pTT04oZmlsZUJhc2VOYW1lOiBzdHJpbmcsIG9iamVjdHM6IGFueVtdLCBpbmRlbnQ6IG51bWJlciA9IDIpOiB2b2lkIHtcbiAgZG93bmxvYWRGaWxlKGAke2ZpbGVCYXNlTmFtZX0uanNvbmAsIGZvcm1hdEpTT04ob2JqZWN0cywgaW5kZW50KSwgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbn1cblxuLyoqXG4gKiBEb3dubG9hZCBzdHJpbmcgY29udGVudCB0byB0aGUgc3BlY2lmaWVkIGZpbGUgd2l0aCBkZXNpcmVkIG1pbWUgdHlwZS5cbiAqXG4gKiBAcGFyYW0gZmlsZU5hbWUgZnVsbCBmaWxlbmFtZSAoaW5jbHVkaW5nIGFwcHJvcHJpYXRlIGV4dGVuc2lvbikgb2YgZGVzdGluYXRpb24gZmlsZVxuICogQHBhcmFtIGNvbnRlbnRzIHN0cmluZyBjb250ZW50cyB0byBiZSB3cml0dGVuIHRvIGRvd25sb2FkIGRlc3RpbmF0aW9uXG4gKiBAcGFyYW0gbWltZVR5cGUgbWltZSB0eXBlIGFwcHJvcHJpYXRlIHRvIGZpbGUgY29udGVudCB0byBzdXBwb3J0IGNvbnN1bXB0aW9uIG9mIGRlc3RpbmF0aW9uIGZpbGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRvd25sb2FkRmlsZShmaWxlTmFtZTogc3RyaW5nLCBjb250ZW50czogc3RyaW5nLCBtaW1lVHlwZTogc3RyaW5nID0gJ3RleHQvcGxhaW4nKTogdm9pZCB7XG4gIGlmICghZmlsZU5hbWUgfHwgIWNvbnRlbnRzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gQ3JlYXRlIGJsb2Igb2JqZWN0IGFuZCBhc3NpZ24gVVJMXG4gIGNvbnN0IGJsb2I6IEJsb2IgPSBuZXcgQmxvYihbY29udGVudHNdLCB7IHR5cGU6IG1pbWVUeXBlIH0pO1xuICBjb25zdCB1cmw6IHN0cmluZyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG4gIC8vIENvbnN0cnVjdCBhbmNob3IgZm9yIFVSTCwgYXBwZW5kIHRvIERPTSwgY2xpY2sgYW5kIGNsZWFudXAuXG4gIGNvbnN0IGE6IEhUTUxBbmNob3JFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZScpO1xuICBhLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCBmaWxlTmFtZSk7XG4gIGEuaHJlZiA9IHVybDtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcbiAgYS5jbGljaygpO1xuICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpO1xuICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xufVxuIl19