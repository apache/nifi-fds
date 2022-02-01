/**
 * @fileoverview added by tsickle
 * Generated from: pipes/digits/digits.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe, Inject, LOCALE_ID } from '@angular/core';
import { DecimalPipe } from '@angular/common';
export class TdDigitsPipe {
    /**
     * @param {?=} _locale
     */
    constructor(_locale = 'en') {
        this._locale = _locale;
        this._decimalPipe = new DecimalPipe(this._locale);
    }
    /* `digits` needs to be type `digits: any` or TypeScript complains */
    /**
     * @param {?} digits
     * @param {?=} precision
     * @return {?}
     */
    transform(digits, precision = 1) {
        if (digits === 0) {
            return '0';
        }
        else if (isNaN(parseInt(digits, 10))) {
            /* If not a valid number, return the value */
            return digits;
        }
        else if (digits < 1) {
            return this._decimalPipe.transform(digits.toFixed(precision));
        }
        /** @type {?} */
        const k = 1000;
        /** @type {?} */
        const sizes = ['', 'K', 'M', 'B', 'T', 'Q'];
        /** @type {?} */
        const i = Math.floor(Math.log(digits) / Math.log(k));
        /** @type {?} */
        const size = sizes[i];
        return (this._decimalPipe.transform(parseFloat((digits / Math.pow(k, i)).toFixed(precision))) + (size ? ' ' + size : ''));
    }
}
TdDigitsPipe.decorators = [
    { type: Pipe, args: [{
                name: 'digits',
            },] }
];
/** @nocollapse */
TdDigitsPipe.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdDigitsPipe.prototype._decimalPipe;
    /**
     * @type {?}
     * @private
     */
    TdDigitsPipe.prototype._locale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlnaXRzLnBpcGUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2NvcmUvY29tbW9uLyIsInNvdXJjZXMiOlsicGlwZXMvZGlnaXRzL2RpZ2l0cy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFLOUMsTUFBTSxPQUFPLFlBQVk7Ozs7SUFHdkIsWUFBdUMsVUFBa0IsSUFBSTtRQUF0QixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQzNELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7Ozs7SUFHRCxTQUFTLENBQUMsTUFBVyxFQUFFLFlBQW9CLENBQUM7UUFDMUMsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2hCLE9BQU8sR0FBRyxDQUFDO1NBQ1o7YUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDdEMsNkNBQTZDO1lBQzdDLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7YUFBTSxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7U0FDL0Q7O2NBQ0ssQ0FBQyxHQUFXLElBQUk7O2NBQ2hCLEtBQUssR0FBYSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDOztjQUMvQyxDQUFDLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7O2NBQ3RELElBQUksR0FBVyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sQ0FDTCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FDakgsQ0FBQztJQUNKLENBQUM7OztZQTNCRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLFFBQVE7YUFDZjs7Ozt5Q0FJYyxNQUFNLFNBQUMsU0FBUzs7Ozs7OztJQUY3QixvQ0FBa0M7Ozs7O0lBRXRCLCtCQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0sIEluamVjdCwgTE9DQUxFX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWNpbWFsUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2RpZ2l0cycsXG59KVxuZXhwb3J0IGNsYXNzIFRkRGlnaXRzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBwcml2YXRlIF9kZWNpbWFsUGlwZTogRGVjaW1hbFBpcGU7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChMT0NBTEVfSUQpIHByaXZhdGUgX2xvY2FsZTogc3RyaW5nID0gJ2VuJykge1xuICAgIHRoaXMuX2RlY2ltYWxQaXBlID0gbmV3IERlY2ltYWxQaXBlKHRoaXMuX2xvY2FsZSk7XG4gIH1cblxuICAvKiBgZGlnaXRzYCBuZWVkcyB0byBiZSB0eXBlIGBkaWdpdHM6IGFueWAgb3IgVHlwZVNjcmlwdCBjb21wbGFpbnMgKi9cbiAgdHJhbnNmb3JtKGRpZ2l0czogYW55LCBwcmVjaXNpb246IG51bWJlciA9IDEpOiBzdHJpbmcge1xuICAgIGlmIChkaWdpdHMgPT09IDApIHtcbiAgICAgIHJldHVybiAnMCc7XG4gICAgfSBlbHNlIGlmIChpc05hTihwYXJzZUludChkaWdpdHMsIDEwKSkpIHtcbiAgICAgIC8qIElmIG5vdCBhIHZhbGlkIG51bWJlciwgcmV0dXJuIHRoZSB2YWx1ZSAqL1xuICAgICAgcmV0dXJuIGRpZ2l0cztcbiAgICB9IGVsc2UgaWYgKGRpZ2l0cyA8IDEpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kZWNpbWFsUGlwZS50cmFuc2Zvcm0oZGlnaXRzLnRvRml4ZWQocHJlY2lzaW9uKSk7XG4gICAgfVxuICAgIGNvbnN0IGs6IG51bWJlciA9IDEwMDA7XG4gICAgY29uc3Qgc2l6ZXM6IHN0cmluZ1tdID0gWycnLCAnSycsICdNJywgJ0InLCAnVCcsICdRJ107XG4gICAgY29uc3QgaTogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLmxvZyhkaWdpdHMpIC8gTWF0aC5sb2coaykpO1xuICAgIGNvbnN0IHNpemU6IHN0cmluZyA9IHNpemVzW2ldO1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLl9kZWNpbWFsUGlwZS50cmFuc2Zvcm0ocGFyc2VGbG9hdCgoZGlnaXRzIC8gTWF0aC5wb3coaywgaSkpLnRvRml4ZWQocHJlY2lzaW9uKSkpICsgKHNpemUgPyAnICcgKyBzaXplIDogJycpXG4gICAgKTtcbiAgfVxufVxuIl19