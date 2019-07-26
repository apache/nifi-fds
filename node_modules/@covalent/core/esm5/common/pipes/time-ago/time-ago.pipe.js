/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var TdTimeAgoPipe = /** @class */ (function () {
    function TdTimeAgoPipe() {
    }
    /**
     * @param {?} time
     * @param {?=} reference
     * @return {?}
     */
    TdTimeAgoPipe.prototype.transform = /**
     * @param {?} time
     * @param {?=} reference
     * @return {?}
     */
    function (time, reference) {
        // Convert time to date object if not already
        time = new Date(time);
        /** @type {?} */
        var ref = new Date(reference);
        // If not a valid timestamp, return 'Invalid Date'
        if (!time.getTime()) {
            return 'Invalid Date';
        }
        // For unit testing, we need to be able to declare a static start time
        // for calculations, or else speed of tests can bork.
        /** @type {?} */
        var startTime = isNaN(ref.getTime()) ? Date.now() : ref.getTime();
        /** @type {?} */
        var diff = Math.floor((startTime - time.getTime()) / 1000);
        if (diff < 2) {
            return '1 second ago';
        }
        if (diff < 60) {
            return Math.floor(diff) + ' seconds ago';
        }
        // Minutes
        diff = diff / 60;
        if (diff < 2) {
            return '1 minute ago';
        }
        if (diff < 60) {
            return Math.floor(diff) + ' minutes ago';
        }
        // Hours
        diff = diff / 60;
        if (diff < 2) {
            return '1 hour ago';
        }
        if (diff < 24) {
            return Math.floor(diff) + ' hours ago';
        }
        // Days
        diff = diff / 24;
        if (diff < 2) {
            return '1 day ago';
        }
        if (diff < 30) {
            return Math.floor(diff) + ' days ago';
        }
        // Months
        diff = diff / 30;
        if (diff < 2) {
            return '1 month ago';
        }
        if (diff < 12) {
            return Math.floor(diff) + ' months ago';
        }
        // Years
        diff = diff / 12;
        if (diff < 2) {
            return '1 year ago';
        }
        else {
            return Math.floor(diff) + ' years ago';
        }
    };
    TdTimeAgoPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'timeAgo',
                },] }
    ];
    return TdTimeAgoPipe;
}());
export { TdTimeAgoPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1hZ28ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsiY29tbW9uL3BpcGVzL3RpbWUtYWdvL3RpbWUtYWdvLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBQUE7SUFpRUEsQ0FBQzs7Ozs7O0lBN0RDLGlDQUFTOzs7OztJQUFULFVBQVUsSUFBUyxFQUFFLFNBQWU7UUFDbEMsNkNBQTZDO1FBQzdDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFDbEIsR0FBRyxHQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUVuQyxrREFBa0Q7UUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNuQixPQUFPLGNBQWMsQ0FBQztTQUN2Qjs7OztZQUlHLFNBQVMsR0FBVyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRTs7WUFDckUsSUFBSSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBRWxFLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNaLE9BQU8sY0FBYyxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO1lBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLGNBQWMsQ0FBQztTQUMxQztRQUNELFVBQVU7UUFDVixJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDWixPQUFPLGNBQWMsQ0FBQztTQUN2QjtRQUNELElBQUksSUFBSSxHQUFHLEVBQUUsRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxjQUFjLENBQUM7U0FDMUM7UUFDRCxRQUFRO1FBQ1IsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ1osT0FBTyxZQUFZLENBQUM7U0FDckI7UUFDRCxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsWUFBWSxDQUFDO1NBQ3hDO1FBQ0QsT0FBTztRQUNQLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNaLE9BQU8sV0FBVyxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO1lBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQztTQUN2QztRQUNELFNBQVM7UUFDVCxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDWixPQUFPLGFBQWEsQ0FBQztTQUN0QjtRQUNELElBQUksSUFBSSxHQUFHLEVBQUUsRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxhQUFhLENBQUM7U0FDekM7UUFDRCxRQUFRO1FBQ1IsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ1osT0FBTyxZQUFZLENBQUM7U0FDckI7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxZQUFZLENBQUM7U0FDeEM7SUFDSCxDQUFDOztnQkFoRUYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxTQUFTO2lCQUNoQjs7SUErREQsb0JBQUM7Q0FBQSxBQWpFRCxJQWlFQztTQTlEWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICd0aW1lQWdvJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRUaW1lQWdvUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odGltZTogYW55LCByZWZlcmVuY2U/OiBhbnkpOiBzdHJpbmcge1xuICAgIC8vIENvbnZlcnQgdGltZSB0byBkYXRlIG9iamVjdCBpZiBub3QgYWxyZWFkeVxuICAgIHRpbWUgPSBuZXcgRGF0ZSh0aW1lKTtcbiAgICBsZXQgcmVmOiBEYXRlID0gbmV3IERhdGUocmVmZXJlbmNlKTtcblxuICAgIC8vIElmIG5vdCBhIHZhbGlkIHRpbWVzdGFtcCwgcmV0dXJuICdJbnZhbGlkIERhdGUnXG4gICAgaWYgKCF0aW1lLmdldFRpbWUoKSkge1xuICAgICAgcmV0dXJuICdJbnZhbGlkIERhdGUnO1xuICAgIH1cblxuICAgIC8vIEZvciB1bml0IHRlc3RpbmcsIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBkZWNsYXJlIGEgc3RhdGljIHN0YXJ0IHRpbWVcbiAgICAvLyBmb3IgY2FsY3VsYXRpb25zLCBvciBlbHNlIHNwZWVkIG9mIHRlc3RzIGNhbiBib3JrLlxuICAgIGxldCBzdGFydFRpbWU6IG51bWJlciA9IGlzTmFOKHJlZi5nZXRUaW1lKCkpID8gRGF0ZS5ub3coKSA6IHJlZi5nZXRUaW1lKCk7XG4gICAgbGV0IGRpZmY6IG51bWJlciA9IE1hdGguZmxvb3IoKHN0YXJ0VGltZSAtIHRpbWUuZ2V0VGltZSgpKSAvIDEwMDApO1xuXG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJzEgc2Vjb25kIGFnbyc7XG4gICAgfVxuICAgIGlmIChkaWZmIDwgNjApIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKGRpZmYpICsgJyBzZWNvbmRzIGFnbyc7XG4gICAgfVxuICAgIC8vIE1pbnV0ZXNcbiAgICBkaWZmID0gZGlmZiAvIDYwO1xuICAgIGlmIChkaWZmIDwgMikge1xuICAgICAgcmV0dXJuICcxIG1pbnV0ZSBhZ28nO1xuICAgIH1cbiAgICBpZiAoZGlmZiA8IDYwKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihkaWZmKSArICcgbWludXRlcyBhZ28nO1xuICAgIH1cbiAgICAvLyBIb3Vyc1xuICAgIGRpZmYgPSBkaWZmIC8gNjA7XG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJzEgaG91ciBhZ28nO1xuICAgIH1cbiAgICBpZiAoZGlmZiA8IDI0KSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihkaWZmKSArICcgaG91cnMgYWdvJztcbiAgICB9XG4gICAgLy8gRGF5c1xuICAgIGRpZmYgPSBkaWZmIC8gMjQ7XG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJzEgZGF5IGFnbyc7XG4gICAgfVxuICAgIGlmIChkaWZmIDwgMzApIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKGRpZmYpICsgJyBkYXlzIGFnbyc7XG4gICAgfVxuICAgIC8vIE1vbnRoc1xuICAgIGRpZmYgPSBkaWZmIC8gMzA7XG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJzEgbW9udGggYWdvJztcbiAgICB9XG4gICAgaWYgKGRpZmYgPCAxMikge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZikgKyAnIG1vbnRocyBhZ28nO1xuICAgIH1cbiAgICAvLyBZZWFyc1xuICAgIGRpZmYgPSBkaWZmIC8gMTI7XG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJzEgeWVhciBhZ28nO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihkaWZmKSArICcgeWVhcnMgYWdvJztcbiAgICB9XG4gIH1cbn1cbiJdfQ==