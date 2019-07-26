/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
/** @enum {string} */
const LoadingType = {
    Circular: 'circular',
    Linear: 'linear',
};
export { LoadingType };
/** @enum {string} */
const LoadingMode = {
    Determinate: 'determinate',
    Indeterminate: 'indeterminate',
};
export { LoadingMode };
/** @enum {string} */
const LoadingStrategy = {
    Overlay: 'overlay',
    Replace: 'replace',
};
export { LoadingStrategy };
/** @enum {string} */
const LoadingStyle = {
    FullScreen: 'fullscreen',
    Overlay: 'overlay',
    None: 'none',
};
export { LoadingStyle };
import { tdFadeInOutAnimation } from '@covalent/core/common';
/** @type {?} */
export const TD_CIRCLE_DIAMETER = 100;
export class TdLoadingComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _changeDetectorRef
     */
    constructor(_elementRef, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._animationIn = new Subject();
        this._animationOut = new Subject();
        this._mode = LoadingMode.Indeterminate;
        this._defaultMode = LoadingMode.Indeterminate;
        this._value = 0;
        this._circleDiameter = TD_CIRCLE_DIAMETER;
        /**
         * Flag for animation
         */
        this.animation = false;
        this.style = LoadingStyle.None;
        /**
         * type: LoadingType
         * Sets type of [TdLoadingComponent] rendered.
         */
        this.type = LoadingType.Circular;
        /**
         * color: primary' | 'accent' | 'warn'
         * Sets theme color of [TdLoadingComponent] rendered.
         */
        this.color = 'primary';
    }
    /**
     * Sets mode of [TdLoadingComponent] to LoadingMode.Determinate or LoadingMode.Indeterminate
     * @param {?} mode
     * @return {?}
     */
    set mode(mode) {
        this._defaultMode = mode;
    }
    /**
     * @return {?}
     */
    get mode() {
        return this._mode;
    }
    /**
     * Sets value of [TdLoadingComponent] if mode is 'LoadingMode.Determinate'
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
        // Check for changes for `OnPush` change detection
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        // When overlay is used and the host width has a value greater than 1px
        // set the circle diameter when possible incase the loading component was rendered in a hidden state
        if (this.isOverlay() && this._hostHeight() > 1) {
            if (this.animation) {
                this._setCircleDiameter();
                this._changeDetectorRef.markForCheck();
            }
        }
    }
    /**
     * @return {?}
     */
    getHeight() {
        // Ignore height if style is `overlay` or `fullscreen`.
        // Add height if child elements have a height and style is `none`, else return default height.
        if (this.isOverlay() || this.isFullScreen()) {
            return undefined;
        }
        else {
            return this.height ? `${this.height}px` : '150px';
        }
    }
    /**
     * @return {?}
     */
    getCircleDiameter() {
        return this._circleDiameter;
    }
    /**
     * @return {?}
     */
    getCircleStrokeWidth() {
        // we calculate the stroke width by setting it as 10% of its diameter
        /** @type {?} */
        let strokeWidth = this.getCircleDiameter() / 10;
        return Math.abs(strokeWidth);
    }
    /**
     * @return {?}
     */
    isCircular() {
        return this.type === LoadingType.Circular;
    }
    /**
     * @return {?}
     */
    isLinear() {
        return this.type === LoadingType.Linear;
    }
    /**
     * @return {?}
     */
    isFullScreen() {
        return this.style === LoadingStyle.FullScreen;
    }
    /**
     * @return {?}
     */
    isOverlay() {
        return this.style === LoadingStyle.Overlay;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    animationComplete(event) {
        // Check to see if its "in" or "out" animation to execute the proper callback
        if (!event.fromState) {
            this.inAnimationCompleted();
        }
        else {
            this.outAnimationCompleted();
        }
    }
    /**
     * @return {?}
     */
    inAnimationCompleted() {
        this._animationIn.next(undefined);
    }
    /**
     * @return {?}
     */
    outAnimationCompleted() {
        /* little hack to reset the loader value and animation before removing it from DOM
         * else, the loader will appear with prev value when its registered again
         * and will do an animation going prev value to 0.
         */
        this.value = 0;
        // Check for changes for `OnPush` change detection
        this._changeDetectorRef.markForCheck();
        this._animationOut.next(undefined);
    }
    /**
     * Starts in animation and returns an observable for completition event.
     * @return {?}
     */
    startInAnimation() {
        /* need to switch back to the selected mode, so we have saved it in another variable
        *  and then recover it. (issue with protractor)
        */
        this._mode = this._defaultMode;
        // Set values before the animations starts
        this._setCircleDiameter();
        // Check for changes for `OnPush` change detection
        this.animation = true;
        this._changeDetectorRef.markForCheck();
        return this._animationIn.asObservable();
    }
    /**
     * Starts out animation and returns an observable for completition event.
     * @return {?}
     */
    startOutAnimation() {
        this.animation = false;
        /* need to switch back and forth from determinate/indeterminate so the setInterval()
        * inside mat-progress-spinner stops and protractor doesnt timeout waiting to sync.
        */
        this._mode = LoadingMode.Determinate;
        // Check for changes for `OnPush` change detection
        this._changeDetectorRef.markForCheck();
        return this._animationOut.asObservable();
    }
    /**
     * Calculate the proper diameter for the circle and set it
     * @return {?}
     */
    _setCircleDiameter() {
        // we set a default diameter of 100 since this is the default in material
        /** @type {?} */
        let diameter = TD_CIRCLE_DIAMETER;
        // if height is provided, then we take that as diameter
        if (this.height) {
            diameter = this.height;
            // else if its not provided, then we take the host height
        }
        else if (this.height === undefined) {
            diameter = this._hostHeight();
        }
        // if the diameter is over TD_CIRCLE_DIAMETER, we set TD_CIRCLE_DIAMETER
        if (!!diameter && diameter <= TD_CIRCLE_DIAMETER) {
            this._circleDiameter = Math.floor(diameter);
        }
        else {
            this._circleDiameter = TD_CIRCLE_DIAMETER;
        }
    }
    /**
     * Returns the host height of the loading component
     * @return {?}
     */
    _hostHeight() {
        if ((/** @type {?} */ (this._elementRef.nativeElement))) {
            return ((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().height;
        }
        return 0;
    }
}
TdLoadingComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-loading',
                template: "<div class=\"td-loading-wrapper\"\n    [style.min-height]=\"getHeight()\"\n    [class.td-overlay-circular]=\"(isOverlay() || isFullScreen()) && !isLinear()\"\n    [class.td-overlay]=\"isOverlay() || isFullScreen()\" \n    [class.td-fullscreen]=\"isFullScreen()\">\n  <div [@tdFadeInOut]=\"animation\"\n     (@tdFadeInOut.done)=\"animationComplete($event)\"\n     [style.min-height]=\"getHeight()\"\n     class=\"td-loading\">\n    <mat-progress-spinner *ngIf=\"isCircular()\" \n                        [mode]=\"mode\"\n                        [value]=\"value\" \n                        [color]=\"color\" \n                        [diameter]=\"getCircleDiameter()\"\n                        [strokeWidth]=\"getCircleStrokeWidth()\">\n    </mat-progress-spinner>\n    <mat-progress-bar *ngIf=\"isLinear()\" \n                     [mode]=\"mode\"\n                     [value]=\"value\"\n                     [color]=\"color\">\n    </mat-progress-bar>\n  </div>\n  <ng-template [cdkPortalOutlet]=\"content\"></ng-template>\n</div>",
                animations: [
                    tdFadeInOutAnimation,
                ],
                styles: [".td-loading-wrapper{position:relative;display:block}.td-loading-wrapper.td-fullscreen{position:inherit}.td-loading-wrapper .td-loading{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:1;-ms-flex:1;flex:1}.td-loading-wrapper.td-overlay .td-loading{position:absolute;margin:0;top:0;left:0;right:0;z-index:1000}.td-loading-wrapper.td-overlay .td-loading mat-progress-bar{position:absolute;top:0;left:0;right:0}.td-loading-wrapper.td-overlay-circular .td-loading{bottom:0}"]
            }] }
];
/** @nocollapse */
TdLoadingComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
if (false) {
    /** @type {?} */
    TdLoadingComponent.prototype._animationIn;
    /** @type {?} */
    TdLoadingComponent.prototype._animationOut;
    /** @type {?} */
    TdLoadingComponent.prototype._mode;
    /** @type {?} */
    TdLoadingComponent.prototype._defaultMode;
    /** @type {?} */
    TdLoadingComponent.prototype._value;
    /** @type {?} */
    TdLoadingComponent.prototype._circleDiameter;
    /**
     * Flag for animation
     * @type {?}
     */
    TdLoadingComponent.prototype.animation;
    /**
     * Content injected into loading component.
     * @type {?}
     */
    TdLoadingComponent.prototype.content;
    /** @type {?} */
    TdLoadingComponent.prototype.style;
    /**
     * height: number
     * Sets height of [TdLoadingComponent].
     * @type {?}
     */
    TdLoadingComponent.prototype.height;
    /**
     * type: LoadingType
     * Sets type of [TdLoadingComponent] rendered.
     * @type {?}
     */
    TdLoadingComponent.prototype.type;
    /**
     * color: primary' | 'accent' | 'warn'
     * Sets theme color of [TdLoadingComponent] rendered.
     * @type {?}
     */
    TdLoadingComponent.prototype.color;
    /** @type {?} */
    TdLoadingComponent.prototype._elementRef;
    /** @type {?} */
    TdLoadingComponent.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9sb2FkaW5nLyIsInNvdXJjZXMiOlsibG9hZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQTBCLGlCQUFpQixFQUEyQixVQUFVLEVBQVcsTUFBTSxlQUFlLENBQUM7QUFHbkksT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0lBR3pDLFVBQVcsVUFBVTtJQUNyQixRQUFTLFFBQVE7Ozs7O0lBSWpCLGFBQWMsYUFBYTtJQUMzQixlQUFnQixlQUFlOzs7OztJQUkvQixTQUFVLFNBQVM7SUFDbkIsU0FBVSxTQUFTOzs7OztJQUluQixZQUFhLFlBQVk7SUFDekIsU0FBVSxTQUFTO0lBQ25CLE1BQU8sTUFBTTs7O0FBR2YsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRTdELE1BQU0sT0FBTyxrQkFBa0IsR0FBVyxHQUFHO0FBVTdDLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBNkQ3QixZQUFvQixXQUF1QixFQUN2QixrQkFBcUM7UUFEckMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQTVEakQsaUJBQVksR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUNoRCxrQkFBYSxHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ2pELFVBQUssR0FBZ0IsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUMvQyxpQkFBWSxHQUFnQixXQUFXLENBQUMsYUFBYSxDQUFDO1FBQ3RELFdBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsb0JBQWUsR0FBVyxrQkFBa0IsQ0FBQzs7OztRQUtyRCxjQUFTLEdBQVksS0FBSyxDQUFDO1FBNkIzQixVQUFLLEdBQWlCLFlBQVksQ0FBQyxJQUFJLENBQUM7Ozs7O1FBWXhDLFNBQUks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SSxtQkFBYSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBQSxFQUFFO1lBQy9DLE9BQU8sQ0FBQyxtQkFBYSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBQSxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxNQUFNLENBQUM7U0FDckY7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7OztZQTFNRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBRXRCLGloQ0FBdUM7Z0JBQ3ZDLFVBQVUsRUFBRTtvQkFDVixvQkFBb0I7aUJBQ3JCOzthQUNGOzs7O1lBckN1RixVQUFVO1lBQXRELGlCQUFpQjs7OztJQXdDM0QsMENBQXdEOztJQUN4RCwyQ0FBeUQ7O0lBQ3pELG1DQUF1RDs7SUFDdkQsMENBQThEOztJQUM5RCxvQ0FBMkI7O0lBQzNCLDZDQUFxRDs7Ozs7SUFLckQsdUNBQTJCOzs7OztJQUszQixxQ0FBNkI7O0lBd0I3QixtQ0FBd0M7Ozs7OztJQU14QyxvQ0FBZTs7Ozs7O0lBTWYsa0NBQXlDOzs7Ozs7SUFNekMsbUNBQWlEOztJQUVyQyx5Q0FBK0I7O0lBQy9CLGdEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBUZW1wbGF0ZVJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBFbGVtZW50UmVmLCBEb0NoZWNrIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmltYXRpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGVudW0gTG9hZGluZ1R5cGUge1xuICBDaXJjdWxhciA9ICdjaXJjdWxhcicsXG4gIExpbmVhciA9ICdsaW5lYXInLFxufVxuXG5leHBvcnQgZW51bSBMb2FkaW5nTW9kZSB7XG4gIERldGVybWluYXRlID0gJ2RldGVybWluYXRlJyxcbiAgSW5kZXRlcm1pbmF0ZSA9ICdpbmRldGVybWluYXRlJyxcbn1cblxuZXhwb3J0IGVudW0gTG9hZGluZ1N0cmF0ZWd5IHtcbiAgT3ZlcmxheSA9ICdvdmVybGF5JyxcbiAgUmVwbGFjZSA9ICdyZXBsYWNlJyxcbn1cblxuZXhwb3J0IGVudW0gTG9hZGluZ1N0eWxlIHtcbiAgRnVsbFNjcmVlbiA9ICdmdWxsc2NyZWVuJyxcbiAgT3ZlcmxheSA9ICdvdmVybGF5JyxcbiAgTm9uZSA9ICdub25lJyxcbn1cblxuaW1wb3J0IHsgdGRGYWRlSW5PdXRBbmltYXRpb24gfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5leHBvcnQgY29uc3QgVERfQ0lSQ0xFX0RJQU1FVEVSOiBudW1iZXIgPSAxMDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWxvYWRpbmcnLFxuICBzdHlsZVVybHM6IFsnLi9sb2FkaW5nLmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGluZy5jb21wb25lbnQuaHRtbCcsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0ZEZhZGVJbk91dEFuaW1hdGlvbixcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRMb2FkaW5nQ29tcG9uZW50IGltcGxlbWVudHMgRG9DaGVjayB7XG5cbiAgcHJpdmF0ZSBfYW5pbWF0aW9uSW46IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJpdmF0ZSBfYW5pbWF0aW9uT3V0OiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByaXZhdGUgX21vZGU6IExvYWRpbmdNb2RlID0gTG9hZGluZ01vZGUuSW5kZXRlcm1pbmF0ZTtcbiAgcHJpdmF0ZSBfZGVmYXVsdE1vZGU6IExvYWRpbmdNb2RlID0gTG9hZGluZ01vZGUuSW5kZXRlcm1pbmF0ZTtcbiAgcHJpdmF0ZSBfdmFsdWU6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX2NpcmNsZURpYW1ldGVyOiBudW1iZXIgPSBURF9DSVJDTEVfRElBTUVURVI7XG5cbiAgLyoqXG4gICAqIEZsYWcgZm9yIGFuaW1hdGlvblxuICAgKi9cbiAgYW5pbWF0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIENvbnRlbnQgaW5qZWN0ZWQgaW50byBsb2FkaW5nIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbnRlbnQ6IFRlbXBsYXRlUG9ydGFsPGFueT47XG5cbiAgLyoqXG4gICAqIFNldHMgbW9kZSBvZiBbVGRMb2FkaW5nQ29tcG9uZW50XSB0byBMb2FkaW5nTW9kZS5EZXRlcm1pbmF0ZSBvciBMb2FkaW5nTW9kZS5JbmRldGVybWluYXRlXG4gICAqL1xuICBzZXQgbW9kZShtb2RlOiBMb2FkaW5nTW9kZSkge1xuICAgIHRoaXMuX2RlZmF1bHRNb2RlID0gbW9kZTtcbiAgfVxuICBnZXQgbW9kZSgpOiBMb2FkaW5nTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB2YWx1ZSBvZiBbVGRMb2FkaW5nQ29tcG9uZW50XSBpZiBtb2RlIGlzICdMb2FkaW5nTW9kZS5EZXRlcm1pbmF0ZSdcbiAgICovXG4gIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAvLyBDaGVjayBmb3IgY2hhbmdlcyBmb3IgYE9uUHVzaGAgY2hhbmdlIGRldGVjdGlvblxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIGdldCB2YWx1ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHN0eWxlOiBMb2FkaW5nU3R5bGUgPSBMb2FkaW5nU3R5bGUuTm9uZTtcblxuICAvKipcbiAgICogaGVpZ2h0OiBudW1iZXJcbiAgICogU2V0cyBoZWlnaHQgb2YgW1RkTG9hZGluZ0NvbXBvbmVudF0uXG4gICAqL1xuICBoZWlnaHQ6IG51bWJlcjtcblxuICAvKipcbiAgICogdHlwZTogTG9hZGluZ1R5cGVcbiAgICogU2V0cyB0eXBlIG9mIFtUZExvYWRpbmdDb21wb25lbnRdIHJlbmRlcmVkLlxuICAgKi9cbiAgdHlwZTogTG9hZGluZ1R5cGUgPSBMb2FkaW5nVHlwZS5DaXJjdWxhcjtcblxuICAvKipcbiAgICogY29sb3I6IHByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2FybidcbiAgICogU2V0cyB0aGVtZSBjb2xvciBvZiBbVGRMb2FkaW5nQ29tcG9uZW50XSByZW5kZXJlZC5cbiAgICovXG4gIGNvbG9yOiAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJyA9ICdwcmltYXJ5JztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIC8vIFdoZW4gb3ZlcmxheSBpcyB1c2VkIGFuZCB0aGUgaG9zdCB3aWR0aCBoYXMgYSB2YWx1ZSBncmVhdGVyIHRoYW4gMXB4XG4gICAgLy8gc2V0IHRoZSBjaXJjbGUgZGlhbWV0ZXIgd2hlbiBwb3NzaWJsZSBpbmNhc2UgdGhlIGxvYWRpbmcgY29tcG9uZW50IHdhcyByZW5kZXJlZCBpbiBhIGhpZGRlbiBzdGF0ZVxuICAgIGlmICh0aGlzLmlzT3ZlcmxheSgpICYmIHRoaXMuX2hvc3RIZWlnaHQoKSA+IDEpIHtcbiAgICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xuICAgICAgICB0aGlzLl9zZXRDaXJjbGVEaWFtZXRlcigpO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRIZWlnaHQoKTogc3RyaW5nIHtcbiAgICAvLyBJZ25vcmUgaGVpZ2h0IGlmIHN0eWxlIGlzIGBvdmVybGF5YCBvciBgZnVsbHNjcmVlbmAuXG4gICAgLy8gQWRkIGhlaWdodCBpZiBjaGlsZCBlbGVtZW50cyBoYXZlIGEgaGVpZ2h0IGFuZCBzdHlsZSBpcyBgbm9uZWAsIGVsc2UgcmV0dXJuIGRlZmF1bHQgaGVpZ2h0LlxuICAgIGlmICh0aGlzLmlzT3ZlcmxheSgpIHx8IHRoaXMuaXNGdWxsU2NyZWVuKCkpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmhlaWdodCA/IGAke3RoaXMuaGVpZ2h0fXB4YCA6ICcxNTBweCc7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2lyY2xlRGlhbWV0ZXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY2lyY2xlRGlhbWV0ZXI7XG4gIH1cblxuICBnZXRDaXJjbGVTdHJva2VXaWR0aCgpOiBudW1iZXIge1xuICAgIC8vIHdlIGNhbGN1bGF0ZSB0aGUgc3Ryb2tlIHdpZHRoIGJ5IHNldHRpbmcgaXQgYXMgMTAlIG9mIGl0cyBkaWFtZXRlclxuICAgIGxldCBzdHJva2VXaWR0aDogbnVtYmVyID0gdGhpcy5nZXRDaXJjbGVEaWFtZXRlcigpIC8gMTA7XG4gICAgcmV0dXJuIE1hdGguYWJzKHN0cm9rZVdpZHRoKTtcbiAgfVxuXG4gIGlzQ2lyY3VsYXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gTG9hZGluZ1R5cGUuQ2lyY3VsYXI7XG4gIH1cblxuICBpc0xpbmVhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBMb2FkaW5nVHlwZS5MaW5lYXI7XG4gIH1cblxuICBpc0Z1bGxTY3JlZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3R5bGUgPT09IExvYWRpbmdTdHlsZS5GdWxsU2NyZWVuO1xuICB9XG5cbiAgaXNPdmVybGF5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0eWxlID09PSBMb2FkaW5nU3R5bGUuT3ZlcmxheTtcbiAgfVxuXG4gIGFuaW1hdGlvbkNvbXBsZXRlKGV2ZW50OiBBbmltYXRpb25FdmVudCk6IHZvaWQge1xuICAgIC8vIENoZWNrIHRvIHNlZSBpZiBpdHMgXCJpblwiIG9yIFwib3V0XCIgYW5pbWF0aW9uIHRvIGV4ZWN1dGUgdGhlIHByb3BlciBjYWxsYmFja1xuICAgIGlmICghZXZlbnQuZnJvbVN0YXRlKSB7XG4gICAgICB0aGlzLmluQW5pbWF0aW9uQ29tcGxldGVkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3V0QW5pbWF0aW9uQ29tcGxldGVkKCk7XG4gICAgfVxuICB9XG5cbiAgaW5BbmltYXRpb25Db21wbGV0ZWQoKTogdm9pZCB7XG4gICAgdGhpcy5fYW5pbWF0aW9uSW4ubmV4dCh1bmRlZmluZWQpO1xuICB9XG5cbiAgb3V0QW5pbWF0aW9uQ29tcGxldGVkKCk6IHZvaWQge1xuICAgLyogbGl0dGxlIGhhY2sgdG8gcmVzZXQgdGhlIGxvYWRlciB2YWx1ZSBhbmQgYW5pbWF0aW9uIGJlZm9yZSByZW1vdmluZyBpdCBmcm9tIERPTVxuICAgICogZWxzZSwgdGhlIGxvYWRlciB3aWxsIGFwcGVhciB3aXRoIHByZXYgdmFsdWUgd2hlbiBpdHMgcmVnaXN0ZXJlZCBhZ2FpblxuICAgICogYW5kIHdpbGwgZG8gYW4gYW5pbWF0aW9uIGdvaW5nIHByZXYgdmFsdWUgdG8gMC5cbiAgICAqL1xuICAgIHRoaXMudmFsdWUgPSAwO1xuICAgIC8vIENoZWNrIGZvciBjaGFuZ2VzIGZvciBgT25QdXNoYCBjaGFuZ2UgZGV0ZWN0aW9uXG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5fYW5pbWF0aW9uT3V0Lm5leHQodW5kZWZpbmVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgaW4gYW5pbWF0aW9uIGFuZCByZXR1cm5zIGFuIG9ic2VydmFibGUgZm9yIGNvbXBsZXRpdGlvbiBldmVudC5cbiAgICovXG4gIHN0YXJ0SW5BbmltYXRpb24oKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAvKiBuZWVkIHRvIHN3aXRjaCBiYWNrIHRvIHRoZSBzZWxlY3RlZCBtb2RlLCBzbyB3ZSBoYXZlIHNhdmVkIGl0IGluIGFub3RoZXIgdmFyaWFibGVcbiAgICAqICBhbmQgdGhlbiByZWNvdmVyIGl0LiAoaXNzdWUgd2l0aCBwcm90cmFjdG9yKVxuICAgICovXG4gICAgdGhpcy5fbW9kZSA9IHRoaXMuX2RlZmF1bHRNb2RlO1xuICAgIC8vIFNldCB2YWx1ZXMgYmVmb3JlIHRoZSBhbmltYXRpb25zIHN0YXJ0c1xuICAgIHRoaXMuX3NldENpcmNsZURpYW1ldGVyKCk7XG4gICAgLy8gQ2hlY2sgZm9yIGNoYW5nZXMgZm9yIGBPblB1c2hgIGNoYW5nZSBkZXRlY3Rpb25cbiAgICB0aGlzLmFuaW1hdGlvbiA9IHRydWU7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgcmV0dXJuIHRoaXMuX2FuaW1hdGlvbkluLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBvdXQgYW5pbWF0aW9uIGFuZCByZXR1cm5zIGFuIG9ic2VydmFibGUgZm9yIGNvbXBsZXRpdGlvbiBldmVudC5cbiAgICovXG4gIHN0YXJ0T3V0QW5pbWF0aW9uKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgdGhpcy5hbmltYXRpb24gPSBmYWxzZTtcbiAgICAvKiBuZWVkIHRvIHN3aXRjaCBiYWNrIGFuZCBmb3J0aCBmcm9tIGRldGVybWluYXRlL2luZGV0ZXJtaW5hdGUgc28gdGhlIHNldEludGVydmFsKClcbiAgICAqIGluc2lkZSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBzdG9wcyBhbmQgcHJvdHJhY3RvciBkb2VzbnQgdGltZW91dCB3YWl0aW5nIHRvIHN5bmMuXG4gICAgKi9cbiAgICB0aGlzLl9tb2RlID0gTG9hZGluZ01vZGUuRGV0ZXJtaW5hdGU7XG4gICAgLy8gQ2hlY2sgZm9yIGNoYW5nZXMgZm9yIGBPblB1c2hgIGNoYW5nZSBkZXRlY3Rpb25cbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICByZXR1cm4gdGhpcy5fYW5pbWF0aW9uT3V0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSB0aGUgcHJvcGVyIGRpYW1ldGVyIGZvciB0aGUgY2lyY2xlIGFuZCBzZXQgaXRcbiAgICovXG4gIHByaXZhdGUgX3NldENpcmNsZURpYW1ldGVyKCk6IHZvaWQge1xuICAgIC8vIHdlIHNldCBhIGRlZmF1bHQgZGlhbWV0ZXIgb2YgMTAwIHNpbmNlIHRoaXMgaXMgdGhlIGRlZmF1bHQgaW4gbWF0ZXJpYWxcbiAgICBsZXQgZGlhbWV0ZXI6IG51bWJlciA9IFREX0NJUkNMRV9ESUFNRVRFUjtcbiAgICAvLyBpZiBoZWlnaHQgaXMgcHJvdmlkZWQsIHRoZW4gd2UgdGFrZSB0aGF0IGFzIGRpYW1ldGVyXG4gICAgaWYgKHRoaXMuaGVpZ2h0KSB7XG4gICAgICBkaWFtZXRlciA9IHRoaXMuaGVpZ2h0O1xuICAgICAgLy8gZWxzZSBpZiBpdHMgbm90IHByb3ZpZGVkLCB0aGVuIHdlIHRha2UgdGhlIGhvc3QgaGVpZ2h0XG4gICAgfSBlbHNlIGlmICh0aGlzLmhlaWdodCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBkaWFtZXRlciA9IHRoaXMuX2hvc3RIZWlnaHQoKTtcbiAgICB9XG4gICAgLy8gaWYgdGhlIGRpYW1ldGVyIGlzIG92ZXIgVERfQ0lSQ0xFX0RJQU1FVEVSLCB3ZSBzZXQgVERfQ0lSQ0xFX0RJQU1FVEVSXG4gICAgaWYgKCEhZGlhbWV0ZXIgJiYgZGlhbWV0ZXIgPD0gVERfQ0lSQ0xFX0RJQU1FVEVSKSB7XG4gICAgICB0aGlzLl9jaXJjbGVEaWFtZXRlciA9IE1hdGguZmxvb3IoZGlhbWV0ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jaXJjbGVEaWFtZXRlciA9IFREX0NJUkNMRV9ESUFNRVRFUjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaG9zdCBoZWlnaHQgb2YgdGhlIGxvYWRpbmcgY29tcG9uZW50XG4gICAqL1xuICBwcml2YXRlIF9ob3N0SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgaWYgKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHJldHVybiAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfVxufVxuIl19