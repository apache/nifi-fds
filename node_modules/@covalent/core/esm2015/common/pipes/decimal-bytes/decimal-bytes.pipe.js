/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class TdDecimalBytesPipe {
    /* `bytes` needs to be `any` or TypeScript complains
      Tried both `number` and `number | string` */
    /**
     * @param {?} bytes
     * @param {?=} precision
     * @return {?}
     */
    transform(bytes, precision = 2) {
        if (bytes === 0) {
            return '0 B';
        }
        else if (isNaN(parseInt(bytes, 10))) {
            /* If not a valid number, return 'Invalid Number' */
            return 'Invalid Number';
        }
        /** @type {?} */
        let k = 1000;
        /** @type {?} */
        let sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        /** @type {?} */
        let i = Math.floor(Math.log(bytes) / Math.log(k));
        // if less than 1
        if (i < 0) {
            return 'Invalid Number';
        }
        return parseFloat((bytes / Math.pow(k, i)).toFixed(precision)) + ' ' + sizes[i];
    }
}
TdDecimalBytesPipe.decorators = [
    { type: Pipe, args: [{
                name: 'decimalBytes',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjaW1hbC1ieXRlcy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJjb21tb24vcGlwZXMvZGVjaW1hbC1ieXRlcy9kZWNpbWFsLWJ5dGVzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBTXBELE1BQU0sT0FBTyxrQkFBa0I7Ozs7Ozs7O0lBRzdCLFNBQVMsQ0FBQyxLQUFVLEVBQUUsWUFBb0IsQ0FBQztRQUN6QyxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDZixPQUFPLEtBQUssQ0FBQztTQUNkO2FBQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ3JDLG9EQUFvRDtZQUNwRCxPQUFPLGdCQUFnQixDQUFDO1NBQ3pCOztZQUNHLENBQUMsR0FBVyxJQUFJOztZQUNoQixLQUFLLEdBQWEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQzs7WUFDdkUsQ0FBQyxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELGlCQUFpQjtRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDVCxPQUFPLGdCQUFnQixDQUFDO1NBQ3pCO1FBQ0QsT0FBTyxVQUFVLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7OztZQXRCRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLGNBQWM7YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2RlY2ltYWxCeXRlcycsXG59KVxuXG5leHBvcnQgY2xhc3MgVGREZWNpbWFsQnl0ZXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIC8qIGBieXRlc2AgbmVlZHMgdG8gYmUgYGFueWAgb3IgVHlwZVNjcmlwdCBjb21wbGFpbnNcbiAgVHJpZWQgYm90aCBgbnVtYmVyYCBhbmQgYG51bWJlciB8IHN0cmluZ2AgKi9cbiAgdHJhbnNmb3JtKGJ5dGVzOiBhbnksIHByZWNpc2lvbjogbnVtYmVyID0gMik6IHN0cmluZyB7XG4gICAgaWYgKGJ5dGVzID09PSAwKSB7XG4gICAgICByZXR1cm4gJzAgQic7XG4gICAgfSBlbHNlIGlmIChpc05hTihwYXJzZUludChieXRlcywgMTApKSkge1xuICAgICAgLyogSWYgbm90IGEgdmFsaWQgbnVtYmVyLCByZXR1cm4gJ0ludmFsaWQgTnVtYmVyJyAqL1xuICAgICAgcmV0dXJuICdJbnZhbGlkIE51bWJlcic7XG4gICAgfVxuICAgIGxldCBrOiBudW1iZXIgPSAxMDAwO1xuICAgIGxldCBzaXplczogc3RyaW5nW10gPSBbJ0InLCAnS0InLCAnTUInLCAnR0InLCAnVEInLCAnUEInLCAnRUInLCAnWkInLCAnWUInXTtcbiAgICBsZXQgaTogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZyhrKSk7XG4gICAgLy8gaWYgbGVzcyB0aGFuIDFcbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIHJldHVybiAnSW52YWxpZCBOdW1iZXInO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VGbG9hdCgoYnl0ZXMgLyBNYXRoLnBvdyhrLCBpKSkudG9GaXhlZChwcmVjaXNpb24pKSArICcgJyArIHNpemVzW2ldO1xuICB9XG59XG4iXX0=