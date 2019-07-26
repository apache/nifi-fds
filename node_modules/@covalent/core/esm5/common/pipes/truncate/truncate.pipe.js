/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var TdTruncatePipe = /** @class */ (function () {
    function TdTruncatePipe() {
    }
    /**
     * @param {?} text
     * @param {?} length
     * @return {?}
     */
    TdTruncatePipe.prototype.transform = /**
     * @param {?} text
     * @param {?} length
     * @return {?}
     */
    function (text, length) {
        if (typeof text !== 'string') {
            return '';
        }
        // Truncate
        /** @type {?} */
        var truncated = text.substr(0, length);
        if (text.length > length) {
            if (truncated.lastIndexOf(' ') > 0) {
                truncated = truncated.trim();
            }
            truncated += '…';
        }
        return truncated;
    };
    TdTruncatePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'truncate',
                },] }
    ];
    return TdTruncatePipe;
}());
export { TdTruncatePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1bmNhdGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsiY29tbW9uL3BpcGVzL3RydW5jYXRlL3RydW5jYXRlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBQUE7SUF1QkEsQ0FBQzs7Ozs7O0lBbEJDLGtDQUFTOzs7OztJQUFULFVBQVUsSUFBUyxFQUFFLE1BQWM7UUFDakMsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDNUIsT0FBTyxFQUFFLENBQUM7U0FDWDs7O1lBR0csU0FBUyxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQztRQUU5QyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFFO1lBQ3hCLElBQUksU0FBUyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2xDLFNBQVMsR0FBRyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDOUI7WUFFRCxTQUFTLElBQUksR0FBRyxDQUFDO1NBQ2xCO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Z0JBdEJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsVUFBVTtpQkFDakI7O0lBcUJELHFCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FuQlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAndHJ1bmNhdGUnLFxufSlcblxuZXhwb3J0IGNsYXNzIFRkVHJ1bmNhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh0ZXh0OiBhbnksIGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBpZiAodHlwZW9mIHRleHQgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgLy8gVHJ1bmNhdGVcbiAgICBsZXQgdHJ1bmNhdGVkOiBzdHJpbmcgPSB0ZXh0LnN1YnN0cigwLCBsZW5ndGgpO1xuXG4gICAgaWYgKHRleHQubGVuZ3RoID4gbGVuZ3RoKSB7XG4gICAgICBpZiAodHJ1bmNhdGVkLmxhc3RJbmRleE9mKCcgJykgPiAwKSB7XG4gICAgICAgIHRydW5jYXRlZCA9IHRydW5jYXRlZC50cmltKCk7XG4gICAgICB9XG5cbiAgICAgIHRydW5jYXRlZCArPSAn4oCmJztcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1bmNhdGVkO1xuICB9XG59XG4iXX0=