/**
 * @fileoverview added by tsickle
 * Generated from: directives/fullscreen/fullscreen.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class TdFullscreenDirective {
    /**
     * @param {?} _document
     * @param {?} _el
     */
    constructor(_document, _el) {
        this._document = _document;
        this._el = _el;
        this.fullScreenIsActive = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    fsChangeHandler(event) {
        this.fullScreenIsActive = event.srcElement === this._getFullScreenElement();
    }
    /**
     * @return {?}
     */
    toggleFullScreen() {
        this._getFullScreenElement() === this._el.nativeElement ? this.exitFullScreen() : this.enterFullScreen();
    }
    /**
     * @return {?}
     */
    enterFullScreen() {
        const { _el: { nativeElement }, } = this;
        /** @type {?} */
        const enterFullScreenMap = {
            requestFullscreen: (/**
             * @return {?}
             */
            () => nativeElement.requestFullscreen()),
            // Chrome
            webkitRequestFullscreen: (/**
             * @return {?}
             */
            () => nativeElement.webkitRequestFullscreen()),
            // Safari
            mozRequestFullScreen: (/**
             * @return {?}
             */
            () => nativeElement.mozRequestFullScreen()),
            // Firefox
            msRequestFullscreen: (/**
             * @return {?}
             */
            () => nativeElement.msRequestFullscreen()),
        };
        for (const handler of Object.keys(enterFullScreenMap)) {
            if (nativeElement[handler]) {
                enterFullScreenMap[handler]();
            }
        }
    }
    /**
     * @return {?}
     */
    exitFullScreen() {
        const { _document, _el: { nativeElement }, } = this;
        /** @type {?} */
        const exitFullScreenMap = {
            exitFullscreen: (/**
             * @return {?}
             */
            () => _document.exitFullscreen()),
            // Chrome
            webkitExitFullscreen: (/**
             * @return {?}
             */
            () => _document.webkitExitFullscreen()),
            // Safari
            mozCancelFullScreen: (/**
             * @return {?}
             */
            () => _document.mozCancelFullScreen()),
            // Firefox
            msExitFullscreen: (/**
             * @return {?}
             */
            () => _document.msExitFullscreen()),
        };
        for (const handler of Object.keys(exitFullScreenMap)) {
            if (_document[handler] && this._getFullScreenElement() === nativeElement) {
                exitFullScreenMap[handler]();
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    _getFullScreenElement() {
        const { _document } = this;
        /** @type {?} */
        const tdFullScreenElementMap = {
            fullscreenElement: (/**
             * @return {?}
             */
            () => _document.fullscreenElement),
            // Chrome, Opera
            webkitFullscreenElement: (/**
             * @return {?}
             */
            () => _document.webkitFullscreenElement),
            // Safari
            mozFullscreenElement: (/**
             * @return {?}
             */
            () => _document.mozFullscreenElement),
            // Firefox
            msFullscreenElement: (/**
             * @return {?}
             */
            () => _document.msFullscreenElement),
        };
        for (const props of Object.keys(tdFullScreenElementMap)) {
            if (_document[props]) {
                return _document[props];
            }
        }
    }
}
TdFullscreenDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdFullScreen]',
                exportAs: 'tdFullScreen',
            },] }
];
/** @nocollapse */
TdFullscreenDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ElementRef }
];
TdFullscreenDirective.propDecorators = {
    fsChangeHandler: [{ type: HostListener, args: ['document:fullscreenchange', ['$event'],] }, { type: HostListener, args: ['document:webkitfullscreenchange', ['$event'],] }, { type: HostListener, args: ['document:mozfullscreenchange', ['$event'],] }, { type: HostListener, args: ['document:msfullscreenchange', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    TdFullscreenDirective.prototype.fullScreenIsActive;
    /**
     * @type {?}
     * @private
     */
    TdFullscreenDirective.prototype._document;
    /**
     * @type {?}
     * @private
     */
    TdFullscreenDirective.prototype._el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2NvcmUvY29tbW9uLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9mdWxsc2NyZWVuL2Z1bGxzY3JlZW4uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFFM0MsMEJBUUM7OztJQVBDLHdDQUEyQjs7SUFDM0IsOENBQWlDOztJQUNqQywyQ0FBOEI7O0lBQzlCLDBDQUE2Qjs7SUFDN0IsMkNBQWlDOztJQUNqQywwQ0FBZ0M7O0lBQ2hDLHVDQUE2Qjs7QUFPL0IsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7SUFFaEMsWUFBc0MsU0FBc0IsRUFBVSxHQUFlO1FBQS9DLGNBQVMsR0FBVCxTQUFTLENBQWE7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBRHJGLHVCQUFrQixHQUFZLEtBQUssQ0FBQztJQUNvRCxDQUFDOzs7OztJQU1sRixlQUFlLENBQUMsS0FBWTtRQUNqQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUM5RSxDQUFDOzs7O0lBRU0sZ0JBQWdCO1FBQ3JCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzRyxDQUFDOzs7O0lBRU0sZUFBZTtjQUNkLEVBQ0osR0FBRyxFQUFFLEVBQUUsYUFBYSxFQUFFLEdBQ3ZCLEdBQTBCLElBQUk7O2NB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LCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbnRlcmZhY2UgSUZzRG9jdW1lbnQgZXh0ZW5kcyBIVE1MRG9jdW1lbnQge1xuICBmdWxsc2NyZWVuRWxlbWVudDogRWxlbWVudDtcbiAgd2Via2l0RnVsbHNjcmVlbkVsZW1lbnQ6IEVsZW1lbnQ7XG4gIG1vekZ1bGxzY3JlZW5FbGVtZW50OiBFbGVtZW50O1xuICBtc0Z1bGxzY3JlZW5FbGVtZW50OiBFbGVtZW50O1xuICB3ZWJraXRFeGl0RnVsbHNjcmVlbjogKCkgPT4gdm9pZDtcbiAgbW96Q2FuY2VsRnVsbFNjcmVlbjogKCkgPT4gdm9pZDtcbiAgbXNFeGl0RnVsbHNjcmVlbjogKCkgPT4gdm9pZDtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkRnVsbFNjcmVlbl0nLFxuICBleHBvcnRBczogJ3RkRnVsbFNjcmVlbicsXG59KVxuZXhwb3J0IGNsYXNzIFRkRnVsbHNjcmVlbkRpcmVjdGl2ZSB7XG4gIGZ1bGxTY3JlZW5Jc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogSUZzRG9jdW1lbnQsIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmZ1bGxzY3JlZW5jaGFuZ2UnLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDp3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6bW96ZnVsbHNjcmVlbmNoYW5nZScsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50Om1zZnVsbHNjcmVlbmNoYW5nZScsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBmc0NoYW5nZUhhbmRsZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5mdWxsU2NyZWVuSXNBY3RpdmUgPSBldmVudC5zcmNFbGVtZW50ID09PSB0aGlzLl9nZXRGdWxsU2NyZWVuRWxlbWVudCgpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZUZ1bGxTY3JlZW4oKTogdm9pZCB7XG4gICAgdGhpcy5fZ2V0RnVsbFNjcmVlbkVsZW1lbnQoKSA9PT0gdGhpcy5fZWwubmF0aXZlRWxlbWVudCA/IHRoaXMuZXhpdEZ1bGxTY3JlZW4oKSA6IHRoaXMuZW50ZXJGdWxsU2NyZWVuKCk7XG4gIH1cblxuICBwdWJsaWMgZW50ZXJGdWxsU2NyZWVuKCk6IHZvaWQge1xuICAgIGNvbnN0IHtcbiAgICAgIF9lbDogeyBuYXRpdmVFbGVtZW50IH0sXG4gICAgfTogVGRGdWxsc2NyZWVuRGlyZWN0aXZlID0gdGhpcztcbiAgICBjb25zdCBlbnRlckZ1bGxTY3JlZW5NYXA6IG9iamVjdCA9IHtcbiAgICAgIHJlcXVlc3RGdWxsc2NyZWVuOiAoKSA9PiBuYXRpdmVFbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuKCksIC8vIENocm9tZVxuICAgICAgd2Via2l0UmVxdWVzdEZ1bGxzY3JlZW46ICgpID0+IG5hdGl2ZUVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKSwgLy8gU2FmYXJpXG4gICAgICBtb3pSZXF1ZXN0RnVsbFNjcmVlbjogKCkgPT4gbmF0aXZlRWxlbWVudC5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpLCAvLyBGaXJlZm94XG4gICAgICBtc1JlcXVlc3RGdWxsc2NyZWVuOiAoKSA9PiBuYXRpdmVFbGVtZW50Lm1zUmVxdWVzdEZ1bGxzY3JlZW4oKSwgLy8gSUVcbiAgICB9O1xuXG4gICAgZm9yIChjb25zdCBoYW5kbGVyIG9mIE9iamVjdC5rZXlzKGVudGVyRnVsbFNjcmVlbk1hcCkpIHtcbiAgICAgIGlmIChuYXRpdmVFbGVtZW50W2hhbmRsZXJdKSB7XG4gICAgICAgIGVudGVyRnVsbFNjcmVlbk1hcFtoYW5kbGVyXSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBleGl0RnVsbFNjcmVlbigpOiB2b2lkIHtcbiAgICBjb25zdCB7XG4gICAgICBfZG9jdW1lbnQsXG4gICAgICBfZWw6IHsgbmF0aXZlRWxlbWVudCB9LFxuICAgIH06IFRkRnVsbHNjcmVlbkRpcmVjdGl2ZSA9IHRoaXM7XG4gICAgY29uc3QgZXhpdEZ1bGxTY3JlZW5NYXA6IG9iamVjdCA9IHtcbiAgICAgIGV4aXRGdWxsc2NyZWVuOiAoKSA9PiBfZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKSwgLy8gQ2hyb21lXG4gICAgICB3ZWJraXRFeGl0RnVsbHNjcmVlbjogKCkgPT4gX2RvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKCksIC8vIFNhZmFyaVxuICAgICAgbW96Q2FuY2VsRnVsbFNjcmVlbjogKCkgPT4gX2RvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4oKSwgLy8gRmlyZWZveFxuICAgICAgbXNFeGl0RnVsbHNjcmVlbjogKCkgPT4gX2RvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4oKSwgLy8gSUVcbiAgICB9O1xuXG4gICAgZm9yIChjb25zdCBoYW5kbGVyIG9mIE9iamVjdC5rZXlzKGV4aXRGdWxsU2NyZWVuTWFwKSkge1xuICAgICAgaWYgKF9kb2N1bWVudFtoYW5kbGVyXSAmJiB0aGlzLl9nZXRGdWxsU2NyZWVuRWxlbWVudCgpID09PSBuYXRpdmVFbGVtZW50KSB7XG4gICAgICAgIGV4aXRGdWxsU2NyZWVuTWFwW2hhbmRsZXJdKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RnVsbFNjcmVlbkVsZW1lbnQoKTogRWxlbWVudCB7XG4gICAgY29uc3QgeyBfZG9jdW1lbnQgfTogVGRGdWxsc2NyZWVuRGlyZWN0aXZlID0gdGhpcztcbiAgICBjb25zdCB0ZEZ1bGxTY3JlZW5FbGVtZW50TWFwOiBvYmplY3QgPSB7XG4gICAgICBmdWxsc2NyZWVuRWxlbWVudDogKCkgPT4gX2RvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50LCAvLyBDaHJvbWUsIE9wZXJhXG4gICAgICB3ZWJraXRGdWxsc2NyZWVuRWxlbWVudDogKCkgPT4gX2RvY3VtZW50LndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50LCAvLyBTYWZhcmlcbiAgICAgIG1vekZ1bGxzY3JlZW5FbGVtZW50OiAoKSA9PiBfZG9jdW1lbnQubW96RnVsbHNjcmVlbkVsZW1lbnQsIC8vIEZpcmVmb3hcbiAgICAgIG1zRnVsbHNjcmVlbkVsZW1lbnQ6ICgpID0+IF9kb2N1bWVudC5tc0Z1bGxzY3JlZW5FbGVtZW50LCAvLyBJRSwgRWRnZVxuICAgIH07XG4gICAgZm9yIChjb25zdCBwcm9wcyBvZiBPYmplY3Qua2V5cyh0ZEZ1bGxTY3JlZW5FbGVtZW50TWFwKSkge1xuICAgICAgaWYgKF9kb2N1bWVudFtwcm9wc10pIHtcbiAgICAgICAgcmV0dXJuIF9kb2N1bWVudFtwcm9wc107XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=