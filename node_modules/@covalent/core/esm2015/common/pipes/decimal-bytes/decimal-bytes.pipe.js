/**
 * @fileoverview added by tsickle
 * Generated from: pipes/decimal-bytes/decimal-bytes.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        const k = 1000;
        /** @type {?} */
        const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        /** @type {?} */
        const i = Math.floor(Math.log(bytes) / Math.log(k));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjaW1hbC1ieXRlcy5waXBlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9wbGF0Zm9ybS9jb3JlL2NvbW1vbi8iLCJzb3VyY2VzIjpbInBpcGVzL2RlY2ltYWwtYnl0ZXMvZGVjaW1hbC1ieXRlcy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFLcEQsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7Ozs7SUFHN0IsU0FBUyxDQUFDLEtBQVUsRUFBRSxZQUFvQixDQUFDO1FBQ3pDLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtZQUNmLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7YUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDckMsb0RBQW9EO1lBQ3BELE9BQU8sZ0JBQWdCLENBQUM7U0FDekI7O2NBQ0ssQ0FBQyxHQUFXLElBQUk7O2NBQ2hCLEtBQUssR0FBYSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDOztjQUN2RSxDQUFDLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNULE9BQU8sZ0JBQWdCLENBQUM7U0FDekI7UUFDRCxPQUFPLFVBQVUsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQzs7O1lBckJGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsY0FBYzthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnZGVjaW1hbEJ5dGVzJyxcbn0pXG5leHBvcnQgY2xhc3MgVGREZWNpbWFsQnl0ZXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIC8qIGBieXRlc2AgbmVlZHMgdG8gYmUgYGFueWAgb3IgVHlwZVNjcmlwdCBjb21wbGFpbnNcbiAgVHJpZWQgYm90aCBgbnVtYmVyYCBhbmQgYG51bWJlciB8IHN0cmluZ2AgKi9cbiAgdHJhbnNmb3JtKGJ5dGVzOiBhbnksIHByZWNpc2lvbjogbnVtYmVyID0gMik6IHN0cmluZyB7XG4gICAgaWYgKGJ5dGVzID09PSAwKSB7XG4gICAgICByZXR1cm4gJzAgQic7XG4gICAgfSBlbHNlIGlmIChpc05hTihwYXJzZUludChieXRlcywgMTApKSkge1xuICAgICAgLyogSWYgbm90IGEgdmFsaWQgbnVtYmVyLCByZXR1cm4gJ0ludmFsaWQgTnVtYmVyJyAqL1xuICAgICAgcmV0dXJuICdJbnZhbGlkIE51bWJlcic7XG4gICAgfVxuICAgIGNvbnN0IGs6IG51bWJlciA9IDEwMDA7XG4gICAgY29uc3Qgc2l6ZXM6IHN0cmluZ1tdID0gWydCJywgJ0tCJywgJ01CJywgJ0dCJywgJ1RCJywgJ1BCJywgJ0VCJywgJ1pCJywgJ1lCJ107XG4gICAgY29uc3QgaTogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZyhrKSk7XG4gICAgLy8gaWYgbGVzcyB0aGFuIDFcbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIHJldHVybiAnSW52YWxpZCBOdW1iZXInO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VGbG9hdCgoYnl0ZXMgLyBNYXRoLnBvdyhrLCBpKSkudG9GaXhlZChwcmVjaXNpb24pKSArICcgJyArIHNpemVzW2ldO1xuICB9XG59XG4iXX0=