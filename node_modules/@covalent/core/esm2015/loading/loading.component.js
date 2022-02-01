/**
 * @fileoverview added by tsickle
 * Generated from: loading.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectorRef, ElementRef } from '@angular/core';
/** @enum {string} */
const LoadingType = {
    Circular: "circular",
    Linear: "linear",
};
export { LoadingType };
/** @enum {string} */
const LoadingMode = {
    Determinate: "determinate",
    Indeterminate: "indeterminate",
};
export { LoadingMode };
/** @enum {string} */
const LoadingStrategy = {
    Overlay: "overlay",
    Replace: "replace",
};
export { LoadingStrategy };
/** @enum {string} */
const LoadingStyle = {
    FullScreen: "fullscreen",
    Overlay: "overlay",
    None: "none",
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
        if (this.isOverlay() && this._hostHeight() > 1 && this.animation) {
            this._setCircleDiameter();
            this._changeDetectorRef.markForCheck();
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
        const strokeWidth = this.getCircleDiameter() / 10;
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
     * Starts in animation and returns an observable for completition event.
     * @return {?}
     */
    show() {
        /* need to switch back to the selected mode, so we have saved it in another variable
         *  and then recover it. (issue with protractor)
         */
        this._mode = this._defaultMode;
        // Set values before the animations starts
        this._setCircleDiameter();
        // Check for changes for `OnPush` change detection
        this.animation = true;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Starts out animation and returns an observable for completition event.
     * @return {?}
     */
    hide() {
        this.animation = false;
        /* need to switch back and forth from determinate/indeterminate so the setInterval()
         * inside mat-progress-spinner stops and protractor doesnt timeout waiting to sync.
         */
        this._mode = LoadingMode.Determinate;
        // Check for changes for `OnPush` change detection
        /* little hack to reset the loader value and animation before removing it from DOM
         * else, the loader will appear with prev value when its registered again
         * and will do an animation going prev value to 0.
         */
        this.value = 0;
        // Check for changes for `OnPush` change detection
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Calculate the proper diameter for the circle and set it
     * @private
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
     * @private
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
                template: "<div\n  class=\"td-loading-wrapper\"\n  [style.min-height]=\"getHeight()\"\n  [class.td-overlay-circular]=\"(isOverlay() || isFullScreen()) && !isLinear()\"\n  [class.td-overlay]=\"isOverlay() || isFullScreen()\"\n  [class.td-fullscreen]=\"isFullScreen()\"\n>\n  <div [@tdFadeInOut]=\"animation\" [style.min-height]=\"getHeight()\" class=\"td-loading\">\n    <mat-progress-spinner\n      *ngIf=\"isCircular()\"\n      [mode]=\"mode\"\n      [value]=\"value\"\n      [color]=\"color\"\n      [diameter]=\"getCircleDiameter()\"\n      [strokeWidth]=\"getCircleStrokeWidth()\"\n    ></mat-progress-spinner>\n    <mat-progress-bar *ngIf=\"isLinear()\" [mode]=\"mode\" [value]=\"value\" [color]=\"color\"></mat-progress-bar>\n  </div>\n  <ng-template [cdkPortalOutlet]=\"content\"></ng-template>\n</div>\n",
                animations: [tdFadeInOutAnimation],
                styles: [".td-loading-wrapper{display:block;position:relative}.td-loading-wrapper.td-fullscreen{position:inherit}.td-loading-wrapper .td-loading{-ms-flex:1;-ms-flex-align:center;-ms-flex-direction:row;-ms-flex-line-pack:center;-ms-flex-pack:center;align-content:center;align-items:center;box-sizing:border-box;display:-ms-flexbox;display:flex;flex:1;flex-direction:row;justify-content:center;max-width:100%}.td-loading-wrapper.td-overlay .td-loading{left:0;margin:0;position:absolute;right:0;top:0;z-index:1000}.td-loading-wrapper.td-overlay .td-loading mat-progress-bar{left:0;position:absolute;right:0;top:0}.td-loading-wrapper.td-overlay-circular .td-loading{bottom:0}"]
            }] }
];
/** @nocollapse */
TdLoadingComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdLoadingComponent.prototype._mode;
    /**
     * @type {?}
     * @private
     */
    TdLoadingComponent.prototype._defaultMode;
    /**
     * @type {?}
     * @private
     */
    TdLoadingComponent.prototype._value;
    /**
     * @type {?}
     * @private
     */
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
    /**
     * @type {?}
     * @private
     */
    TdLoadingComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TdLoadingComponent.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2NvcmUvbG9hZGluZy8iLCJzb3VyY2VzIjpbImxvYWRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQVcsTUFBTSxlQUFlLENBQUM7O0FBR2xGLE1BQVksV0FBVztJQUNyQixRQUFRLFlBQWE7SUFDckIsTUFBTSxVQUFXO0VBQ2xCOzs7QUFFRCxNQUFZLFdBQVc7SUFDckIsV0FBVyxlQUFnQjtJQUMzQixhQUFhLGlCQUFrQjtFQUNoQzs7O0FBRUQsTUFBWSxlQUFlO0lBQ3pCLE9BQU8sV0FBWTtJQUNuQixPQUFPLFdBQVk7RUFDcEI7OztBQUVELE1BQVksWUFBWTtJQUN0QixVQUFVLGNBQWU7SUFDekIsT0FBTyxXQUFZO0lBQ25CLElBQUksUUFBUztFQUNkOztBQUVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUU3RCxNQUFNLE9BQU8sa0JBQWtCLEdBQVcsR0FBRztBQVE3QyxNQUFNLE9BQU8sa0JBQWtCOzs7OztJQTBEN0IsWUFBb0IsV0FBdUIsRUFBVSxrQkFBcUM7UUFBdEUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBekRsRixVQUFLLEdBQWdCLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDL0MsaUJBQVksR0FBZ0IsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUN0RCxXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLG9CQUFlLEdBQVcsa0JBQWtCLENBQUM7Ozs7UUFLckQsY0FBUyxHQUFZLEtBQUssQ0FBQztRQTZCM0IsVUFBSyxHQUFpQixZQUFZLENBQUMsSUFBSSxDQUFDOzs7OztRQVl4QyxTQUFJLEdBQWdCLFdBQVcsQ0FBQyxRQUFRLENBQUM7Ozs7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Q29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBEb0NoZWNrIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuXG5leHBvcnQgZW51bSBMb2FkaW5nVHlwZSB7XG4gIENpcmN1bGFyID0gJ2NpcmN1bGFyJyxcbiAgTGluZWFyID0gJ2xpbmVhcicsXG59XG5cbmV4cG9ydCBlbnVtIExvYWRpbmdNb2RlIHtcbiAgRGV0ZXJtaW5hdGUgPSAnZGV0ZXJtaW5hdGUnLFxuICBJbmRldGVybWluYXRlID0gJ2luZGV0ZXJtaW5hdGUnLFxufVxuXG5leHBvcnQgZW51bSBMb2FkaW5nU3RyYXRlZ3kge1xuICBPdmVybGF5ID0gJ292ZXJsYXknLFxuICBSZXBsYWNlID0gJ3JlcGxhY2UnLFxufVxuXG5leHBvcnQgZW51bSBMb2FkaW5nU3R5bGUge1xuICBGdWxsU2NyZWVuID0gJ2Z1bGxzY3JlZW4nLFxuICBPdmVybGF5ID0gJ292ZXJsYXknLFxuICBOb25lID0gJ25vbmUnLFxufVxuXG5pbXBvcnQgeyB0ZEZhZGVJbk91dEFuaW1hdGlvbiB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbmV4cG9ydCBjb25zdCBURF9DSVJDTEVfRElBTUVURVI6IG51bWJlciA9IDEwMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbG9hZGluZycsXG4gIHN0eWxlVXJsczogWycuL2xvYWRpbmcuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbdGRGYWRlSW5PdXRBbmltYXRpb25dLFxufSlcbmV4cG9ydCBjbGFzcyBUZExvYWRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBEb0NoZWNrIHtcbiAgcHJpdmF0ZSBfbW9kZTogTG9hZGluZ01vZGUgPSBMb2FkaW5nTW9kZS5JbmRldGVybWluYXRlO1xuICBwcml2YXRlIF9kZWZhdWx0TW9kZTogTG9hZGluZ01vZGUgPSBMb2FkaW5nTW9kZS5JbmRldGVybWluYXRlO1xuICBwcml2YXRlIF92YWx1ZTogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfY2lyY2xlRGlhbWV0ZXI6IG51bWJlciA9IFREX0NJUkNMRV9ESUFNRVRFUjtcblxuICAvKipcbiAgICogRmxhZyBmb3IgYW5pbWF0aW9uXG4gICAqL1xuICBhbmltYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQ29udGVudCBpbmplY3RlZCBpbnRvIGxvYWRpbmcgY29tcG9uZW50LlxuICAgKi9cbiAgY29udGVudDogVGVtcGxhdGVQb3J0YWw8YW55PjtcblxuICAvKipcbiAgICogU2V0cyBtb2RlIG9mIFtUZExvYWRpbmdDb21wb25lbnRdIHRvIExvYWRpbmdNb2RlLkRldGVybWluYXRlIG9yIExvYWRpbmdNb2RlLkluZGV0ZXJtaW5hdGVcbiAgICovXG4gIHNldCBtb2RlKG1vZGU6IExvYWRpbmdNb2RlKSB7XG4gICAgdGhpcy5fZGVmYXVsdE1vZGUgPSBtb2RlO1xuICB9XG4gIGdldCBtb2RlKCk6IExvYWRpbmdNb2RlIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHZhbHVlIG9mIFtUZExvYWRpbmdDb21wb25lbnRdIGlmIG1vZGUgaXMgJ0xvYWRpbmdNb2RlLkRldGVybWluYXRlJ1xuICAgKi9cbiAgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIC8vIENoZWNrIGZvciBjaGFuZ2VzIGZvciBgT25QdXNoYCBjaGFuZ2UgZGV0ZWN0aW9uXG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgZ2V0IHZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgc3R5bGU6IExvYWRpbmdTdHlsZSA9IExvYWRpbmdTdHlsZS5Ob25lO1xuXG4gIC8qKlxuICAgKiBoZWlnaHQ6IG51bWJlclxuICAgKiBTZXRzIGhlaWdodCBvZiBbVGRMb2FkaW5nQ29tcG9uZW50XS5cbiAgICovXG4gIGhlaWdodDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiB0eXBlOiBMb2FkaW5nVHlwZVxuICAgKiBTZXRzIHR5cGUgb2YgW1RkTG9hZGluZ0NvbXBvbmVudF0gcmVuZGVyZWQuXG4gICAqL1xuICB0eXBlOiBMb2FkaW5nVHlwZSA9IExvYWRpbmdUeXBlLkNpcmN1bGFyO1xuXG4gIC8qKlxuICAgKiBjb2xvcjogcHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJ1xuICAgKiBTZXRzIHRoZW1lIGNvbG9yIG9mIFtUZExvYWRpbmdDb21wb25lbnRdIHJlbmRlcmVkLlxuICAgKi9cbiAgY29sb3I6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nID0gJ3ByaW1hcnknO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgLy8gV2hlbiBvdmVybGF5IGlzIHVzZWQgYW5kIHRoZSBob3N0IHdpZHRoIGhhcyBhIHZhbHVlIGdyZWF0ZXIgdGhhbiAxcHhcbiAgICAvLyBzZXQgdGhlIGNpcmNsZSBkaWFtZXRlciB3aGVuIHBvc3NpYmxlIGluY2FzZSB0aGUgbG9hZGluZyBjb21wb25lbnQgd2FzIHJlbmRlcmVkIGluIGEgaGlkZGVuIHN0YXRlXG4gICAgaWYgKHRoaXMuaXNPdmVybGF5KCkgJiYgdGhpcy5faG9zdEhlaWdodCgpID4gMSAmJiB0aGlzLmFuaW1hdGlvbikge1xuICAgICAgdGhpcy5fc2V0Q2lyY2xlRGlhbWV0ZXIoKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIGdldEhlaWdodCgpOiBzdHJpbmcge1xuICAgIC8vIElnbm9yZSBoZWlnaHQgaWYgc3R5bGUgaXMgYG92ZXJsYXlgIG9yIGBmdWxsc2NyZWVuYC5cbiAgICAvLyBBZGQgaGVpZ2h0IGlmIGNoaWxkIGVsZW1lbnRzIGhhdmUgYSBoZWlnaHQgYW5kIHN0eWxlIGlzIGBub25lYCwgZWxzZSByZXR1cm4gZGVmYXVsdCBoZWlnaHQuXG4gICAgaWYgKHRoaXMuaXNPdmVybGF5KCkgfHwgdGhpcy5pc0Z1bGxTY3JlZW4oKSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0ID8gYCR7dGhpcy5oZWlnaHR9cHhgIDogJzE1MHB4JztcbiAgICB9XG4gIH1cblxuICBnZXRDaXJjbGVEaWFtZXRlcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jaXJjbGVEaWFtZXRlcjtcbiAgfVxuXG4gIGdldENpcmNsZVN0cm9rZVdpZHRoKCk6IG51bWJlciB7XG4gICAgLy8gd2UgY2FsY3VsYXRlIHRoZSBzdHJva2Ugd2lkdGggYnkgc2V0dGluZyBpdCBhcyAxMCUgb2YgaXRzIGRpYW1ldGVyXG4gICAgY29uc3Qgc3Ryb2tlV2lkdGg6IG51bWJlciA9IHRoaXMuZ2V0Q2lyY2xlRGlhbWV0ZXIoKSAvIDEwO1xuICAgIHJldHVybiBNYXRoLmFicyhzdHJva2VXaWR0aCk7XG4gIH1cblxuICBpc0NpcmN1bGFyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IExvYWRpbmdUeXBlLkNpcmN1bGFyO1xuICB9XG5cbiAgaXNMaW5lYXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gTG9hZGluZ1R5cGUuTGluZWFyO1xuICB9XG5cbiAgaXNGdWxsU2NyZWVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0eWxlID09PSBMb2FkaW5nU3R5bGUuRnVsbFNjcmVlbjtcbiAgfVxuXG4gIGlzT3ZlcmxheSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdHlsZSA9PT0gTG9hZGluZ1N0eWxlLk92ZXJsYXk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIGluIGFuaW1hdGlvbiBhbmQgcmV0dXJucyBhbiBvYnNlcnZhYmxlIGZvciBjb21wbGV0aXRpb24gZXZlbnQuXG4gICAqL1xuICBzaG93KCk6IHZvaWQge1xuICAgIC8qIG5lZWQgdG8gc3dpdGNoIGJhY2sgdG8gdGhlIHNlbGVjdGVkIG1vZGUsIHNvIHdlIGhhdmUgc2F2ZWQgaXQgaW4gYW5vdGhlciB2YXJpYWJsZVxuICAgICAqICBhbmQgdGhlbiByZWNvdmVyIGl0LiAoaXNzdWUgd2l0aCBwcm90cmFjdG9yKVxuICAgICAqL1xuICAgIHRoaXMuX21vZGUgPSB0aGlzLl9kZWZhdWx0TW9kZTtcbiAgICAvLyBTZXQgdmFsdWVzIGJlZm9yZSB0aGUgYW5pbWF0aW9ucyBzdGFydHNcbiAgICB0aGlzLl9zZXRDaXJjbGVEaWFtZXRlcigpO1xuICAgIC8vIENoZWNrIGZvciBjaGFuZ2VzIGZvciBgT25QdXNoYCBjaGFuZ2UgZGV0ZWN0aW9uXG4gICAgdGhpcy5hbmltYXRpb24gPSB0cnVlO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBvdXQgYW5pbWF0aW9uIGFuZCByZXR1cm5zIGFuIG9ic2VydmFibGUgZm9yIGNvbXBsZXRpdGlvbiBldmVudC5cbiAgICovXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5hbmltYXRpb24gPSBmYWxzZTtcbiAgICAvKiBuZWVkIHRvIHN3aXRjaCBiYWNrIGFuZCBmb3J0aCBmcm9tIGRldGVybWluYXRlL2luZGV0ZXJtaW5hdGUgc28gdGhlIHNldEludGVydmFsKClcbiAgICAgKiBpbnNpZGUgbWF0LXByb2dyZXNzLXNwaW5uZXIgc3RvcHMgYW5kIHByb3RyYWN0b3IgZG9lc250IHRpbWVvdXQgd2FpdGluZyB0byBzeW5jLlxuICAgICAqL1xuICAgIHRoaXMuX21vZGUgPSBMb2FkaW5nTW9kZS5EZXRlcm1pbmF0ZTtcbiAgICAvLyBDaGVjayBmb3IgY2hhbmdlcyBmb3IgYE9uUHVzaGAgY2hhbmdlIGRldGVjdGlvblxuICAgIC8qIGxpdHRsZSBoYWNrIHRvIHJlc2V0IHRoZSBsb2FkZXIgdmFsdWUgYW5kIGFuaW1hdGlvbiBiZWZvcmUgcmVtb3ZpbmcgaXQgZnJvbSBET01cbiAgICAgKiBlbHNlLCB0aGUgbG9hZGVyIHdpbGwgYXBwZWFyIHdpdGggcHJldiB2YWx1ZSB3aGVuIGl0cyByZWdpc3RlcmVkIGFnYWluXG4gICAgICogYW5kIHdpbGwgZG8gYW4gYW5pbWF0aW9uIGdvaW5nIHByZXYgdmFsdWUgdG8gMC5cbiAgICAgKi9cbiAgICB0aGlzLnZhbHVlID0gMDtcbiAgICAvLyBDaGVjayBmb3IgY2hhbmdlcyBmb3IgYE9uUHVzaGAgY2hhbmdlIGRldGVjdGlvblxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSB0aGUgcHJvcGVyIGRpYW1ldGVyIGZvciB0aGUgY2lyY2xlIGFuZCBzZXQgaXRcbiAgICovXG4gIHByaXZhdGUgX3NldENpcmNsZURpYW1ldGVyKCk6IHZvaWQge1xuICAgIC8vIHdlIHNldCBhIGRlZmF1bHQgZGlhbWV0ZXIgb2YgMTAwIHNpbmNlIHRoaXMgaXMgdGhlIGRlZmF1bHQgaW4gbWF0ZXJpYWxcbiAgICBsZXQgZGlhbWV0ZXI6IG51bWJlciA9IFREX0NJUkNMRV9ESUFNRVRFUjtcbiAgICAvLyBpZiBoZWlnaHQgaXMgcHJvdmlkZWQsIHRoZW4gd2UgdGFrZSB0aGF0IGFzIGRpYW1ldGVyXG4gICAgaWYgKHRoaXMuaGVpZ2h0KSB7XG4gICAgICBkaWFtZXRlciA9IHRoaXMuaGVpZ2h0O1xuICAgICAgLy8gZWxzZSBpZiBpdHMgbm90IHByb3ZpZGVkLCB0aGVuIHdlIHRha2UgdGhlIGhvc3QgaGVpZ2h0XG4gICAgfSBlbHNlIGlmICh0aGlzLmhlaWdodCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBkaWFtZXRlciA9IHRoaXMuX2hvc3RIZWlnaHQoKTtcbiAgICB9XG4gICAgLy8gaWYgdGhlIGRpYW1ldGVyIGlzIG92ZXIgVERfQ0lSQ0xFX0RJQU1FVEVSLCB3ZSBzZXQgVERfQ0lSQ0xFX0RJQU1FVEVSXG4gICAgaWYgKCEhZGlhbWV0ZXIgJiYgZGlhbWV0ZXIgPD0gVERfQ0lSQ0xFX0RJQU1FVEVSKSB7XG4gICAgICB0aGlzLl9jaXJjbGVEaWFtZXRlciA9IE1hdGguZmxvb3IoZGlhbWV0ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jaXJjbGVEaWFtZXRlciA9IFREX0NJUkNMRV9ESUFNRVRFUjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaG9zdCBoZWlnaHQgb2YgdGhlIGxvYWRpbmcgY29tcG9uZW50XG4gICAqL1xuICBwcml2YXRlIF9ob3N0SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgaWYgKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHJldHVybiAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfVxufVxuIl19