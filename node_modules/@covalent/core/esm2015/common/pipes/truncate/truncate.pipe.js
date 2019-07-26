/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1bmNhdGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsiY29tbW9uL3BpcGVzL3RydW5jYXRlL3RydW5jYXRlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBTXBELE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUFDekIsU0FBUyxDQUFDLElBQVMsRUFBRSxNQUFjO1FBQ2pDLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLE9BQU8sRUFBRSxDQUFDO1NBQ1g7OztZQUdHLFNBQVMsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7UUFFOUMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRTtZQUN4QixJQUFJLFNBQVMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNsQyxTQUFTLEdBQUcsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzlCO1lBRUQsU0FBUyxJQUFJLEdBQUcsQ0FBQztTQUNsQjtRQUVELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7OztZQXRCRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLFVBQVU7YUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3RydW5jYXRlJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBUZFRydW5jYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odGV4dDogYW55LCBsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiB0ZXh0ICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIC8vIFRydW5jYXRlXG4gICAgbGV0IHRydW5jYXRlZDogc3RyaW5nID0gdGV4dC5zdWJzdHIoMCwgbGVuZ3RoKTtcblxuICAgIGlmICh0ZXh0Lmxlbmd0aCA+IGxlbmd0aCkge1xuICAgICAgaWYgKHRydW5jYXRlZC5sYXN0SW5kZXhPZignICcpID4gMCkge1xuICAgICAgICB0cnVuY2F0ZWQgPSB0cnVuY2F0ZWQudHJpbSgpO1xuICAgICAgfVxuXG4gICAgICB0cnVuY2F0ZWQgKz0gJ+KApic7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydW5jYXRlZDtcbiAgfVxufVxuIl19