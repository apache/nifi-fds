/**
 * @fileoverview added by tsickle
 * Generated from: pipes/time-difference/time-difference.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class TdTimeDifferencePipe {
    /**
     * @param {?} start
     * @param {?=} end
     * @return {?}
     */
    transform(start, end) {
        /** @type {?} */
        const startTime = new Date(start);
        /** @type {?} */
        let endTime;
        if (end !== undefined) {
            endTime = new Date(end);
        }
        else {
            endTime = new Date();
        }
        if (!startTime.getTime() || !endTime.getTime()) {
            return 'Invalid Date';
        }
        /** @type {?} */
        let diff = Math.floor((endTime.getTime() - startTime.getTime()) / 1000);
        /** @type {?} */
        const days = Math.floor(diff / (60 * 60 * 24));
        diff = diff - days * (60 * 60 * 24);
        /** @type {?} */
        const hours = Math.floor(diff / (60 * 60));
        diff = diff - hours * (60 * 60);
        /** @type {?} */
        const minutes = Math.floor(diff / 60);
        diff -= minutes * 60;
        /** @type {?} */
        const seconds = diff;
        /** @type {?} */
        const pad = '00';
        /** @type {?} */
        let daysFormatted = '';
        if (days > 0 && days < 2) {
            daysFormatted = ' day - ';
        }
        else if (days > 1) {
            daysFormatted = ' days - ';
        }
        return ((days > 0 ? days + daysFormatted : daysFormatted) +
            pad.substring(0, pad.length - (hours + '').length) +
            hours +
            ':' +
            pad.substring(0, pad.length - (minutes + '').length) +
            minutes +
            ':' +
            pad.substring(0, pad.length - (seconds + '').length) +
            seconds);
    }
}
TdTimeDifferencePipe.decorators = [
    { type: Pipe, args: [{
                name: 'timeDifference',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1kaWZmZXJlbmNlLnBpcGUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2NvcmUvY29tbW9uLyIsInNvdXJjZXMiOlsicGlwZXMvdGltZS1kaWZmZXJlbmNlL3RpbWUtZGlmZmVyZW5jZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFLcEQsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7O0lBQy9CLFNBQVMsQ0FBQyxLQUFVLEVBQUUsR0FBUzs7Y0FDdkIsU0FBUyxHQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQzs7WUFDbkMsT0FBYTtRQUVqQixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDckIsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCO2FBQU07WUFDTCxPQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztTQUN0QjtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDOUMsT0FBTyxjQUFjLENBQUM7U0FDdkI7O1lBRUcsSUFBSSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDOztjQUV6RSxJQUFJLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQzs7Y0FFOUIsS0FBSyxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDOztjQUUxQixPQUFPLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzdDLElBQUksSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDOztjQUVmLE9BQU8sR0FBVyxJQUFJOztjQUV0QixHQUFHLEdBQVcsSUFBSTs7WUFFcEIsYUFBYSxHQUFXLEVBQUU7UUFFOUIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDeEIsYUFBYSxHQUFHLFNBQVMsQ0FBQztTQUMzQjthQUFNLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNuQixhQUFhLEdBQUcsVUFBVSxDQUFDO1NBQzVCO1FBRUQsT0FBTyxDQUNMLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO1lBQ2pELEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ2xELEtBQUs7WUFDTCxHQUFHO1lBQ0gsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDcEQsT0FBTztZQUNQLEdBQUc7WUFDSCxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNwRCxPQUFPLENBQ1IsQ0FBQztJQUNKLENBQUM7OztZQXBERixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLGdCQUFnQjthQUN2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAndGltZURpZmZlcmVuY2UnLFxufSlcbmV4cG9ydCBjbGFzcyBUZFRpbWVEaWZmZXJlbmNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oc3RhcnQ6IGFueSwgZW5kPzogYW55KTogc3RyaW5nIHtcbiAgICBjb25zdCBzdGFydFRpbWU6IERhdGUgPSBuZXcgRGF0ZShzdGFydCk7XG4gICAgbGV0IGVuZFRpbWU6IERhdGU7XG5cbiAgICBpZiAoZW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGVuZFRpbWUgPSBuZXcgRGF0ZShlbmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmRUaW1lID0gbmV3IERhdGUoKTtcbiAgICB9XG5cbiAgICBpZiAoIXN0YXJ0VGltZS5nZXRUaW1lKCkgfHwgIWVuZFRpbWUuZ2V0VGltZSgpKSB7XG4gICAgICByZXR1cm4gJ0ludmFsaWQgRGF0ZSc7XG4gICAgfVxuXG4gICAgbGV0IGRpZmY6IG51bWJlciA9IE1hdGguZmxvb3IoKGVuZFRpbWUuZ2V0VGltZSgpIC0gc3RhcnRUaW1lLmdldFRpbWUoKSkgLyAxMDAwKTtcblxuICAgIGNvbnN0IGRheXM6IG51bWJlciA9IE1hdGguZmxvb3IoZGlmZiAvICg2MCAqIDYwICogMjQpKTtcbiAgICBkaWZmID0gZGlmZiAtIGRheXMgKiAoNjAgKiA2MCAqIDI0KTtcblxuICAgIGNvbnN0IGhvdXJzOiBudW1iZXIgPSBNYXRoLmZsb29yKGRpZmYgLyAoNjAgKiA2MCkpO1xuICAgIGRpZmYgPSBkaWZmIC0gaG91cnMgKiAoNjAgKiA2MCk7XG5cbiAgICBjb25zdCBtaW51dGVzOiBudW1iZXIgPSBNYXRoLmZsb29yKGRpZmYgLyA2MCk7XG4gICAgZGlmZiAtPSBtaW51dGVzICogNjA7XG5cbiAgICBjb25zdCBzZWNvbmRzOiBudW1iZXIgPSBkaWZmO1xuXG4gICAgY29uc3QgcGFkOiBzdHJpbmcgPSAnMDAnO1xuXG4gICAgbGV0IGRheXNGb3JtYXR0ZWQ6IHN0cmluZyA9ICcnO1xuXG4gICAgaWYgKGRheXMgPiAwICYmIGRheXMgPCAyKSB7XG4gICAgICBkYXlzRm9ybWF0dGVkID0gJyBkYXkgLSAnO1xuICAgIH0gZWxzZSBpZiAoZGF5cyA+IDEpIHtcbiAgICAgIGRheXNGb3JtYXR0ZWQgPSAnIGRheXMgLSAnO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAoZGF5cyA+IDAgPyBkYXlzICsgZGF5c0Zvcm1hdHRlZCA6IGRheXNGb3JtYXR0ZWQpICtcbiAgICAgIHBhZC5zdWJzdHJpbmcoMCwgcGFkLmxlbmd0aCAtIChob3VycyArICcnKS5sZW5ndGgpICtcbiAgICAgIGhvdXJzICtcbiAgICAgICc6JyArXG4gICAgICBwYWQuc3Vic3RyaW5nKDAsIHBhZC5sZW5ndGggLSAobWludXRlcyArICcnKS5sZW5ndGgpICtcbiAgICAgIG1pbnV0ZXMgK1xuICAgICAgJzonICtcbiAgICAgIHBhZC5zdWJzdHJpbmcoMCwgcGFkLmxlbmd0aCAtIChzZWNvbmRzICsgJycpLmxlbmd0aCkgK1xuICAgICAgc2Vjb25kc1xuICAgICk7XG4gIH1cbn1cbiJdfQ==