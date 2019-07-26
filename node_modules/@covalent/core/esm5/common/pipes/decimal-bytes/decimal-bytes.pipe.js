/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var TdDecimalBytesPipe = /** @class */ (function () {
    function TdDecimalBytesPipe() {
    }
    /* `bytes` needs to be `any` or TypeScript complains
    Tried both `number` and `number | string` */
    /* `bytes` needs to be `any` or TypeScript complains
      Tried both `number` and `number | string` */
    /**
     * @param {?} bytes
     * @param {?=} precision
     * @return {?}
     */
    TdDecimalBytesPipe.prototype.transform = /* `bytes` needs to be `any` or TypeScript complains
      Tried both `number` and `number | string` */
    /**
     * @param {?} bytes
     * @param {?=} precision
     * @return {?}
     */
    function (bytes, precision) {
        if (precision === void 0) { precision = 2; }
        if (bytes === 0) {
            return '0 B';
        }
        else if (isNaN(parseInt(bytes, 10))) {
            /* If not a valid number, return 'Invalid Number' */
            return 'Invalid Number';
        }
        /** @type {?} */
        var k = 1000;
        /** @type {?} */
        var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        /** @type {?} */
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        // if less than 1
        if (i < 0) {
            return 'Invalid Number';
        }
        return parseFloat((bytes / Math.pow(k, i)).toFixed(precision)) + ' ' + sizes[i];
    };
    TdDecimalBytesPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'decimalBytes',
                },] }
    ];
    return TdDecimalBytesPipe;
}());
export { TdDecimalBytesPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjaW1hbC1ieXRlcy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJjb21tb24vcGlwZXMvZGVjaW1hbC1ieXRlcy9kZWNpbWFsLWJ5dGVzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBQUE7SUF1QkEsQ0FBQztJQWxCQztnREFDNEM7Ozs7Ozs7O0lBQzVDLHNDQUFTOzs7Ozs7O0lBQVQsVUFBVSxLQUFVLEVBQUUsU0FBcUI7UUFBckIsMEJBQUEsRUFBQSxhQUFxQjtRQUN6QyxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDZixPQUFPLEtBQUssQ0FBQztTQUNkO2FBQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ3JDLG9EQUFvRDtZQUNwRCxPQUFPLGdCQUFnQixDQUFDO1NBQ3pCOztZQUNHLENBQUMsR0FBVyxJQUFJOztZQUNoQixLQUFLLEdBQWEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQzs7WUFDdkUsQ0FBQyxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELGlCQUFpQjtRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDVCxPQUFPLGdCQUFnQixDQUFDO1NBQ3pCO1FBQ0QsT0FBTyxVQUFVLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7O2dCQXRCRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLGNBQWM7aUJBQ3JCOztJQXFCRCx5QkFBQztDQUFBLEFBdkJELElBdUJDO1NBbkJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnZGVjaW1hbEJ5dGVzJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBUZERlY2ltYWxCeXRlc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgLyogYGJ5dGVzYCBuZWVkcyB0byBiZSBgYW55YCBvciBUeXBlU2NyaXB0IGNvbXBsYWluc1xuICBUcmllZCBib3RoIGBudW1iZXJgIGFuZCBgbnVtYmVyIHwgc3RyaW5nYCAqL1xuICB0cmFuc2Zvcm0oYnl0ZXM6IGFueSwgcHJlY2lzaW9uOiBudW1iZXIgPSAyKTogc3RyaW5nIHtcbiAgICBpZiAoYnl0ZXMgPT09IDApIHtcbiAgICAgIHJldHVybiAnMCBCJztcbiAgICB9IGVsc2UgaWYgKGlzTmFOKHBhcnNlSW50KGJ5dGVzLCAxMCkpKSB7XG4gICAgICAvKiBJZiBub3QgYSB2YWxpZCBudW1iZXIsIHJldHVybiAnSW52YWxpZCBOdW1iZXInICovXG4gICAgICByZXR1cm4gJ0ludmFsaWQgTnVtYmVyJztcbiAgICB9XG4gICAgbGV0IGs6IG51bWJlciA9IDEwMDA7XG4gICAgbGV0IHNpemVzOiBzdHJpbmdbXSA9IFsnQicsICdLQicsICdNQicsICdHQicsICdUQicsICdQQicsICdFQicsICdaQicsICdZQiddO1xuICAgIGxldCBpOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgubG9nKGJ5dGVzKSAvIE1hdGgubG9nKGspKTtcbiAgICAvLyBpZiBsZXNzIHRoYW4gMVxuICAgIGlmIChpIDwgMCkge1xuICAgICAgcmV0dXJuICdJbnZhbGlkIE51bWJlcic7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUZsb2F0KChieXRlcyAvIE1hdGgucG93KGssIGkpKS50b0ZpeGVkKHByZWNpc2lvbikpICsgJyAnICsgc2l6ZXNbaV07XG4gIH1cbn1cbiJdfQ==