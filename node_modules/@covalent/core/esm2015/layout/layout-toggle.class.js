/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Input, HostListener } from '@angular/core';
import { mixinDisabled } from '@covalent/core/common';
/**
 * @record
 */
export function ILayoutTogglable() { }
if (false) {
    /** @type {?} */
    ILayoutTogglable.prototype.opened;
    /** @type {?} */
    ILayoutTogglable.prototype.sidenav;
    /**
     * @return {?}
     */
    ILayoutTogglable.prototype.toggle = function () { };
    /**
     * @return {?}
     */
    ILayoutTogglable.prototype.open = function () { };
    /**
     * @return {?}
     */
    ILayoutTogglable.prototype.close = function () { };
}
export class LayoutToggleBase {
}
/* tslint:disable-next-line */
/** @type {?} */
export const _TdLayoutToggleMixinBase = mixinDisabled(LayoutToggleBase);
/**
 * @abstract
 */
export class LayoutToggle extends _TdLayoutToggleMixinBase {
    /**
     * @param {?} _layout
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    constructor(_layout, _renderer, _elementRef) {
        super();
        this._layout = _layout;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._initialized = false;
        this._hideWhenOpened = false;
        // if layout has not been provided
        // show warn message
        if (!this._layout) {
            this._noLayoutMessage();
        }
        this._renderer.addClass(this._elementRef.nativeElement, 'td-layout-menu-button');
    }
    /**
     * hideWhenOpened?: boolean
     * When this is set to true, the host will be hidden when
     * the sidenav is opened.
     * @param {?} hideWhenOpened
     * @return {?}
     */
    set hideWhenOpened(hideWhenOpened) {
        this._hideWhenOpened = hideWhenOpened;
        if (this._initialized) {
            this._toggleVisibility();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._initialized = true;
        if (this._layout && this._layout.sidenav) {
            this._toggleSubs = this._layout.sidenav._animationStarted.subscribe(() => {
                this._toggleVisibility();
            });
        }
        // execute toggleVisibility since the onOpenStart and onCloseStart
        // methods might not be executed always when the element is rendered
        this._toggleVisibility();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._toggleSubs) {
            this._toggleSubs.unsubscribe();
            this._toggleSubs = undefined;
        }
    }
    /**
     * Listens to host click event to trigger the layout toggle
     * @param {?} event
     * @return {?}
     */
    clickListener(event) {
        event.preventDefault();
        if (!this.disabled) {
            // if layout has been provided, try triggering the click on it
            // else show warn message
            if (this._layout && this._layout.open) {
                this.onClick();
            }
            else {
                this._noLayoutMessage();
            }
        }
    }
    /**
     * @return {?}
     */
    _toggleVisibility() {
        if (this._layout) {
            if (this._layout.sidenav.opened && this._hideWhenOpened) {
                this._renderer.setStyle(this._elementRef.nativeElement, 'display', 'none');
            }
            else {
                this._renderer.setStyle(this._elementRef.nativeElement, 'display', '');
            }
        }
    }
    /**
     * @return {?}
     */
    _noLayoutMessage() {
        /* tslint:disable-next-line */
        console.warn('Covalent: Parent layout not found for layout toggle directive');
    }
}
LayoutToggle.propDecorators = {
    hideWhenOpened: [{ type: Input, args: ['hideWhenOpened',] }],
    clickListener: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    LayoutToggle.prototype._toggleSubs;
    /** @type {?} */
    LayoutToggle.prototype._initialized;
    /** @type {?} */
    LayoutToggle.prototype._hideWhenOpened;
    /** @type {?} */
    LayoutToggle.prototype._layout;
    /** @type {?} */
    LayoutToggle.prototype._renderer;
    /** @type {?} */
    LayoutToggle.prototype._elementRef;
    /**
     * @abstract
     * @return {?}
     */
    LayoutToggle.prototype.onClick = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LXRvZ2dsZS5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2xheW91dC8iLCJzb3VyY2VzIjpbImxheW91dC10b2dnbGUuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQWUsWUFBWSxFQUFtRCxNQUFNLGVBQWUsQ0FBQztBQUlsSCxPQUFPLEVBQWUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFJbkUsc0NBTUM7OztJQUxDLGtDQUFnQjs7SUFDaEIsbUNBQW9COzs7O0lBQ3BCLG9EQUF5Qzs7OztJQUN6QyxrREFBdUM7Ozs7SUFDdkMsbURBQXdDOztBQUcxQyxNQUFNLE9BQU8sZ0JBQWdCO0NBQUk7OztBQUdqQyxNQUFNLE9BQU8sd0JBQXdCLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixDQUFDOzs7O0FBRXZFLE1BQU0sT0FBZ0IsWUFBYSxTQUFRLHdCQUF3Qjs7Ozs7O0lBb0JqRSxZQUFzQixPQUF5QixFQUMzQixTQUFvQixFQUNwQixXQUF1QjtRQUN6QyxLQUFLLEVBQUUsQ0FBQztRQUhZLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQzNCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFsQm5DLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBbUJ2QyxrQ0FBa0M7UUFDbEMsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztJQUNuRixDQUFDOzs7Ozs7OztJQWxCRCxJQUNJLGNBQWMsQ0FBQyxjQUF1QjtRQUN4QyxJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQztRQUN0QyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7O0lBY0QsZUFBZTtRQUNiLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUN4QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3ZFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxrRUFBa0U7UUFDbEUsb0VBQW9FO1FBQ3BFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7U0FDOUI7SUFDSCxDQUFDOzs7Ozs7SUFNRCxhQUFhLENBQUMsS0FBWTtRQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsOERBQThEO1lBQzlELHlCQUF5QjtZQUN6QixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNoQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzthQUN6QjtTQUNGO0lBQ0gsQ0FBQzs7OztJQUlPLGlCQUFpQjtRQUN2QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQzVFO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUN4RTtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVPLGdCQUFnQjtRQUN0Qiw4QkFBOEI7UUFDOUIsT0FBTyxDQUFDLElBQUksQ0FBQywrREFBK0QsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7Ozs2QkF2RUEsS0FBSyxTQUFDLGdCQUFnQjs0QkEwQ3RCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFwRGpDLG1DQUFrQzs7SUFFbEMsb0NBQXNDOztJQUN0Qyx1Q0FBeUM7O0lBZTdCLCtCQUFtQzs7SUFDbkMsaUNBQTRCOztJQUM1QixtQ0FBK0I7Ozs7O0lBOEMzQyxpREFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWF0U2lkZW5hdiwgTWF0RHJhd2VyVG9nZ2xlUmVzdWx0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdic7XG5cbmltcG9ydCB7IElDYW5EaXNhYmxlLCBtaXhpbkRpc2FibGVkIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxheW91dFRvZ2dsYWJsZSB7XG4gIG9wZW5lZDogYm9vbGVhbjtcbiAgc2lkZW5hdjogTWF0U2lkZW5hdjtcbiAgdG9nZ2xlKCk6IFByb21pc2U8TWF0RHJhd2VyVG9nZ2xlUmVzdWx0PjtcbiAgb3BlbigpOiBQcm9taXNlPE1hdERyYXdlclRvZ2dsZVJlc3VsdD47XG4gIGNsb3NlKCk6IFByb21pc2U8TWF0RHJhd2VyVG9nZ2xlUmVzdWx0Pjtcbn1cblxuZXhwb3J0IGNsYXNzIExheW91dFRvZ2dsZUJhc2UgeyB9XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGNvbnN0IF9UZExheW91dFRvZ2dsZU1peGluQmFzZSA9IG1peGluRGlzYWJsZWQoTGF5b3V0VG9nZ2xlQmFzZSk7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMYXlvdXRUb2dnbGUgZXh0ZW5kcyBfVGRMYXlvdXRUb2dnbGVNaXhpbkJhc2UgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIElDYW5EaXNhYmxlIHtcblxuICBwcml2YXRlIF90b2dnbGVTdWJzOiBTdWJzY3JpcHRpb247XG5cbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaGlkZVdoZW5PcGVuZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogaGlkZVdoZW5PcGVuZWQ/OiBib29sZWFuXG4gICAqIFdoZW4gdGhpcyBpcyBzZXQgdG8gdHJ1ZSwgdGhlIGhvc3Qgd2lsbCBiZSBoaWRkZW4gd2hlblxuICAgKiB0aGUgc2lkZW5hdiBpcyBvcGVuZWQuXG4gICAqL1xuICBASW5wdXQoJ2hpZGVXaGVuT3BlbmVkJylcbiAgc2V0IGhpZGVXaGVuT3BlbmVkKGhpZGVXaGVuT3BlbmVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5faGlkZVdoZW5PcGVuZWQgPSBoaWRlV2hlbk9wZW5lZDtcbiAgICBpZiAodGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuX3RvZ2dsZVZpc2liaWxpdHkoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX2xheW91dDogSUxheW91dFRvZ2dsYWJsZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKCk7XG4gICAgLy8gaWYgbGF5b3V0IGhhcyBub3QgYmVlbiBwcm92aWRlZFxuICAgIC8vIHNob3cgd2FybiBtZXNzYWdlXG4gICAgaWYgKCF0aGlzLl9sYXlvdXQpIHtcbiAgICAgIHRoaXMuX25vTGF5b3V0TWVzc2FnZSgpO1xuICAgIH1cbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0ZC1sYXlvdXQtbWVudS1idXR0b24nKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgaWYgKHRoaXMuX2xheW91dCAmJiB0aGlzLl9sYXlvdXQuc2lkZW5hdikge1xuICAgICAgdGhpcy5fdG9nZ2xlU3VicyA9IHRoaXMuX2xheW91dC5zaWRlbmF2Ll9hbmltYXRpb25TdGFydGVkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3RvZ2dsZVZpc2liaWxpdHkoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBleGVjdXRlIHRvZ2dsZVZpc2liaWxpdHkgc2luY2UgdGhlIG9uT3BlblN0YXJ0IGFuZCBvbkNsb3NlU3RhcnRcbiAgICAvLyBtZXRob2RzIG1pZ2h0IG5vdCBiZSBleGVjdXRlZCBhbHdheXMgd2hlbiB0aGUgZWxlbWVudCBpcyByZW5kZXJlZFxuICAgIHRoaXMuX3RvZ2dsZVZpc2liaWxpdHkoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl90b2dnbGVTdWJzKSB7XG4gICAgICB0aGlzLl90b2dnbGVTdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLl90b2dnbGVTdWJzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvIGhvc3QgY2xpY2sgZXZlbnQgdG8gdHJpZ2dlciB0aGUgbGF5b3V0IHRvZ2dsZVxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBjbGlja0xpc3RlbmVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAvLyBpZiBsYXlvdXQgaGFzIGJlZW4gcHJvdmlkZWQsIHRyeSB0cmlnZ2VyaW5nIHRoZSBjbGljayBvbiBpdFxuICAgICAgLy8gZWxzZSBzaG93IHdhcm4gbWVzc2FnZVxuICAgICAgaWYgKHRoaXMuX2xheW91dCAmJiB0aGlzLl9sYXlvdXQub3Blbikge1xuICAgICAgICB0aGlzLm9uQ2xpY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX25vTGF5b3V0TWVzc2FnZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFic3RyYWN0IG9uQ2xpY2soKTogdm9pZDtcblxuICBwcml2YXRlIF90b2dnbGVWaXNpYmlsaXR5KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9sYXlvdXQpIHtcbiAgICAgIGlmICh0aGlzLl9sYXlvdXQuc2lkZW5hdi5vcGVuZWQgJiYgdGhpcy5faGlkZVdoZW5PcGVuZWQpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX25vTGF5b3V0TWVzc2FnZSgpOiB2b2lkIHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICBjb25zb2xlLndhcm4oJ0NvdmFsZW50OiBQYXJlbnQgbGF5b3V0IG5vdCBmb3VuZCBmb3IgbGF5b3V0IHRvZ2dsZSBkaXJlY3RpdmUnKTtcbiAgfVxuXG59XG4iXX0=