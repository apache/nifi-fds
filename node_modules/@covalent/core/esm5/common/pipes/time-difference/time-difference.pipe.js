/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var TdTimeDifferencePipe = /** @class */ (function () {
    function TdTimeDifferencePipe() {
    }
    /**
     * @param {?} start
     * @param {?=} end
     * @return {?}
     */
    TdTimeDifferencePipe.prototype.transform = /**
     * @param {?} start
     * @param {?=} end
     * @return {?}
     */
    function (start, end) {
        /** @type {?} */
        var startTime = new Date(start);
        /** @type {?} */
        var endTime;
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
        var diff = Math.floor((endTime.getTime() - startTime.getTime()) / 1000);
        /** @type {?} */
        var days = Math.floor(diff / (60 * 60 * 24));
        diff = diff - (days * (60 * 60 * 24));
        /** @type {?} */
        var hours = Math.floor(diff / (60 * 60));
        diff = diff - (hours * (60 * 60));
        /** @type {?} */
        var minutes = Math.floor(diff / (60));
        diff -= minutes * (60);
        /** @type {?} */
        var seconds = diff;
        /** @type {?} */
        var pad = '00';
        /** @type {?} */
        var daysFormatted = '';
        if (days > 0 && days < 2) {
            daysFormatted = ' day - ';
        }
        else if (days > 1) {
            daysFormatted = ' days - ';
        }
        return (days > 0 ? days + daysFormatted : daysFormatted) +
            pad.substring(0, pad.length - (hours + '').length) + hours + ':' +
            pad.substring(0, pad.length - (minutes + '').length) + minutes + ':' +
            pad.substring(0, pad.length - (seconds + '').length) + seconds;
    };
    TdTimeDifferencePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'timeDifference',
                },] }
    ];
    return TdTimeDifferencePipe;
}());
export { TdTimeDifferencePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1kaWZmZXJlbmNlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImNvbW1vbi9waXBlcy90aW1lLWRpZmZlcmVuY2UvdGltZS1kaWZmZXJlbmNlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBQUE7SUErQ0EsQ0FBQzs7Ozs7O0lBMUNDLHdDQUFTOzs7OztJQUFULFVBQVUsS0FBVSxFQUFFLEdBQVM7O1lBQ3pCLFNBQVMsR0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7O1lBQ2pDLE9BQWE7UUFFakIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ3JCLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QjthQUFNO1lBQ0wsT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7U0FDdEI7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzlDLE9BQU8sY0FBYyxDQUFDO1NBQ3ZCOztZQUVHLElBQUksR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQzs7WUFFM0UsSUFBSSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNwRCxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDOztZQUVsQyxLQUFLLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDaEQsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDOztZQUU5QixPQUFPLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QyxJQUFJLElBQUksT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7O1lBRW5CLE9BQU8sR0FBVyxJQUFJOztZQUV0QixHQUFHLEdBQVcsSUFBSTs7WUFFbEIsYUFBYSxHQUFXLEVBQUU7UUFFOUIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDeEIsYUFBYSxHQUFHLFNBQVMsQ0FBQztTQUMzQjthQUFNLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNuQixhQUFhLEdBQUcsVUFBVSxDQUFFO1NBQzdCO1FBRUQsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUN2RCxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssR0FBRyxHQUFHO1lBQ2hFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsT0FBTyxHQUFHLEdBQUc7WUFDcEUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDbEUsQ0FBQzs7Z0JBOUNGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsZ0JBQWdCO2lCQUN2Qjs7SUE2Q0QsMkJBQUM7Q0FBQSxBQS9DRCxJQStDQztTQTNDWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3RpbWVEaWZmZXJlbmNlJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBUZFRpbWVEaWZmZXJlbmNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oc3RhcnQ6IGFueSwgZW5kPzogYW55KTogc3RyaW5nIHtcbiAgICBsZXQgc3RhcnRUaW1lOiBEYXRlID0gbmV3IERhdGUoc3RhcnQpO1xuICAgIGxldCBlbmRUaW1lOiBEYXRlO1xuXG4gICAgaWYgKGVuZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbmRUaW1lID0gbmV3IERhdGUoZW5kKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW5kVGltZSA9IG5ldyBEYXRlKCk7XG4gICAgfVxuXG4gICAgaWYgKCFzdGFydFRpbWUuZ2V0VGltZSgpIHx8ICFlbmRUaW1lLmdldFRpbWUoKSkge1xuICAgICAgcmV0dXJuICdJbnZhbGlkIERhdGUnO1xuICAgIH1cblxuICAgIGxldCBkaWZmOiBudW1iZXIgPSBNYXRoLmZsb29yKChlbmRUaW1lLmdldFRpbWUoKSAtIHN0YXJ0VGltZS5nZXRUaW1lKCkpIC8gMTAwMCk7XG5cbiAgICBsZXQgZGF5czogbnVtYmVyID0gTWF0aC5mbG9vcihkaWZmIC8gKDYwICogNjAgKiAyNCkpO1xuICAgIGRpZmYgPSBkaWZmIC0gKGRheXMgKiAoNjAgKiA2MCAqIDI0KSk7XG5cbiAgICBsZXQgaG91cnM6IG51bWJlciA9IE1hdGguZmxvb3IoZGlmZiAvICg2MCAqIDYwKSk7XG4gICAgZGlmZiA9IGRpZmYgLSAoaG91cnMgKiAoNjAgKiA2MCkpO1xuXG4gICAgbGV0IG1pbnV0ZXM6IG51bWJlciA9IE1hdGguZmxvb3IoZGlmZiAvICg2MCkpO1xuICAgIGRpZmYgLT0gbWludXRlcyAqICg2MCk7XG5cbiAgICBsZXQgc2Vjb25kczogbnVtYmVyID0gZGlmZjtcblxuICAgIGxldCBwYWQ6IHN0cmluZyA9ICcwMCc7XG5cbiAgICBsZXQgZGF5c0Zvcm1hdHRlZDogc3RyaW5nID0gJyc7XG5cbiAgICBpZiAoZGF5cyA+IDAgJiYgZGF5cyA8IDIpIHtcbiAgICAgIGRheXNGb3JtYXR0ZWQgPSAnIGRheSAtICc7XG4gICAgfSBlbHNlIGlmIChkYXlzID4gMSkge1xuICAgICAgZGF5c0Zvcm1hdHRlZCA9ICcgZGF5cyAtICcgO1xuICAgIH1cblxuICAgIHJldHVybiAoZGF5cyA+IDAgPyBkYXlzICsgZGF5c0Zvcm1hdHRlZCA6IGRheXNGb3JtYXR0ZWQpICtcbiAgICAgcGFkLnN1YnN0cmluZygwLCBwYWQubGVuZ3RoIC0gKGhvdXJzICsgJycpLmxlbmd0aCkgKyBob3VycyArICc6JyArXG4gICAgIHBhZC5zdWJzdHJpbmcoMCwgcGFkLmxlbmd0aCAtIChtaW51dGVzICsgJycpLmxlbmd0aCkgKyBtaW51dGVzICsgJzonICtcbiAgICAgcGFkLnN1YnN0cmluZygwLCBwYWQubGVuZ3RoIC0gKHNlY29uZHMgKyAnJykubGVuZ3RoKSArIHNlY29uZHM7XG4gIH1cbn1cbiJdfQ==