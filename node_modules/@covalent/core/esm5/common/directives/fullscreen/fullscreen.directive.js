/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, HostListener, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
/**
 * @record
 */
function IFsDocument() { }
if (false) {
    /** @type {?} */
    IFsDocument.prototype.fullscreenElement;
    /** @type {?} */
    IFsDocument.prototype.webkitFullscreenElement;
    /** @type {?} */
    IFsDocument.prototype.mozFullscreenElement;
    /** @type {?} */
    IFsDocument.prototype.msFullscreenElement;
    /** @type {?} */
    IFsDocument.prototype.webkitExitFullscreen;
    /** @type {?} */
    IFsDocument.prototype.mozCancelFullScreen;
    /** @type {?} */
    IFsDocument.prototype.msExitFullscreen;
}
var TdFullscreenDirective = /** @class */ (function () {
    function TdFullscreenDirective(_document, _el) {
        this._document = _document;
        this._el = _el;
        this.fullScreenIsActive = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    TdFullscreenDirective.prototype.fsChangeHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.fullScreenIsActive = event.srcElement === this._getFullScreenElement();
    };
    /**
     * @return {?}
     */
    TdFullscreenDirective.prototype.toggleFullScreen = /**
     * @return {?}
     */
    function () {
        this._getFullScreenElement() === this._el.nativeElement ? this.exitFullScreen() : this.enterFullScreen();
    };
    /**
     * @return {?}
     */
    TdFullscreenDirective.prototype.enterFullScreen = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        var nativeElement = this._el.nativeElement;
        /** @type {?} */
        var enterFullScreenMap = {
            requestFullscreen: function () { return nativeElement.requestFullscreen(); },
            // Chrome
            webkitRequestFullscreen: function () { return nativeElement.webkitRequestFullscreen(); },
            // Safari 
            mozRequestFullScreen: function () { return nativeElement.mozRequestFullScreen(); },
            // Firefox
            msRequestFullscreen: function () { return nativeElement.msRequestFullscreen(); },
        };
        try {
            for (var _b = tslib_1.__values(Object.keys(enterFullScreenMap)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var handler = _c.value;
                if (nativeElement[handler]) {
                    enterFullScreenMap[handler]();
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @return {?}
     */
    TdFullscreenDirective.prototype.exitFullScreen = /**
     * @return {?}
     */
    function () {
        var e_2, _a;
        var _b = this, _document = _b._document, nativeElement = _b._el.nativeElement;
        /** @type {?} */
        var exitFullScreenMap = {
            exitFullscreen: function () { return _document.exitFullscreen(); },
            // Chrome
            webkitExitFullscreen: function () { return _document.webkitExitFullscreen(); },
            // Safari
            mozCancelFullScreen: function () { return _document.mozCancelFullScreen(); },
            // Firefox
            msExitFullscreen: function () { return _document.msExitFullscreen(); },
        };
        try {
            for (var _c = tslib_1.__values(Object.keys(exitFullScreenMap)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var handler = _d.value;
                if (_document[handler] && this._getFullScreenElement() === nativeElement) {
                    exitFullScreenMap[handler]();
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * @return {?}
     */
    TdFullscreenDirective.prototype._getFullScreenElement = /**
     * @return {?}
     */
    function () {
        var e_3, _a;
        var _document = this._document;
        /** @type {?} */
        var tdFullScreenElementMap = {
            fullscreenElement: function () { return _document.fullscreenElement; },
            // Chrome, Opera
            webkitFullscreenElement: function () { return _document.webkitFullscreenElement; },
            // Safari
            mozFullscreenElement: function () { return _document.mozFullscreenElement; },
            // Firefox
            msFullscreenElement: function () { return _document.msFullscreenElement; },
        };
        try {
            for (var _b = tslib_1.__values(Object.keys(tdFullScreenElementMap)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var props = _c.value;
                if (_document[props]) {
                    return _document[props];
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    TdFullscreenDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdFullScreen]',
                    exportAs: 'tdFullScreen',
                },] }
    ];
    /** @nocollapse */
    TdFullscreenDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: ElementRef }
    ]; };
    TdFullscreenDirective.propDecorators = {
        fsChangeHandler: [{ type: HostListener, args: ['document:fullscreenchange', ['$event'],] }, { type: HostListener, args: ['document:webkitfullscreenchange', ['$event'],] }, { type: HostListener, args: ['document:mozfullscreenchange', ['$event'],] }, { type: HostListener, args: ['document:msfullscreenchange', ['$event'],] }]
    };
    return TdFullscreenDirective;
}());
export { TdFullscreenDirective };
if (false) {
    /** @type {?} */
    TdFullscreenDirective.prototype.fullScreenIsActive;
    /** @type {?} */
    TdFullscreenDirective.prototype._document;
    /** @type {?} */
    TdFullscreenDirective.prototype._el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImNvbW1vbi9kaXJlY3RpdmVzL2Z1bGxzY3JlZW4vZnVsbHNjcmVlbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUUzQywwQkFRQzs7O0lBUEMsd0NBQTJCOztJQUMzQiw4Q0FBaUM7O0lBQ2pDLDJDQUE4Qjs7SUFDOUIsMENBQTZCOztJQUM3QiwyQ0FBaUM7O0lBQ2pDLDBDQUFnQzs7SUFDaEMsdUNBQTZCOztBQUcvQjtJQU1FLCtCQUFzQyxTQUFzQixFQUFVLEdBQWU7UUFBL0MsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFEckYsdUJBQWtCLEdBQVksS0FBSyxDQUFDO0lBQ29ELENBQUM7Ozs7O0lBTWxGLCtDQUFlOzs7O0lBSnRCLFVBSXVCLEtBQVk7UUFDakMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDOUUsQ0FBQzs7OztJQUVNLGdEQUFnQjs7O0lBQXZCO1FBQ0UsSUFBSSxDQUFDLHFCQUFxQixFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNHLENBQUM7Ozs7SUFFTSwrQ0FBZTs7O0lBQXRCOztRQUNpQixJQUFBLHNDQUFhOztZQUN0QixrQkFBa0IsR0FBVztZQUNqQyxpQkFBaUIsRUFBRSxjQUFNLE9B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LDRCQUFDO0NBQUEsQUFsRUQsSUFrRUM7U0E5RFkscUJBQXFCOzs7SUFDaEMsbURBQW9DOztJQUN4QiwwQ0FBZ0Q7O0lBQUUsb0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbnRlcmZhY2UgSUZzRG9jdW1lbnQgZXh0ZW5kcyBIVE1MRG9jdW1lbnQge1xuICBmdWxsc2NyZWVuRWxlbWVudDogRWxlbWVudDtcbiAgd2Via2l0RnVsbHNjcmVlbkVsZW1lbnQ6IEVsZW1lbnQ7XG4gIG1vekZ1bGxzY3JlZW5FbGVtZW50OiBFbGVtZW50O1xuICBtc0Z1bGxzY3JlZW5FbGVtZW50OiBFbGVtZW50O1xuICB3ZWJraXRFeGl0RnVsbHNjcmVlbjogKCkgPT4gdm9pZDtcbiAgbW96Q2FuY2VsRnVsbFNjcmVlbjogKCkgPT4gdm9pZDtcbiAgbXNFeGl0RnVsbHNjcmVlbjogKCkgPT4gdm9pZDtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkRnVsbFNjcmVlbl0nLFxuICBleHBvcnRBczogJ3RkRnVsbFNjcmVlbicsXG59KVxuZXhwb3J0IGNsYXNzIFRkRnVsbHNjcmVlbkRpcmVjdGl2ZSB7XG4gIGZ1bGxTY3JlZW5Jc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogSUZzRG9jdW1lbnQsIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmZ1bGxzY3JlZW5jaGFuZ2UnLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDp3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6bW96ZnVsbHNjcmVlbmNoYW5nZScsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50Om1zZnVsbHNjcmVlbmNoYW5nZScsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBmc0NoYW5nZUhhbmRsZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5mdWxsU2NyZWVuSXNBY3RpdmUgPSBldmVudC5zcmNFbGVtZW50ID09PSB0aGlzLl9nZXRGdWxsU2NyZWVuRWxlbWVudCgpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZUZ1bGxTY3JlZW4oKTogdm9pZCB7XG4gICAgdGhpcy5fZ2V0RnVsbFNjcmVlbkVsZW1lbnQoKSA9PT0gdGhpcy5fZWwubmF0aXZlRWxlbWVudCA/IHRoaXMuZXhpdEZ1bGxTY3JlZW4oKSA6IHRoaXMuZW50ZXJGdWxsU2NyZWVuKCk7XG4gIH1cblxuICBwdWJsaWMgZW50ZXJGdWxsU2NyZWVuKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgX2VsOiB7IG5hdGl2ZUVsZW1lbnQgfSB9OiBUZEZ1bGxzY3JlZW5EaXJlY3RpdmUgPSB0aGlzO1xuICAgIGNvbnN0IGVudGVyRnVsbFNjcmVlbk1hcDogb2JqZWN0ID0ge1xuICAgICAgcmVxdWVzdEZ1bGxzY3JlZW46ICgpID0+IG5hdGl2ZUVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4oKSwgLy8gQ2hyb21lXG4gICAgICB3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbjogKCkgPT4gbmF0aXZlRWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpLCAvLyBTYWZhcmkgXG4gICAgICBtb3pSZXF1ZXN0RnVsbFNjcmVlbjogKCkgPT4gbmF0aXZlRWxlbWVudC5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpLCAvLyBGaXJlZm94XG4gICAgICBtc1JlcXVlc3RGdWxsc2NyZWVuOiAoKSA9PiBuYXRpdmVFbGVtZW50Lm1zUmVxdWVzdEZ1bGxzY3JlZW4oKSwgLy8gSUVcbiAgICB9O1xuXG4gICAgZm9yIChjb25zdCBoYW5kbGVyIG9mIE9iamVjdC5rZXlzKGVudGVyRnVsbFNjcmVlbk1hcCkpIHtcbiAgICAgIGlmIChuYXRpdmVFbGVtZW50W2hhbmRsZXJdKSB7XG4gICAgICAgIGVudGVyRnVsbFNjcmVlbk1hcFtoYW5kbGVyXSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBleGl0RnVsbFNjcmVlbigpOiB2b2lkIHtcbiAgICBjb25zdCB7IF9kb2N1bWVudCwgX2VsOiB7IG5hdGl2ZUVsZW1lbnQgfSB9OiBUZEZ1bGxzY3JlZW5EaXJlY3RpdmUgPSB0aGlzO1xuICAgIGNvbnN0IGV4aXRGdWxsU2NyZWVuTWFwOiBvYmplY3QgPSB7XG4gICAgICBleGl0RnVsbHNjcmVlbjogKCkgPT4gX2RvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCksIC8vIENocm9tZVxuICAgICAgd2Via2l0RXhpdEZ1bGxzY3JlZW46ICgpID0+IF9kb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbigpLCAvLyBTYWZhcmlcbiAgICAgIG1vekNhbmNlbEZ1bGxTY3JlZW46ICgpID0+IF9kb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKCksIC8vIEZpcmVmb3hcbiAgICAgIG1zRXhpdEZ1bGxzY3JlZW46ICgpID0+IF9kb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKCksIC8vIElFXG4gICAgfTtcblxuICAgIGZvciAoY29uc3QgaGFuZGxlciBvZiBPYmplY3Qua2V5cyhleGl0RnVsbFNjcmVlbk1hcCkpIHtcbiAgICAgIGlmIChfZG9jdW1lbnRbaGFuZGxlcl0gJiYgdGhpcy5fZ2V0RnVsbFNjcmVlbkVsZW1lbnQoKSA9PT0gbmF0aXZlRWxlbWVudCkge1xuICAgICAgICBleGl0RnVsbFNjcmVlbk1hcFtoYW5kbGVyXSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldEZ1bGxTY3JlZW5FbGVtZW50KCk6IEVsZW1lbnQge1xuICAgIGNvbnN0IHsgX2RvY3VtZW50IH06IFRkRnVsbHNjcmVlbkRpcmVjdGl2ZSA9IHRoaXM7XG4gICAgY29uc3QgdGRGdWxsU2NyZWVuRWxlbWVudE1hcDogb2JqZWN0ID0ge1xuICAgICAgZnVsbHNjcmVlbkVsZW1lbnQ6ICgpID0+IF9kb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCwgLy8gQ2hyb21lLCBPcGVyYVxuICAgICAgd2Via2l0RnVsbHNjcmVlbkVsZW1lbnQ6ICgpID0+IF9kb2N1bWVudC53ZWJraXRGdWxsc2NyZWVuRWxlbWVudCwgLy8gU2FmYXJpXG4gICAgICBtb3pGdWxsc2NyZWVuRWxlbWVudDogKCkgPT4gX2RvY3VtZW50Lm1vekZ1bGxzY3JlZW5FbGVtZW50LCAvLyBGaXJlZm94XG4gICAgICBtc0Z1bGxzY3JlZW5FbGVtZW50OiAoKSA9PiBfZG9jdW1lbnQubXNGdWxsc2NyZWVuRWxlbWVudCwgLy8gSUUsIEVkZ2VcbiAgICB9O1xuICAgIGZvciAoY29uc3QgcHJvcHMgb2YgT2JqZWN0LmtleXModGRGdWxsU2NyZWVuRWxlbWVudE1hcCkpIHtcbiAgICAgIGlmIChfZG9jdW1lbnRbcHJvcHNdKSB7XG4gICAgICAgIHJldHVybiBfZG9jdW1lbnRbcHJvcHNdO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19