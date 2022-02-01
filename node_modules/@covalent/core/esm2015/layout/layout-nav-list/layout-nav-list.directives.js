/**
 * @fileoverview added by tsickle
 * Generated from: layout-nav-list/layout-nav-list.directives.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Optional, Directive, Input, Renderer2, ElementRef, Inject, forwardRef } from '@angular/core';
import { TdLayoutNavListComponent } from './layout-nav-list.component';
import { BaseLayoutToggleDirective } from '../layout-toggle.class';
export class TdLayoutNavListToggleDirective extends BaseLayoutToggleDirective {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutNavListToggle
     * @return {?}
     */
    set tdLayoutNavListToggle(tdLayoutNavListToggle) {
        this.disabled = !((/** @type {?} */ (tdLayoutNavListToggle)) === '' || tdLayoutNavListToggle);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.toggle();
    }
}
TdLayoutNavListToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutNavListToggle]',
                inputs: ['hideWhenOpened'],
            },] }
];
/** @nocollapse */
TdLayoutNavListToggleDirective.ctorParameters = () => [
    { type: TdLayoutNavListComponent, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => TdLayoutNavListComponent)),] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
TdLayoutNavListToggleDirective.propDecorators = {
    tdLayoutNavListToggle: [{ type: Input, args: ['tdLayoutNavListToggle',] }]
};
export class TdLayoutNavListCloseDirective extends BaseLayoutToggleDirective {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutNavListClose
     * @return {?}
     */
    set tdLayoutNavListClose(tdLayoutNavListClose) {
        this.disabled = !((/** @type {?} */ (tdLayoutNavListClose)) === '' || tdLayoutNavListClose);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.close();
    }
}
TdLayoutNavListCloseDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutNavListClose]',
                inputs: ['hideWhenOpened'],
            },] }
];
/** @nocollapse */
TdLayoutNavListCloseDirective.ctorParameters = () => [
    { type: TdLayoutNavListComponent, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => TdLayoutNavListComponent)),] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
TdLayoutNavListCloseDirective.propDecorators = {
    tdLayoutNavListClose: [{ type: Input, args: ['tdLayoutNavListClose',] }]
};
export class TdLayoutNavListOpenDirective extends BaseLayoutToggleDirective {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutNavListOpen
     * @return {?}
     */
    set tdLayoutNavListOpen(tdLayoutNavListOpen) {
        this.disabled = !((/** @type {?} */ (tdLayoutNavListOpen)) === '' || tdLayoutNavListOpen);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.open();
    }
}
TdLayoutNavListOpenDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutNavListOpen]',
                inputs: ['hideWhenOpened'],
            },] }
];
/** @nocollapse */
TdLayoutNavListOpenDirective.ctorParameters = () => [
    { type: TdLayoutNavListComponent, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => TdLayoutNavListComponent)),] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
TdLayoutNavListOpenDirective.propDecorators = {
    tdLayoutNavListOpen: [{ type: Input, args: ['tdLayoutNavListOpen',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW5hdi1saXN0LmRpcmVjdGl2ZXMuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2NvcmUvbGF5b3V0LyIsInNvdXJjZXMiOlsibGF5b3V0LW5hdi1saXN0L2xheW91dC1uYXYtbGlzdC5kaXJlY3RpdmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU1uRSxNQUFNLE9BQU8sOEJBQStCLFNBQVEseUJBQXlCOzs7Ozs7SUFNM0UsWUFDa0UsTUFBZ0MsRUFDaEcsUUFBbUIsRUFDbkIsVUFBc0I7UUFFdEIsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFYRCxJQUNJLHFCQUFxQixDQUFDLHFCQUE4QjtRQUN0RCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxtQkFBSyxxQkFBcUIsRUFBQSxLQUFLLEVBQUUsSUFBSSxxQkFBcUIsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7Ozs7SUFVRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLE1BQU0sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2FBQzNCOzs7O1lBTlEsd0JBQXdCLHVCQWM1QixRQUFRLFlBQUksTUFBTSxTQUFDLFVBQVU7OztvQkFBQyxHQUFHLEVBQUUsQ0FBQyx3QkFBd0IsRUFBQztZQWY3QixTQUFTO1lBQUUsVUFBVTs7O29DQVN2RCxLQUFLLFNBQUMsdUJBQXVCOztBQXNCaEMsTUFBTSxPQUFPLDZCQUE4QixTQUFRLHlCQUF5Qjs7Ozs7O0lBTTFFLFlBQ2tFLE1BQWdDLEVBQ2hHLFFBQW1CLEVBQ25CLFVBQXNCO1FBRXRCLEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBWEQsSUFDSSxvQkFBb0IsQ0FBQyxvQkFBNkI7UUFDcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsbUJBQUssb0JBQW9CLEVBQUEsS0FBSyxFQUFFLElBQUksb0JBQW9CLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7O0lBVUQsT0FBTztRQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7O1lBcEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUMzQjs7OztZQTdCUSx3QkFBd0IsdUJBcUM1QixRQUFRLFlBQUksTUFBTSxTQUFDLFVBQVU7OztvQkFBQyxHQUFHLEVBQUUsQ0FBQyx3QkFBd0IsRUFBQztZQXRDN0IsU0FBUztZQUFFLFVBQVU7OzttQ0FnQ3ZELEtBQUssU0FBQyxzQkFBc0I7O0FBc0IvQixNQUFNLE9BQU8sNEJBQTZCLFNBQVEseUJBQXlCOzs7Ozs7SUFNekUsWUFDa0UsTUFBZ0MsRUFDaEcsUUFBbUIsRUFDbkIsVUFBc0I7UUFFdEIsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFYRCxJQUNJLG1CQUFtQixDQUFDLG1CQUE0QjtRQUNsRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxtQkFBSyxtQkFBbUIsRUFBQSxLQUFLLEVBQUUsSUFBSSxtQkFBbUIsQ0FBQyxDQUFDO0lBQzVFLENBQUM7Ozs7SUFVRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLE1BQU0sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2FBQzNCOzs7O1lBcERRLHdCQUF3Qix1QkE0RDVCLFFBQVEsWUFBSSxNQUFNLFNBQUMsVUFBVTs7O29CQUFDLEdBQUcsRUFBRSxDQUFDLHdCQUF3QixFQUFDO1lBN0Q3QixTQUFTO1lBQUUsVUFBVTs7O2tDQXVEdkQsS0FBSyxTQUFDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wdGlvbmFsLCBEaXJlY3RpdmUsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEluamVjdCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGRMYXlvdXROYXZMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtbmF2LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IEJhc2VMYXlvdXRUb2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuLi9sYXlvdXQtdG9nZ2xlLmNsYXNzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkTGF5b3V0TmF2TGlzdFRvZ2dsZV0nLFxuICBpbnB1dHM6IFsnaGlkZVdoZW5PcGVuZWQnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXROYXZMaXN0VG9nZ2xlRGlyZWN0aXZlIGV4dGVuZHMgQmFzZUxheW91dFRvZ2dsZURpcmVjdGl2ZSB7XG4gIEBJbnB1dCgndGRMYXlvdXROYXZMaXN0VG9nZ2xlJylcbiAgc2V0IHRkTGF5b3V0TmF2TGlzdFRvZ2dsZSh0ZExheW91dE5hdkxpc3RUb2dnbGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gISg8YW55PnRkTGF5b3V0TmF2TGlzdFRvZ2dsZSA9PT0gJycgfHwgdGRMYXlvdXROYXZMaXN0VG9nZ2xlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBUZExheW91dE5hdkxpc3RDb21wb25lbnQpKSBsYXlvdXQ6IFRkTGF5b3V0TmF2TGlzdENvbXBvbmVudCxcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICkge1xuICAgIHN1cGVyKGxheW91dCwgcmVuZGVyZXIsIGVsZW1lbnRSZWYpO1xuICB9XG5cbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLl9sYXlvdXQudG9nZ2xlKCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkTGF5b3V0TmF2TGlzdENsb3NlXScsXG4gIGlucHV0czogWydoaWRlV2hlbk9wZW5lZCddLFxufSlcbmV4cG9ydCBjbGFzcyBUZExheW91dE5hdkxpc3RDbG9zZURpcmVjdGl2ZSBleHRlbmRzIEJhc2VMYXlvdXRUb2dnbGVEaXJlY3RpdmUge1xuICBASW5wdXQoJ3RkTGF5b3V0TmF2TGlzdENsb3NlJylcbiAgc2V0IHRkTGF5b3V0TmF2TGlzdENsb3NlKHRkTGF5b3V0TmF2TGlzdENsb3NlOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9ICEoPGFueT50ZExheW91dE5hdkxpc3RDbG9zZSA9PT0gJycgfHwgdGRMYXlvdXROYXZMaXN0Q2xvc2UpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChmb3J3YXJkUmVmKCgpID0+IFRkTGF5b3V0TmF2TGlzdENvbXBvbmVudCkpIGxheW91dDogVGRMYXlvdXROYXZMaXN0Q29tcG9uZW50LFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgKSB7XG4gICAgc3VwZXIobGF5b3V0LCByZW5kZXJlciwgZWxlbWVudFJlZik7XG4gIH1cblxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuX2xheW91dC5jbG9zZSgpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZExheW91dE5hdkxpc3RPcGVuXScsXG4gIGlucHV0czogWydoaWRlV2hlbk9wZW5lZCddLFxufSlcbmV4cG9ydCBjbGFzcyBUZExheW91dE5hdkxpc3RPcGVuRGlyZWN0aXZlIGV4dGVuZHMgQmFzZUxheW91dFRvZ2dsZURpcmVjdGl2ZSB7XG4gIEBJbnB1dCgndGRMYXlvdXROYXZMaXN0T3BlbicpXG4gIHNldCB0ZExheW91dE5hdkxpc3RPcGVuKHRkTGF5b3V0TmF2TGlzdE9wZW46IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gISg8YW55PnRkTGF5b3V0TmF2TGlzdE9wZW4gPT09ICcnIHx8IHRkTGF5b3V0TmF2TGlzdE9wZW4pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChmb3J3YXJkUmVmKCgpID0+IFRkTGF5b3V0TmF2TGlzdENvbXBvbmVudCkpIGxheW91dDogVGRMYXlvdXROYXZMaXN0Q29tcG9uZW50LFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgKSB7XG4gICAgc3VwZXIobGF5b3V0LCByZW5kZXJlciwgZWxlbWVudFJlZik7XG4gIH1cblxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuX2xheW91dC5vcGVuKCk7XG4gIH1cbn1cbiJdfQ==