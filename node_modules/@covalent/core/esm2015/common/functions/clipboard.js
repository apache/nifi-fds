/**
 * @fileoverview added by tsickle
 * Generated from: functions/clipboard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Assign a text value to the system clipboard. Note: Due to browser
 * security restrictions, the copy will only succeed if this method
 * is invoked as a result of a user action (eg. user button click).
 *
 * @param {?} value text value to be assigned to clipboard.
 * @return {?} boolean indicating success/failure of copy operation.
 */
export function copyToClipboard(value) {
    // Create a temporary textarea element and append to DOM
    /** @type {?} */
    const fakeTextArea = document.createElement('textarea');
    document.body.appendChild(fakeTextArea);
    // Assign value to be copied to clipboard
    fakeTextArea.value = value;
    fakeTextArea.select();
    // Copy to clipboard
    /** @type {?} */
    const success = document.execCommand('copy');
    // Remove temporary textarea
    document.body.removeChild(fakeTextArea);
    // Return boolean indicating if exec command succeeded
    return success;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpcGJvYXJkLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9wbGF0Zm9ybS9jb3JlL2NvbW1vbi8iLCJzb3VyY2VzIjpbImZ1bmN0aW9ucy9jbGlwYm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE1BQU0sVUFBVSxlQUFlLENBQUMsS0FBYTs7O1VBRXJDLFlBQVksR0FBd0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7SUFDNUUsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFeEMseUNBQXlDO0lBQ3pDLFlBQVksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQzNCLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7O1VBR2hCLE9BQU8sR0FBWSxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztJQUVyRCw0QkFBNEI7SUFDNUIsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFeEMsc0RBQXNEO0lBQ3RELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFzc2lnbiBhIHRleHQgdmFsdWUgdG8gdGhlIHN5c3RlbSBjbGlwYm9hcmQuIE5vdGU6IER1ZSB0byBicm93c2VyXG4gKiBzZWN1cml0eSByZXN0cmljdGlvbnMsIHRoZSBjb3B5IHdpbGwgb25seSBzdWNjZWVkIGlmIHRoaXMgbWV0aG9kXG4gKiBpcyBpbnZva2VkIGFzIGEgcmVzdWx0IG9mIGEgdXNlciBhY3Rpb24gKGVnLiB1c2VyIGJ1dHRvbiBjbGljaykuXG4gKlxuICogQHBhcmFtIHZhbHVlIHRleHQgdmFsdWUgdG8gYmUgYXNzaWduZWQgdG8gY2xpcGJvYXJkLlxuICogQHJldHVybnMgYm9vbGVhbiBpbmRpY2F0aW5nIHN1Y2Nlc3MvZmFpbHVyZSBvZiBjb3B5IG9wZXJhdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHlUb0NsaXBib2FyZCh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIENyZWF0ZSBhIHRlbXBvcmFyeSB0ZXh0YXJlYSBlbGVtZW50IGFuZCBhcHBlbmQgdG8gRE9NXG4gIGNvbnN0IGZha2VUZXh0QXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZmFrZVRleHRBcmVhKTtcblxuICAvLyBBc3NpZ24gdmFsdWUgdG8gYmUgY29waWVkIHRvIGNsaXBib2FyZFxuICBmYWtlVGV4dEFyZWEudmFsdWUgPSB2YWx1ZTtcbiAgZmFrZVRleHRBcmVhLnNlbGVjdCgpO1xuXG4gIC8vIENvcHkgdG8gY2xpcGJvYXJkXG4gIGNvbnN0IHN1Y2Nlc3M6IGJvb2xlYW4gPSBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuXG4gIC8vIFJlbW92ZSB0ZW1wb3JhcnkgdGV4dGFyZWFcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChmYWtlVGV4dEFyZWEpO1xuXG4gIC8vIFJldHVybiBib29sZWFuIGluZGljYXRpbmcgaWYgZXhlYyBjb21tYW5kIHN1Y2NlZWRlZFxuICByZXR1cm4gc3VjY2Vzcztcbn1cbiJdfQ==