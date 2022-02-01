/**
 * @fileoverview added by tsickle
 * Generated from: pipes/truncate/truncate.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class TdTruncatePipe {
    /**
     * @param {?} text
     * @param {?} length
     * @return {?}
     */
    transform(text, length) {
        if (typeof text !== 'string') {
            return '';
        }
        // Truncate
        /** @type {?} */
        let truncated = text.substr(0, length);
        if (text.length > length) {
            if (truncated.lastIndexOf(' ') > 0) {
                truncated = truncated.trim();
            }
            truncated += '…';
        }
        return truncated;
    }
}
TdTruncatePipe.decorators = [
    { type: Pipe, args: [{
                name: 'truncate',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1bmNhdGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vY29yZS9jb21tb24vIiwic291cmNlcyI6WyJwaXBlcy90cnVuY2F0ZS90cnVuY2F0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFLcEQsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQUN6QixTQUFTLENBQUMsSUFBUyxFQUFFLE1BQWM7UUFDakMsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDNUIsT0FBTyxFQUFFLENBQUM7U0FDWDs7O1lBR0csU0FBUyxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQztRQUU5QyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFFO1lBQ3hCLElBQUksU0FBUyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2xDLFNBQVMsR0FBRyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDOUI7WUFFRCxTQUFTLElBQUksR0FBRyxDQUFDO1NBQ2xCO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7O1lBckJGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsVUFBVTthQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAndHJ1bmNhdGUnLFxufSlcbmV4cG9ydCBjbGFzcyBUZFRydW5jYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odGV4dDogYW55LCBsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiB0ZXh0ICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIC8vIFRydW5jYXRlXG4gICAgbGV0IHRydW5jYXRlZDogc3RyaW5nID0gdGV4dC5zdWJzdHIoMCwgbGVuZ3RoKTtcblxuICAgIGlmICh0ZXh0Lmxlbmd0aCA+IGxlbmd0aCkge1xuICAgICAgaWYgKHRydW5jYXRlZC5sYXN0SW5kZXhPZignICcpID4gMCkge1xuICAgICAgICB0cnVuY2F0ZWQgPSB0cnVuY2F0ZWQudHJpbSgpO1xuICAgICAgfVxuXG4gICAgICB0cnVuY2F0ZWQgKz0gJ+KApic7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydW5jYXRlZDtcbiAgfVxufVxuIl19