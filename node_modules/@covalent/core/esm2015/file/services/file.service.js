/**
 * @fileoverview added by tsickle
 * Generated from: services/file.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
/**
 * @record
 */
export function IUploadExtras() { }
if (false) {
    /** @type {?|undefined} */
    IUploadExtras.prototype.headers;
    /** @type {?|undefined} */
    IUploadExtras.prototype.params;
}
export class TdFileService {
    /**
     * Creates a new instance
     * \@breaking-change 3.0.0 remove 'Optional' decorator once the legay upload method is removed
     * @param {?} _http the http client instance
     */
    constructor(_http) {
        this._http = _http;
        this._progressSubject = new Subject();
        this._progressObservable = this._progressSubject.asObservable();
    }
    /**
     * Gets progress observable to keep track of the files being uploaded.
     * Needs to be supported by backend.
     * @return {?}
     */
    get progress() {
        return this._progressObservable;
    }
    /**
     * Uploads a file to a URL.
     * @param {?} url
     * @param {?} method
     * @param {?} body
     * @param {?=} __3
     * @return {?}
     */
    send(url, method, body, { headers, params } = {}) {
        if (!this._http) {
            throw new Error('The HttpClient module needs to be imported at root module level');
        }
        /** @type {?} */
        const req = new HttpRequest(method.toUpperCase(), url, body, {
            reportProgress: true,
            headers: new HttpHeaders(headers || {}),
            params: new HttpParams({ fromObject: params || {} }),
        });
        return this._http.request(req).pipe(tap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.handleEvent(event))));
    }
    /**
     * @private
     * @template T
     * @param {?} event
     * @return {?}
     */
    handleEvent(event) {
        switch (event.type) {
            case HttpEventType.Sent:
                this._progressSubject.next(0);
                break;
            case HttpEventType.UploadProgress:
                this._progressSubject.next(Math.round((100 * event.loaded) / event.total));
                break;
            case HttpEventType.Response:
                this._progressSubject.next(100);
                break;
            default:
                break;
        }
    }
}
TdFileService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TdFileService.ctorParameters = () => [
    { type: HttpClient, decorators: [{ type: Optional }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdFileService.prototype._progressSubject;
    /**
     * @type {?}
     * @private
     */
    TdFileService.prototype._progressObservable;
    /**
     * @type {?}
     * @private
     */
    TdFileService.prototype._http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9wbGF0Zm9ybS9jb3JlL2ZpbGUvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9maWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBYSxhQUFhLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xILE9BQU8sRUFBYyxPQUFPLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRXJDLG1DQUdDOzs7SUFGQyxnQ0FBZ0Q7O0lBQ2hELCtCQUFnRDs7QUFJbEQsTUFBTSxPQUFPLGFBQWE7Ozs7OztJQWlCeEIsWUFBeUMsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQWhCbEQscUJBQWdCLEdBQW9CLElBQUksT0FBTyxFQUFVLENBQUM7UUFpQmhFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbEUsQ0FBQzs7Ozs7O0lBWEQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQzs7Ozs7Ozs7O0lBY0QsSUFBSSxDQUNGLEdBQVcsRUFDWCxNQUFjLEVBQ2QsSUFBcUIsRUFDckIsRUFBRSxPQUFPLEVBQUUsTUFBTSxLQUFvQixFQUFFO1FBRXZDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyxpRUFBaUUsQ0FBQyxDQUFDO1NBQ3BGOztjQUNLLEdBQUcsR0FBaUMsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7WUFDekYsY0FBYyxFQUFFLElBQUk7WUFDcEIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7WUFDdkMsTUFBTSxFQUFFLElBQUksVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sSUFBSSxFQUFFLEVBQUUsQ0FBQztTQUNyRCxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLENBQUMsS0FBcUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0YsQ0FBQzs7Ozs7OztJQUVPLFdBQVcsQ0FBVSxLQUFtQjtRQUM5QyxRQUFRLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDbEIsS0FBSyxhQUFhLENBQUMsSUFBSTtnQkFDckIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsTUFBTTtZQUNSLEtBQUssYUFBYSxDQUFDLGNBQWM7Z0JBQy9CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzNFLE1BQU07WUFDUixLQUFLLGFBQWEsQ0FBQyxRQUFRO2dCQUN6QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQyxNQUFNO1lBQ1I7Z0JBQ0UsTUFBTTtTQUNUO0lBQ0gsQ0FBQzs7O1lBeERGLFVBQVU7Ozs7WUFURixVQUFVLHVCQTJCSixRQUFROzs7Ozs7O0lBaEJyQix5Q0FBa0U7Ozs7O0lBQ2xFLDRDQUFnRDs7Ozs7SUFlcEMsOEJBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXF1ZXN0LCBIdHRwRXZlbnQsIEh0dHBFdmVudFR5cGUsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaWJlciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElVcGxvYWRFeHRyYXMge1xuICBoZWFkZXJzPzogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgcGFyYW1zPzogeyBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZEZpbGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfcHJvZ3Jlc3NTdWJqZWN0OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG4gIHByaXZhdGUgX3Byb2dyZXNzT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG4gIC8qKlxuICAgKiBHZXRzIHByb2dyZXNzIG9ic2VydmFibGUgdG8ga2VlcCB0cmFjayBvZiB0aGUgZmlsZXMgYmVpbmcgdXBsb2FkZWQuXG4gICAqIE5lZWRzIHRvIGJlIHN1cHBvcnRlZCBieSBiYWNrZW5kLlxuICAgKi9cbiAgZ2V0IHByb2dyZXNzKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzT2JzZXJ2YWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlXG4gICAqIEBwYXJhbSBfaHR0cCB0aGUgaHR0cCBjbGllbnQgaW5zdGFuY2VcbiAgICogQGJyZWFraW5nLWNoYW5nZSAzLjAuMCByZW1vdmUgJ09wdGlvbmFsJyBkZWNvcmF0b3Igb25jZSB0aGUgbGVnYXkgdXBsb2FkIG1ldGhvZCBpcyByZW1vdmVkXG4gICAqL1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIHJlYWRvbmx5IF9odHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgdGhpcy5fcHJvZ3Jlc3NPYnNlcnZhYmxlID0gdGhpcy5fcHJvZ3Jlc3NTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwbG9hZHMgYSBmaWxlIHRvIGEgVVJMLlxuICAgKi9cbiAgc2VuZChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBtZXRob2Q6IHN0cmluZyxcbiAgICBib2R5OiBGaWxlIHwgRm9ybURhdGEsXG4gICAgeyBoZWFkZXJzLCBwYXJhbXMgfTogSVVwbG9hZEV4dHJhcyA9IHt9LFxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgaWYgKCF0aGlzLl9odHRwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBIdHRwQ2xpZW50IG1vZHVsZSBuZWVkcyB0byBiZSBpbXBvcnRlZCBhdCByb290IG1vZHVsZSBsZXZlbCcpO1xuICAgIH1cbiAgICBjb25zdCByZXE6IEh0dHBSZXF1ZXN0PEZpbGUgfCBGb3JtRGF0YT4gPSBuZXcgSHR0cFJlcXVlc3QobWV0aG9kLnRvVXBwZXJDYXNlKCksIHVybCwgYm9keSwge1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHRydWUsXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoaGVhZGVycyB8fCB7fSksXG4gICAgICBwYXJhbXM6IG5ldyBIdHRwUGFyYW1zKHsgZnJvbU9iamVjdDogcGFyYW1zIHx8IHt9IH0pLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLl9odHRwLnJlcXVlc3QocmVxKS5waXBlKHRhcCgoZXZlbnQ6IEh0dHBFdmVudDxhbnk+KSA9PiB0aGlzLmhhbmRsZUV2ZW50KGV2ZW50KSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFdmVudDxUID0gYW55PihldmVudDogSHR0cEV2ZW50PFQ+KTogdm9pZCB7XG4gICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICBjYXNlIEh0dHBFdmVudFR5cGUuU2VudDpcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3NTdWJqZWN0Lm5leHQoMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBIdHRwRXZlbnRUeXBlLlVwbG9hZFByb2dyZXNzOlxuICAgICAgICB0aGlzLl9wcm9ncmVzc1N1YmplY3QubmV4dChNYXRoLnJvdW5kKCgxMDAgKiBldmVudC5sb2FkZWQpIC8gZXZlbnQudG90YWwpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEh0dHBFdmVudFR5cGUuUmVzcG9uc2U6XG4gICAgICAgIHRoaXMuX3Byb2dyZXNzU3ViamVjdC5uZXh0KDEwMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iXX0=