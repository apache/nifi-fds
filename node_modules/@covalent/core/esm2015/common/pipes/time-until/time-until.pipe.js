/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        let ref = new Date(reference);
        // If not a valid timestamp, return 'Invalid Date'
        if (!time.getTime()) {
            return 'Invalid Date';
        }
        // For unit testing, we need to be able to declare a static start time
        // for calculations, or else speed of tests can bork.
        /** @type {?} */
        let startTime = isNaN(ref.getTime()) ? Date.now() : ref.getTime();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS11bnRpbC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJjb21tb24vcGlwZXMvdGltZS11bnRpbC90aW1lLXVudGlsLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BELE1BQU0sT0FBTyxlQUFlOzs7Ozs7SUFDMUIsU0FBUyxDQUFDLElBQVMsRUFBRSxTQUFlO1FBQ2xDLDZDQUE2QztRQUM3QyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7O1lBQ2xCLEdBQUcsR0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFbkMsa0RBQWtEO1FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDbkIsT0FBTyxjQUFjLENBQUM7U0FDdkI7Ozs7WUFJRyxTQUFTLEdBQVcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7O1lBQ3JFLElBQUksR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUVsRSxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDWixPQUFPLGFBQWEsQ0FBQztTQUN0QjtRQUNELElBQUksSUFBSSxHQUFHLEVBQUUsRUFBRTtZQUNiLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDO1NBQzlDO1FBQ0QsVUFBVTtRQUNWLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNaLE9BQU8sYUFBYSxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO1lBQ2IsT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUM7U0FDOUM7UUFDRCxRQUFRO1FBQ1IsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ1osT0FBTyxXQUFXLENBQUM7U0FDcEI7UUFDRCxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7WUFDYixPQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztTQUM1QztRQUNELE9BQU87UUFDUCxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDWixPQUFPLFVBQVUsQ0FBQztTQUNuQjtRQUNELElBQUksSUFBSSxHQUFHLEVBQUUsRUFBRTtZQUNiLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDO1NBQzNDO1FBQ0QsU0FBUztRQUNULElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNaLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO1lBQ2IsT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUM7U0FDN0M7UUFDRCxRQUFRO1FBQ1IsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ1osT0FBTyxXQUFXLENBQUM7U0FDcEI7YUFBTTtZQUNMLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDO1NBQzVDO0lBQ0gsQ0FBQzs7O1lBaEVGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsV0FBVzthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAndGltZVVudGlsJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRUaW1lVW50aWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh0aW1lOiBhbnksIHJlZmVyZW5jZT86IGFueSk6IHN0cmluZyB7XG4gICAgLy8gQ29udmVydCB0aW1lIHRvIGRhdGUgb2JqZWN0IGlmIG5vdCBhbHJlYWR5XG4gICAgdGltZSA9IG5ldyBEYXRlKHRpbWUpO1xuICAgIGxldCByZWY6IERhdGUgPSBuZXcgRGF0ZShyZWZlcmVuY2UpO1xuXG4gICAgLy8gSWYgbm90IGEgdmFsaWQgdGltZXN0YW1wLCByZXR1cm4gJ0ludmFsaWQgRGF0ZSdcbiAgICBpZiAoIXRpbWUuZ2V0VGltZSgpKSB7XG4gICAgICByZXR1cm4gJ0ludmFsaWQgRGF0ZSc7XG4gICAgfVxuXG4gICAgLy8gRm9yIHVuaXQgdGVzdGluZywgd2UgbmVlZCB0byBiZSBhYmxlIHRvIGRlY2xhcmUgYSBzdGF0aWMgc3RhcnQgdGltZVxuICAgIC8vIGZvciBjYWxjdWxhdGlvbnMsIG9yIGVsc2Ugc3BlZWQgb2YgdGVzdHMgY2FuIGJvcmsuXG4gICAgbGV0IHN0YXJ0VGltZTogbnVtYmVyID0gaXNOYU4ocmVmLmdldFRpbWUoKSkgPyBEYXRlLm5vdygpIDogcmVmLmdldFRpbWUoKTtcbiAgICBsZXQgZGlmZjogbnVtYmVyID0gTWF0aC5mbG9vcigodGltZS5nZXRUaW1lKCkgLSBzdGFydFRpbWUpIC8gMTAwMCk7XG5cbiAgICBpZiAoZGlmZiA8IDIpIHtcbiAgICAgIHJldHVybiAnaW4gMSBzZWNvbmQnO1xuICAgIH1cbiAgICBpZiAoZGlmZiA8IDYwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyBNYXRoLmZsb29yKGRpZmYpICsgJyBzZWNvbmRzJztcbiAgICB9XG4gICAgLy8gTWludXRlc1xuICAgIGRpZmYgPSBkaWZmIC8gNjA7XG4gICAgaWYgKGRpZmYgPCAyKSB7XG4gICAgICByZXR1cm4gJ2luIDEgbWludXRlJztcbiAgICB9XG4gICAgaWYgKGRpZmYgPCA2MCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgTWF0aC5mbG9vcihkaWZmKSArICcgbWludXRlcyc7XG4gICAgfVxuICAgIC8vIEhvdXJzXG4gICAgZGlmZiA9IGRpZmYgLyA2MDtcbiAgICBpZiAoZGlmZiA8IDIpIHtcbiAgICAgIHJldHVybiAnaW4gMSBob3VyJztcbiAgICB9XG4gICAgaWYgKGRpZmYgPCAyNCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgTWF0aC5mbG9vcihkaWZmKSArICcgaG91cnMnO1xuICAgIH1cbiAgICAvLyBEYXlzXG4gICAgZGlmZiA9IGRpZmYgLyAyNDtcbiAgICBpZiAoZGlmZiA8IDIpIHtcbiAgICAgIHJldHVybiAnaW4gMSBkYXknO1xuICAgIH1cbiAgICBpZiAoZGlmZiA8IDMwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyBNYXRoLmZsb29yKGRpZmYpICsgJyBkYXlzJztcbiAgICB9XG4gICAgLy8gTW9udGhzXG4gICAgZGlmZiA9IGRpZmYgLyAzMDtcbiAgICBpZiAoZGlmZiA8IDIpIHtcbiAgICAgIHJldHVybiAnaW4gMSBtb250aCc7XG4gICAgfVxuICAgIGlmIChkaWZmIDwgMTIpIHtcbiAgICAgIHJldHVybiAnaW4gJyArIE1hdGguZmxvb3IoZGlmZikgKyAnIG1vbnRocyc7XG4gICAgfVxuICAgIC8vIFllYXJzXG4gICAgZGlmZiA9IGRpZmYgLyAxMjtcbiAgICBpZiAoZGlmZiA8IDIpIHtcbiAgICAgIHJldHVybiAnaW4gMSB5ZWFyJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdpbiAnICsgTWF0aC5mbG9vcihkaWZmKSArICcgeWVhcnMnO1xuICAgIH1cbiAgfVxufVxuIl19