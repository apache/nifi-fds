/**
 * Assign a text value to the system clipboard. Note: Due to browser
 * security restrictions, the copy will only succeed if this method
 * is invoked as a result of a user action (eg. user button click).
 *
 * @param value text value to be assigned to clipboard.
 * @returns boolean indicating success/failure of copy operation.
 */
export declare function copyToClipboard(value: string): boolean;
