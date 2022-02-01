/**
 * @fileoverview added by tsickle
 * Generated from: functions/file.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Read file as UTF-8 text. Return string contents on read completion.
 *
 * @param {?} file filename or File object
 * @return {?} promise that resolves to file content string
 */
export function readFile(file) {
    return new Promise((/**
     * @param {?} resolve
     * @return {?}
     */
    (resolve) => {
        /** @type {?} */
        const reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        reader.onload = (/**
         * @return {?}
         */
        () => {
            resolve((/** @type {?} */ (reader.result)));
        });
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vY29yZS9jb21tb24vIiwic291cmNlcyI6WyJmdW5jdGlvbnMvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQU1BLE1BQU0sVUFBVSxRQUFRLENBQUMsSUFBVTtJQUNqQyxPQUFPLElBQUksT0FBTzs7OztJQUFTLENBQUMsT0FBZ0MsRUFBRSxFQUFFOztjQUN4RCxNQUFNLEdBQWUsSUFBSSxVQUFVLEVBQUU7UUFDM0MsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFDLE1BQU07OztRQUFHLEdBQUcsRUFBRTtZQUNuQixPQUFPLENBQUMsbUJBQVEsTUFBTSxDQUFDLE1BQU0sRUFBQSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFBLENBQUM7SUFDSixDQUFDLEVBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlYWQgZmlsZSBhcyBVVEYtOCB0ZXh0LiBSZXR1cm4gc3RyaW5nIGNvbnRlbnRzIG9uIHJlYWQgY29tcGxldGlvbi5cbiAqXG4gKiBAcGFyYW0gZmlsZSBmaWxlbmFtZSBvciBGaWxlIG9iamVjdFxuICogQHJldHVybnMgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGZpbGUgY29udGVudCBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlYWRGaWxlKGZpbGU6IEZpbGUpOiBQcm9taXNlPHN0cmluZz4ge1xuICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQpID0+IHtcbiAgICBjb25zdCByZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUsICdVVEYtOCcpO1xuICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKDxzdHJpbmc+cmVhZGVyLnJlc3VsdCk7XG4gICAgfTtcbiAgfSk7XG59XG4iXX0=