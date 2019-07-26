/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
/**
 * @record
 */
export function IUploadOptions() { }
if (false) {
    /** @type {?} */
    IUploadOptions.prototype.url;
    /** @type {?} */
    IUploadOptions.prototype.method;
    /** @type {?|undefined} */
    IUploadOptions.prototype.file;
    /** @type {?|undefined} */
    IUploadOptions.prototype.headers;
    /** @type {?|undefined} */
    IUploadOptions.prototype.formData;
}
export class TdFileService {
    constructor() {
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
     * params:
     * - options: IUploadOptions {
     *     url: string,
     *     method: 'post' | 'put',
     *     file?: File,
     *     headers?: {[key: string]: string},
     *     formData?: FormData
     * }
     *
     * Uses underlying [XMLHttpRequest] to upload a file to a url.
     * Will be depricated when Angular fixes [Http] to allow [FormData] as body.
     * @param {?} options
     * @return {?}
     */
    upload(options) {
        return new Observable((subscriber) => {
            /** @type {?} */
            let xhr = new XMLHttpRequest();
            /** @type {?} */
            let formData = new FormData();
            if (options.file !== undefined) {
                formData.append('file', options.file);
            }
            else if (options.formData !== undefined) {
                formData = options.formData;
            }
            else {
                return subscriber.error('For [IUploadOptions] you have to set either the [file] or the [formData] property.');
            }
            xhr.upload.onprogress = (event) => {
                /** @type {?} */
                let progress = 0;
                if (event.lengthComputable) {
                    progress = Math.round(event.loaded / event.total * 100);
                }
                this._progressSubject.next(progress);
            };
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        subscriber.next(xhr.response);
                        subscriber.complete();
                    }
                    else {
                        subscriber.error(xhr.response);
                    }
                }
            };
            xhr.open(options.method, options.url, true);
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            if (options.headers) {
                for (let key in options.headers) {
                    xhr.setRequestHeader(key, options.headers[key]);
                }
            }
            xhr.send(formData);
        });
    }
}
TdFileService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TdFileService.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    TdFileService.prototype._progressSubject;
    /** @type {?} */
    TdFileService.prototype._progressObservable;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvZmlsZS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBYyxNQUFNLE1BQU0sQ0FBQzs7OztBQUV2RCxvQ0FNQzs7O0lBTEMsNkJBQVk7O0lBQ1osZ0NBQXVCOztJQUN2Qiw4QkFBWTs7SUFDWixpQ0FBa0M7O0lBQ2xDLGtDQUFvQjs7QUFJdEIsTUFBTSxPQUFPLGFBQWE7SUFheEI7UUFYUSxxQkFBZ0IsR0FBb0IsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQVloRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2xFLENBQUM7Ozs7OztJQU5ELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ2xDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUFtQkQsTUFBTSxDQUFDLE9BQXVCO1FBQzVCLE9BQU8sSUFBSSxVQUFVLENBQU0sQ0FBQyxVQUEyQixFQUFFLEVBQUU7O2dCQUNyRCxHQUFHLEdBQW1CLElBQUksY0FBYyxFQUFFOztnQkFDMUMsUUFBUSxHQUFhLElBQUksUUFBUSxFQUFFO1lBRXZDLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7Z0JBQzlCLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2QztpQkFBTSxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFO2dCQUN6QyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQzthQUM3QjtpQkFBTTtnQkFDTCxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsb0ZBQW9GLENBQUMsQ0FBQzthQUMvRztZQUVELEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsS0FBb0IsRUFBRSxFQUFFOztvQkFDM0MsUUFBUSxHQUFXLENBQUM7Z0JBQ3hCLElBQUksS0FBSyxDQUFDLGdCQUFnQixFQUFFO29CQUMxQixRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7aUJBQ3pEO2dCQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkMsQ0FBQyxDQUFDO1lBRUYsR0FBRyxDQUFDLGtCQUFrQixHQUFHLEdBQUcsRUFBRTtnQkFDNUIsSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTtvQkFDeEIsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTt3QkFDekMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQzlCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFDdkI7eUJBQU07d0JBQ0wsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQ2hDO2lCQUNGO1lBQ0gsQ0FBQyxDQUFDO1lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDNUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDM0QsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO2dCQUNuQixLQUFLLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7b0JBQy9CLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUNqRDthQUNGO1lBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQXpFRixVQUFVOzs7Ozs7SUFHVCx5Q0FBa0U7O0lBQ2xFLDRDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmliZXIgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJVXBsb2FkT3B0aW9ucyB7XG4gIHVybDogc3RyaW5nO1xuICBtZXRob2Q6ICdwb3N0JyB8ICdwdXQnO1xuICBmaWxlPzogRmlsZTtcbiAgaGVhZGVycz86IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9O1xuICBmb3JtRGF0YT86IEZvcm1EYXRhO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGRGaWxlU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfcHJvZ3Jlc3NTdWJqZWN0OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG4gIHByaXZhdGUgX3Byb2dyZXNzT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG4gIC8qKlxuICAgKiBHZXRzIHByb2dyZXNzIG9ic2VydmFibGUgdG8ga2VlcCB0cmFjayBvZiB0aGUgZmlsZXMgYmVpbmcgdXBsb2FkZWQuXG4gICAqIE5lZWRzIHRvIGJlIHN1cHBvcnRlZCBieSBiYWNrZW5kLlxuICAgKi9cbiAgZ2V0IHByb2dyZXNzKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzT2JzZXJ2YWJsZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3Byb2dyZXNzT2JzZXJ2YWJsZSA9IHRoaXMuX3Byb2dyZXNzU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gb3B0aW9uczogSVVwbG9hZE9wdGlvbnMge1xuICAgKiAgICAgdXJsOiBzdHJpbmcsXG4gICAqICAgICBtZXRob2Q6ICdwb3N0JyB8ICdwdXQnLFxuICAgKiAgICAgZmlsZT86IEZpbGUsXG4gICAqICAgICBoZWFkZXJzPzoge1trZXk6IHN0cmluZ106IHN0cmluZ30sXG4gICAqICAgICBmb3JtRGF0YT86IEZvcm1EYXRhXG4gICAqIH1cbiAgICpcbiAgICogVXNlcyB1bmRlcmx5aW5nIFtYTUxIdHRwUmVxdWVzdF0gdG8gdXBsb2FkIGEgZmlsZSB0byBhIHVybC5cbiAgICogV2lsbCBiZSBkZXByaWNhdGVkIHdoZW4gQW5ndWxhciBmaXhlcyBbSHR0cF0gdG8gYWxsb3cgW0Zvcm1EYXRhXSBhcyBib2R5LlxuICAgKi9cbiAgdXBsb2FkKG9wdGlvbnM6IElVcGxvYWRPcHRpb25zKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8YW55Pigoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+KSA9PiB7XG4gICAgICBsZXQgeGhyOiBYTUxIdHRwUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgbGV0IGZvcm1EYXRhOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICBpZiAob3B0aW9ucy5maWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgb3B0aW9ucy5maWxlKTtcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5mb3JtRGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZvcm1EYXRhID0gb3B0aW9ucy5mb3JtRGF0YTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVyLmVycm9yKCdGb3IgW0lVcGxvYWRPcHRpb25zXSB5b3UgaGF2ZSB0byBzZXQgZWl0aGVyIHRoZSBbZmlsZV0gb3IgdGhlIFtmb3JtRGF0YV0gcHJvcGVydHkuJyk7XG4gICAgICB9XG5cbiAgICAgIHhoci51cGxvYWQub25wcm9ncmVzcyA9IChldmVudDogUHJvZ3Jlc3NFdmVudCkgPT4ge1xuICAgICAgICBsZXQgcHJvZ3Jlc3M6IG51bWJlciA9IDA7XG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgcHJvZ3Jlc3MgPSBNYXRoLnJvdW5kKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsICogMTAwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wcm9ncmVzc1N1YmplY3QubmV4dChwcm9ncmVzcyk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLnVybCwgdHJ1ZSk7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignWC1SZXF1ZXN0ZWQtV2l0aCcsICdYTUxIdHRwUmVxdWVzdCcpO1xuICAgICAgaWYgKG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCBvcHRpb25zLmhlYWRlcnNba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=