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
var TdFileService = /** @class */ (function () {
    function TdFileService() {
        this._progressSubject = new Subject();
        this._progressObservable = this._progressSubject.asObservable();
    }
    Object.defineProperty(TdFileService.prototype, "progress", {
        /**
         * Gets progress observable to keep track of the files being uploaded.
         * Needs to be supported by backend.
         */
        get: /**
         * Gets progress observable to keep track of the files being uploaded.
         * Needs to be supported by backend.
         * @return {?}
         */
        function () {
            return this._progressObservable;
        },
        enumerable: true,
        configurable: true
    });
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
     */
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
    TdFileService.prototype.upload = /**
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
    function (options) {
        var _this = this;
        return new Observable(function (subscriber) {
            /** @type {?} */
            var xhr = new XMLHttpRequest();
            /** @type {?} */
            var formData = new FormData();
            if (options.file !== undefined) {
                formData.append('file', options.file);
            }
            else if (options.formData !== undefined) {
                formData = options.formData;
            }
            else {
                return subscriber.error('For [IUploadOptions] you have to set either the [file] or the [formData] property.');
            }
            xhr.upload.onprogress = function (event) {
                /** @type {?} */
                var progress = 0;
                if (event.lengthComputable) {
                    progress = Math.round(event.loaded / event.total * 100);
                }
                _this._progressSubject.next(progress);
            };
            xhr.onreadystatechange = function () {
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
                for (var key in options.headers) {
                    xhr.setRequestHeader(key, options.headers[key]);
                }
            }
            xhr.send(formData);
        });
    };
    TdFileService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TdFileService.ctorParameters = function () { return []; };
    return TdFileService;
}());
export { TdFileService };
if (false) {
    /** @type {?} */
    TdFileService.prototype._progressSubject;
    /** @type {?} */
    TdFileService.prototype._progressObservable;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvZmlsZS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBYyxNQUFNLE1BQU0sQ0FBQzs7OztBQUV2RCxvQ0FNQzs7O0lBTEMsNkJBQVk7O0lBQ1osZ0NBQXVCOztJQUN2Qiw4QkFBWTs7SUFDWixpQ0FBa0M7O0lBQ2xDLGtDQUFvQjs7QUFHdEI7SUFjRTtRQVhRLHFCQUFnQixHQUFvQixJQUFJLE9BQU8sRUFBVSxDQUFDO1FBWWhFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbEUsQ0FBQztJQU5ELHNCQUFJLG1DQUFRO1FBSlo7OztXQUdHOzs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBTUQ7Ozs7Ozs7Ozs7OztPQVlHOzs7Ozs7Ozs7Ozs7Ozs7O0lBQ0gsOEJBQU07Ozs7Ozs7Ozs7Ozs7OztJQUFOLFVBQU8sT0FBdUI7UUFBOUIsaUJBMENDO1FBekNDLE9BQU8sSUFBSSxVQUFVLENBQU0sVUFBQyxVQUEyQjs7Z0JBQ2pELEdBQUcsR0FBbUIsSUFBSSxjQUFjLEVBQUU7O2dCQUMxQyxRQUFRLEdBQWEsSUFBSSxRQUFRLEVBQUU7WUFFdkMsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtnQkFDOUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3ZDO2lCQUFNLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7Z0JBQ3pDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO2FBQzdCO2lCQUFNO2dCQUNMLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxvRkFBb0YsQ0FBQyxDQUFDO2FBQy9HO1lBRUQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsVUFBQyxLQUFvQjs7b0JBQ3ZDLFFBQVEsR0FBVyxDQUFDO2dCQUN4QixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDMUIsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2lCQUN6RDtnQkFDRCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQztZQUVGLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRztnQkFDdkIsSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTtvQkFDeEIsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTt3QkFDekMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQzlCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFDdkI7eUJBQU07d0JBQ0wsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQ2hDO2lCQUNGO1lBQ0gsQ0FBQyxDQUFDO1lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDNUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDM0QsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO2dCQUNuQixLQUFLLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7b0JBQy9CLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUNqRDthQUNGO1lBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXpFRixVQUFVOzs7O0lBMEVYLG9CQUFDO0NBQUEsQUExRUQsSUEwRUM7U0F6RVksYUFBYTs7O0lBRXhCLHlDQUFrRTs7SUFDbEUsNENBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaWJlciB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElVcGxvYWRPcHRpb25zIHtcbiAgdXJsOiBzdHJpbmc7XG4gIG1ldGhvZDogJ3Bvc3QnIHwgJ3B1dCc7XG4gIGZpbGU/OiBGaWxlO1xuICBoZWFkZXJzPzoge1trZXk6IHN0cmluZ106IHN0cmluZ307XG4gIGZvcm1EYXRhPzogRm9ybURhdGE7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZEZpbGVTZXJ2aWNlIHtcblxuICBwcml2YXRlIF9wcm9ncmVzc1N1YmplY3Q6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcbiAgcHJpdmF0ZSBfcHJvZ3Jlc3NPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cbiAgLyoqXG4gICAqIEdldHMgcHJvZ3Jlc3Mgb2JzZXJ2YWJsZSB0byBrZWVwIHRyYWNrIG9mIHRoZSBmaWxlcyBiZWluZyB1cGxvYWRlZC5cbiAgICogTmVlZHMgdG8gYmUgc3VwcG9ydGVkIGJ5IGJhY2tlbmQuXG4gICAqL1xuICBnZXQgcHJvZ3Jlc3MoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5fcHJvZ3Jlc3NPYnNlcnZhYmxlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fcHJvZ3Jlc3NPYnNlcnZhYmxlID0gdGhpcy5fcHJvZ3Jlc3NTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBvcHRpb25zOiBJVXBsb2FkT3B0aW9ucyB7XG4gICAqICAgICB1cmw6IHN0cmluZyxcbiAgICogICAgIG1ldGhvZDogJ3Bvc3QnIHwgJ3B1dCcsXG4gICAqICAgICBmaWxlPzogRmlsZSxcbiAgICogICAgIGhlYWRlcnM/OiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSxcbiAgICogICAgIGZvcm1EYXRhPzogRm9ybURhdGFcbiAgICogfVxuICAgKlxuICAgKiBVc2VzIHVuZGVybHlpbmcgW1hNTEh0dHBSZXF1ZXN0XSB0byB1cGxvYWQgYSBmaWxlIHRvIGEgdXJsLlxuICAgKiBXaWxsIGJlIGRlcHJpY2F0ZWQgd2hlbiBBbmd1bGFyIGZpeGVzIFtIdHRwXSB0byBhbGxvdyBbRm9ybURhdGFdIGFzIGJvZHkuXG4gICAqL1xuICB1cGxvYWQob3B0aW9uczogSVVwbG9hZE9wdGlvbnMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxhbnk+KChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4pID0+IHtcbiAgICAgIGxldCB4aHI6IFhNTEh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICBsZXQgZm9ybURhdGE6IEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgIGlmIChvcHRpb25zLmZpbGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBvcHRpb25zLmZpbGUpO1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLmZvcm1EYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZm9ybURhdGEgPSBvcHRpb25zLmZvcm1EYXRhO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZXIuZXJyb3IoJ0ZvciBbSVVwbG9hZE9wdGlvbnNdIHlvdSBoYXZlIHRvIHNldCBlaXRoZXIgdGhlIFtmaWxlXSBvciB0aGUgW2Zvcm1EYXRhXSBwcm9wZXJ0eS4nKTtcbiAgICAgIH1cblxuICAgICAgeGhyLnVwbG9hZC5vbnByb2dyZXNzID0gKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB7XG4gICAgICAgIGxldCBwcm9ncmVzczogbnVtYmVyID0gMDtcbiAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICBwcm9ncmVzcyA9IE1hdGgucm91bmQoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwgKiAxMDApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Byb2dyZXNzU3ViamVjdC5uZXh0KHByb2dyZXNzKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgIGlmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcih4aHIucmVzcG9uc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIG9wdGlvbnMudXJsLCB0cnVlKTtcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XG4gICAgICBpZiAob3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIG9wdGlvbnMuaGVhZGVyc1trZXldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB4aHIuc2VuZChmb3JtRGF0YSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==