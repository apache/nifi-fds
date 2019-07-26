/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        const { _el: { nativeElement } } = this;
        /** @type {?} */
        const enterFullScreenMap = {
            requestFullscreen: () => nativeElement.requestFullscreen(),
            // Chrome
            webkitRequestFullscreen: () => nativeElement.webkitRequestFullscreen(),
            // Safari 
            mozRequestFullScreen: () => nativeElement.mozRequestFullScreen(),
            // Firefox
            msRequestFullscreen: () => nativeElement.msRequestFullscreen(),
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
        const { _document, _el: { nativeElement } } = this;
        /** @type {?} */
        const exitFullScreenMap = {
            exitFullscreen: () => _document.exitFullscreen(),
            // Chrome
            webkitExitFullscreen: () => _document.webkitExitFullscreen(),
            // Safari
            mozCancelFullScreen: () => _document.mozCancelFullScreen(),
            // Firefox
            msExitFullscreen: () => _document.msExitFullscreen(),
        };
        for (const handler of Object.keys(exitFullScreenMap)) {
            if (_document[handler] && this._getFullScreenElement() === nativeElement) {
                exitFullScreenMap[handler]();
            }
        }
    }
    /**
     * @return {?}
     */
    _getFullScreenElement() {
        const { _document } = this;
        /** @type {?} */
        const tdFullScreenElementMap = {
            fullscreenElement: () => _document.fullscreenElement,
            // Chrome, Opera
            webkitFullscreenElement: () => _document.webkitFullscreenElement,
            // Safari
            mozFullscreenElement: () => _document.mozFullscreenElement,
            // Firefox
            msFullscreenElement: () => _document.msFullscreenElement,
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
    /** @type {?} */
    TdFullscreenDirective.prototype._document;
    /** @type {?} */
    TdFullscreenDirective.prototype._el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImNvbW1vbi9kaXJlY3RpdmVzL2Z1bGxzY3JlZW4vZnVsbHNjcmVlbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBRTNDLDBCQVFDOzs7SUFQQyx3Q0FBMkI7O0lBQzNCLDhDQUFpQzs7SUFDakMsMkNBQThCOztJQUM5QiwwQ0FBNkI7O0lBQzdCLDJDQUFpQzs7SUFDakMsMENBQWdDOztJQUNoQyx1Q0FBNkI7O0FBTy9CLE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBRWhDLFlBQXNDLFNBQXNCLEVBQVUsR0FBZTtRQUEvQyxjQUFTLEdBQVQsU0FBUyxDQUFhO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQURyRix1QkFBa0IsR0FBWSxLQUFLLENBQUM7SUFDb0QsQ0FBQzs7Ozs7SUFNbEYsZUFBZSxDQUFDLEtBQVk7UUFDakMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDOUUsQ0FBQzs7OztJQUVNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMscUJBQXFCLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0csQ0FBQzs7OztJQUVNLGVBQWU7Y0FDZCxFQUFFLEdBQUcsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEdBQTBCLElBQUk7O2NBQ3hELGtCQUFrQixHQUFXO1lBQ2pDLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRTs7WUFDMUQsdUJBQXVCLEVBQUUsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLHVCQUF1QixFQUFFOztZQUN0RSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLEVBQUU7O1lBQ2hFLG1CQUFtQixFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRTtTQUMvRDtRQUVELEtBQUssTUFBTSxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1lBQ3JELElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUMxQixrQkFBa0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2FBQy9CO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRU0sY0FBYztjQUNiLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEdBQTBCLElBQUk7O2NBQ25FLGlCQUFpQixHQUFXO1lBQ2hDLGNBQWMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFOztZQUNoRCxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEVBQUU7O1lBQzVELG1CQUFtQixFQUFFLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRTs7WUFDMUQsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFO1NBQ3JEO1FBRUQsS0FBSyxNQUFNLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7WUFDcEQsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLEtBQUssYUFBYSxFQUFFO2dCQUN4RSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2FBQzlCO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRU8scUJBQXFCO2NBQ3JCLEVBQUUsU0FBUyxFQUFFLEdBQTBCLElBQUk7O2NBQzNDLHNCQUFzQixHQUFXO1lBQ3JDLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUI7O1lBQ3BELHVCQUF1QixFQUFFLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUI7O1lBQ2hFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0I7O1lBQzFELG1CQUFtQixFQUFFLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUI7U0FDekQ7UUFDRCxLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsRUFBRTtZQUN2RCxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDcEIsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekI7U0FDRjtJQUNILENBQUM7OztZQWpFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLGNBQWM7YUFDekI7Ozs7NENBR2MsTUFBTSxTQUFDLFFBQVE7WUFuQkksVUFBVTs7OzhCQXFCekMsWUFBWSxTQUFDLDJCQUEyQixFQUFFLENBQUMsUUFBUSxDQUFDLGNBQ3BELFlBQVksU0FBQyxpQ0FBaUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUMxRCxZQUFZLFNBQUMsOEJBQThCLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FDdkQsWUFBWSxTQUFDLDZCQUE2QixFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBTnZELG1EQUFvQzs7SUFDeEIsMENBQWdEOztJQUFFLG9DQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW50ZXJmYWNlIElGc0RvY3VtZW50IGV4dGVuZHMgSFRNTERvY3VtZW50IHtcbiAgZnVsbHNjcmVlbkVsZW1lbnQ6IEVsZW1lbnQ7XG4gIHdlYmtpdEZ1bGxzY3JlZW5FbGVtZW50OiBFbGVtZW50O1xuICBtb3pGdWxsc2NyZWVuRWxlbWVudDogRWxlbWVudDtcbiAgbXNGdWxsc2NyZWVuRWxlbWVudDogRWxlbWVudDtcbiAgd2Via2l0RXhpdEZ1bGxzY3JlZW46ICgpID0+IHZvaWQ7XG4gIG1vekNhbmNlbEZ1bGxTY3JlZW46ICgpID0+IHZvaWQ7XG4gIG1zRXhpdEZ1bGxzY3JlZW46ICgpID0+IHZvaWQ7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZEZ1bGxTY3JlZW5dJyxcbiAgZXhwb3J0QXM6ICd0ZEZ1bGxTY3JlZW4nLFxufSlcbmV4cG9ydCBjbGFzcyBUZEZ1bGxzY3JlZW5EaXJlY3RpdmUge1xuICBmdWxsU2NyZWVuSXNBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IElGc0RvY3VtZW50LCBwcml2YXRlIF9lbDogRWxlbWVudFJlZikge31cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpmdWxsc2NyZWVuY2hhbmdlJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6d2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50Om1vemZ1bGxzY3JlZW5jaGFuZ2UnLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptc2Z1bGxzY3JlZW5jaGFuZ2UnLCBbJyRldmVudCddKVxuICBwdWJsaWMgZnNDaGFuZ2VIYW5kbGVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuZnVsbFNjcmVlbklzQWN0aXZlID0gZXZlbnQuc3JjRWxlbWVudCA9PT0gdGhpcy5fZ2V0RnVsbFNjcmVlbkVsZW1lbnQoKTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVGdWxsU2NyZWVuKCk6IHZvaWQge1xuICAgIHRoaXMuX2dldEZ1bGxTY3JlZW5FbGVtZW50KCkgPT09IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLmV4aXRGdWxsU2NyZWVuKCkgOiB0aGlzLmVudGVyRnVsbFNjcmVlbigpO1xuICB9XG5cbiAgcHVibGljIGVudGVyRnVsbFNjcmVlbigpOiB2b2lkIHtcbiAgICBjb25zdCB7IF9lbDogeyBuYXRpdmVFbGVtZW50IH0gfTogVGRGdWxsc2NyZWVuRGlyZWN0aXZlID0gdGhpcztcbiAgICBjb25zdCBlbnRlckZ1bGxTY3JlZW5NYXA6IG9iamVjdCA9IHtcbiAgICAgIHJlcXVlc3RGdWxsc2NyZWVuOiAoKSA9PiBuYXRpdmVFbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuKCksIC8vIENocm9tZVxuICAgICAgd2Via2l0UmVxdWVzdEZ1bGxzY3JlZW46ICgpID0+IG5hdGl2ZUVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKSwgLy8gU2FmYXJpIFxuICAgICAgbW96UmVxdWVzdEZ1bGxTY3JlZW46ICgpID0+IG5hdGl2ZUVsZW1lbnQubW96UmVxdWVzdEZ1bGxTY3JlZW4oKSwgLy8gRmlyZWZveFxuICAgICAgbXNSZXF1ZXN0RnVsbHNjcmVlbjogKCkgPT4gbmF0aXZlRWxlbWVudC5tc1JlcXVlc3RGdWxsc2NyZWVuKCksIC8vIElFXG4gICAgfTtcblxuICAgIGZvciAoY29uc3QgaGFuZGxlciBvZiBPYmplY3Qua2V5cyhlbnRlckZ1bGxTY3JlZW5NYXApKSB7XG4gICAgICBpZiAobmF0aXZlRWxlbWVudFtoYW5kbGVyXSkge1xuICAgICAgICBlbnRlckZ1bGxTY3JlZW5NYXBbaGFuZGxlcl0oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZXhpdEZ1bGxTY3JlZW4oKTogdm9pZCB7XG4gICAgY29uc3QgeyBfZG9jdW1lbnQsIF9lbDogeyBuYXRpdmVFbGVtZW50IH0gfTogVGRGdWxsc2NyZWVuRGlyZWN0aXZlID0gdGhpcztcbiAgICBjb25zdCBleGl0RnVsbFNjcmVlbk1hcDogb2JqZWN0ID0ge1xuICAgICAgZXhpdEZ1bGxzY3JlZW46ICgpID0+IF9kb2N1bWVudC5leGl0RnVsbHNjcmVlbigpLCAvLyBDaHJvbWVcbiAgICAgIHdlYmtpdEV4aXRGdWxsc2NyZWVuOiAoKSA9PiBfZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4oKSwgLy8gU2FmYXJpXG4gICAgICBtb3pDYW5jZWxGdWxsU2NyZWVuOiAoKSA9PiBfZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbigpLCAvLyBGaXJlZm94XG4gICAgICBtc0V4aXRGdWxsc2NyZWVuOiAoKSA9PiBfZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbigpLCAvLyBJRVxuICAgIH07XG5cbiAgICBmb3IgKGNvbnN0IGhhbmRsZXIgb2YgT2JqZWN0LmtleXMoZXhpdEZ1bGxTY3JlZW5NYXApKSB7XG4gICAgICBpZiAoX2RvY3VtZW50W2hhbmRsZXJdICYmIHRoaXMuX2dldEZ1bGxTY3JlZW5FbGVtZW50KCkgPT09IG5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgZXhpdEZ1bGxTY3JlZW5NYXBbaGFuZGxlcl0oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9nZXRGdWxsU2NyZWVuRWxlbWVudCgpOiBFbGVtZW50IHtcbiAgICBjb25zdCB7IF9kb2N1bWVudCB9OiBUZEZ1bGxzY3JlZW5EaXJlY3RpdmUgPSB0aGlzO1xuICAgIGNvbnN0IHRkRnVsbFNjcmVlbkVsZW1lbnRNYXA6IG9iamVjdCA9IHtcbiAgICAgIGZ1bGxzY3JlZW5FbGVtZW50OiAoKSA9PiBfZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQsIC8vIENocm9tZSwgT3BlcmFcbiAgICAgIHdlYmtpdEZ1bGxzY3JlZW5FbGVtZW50OiAoKSA9PiBfZG9jdW1lbnQud2Via2l0RnVsbHNjcmVlbkVsZW1lbnQsIC8vIFNhZmFyaVxuICAgICAgbW96RnVsbHNjcmVlbkVsZW1lbnQ6ICgpID0+IF9kb2N1bWVudC5tb3pGdWxsc2NyZWVuRWxlbWVudCwgLy8gRmlyZWZveFxuICAgICAgbXNGdWxsc2NyZWVuRWxlbWVudDogKCkgPT4gX2RvY3VtZW50Lm1zRnVsbHNjcmVlbkVsZW1lbnQsIC8vIElFLCBFZGdlXG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IHByb3BzIG9mIE9iamVjdC5rZXlzKHRkRnVsbFNjcmVlbkVsZW1lbnRNYXApKSB7XG4gICAgICBpZiAoX2RvY3VtZW50W3Byb3BzXSkge1xuICAgICAgICByZXR1cm4gX2RvY3VtZW50W3Byb3BzXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==