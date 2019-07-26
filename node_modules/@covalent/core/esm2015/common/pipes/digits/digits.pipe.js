/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        let k = 1000;
        /** @type {?} */
        let sizes = ['', 'K', 'M', 'B', 'T', 'Q'];
        /** @type {?} */
        let i = Math.floor(Math.log(digits) / Math.log(k));
        /** @type {?} */
        let size = sizes[i];
        return this._decimalPipe.transform(parseFloat((digits / Math.pow(k, i)).toFixed(precision))) + (size ? ' ' + size : '');
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
    /** @type {?} */
    TdDigitsPipe.prototype._decimalPipe;
    /** @type {?} */
    TdDigitsPipe.prototype._locale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlnaXRzLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImNvbW1vbi9waXBlcy9kaWdpdHMvZGlnaXRzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTTlDLE1BQU0sT0FBTyxZQUFZOzs7O0lBSXZCLFlBQXVDLFVBQWtCLElBQUk7UUFBdEIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUMzRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7Ozs7O0lBR0QsU0FBUyxDQUFDLE1BQVcsRUFBRSxZQUFvQixDQUFDO1FBQzFDLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNoQixPQUFPLEdBQUcsQ0FBQztTQUNaO2FBQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ3RDLDZDQUE2QztZQUM3QyxPQUFPLE1BQU0sQ0FBQztTQUNmO2FBQU0sSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1NBQy9EOztZQUNHLENBQUMsR0FBVyxJQUFJOztZQUNoQixLQUFLLEdBQWEsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQzs7WUFDL0MsQ0FBQyxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUN0RCxJQUFJLEdBQVcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFILENBQUM7OztZQTNCRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLFFBQVE7YUFDZjs7Ozt5Q0FNYyxNQUFNLFNBQUMsU0FBUzs7OztJQUY3QixvQ0FBa0M7O0lBRXRCLCtCQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0sIEluamVjdCwgTE9DQUxFX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWNpbWFsUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2RpZ2l0cycsXG59KVxuXG5leHBvcnQgY2xhc3MgVGREaWdpdHNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgcHJpdmF0ZSBfZGVjaW1hbFBpcGU6IERlY2ltYWxQaXBlO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTE9DQUxFX0lEKSBwcml2YXRlIF9sb2NhbGU6IHN0cmluZyA9ICdlbicpIHtcbiAgICB0aGlzLl9kZWNpbWFsUGlwZSA9IG5ldyBEZWNpbWFsUGlwZSh0aGlzLl9sb2NhbGUpO1xuICB9XG5cbiAgLyogYGRpZ2l0c2AgbmVlZHMgdG8gYmUgdHlwZSBgZGlnaXRzOiBhbnlgIG9yIFR5cGVTY3JpcHQgY29tcGxhaW5zICovXG4gIHRyYW5zZm9ybShkaWdpdHM6IGFueSwgcHJlY2lzaW9uOiBudW1iZXIgPSAxKTogc3RyaW5nIHtcbiAgICBpZiAoZGlnaXRzID09PSAwKSB7XG4gICAgICByZXR1cm4gJzAnO1xuICAgIH0gZWxzZSBpZiAoaXNOYU4ocGFyc2VJbnQoZGlnaXRzLCAxMCkpKSB7XG4gICAgICAvKiBJZiBub3QgYSB2YWxpZCBudW1iZXIsIHJldHVybiB0aGUgdmFsdWUgKi9cbiAgICAgIHJldHVybiBkaWdpdHM7XG4gICAgfSBlbHNlIGlmIChkaWdpdHMgPCAxKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVjaW1hbFBpcGUudHJhbnNmb3JtKGRpZ2l0cy50b0ZpeGVkKHByZWNpc2lvbikpO1xuICAgIH1cbiAgICBsZXQgazogbnVtYmVyID0gMTAwMDtcbiAgICBsZXQgc2l6ZXM6IHN0cmluZ1tdID0gWycnLCAnSycsICdNJywgJ0InLCAnVCcsICdRJ107XG4gICAgbGV0IGk6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5sb2coZGlnaXRzKSAvIE1hdGgubG9nKGspKTtcbiAgICBsZXQgc2l6ZTogc3RyaW5nID0gc2l6ZXNbaV07XG4gICAgcmV0dXJuIHRoaXMuX2RlY2ltYWxQaXBlLnRyYW5zZm9ybShwYXJzZUZsb2F0KChkaWdpdHMgLyBNYXRoLnBvdyhrLCBpKSkudG9GaXhlZChwcmVjaXNpb24pKSkgKyAoc2l6ZSA/ICcgJyArIHNpemUgOiAnJyk7XG4gIH1cbn1cbiJdfQ==