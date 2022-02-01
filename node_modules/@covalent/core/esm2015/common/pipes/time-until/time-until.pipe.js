/**
 * @fileoverview added by tsickle
 * Generated from: pipes/time-until/time-until.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class TdTimeUntilPipe {
    /**
     * @param {?} time
     * @param {?=} reference
     * @return {?}
     */
    transform(time, reference) {
        // Convert time to date object if not already
        time = new Date(time);
        /** @type {?} */
        const ref = new Date(reference);
        // If not a valid timestamp, return 'Invalid Date'
        if (!time.getTime()) {
            return 'Invalid Date';
        }
        // For unit testing, we need to be able to declare a static start time
        // for calculations, or else speed of tests can bork.
        /** @type {?} */
        const startTime = isNaN(ref.getTime()) ? Date.now() : ref.getTime();
        /** @type {?} */
        let diff = Math.floor((time.getTime() - startTime) / 1000);
        if (diff < 2) {
            return 'in 1 second';
        }
        if (diff < 60) {
            return 'in ' + Math.floor(diff) + ' seconds';
        }
        // Minutes
        diff = diff / 60;
        if (diff < 2) {
            return 'in 1 minute';
        }
        if (diff < 60) {
            return 'in ' + Math.floor(diff) + ' minutes';
        }
        // Hours
        diff = diff / 60;
        if (diff < 2) {
            return 'in 1 hour';
        }
        if (diff < 24) {
            return 'in ' + Math.floor(diff) + ' hours';
        }
        // Days
        diff = diff / 24;
        if (diff < 2) {
            return 'in 1 day';
        }
        if (diff < 30) {
            return 'in ' + Math.floor(diff) + ' days';
        }
        // Months
        diff = diff / 30;
        if (diff < 2) {
            return 'in 1 month';
        }
        if (diff < 12) {
            return 'in ' + Math.floor(diff) + ' months';
        }
        // Years
        diff = diff / 12;
        if (diff < 2) {
            return 'in 1 year';
        }
        else {
            return 'in ' + Math.floor(diff) + ' years';
        }
    }
}
TdTimeUntilPipe.decorators = [
    { type: Pipe, args: [{
                name: 'timeUntil',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS11bnRpbC5waXBlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9wbGF0Zm9ybS9jb3JlL2NvbW1vbi8iLCJzb3VyY2VzIjpbInBpcGVzL3RpbWUtdW50aWwvdGltZS11bnRpbC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFLcEQsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQUMxQixTQUFTLENBQUMsSUFBUyxFQUFFLFNBQWU7UUFDbEMsNkNBQTZDO1FBQzdDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Y0FDaEIsR0FBRyxHQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUVyQyxrREFBa0Q7UUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNuQixPQUFPLGNBQWMsQ0FBQztTQUN2Qjs7OztjQUlLLFNBQVMsR0FBVyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRTs7WUFDdkUsSUFBSSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBRWxFLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNaLE9BQU8sYUFBYSxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO1lBQ2IsT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUM7U0FDOUM7UUFDRCxVQUFVO1FBQ1YsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ1osT0FBTyxhQUFhLENBQUM7U0FDdEI7UUFDRCxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7WUFDYixPQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQztTQUM5QztRQUNELFFBQVE7UUFDUixJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDWixPQUFPLFdBQVcsQ0FBQztTQUNwQjtRQUNELElBQUksSUFBSSxHQUFHLEVBQUUsRUFBRTtZQUNiLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDO1NBQzVDO1FBQ0QsT0FBTztRQUNQLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNaLE9BQU8sVUFBVSxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO1lBQ2IsT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUM7U0FDM0M7UUFDRCxTQUFTO1FBQ1QsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ1osT0FBTyxZQUFZLENBQUM7U0FDckI7UUFDRCxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7WUFDYixPQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQztTQUM3QztRQUNELFFBQVE7UUFDUixJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDWixPQUFPLFdBQVcsQ0FBQztTQUNwQjthQUFNO1lBQ0wsT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUM7U0FDNUM7SUFDSCxDQUFDOzs7WUFoRUYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxXQUFXO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICd0aW1lVW50aWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZFRpbWVVbnRpbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHRpbWU6IGFueSwgcmVmZXJlbmNlPzogYW55KTogc3RyaW5nIHtcbiAgICAvLyBDb252ZXJ0IHRpbWUgdG8gZGF0ZSBvYmplY3QgaWYgbm90IGFscmVhZHlcbiAgICB0aW1lID0gbmV3IERhdGUodGltZSk7XG4gICAgY29uc3QgcmVmOiBEYXRlID0gbmV3IERhdGUocmVmZXJlbmNlKTtcblxuICAgIC8vIElmIG5vdCBhIHZhbGlkIHRpbWVzdGFtcCwgcmV0dXJuICdJbnZhbGlkIERhdGUnXG4gICAgaWYgKCF0aW1lLmdldFRpbWUoKSkge1xuICAgICAgcmV0dXJuICdJbnZhbGlkIERhdGUnO1xuICAgIH1cblxuICAgIC8vIEZvciB1bml0IHRlc3RpbmcsIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBkZWNsYXJlIGEgc3RhdGljIHN0YXJ0IHRpbWVcbiAgICAvLyBmb3IgY2FsY3VsYXRpb25zLCBvciBlbHNlIHNwZWVkIG9mIHRlc3RzIGNhbiBib3JrLlxuICAgIGNvbnN0IHN0YXJ0VGltZTogbnVtYmVyID0gaXNOYU4ocmVmLmdldFRpbWUoKSkgPyBEYXRlLm5vdygpIDogcmVmLmdldFRpbWUoKTtcbiAgICBsZXQgZGlmZjogbnVtYmVyID0gTWF0aC5mbG9vcigodGltZS5nZXRUaW1lKCkgLSBzdGFydFRpbWUpIC8gMTAwMCk7XG5cbiAgICBpZiAoZGlmZiA8IDIpIHtcbiAgICAgIHJldHVybiAnaW4gMSBzZWNvbmQnO1xuICAgIH1cbiAgICBpZiAoZGlmZiA8IDYwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyBNYXRoLmZsb29yKGRpZmYpICsgJyBzZWNvbmRzJztcbiAgICB9XG4gICAgLy8gTWludXRlc1xuICAgIGRpZmYgPSBkaWZmIC8gNjA7XG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJ2luIDEgbWludXRlJztcbiAgICB9XG4gICAgaWYgKGRpZmYgPCA2MCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgTWF0aC5mbG9vcihkaWZmKSArICcgbWludXRlcyc7XG4gICAgfVxuICAgIC8vIEhvdXJzXG4gICAgZGlmZiA9IGRpZmYgLyA2MDtcbiAgICBpZiAoZGlmZiA8IDIpIHtcbiAgICAgIHJldHVybiAnaW4gMSBob3VyJztcbiAgICB9XG4gICAgaWYgKGRpZmYgPCAyNCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgTWF0aC5mbG9vcihkaWZmKSArICcgaG91cnMnO1xuICAgIH1cbiAgICAvLyBEYXlzXG4gICAgZGlmZiA9IGRpZmYgLyAyNDtcbiAgICBpZiAoZGlmZiA8IDIpIHtcbiAgICAgIHJldHVybiAnaW4gMSBkYXknO1xuICAgIH1cbiAgICBpZiAoZGlmZiA8IDMwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyBNYXRoLmZsb29yKGRpZmYpICsgJyBkYXlzJztcbiAgICB9XG4gICAgLy8gTW9udGhzXG4gICAgZGlmZiA9IGRpZmYgLyAzMDtcbiAgICBpZiAoZGlmZiA8IDIpIHtcbiAgICAgIHJldHVybiAnaW4gMSBtb250aCc7XG4gICAgfVxuICAgIGlmIChkaWZmIDwgMTIpIHtcbiAgICAgIHJldHVybiAnaW4gJyArIE1hdGguZmxvb3IoZGlmZikgKyAnIG1vbnRocyc7XG4gICAgfVxuICAgIC8vIFllYXJzXG4gICAgZGlmZiA9IGRpZmYgLyAxMjtcbiAgICBpZiAoZGlmZiA8IDIpIHtcbiAgICAgIHJldHVybiAnaW4gMSB5ZWFyJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdpbiAnICsgTWF0aC5mbG9vcihkaWZmKSArICcgeWVhcnMnO1xuICAgIH1cbiAgfVxufVxuIl19