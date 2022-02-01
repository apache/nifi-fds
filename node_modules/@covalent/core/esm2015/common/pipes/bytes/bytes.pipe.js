/**
 * @fileoverview added by tsickle
 * Generated from: pipes/bytes/bytes.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class TdBytesPipe {
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
        const k = 1024;
        /** @type {?} */
        const sizes = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
        /** @type {?} */
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        // if less than 1
        if (i < 0) {
            return 'Invalid Number';
        }
        return parseFloat((bytes / Math.pow(k, i)).toFixed(precision)) + ' ' + sizes[i];
    }
}
TdBytesPipe.decorators = [
    { type: Pipe, args: [{
                name: 'bytes',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnl0ZXMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vY29yZS9jb21tb24vIiwic291cmNlcyI6WyJwaXBlcy9ieXRlcy9ieXRlcy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFLcEQsTUFBTSxPQUFPLFdBQVc7Ozs7Ozs7O0lBR3RCLFNBQVMsQ0FBQyxLQUFVLEVBQUUsWUFBb0IsQ0FBQztRQUN6QyxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDZixPQUFPLEtBQUssQ0FBQztTQUNkO2FBQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ3JDLG9EQUFvRDtZQUNwRCxPQUFPLGdCQUFnQixDQUFDO1NBQ3pCOztjQUNLLENBQUMsR0FBVyxJQUFJOztjQUNoQixLQUFLLEdBQWEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQzs7Y0FDL0UsQ0FBQyxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNELGlCQUFpQjtRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDVCxPQUFPLGdCQUFnQixDQUFDO1NBQ3pCO1FBQ0QsT0FBTyxVQUFVLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7OztZQXJCRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLE9BQU87YUFDZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnYnl0ZXMnLFxufSlcbmV4cG9ydCBjbGFzcyBUZEJ5dGVzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAvKiBgYnl0ZXNgIG5lZWRzIHRvIGJlIGBhbnlgIG9yIFR5cGVTY3JpcHQgY29tcGxhaW5zXG4gIFRyaWVkIGJvdGggYG51bWJlcmAgYW5kIGBudW1iZXIgfCBzdHJpbmdgICovXG4gIHRyYW5zZm9ybShieXRlczogYW55LCBwcmVjaXNpb246IG51bWJlciA9IDIpOiBzdHJpbmcge1xuICAgIGlmIChieXRlcyA9PT0gMCkge1xuICAgICAgcmV0dXJuICcwIEInO1xuICAgIH0gZWxzZSBpZiAoaXNOYU4ocGFyc2VJbnQoYnl0ZXMsIDEwKSkpIHtcbiAgICAgIC8qIElmIG5vdCBhIHZhbGlkIG51bWJlciwgcmV0dXJuICdJbnZhbGlkIE51bWJlcicgKi9cbiAgICAgIHJldHVybiAnSW52YWxpZCBOdW1iZXInO1xuICAgIH1cbiAgICBjb25zdCBrOiBudW1iZXIgPSAxMDI0O1xuICAgIGNvbnN0IHNpemVzOiBzdHJpbmdbXSA9IFsnQicsICdLaUInLCAnTWlCJywgJ0dpQicsICdUaUInLCAnUGlCJywgJ0VpQicsICdaaUInLCAnWWlCJ107XG4gICAgY29uc3QgaTogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZyhrKSk7XG4gICAgLy8gaWYgbGVzcyB0aGFuIDFcbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIHJldHVybiAnSW52YWxpZCBOdW1iZXInO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VGbG9hdCgoYnl0ZXMgLyBNYXRoLnBvdyhrLCBpKSkudG9GaXhlZChwcmVjaXNpb24pKSArICcgJyArIHNpemVzW2ldO1xuICB9XG59XG4iXX0=