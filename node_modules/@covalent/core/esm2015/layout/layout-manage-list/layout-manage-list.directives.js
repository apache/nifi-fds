/**
 * @fileoverview added by tsickle
 * Generated from: layout-manage-list/layout-manage-list.directives.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Optional, Directive, Input, Renderer2, ElementRef, Inject, forwardRef } from '@angular/core';
import { TdLayoutManageListComponent } from './layout-manage-list.component';
import { BaseLayoutToggleDirective } from '../layout-toggle.class';
export class TdLayoutManageListToggleDirective extends BaseLayoutToggleDirective {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutManageListToggle
     * @return {?}
     */
    set tdLayoutManageListToggle(tdLayoutManageListToggle) {
        this.disabled = !((/** @type {?} */ (tdLayoutManageListToggle)) === '' || tdLayoutManageListToggle);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.toggle();
    }
}
TdLayoutManageListToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutManageListToggle]',
                inputs: ['hideWhenOpened'],
            },] }
];
/** @nocollapse */
TdLayoutManageListToggleDirective.ctorParameters = () => [
    { type: TdLayoutManageListComponent, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => TdLayoutManageListComponent)),] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
TdLayoutManageListToggleDirective.propDecorators = {
    tdLayoutManageListToggle: [{ type: Input, args: ['tdLayoutManageListToggle',] }]
};
export class TdLayoutManageListCloseDirective extends BaseLayoutToggleDirective {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutManageListClose
     * @return {?}
     */
    set tdLayoutManageListClose(tdLayoutManageListClose) {
        this.disabled = !((/** @type {?} */ (tdLayoutManageListClose)) === '' || tdLayoutManageListClose);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.close();
    }
}
TdLayoutManageListCloseDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutManageListClose]',
                inputs: ['hideWhenOpened'],
            },] }
];
/** @nocollapse */
TdLayoutManageListCloseDirective.ctorParameters = () => [
    { type: TdLayoutManageListComponent, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => TdLayoutManageListComponent)),] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
TdLayoutManageListCloseDirective.propDecorators = {
    tdLayoutManageListClose: [{ type: Input, args: ['tdLayoutManageListClose',] }]
};
export class TdLayoutManageListOpenDirective extends BaseLayoutToggleDirective {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutManageListOpen
     * @return {?}
     */
    set tdLayoutManageListOpen(tdLayoutManageListOpen) {
        this.disabled = !((/** @type {?} */ (tdLayoutManageListOpen)) === '' || tdLayoutManageListOpen);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.open();
    }
}
TdLayoutManageListOpenDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutManageListOpen]',
                inputs: ['hideWhenOpened'],
            },] }
];
/** @nocollapse */
TdLayoutManageListOpenDirective.ctorParameters = () => [
    { type: TdLayoutManageListComponent, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => TdLayoutManageListComponent)),] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
TdLayoutManageListOpenDirective.propDecorators = {
    tdLayoutManageListOpen: [{ type: Input, args: ['tdLayoutManageListOpen',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW1hbmFnZS1saXN0LmRpcmVjdGl2ZXMuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2NvcmUvbGF5b3V0LyIsInNvdXJjZXMiOlsibGF5b3V0LW1hbmFnZS1saXN0L2xheW91dC1tYW5hZ2UtbGlzdC5kaXJlY3RpdmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU1uRSxNQUFNLE9BQU8saUNBQWtDLFNBQVEseUJBQXlCOzs7Ozs7SUFNOUUsWUFDcUUsTUFBbUMsRUFDdEcsUUFBbUIsRUFDbkIsVUFBc0I7UUFFdEIsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFYRCxJQUNJLHdCQUF3QixDQUFDLHdCQUFpQztRQUM1RCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxtQkFBSyx3QkFBd0IsRUFBQSxLQUFLLEVBQUUsSUFBSSx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7Ozs7SUFVRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLE1BQU0sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2FBQzNCOzs7O1lBTlEsMkJBQTJCLHVCQWMvQixRQUFRLFlBQUksTUFBTSxTQUFDLFVBQVU7OztvQkFBQyxHQUFHLEVBQUUsQ0FBQywyQkFBMkIsRUFBQztZQWZoQyxTQUFTO1lBQUUsVUFBVTs7O3VDQVN2RCxLQUFLLFNBQUMsMEJBQTBCOztBQXNCbkMsTUFBTSxPQUFPLGdDQUFpQyxTQUFRLHlCQUF5Qjs7Ozs7O0lBTTdFLFlBQ3FFLE1BQW1DLEVBQ3RHLFFBQW1CLEVBQ25CLFVBQXNCO1FBRXRCLEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBWEQsSUFDSSx1QkFBdUIsQ0FBQyx1QkFBZ0M7UUFDMUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsbUJBQUssdUJBQXVCLEVBQUEsS0FBSyxFQUFFLElBQUksdUJBQXVCLENBQUMsQ0FBQztJQUNwRixDQUFDOzs7O0lBVUQsT0FBTztRQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7O1lBcEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUMzQjs7OztZQTdCUSwyQkFBMkIsdUJBcUMvQixRQUFRLFlBQUksTUFBTSxTQUFDLFVBQVU7OztvQkFBQyxHQUFHLEVBQUUsQ0FBQywyQkFBMkIsRUFBQztZQXRDaEMsU0FBUztZQUFFLFVBQVU7OztzQ0FnQ3ZELEtBQUssU0FBQyx5QkFBeUI7O0FBc0JsQyxNQUFNLE9BQU8sK0JBQWdDLFNBQVEseUJBQXlCOzs7Ozs7SUFNNUUsWUFDcUUsTUFBbUMsRUFDdEcsUUFBbUIsRUFDbkIsVUFBc0I7UUFFdEIsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFYRCxJQUNJLHNCQUFzQixDQUFDLHNCQUErQjtRQUN4RCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxtQkFBSyxzQkFBc0IsRUFBQSxLQUFLLEVBQUUsSUFBSSxzQkFBc0IsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Ozs7SUFVRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLE1BQU0sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2FBQzNCOzs7O1lBcERRLDJCQUEyQix1QkE0RC9CLFFBQVEsWUFBSSxNQUFNLFNBQUMsVUFBVTs7O29CQUFDLEdBQUcsRUFBRSxDQUFDLDJCQUEyQixFQUFDO1lBN0RoQyxTQUFTO1lBQUUsVUFBVTs7O3FDQXVEdkQsS0FBSyxTQUFDLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wdGlvbmFsLCBEaXJlY3RpdmUsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEluamVjdCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGRMYXlvdXRNYW5hZ2VMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtbWFuYWdlLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IEJhc2VMYXlvdXRUb2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuLi9sYXlvdXQtdG9nZ2xlLmNsYXNzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkTGF5b3V0TWFuYWdlTGlzdFRvZ2dsZV0nLFxuICBpbnB1dHM6IFsnaGlkZVdoZW5PcGVuZWQnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXRNYW5hZ2VMaXN0VG9nZ2xlRGlyZWN0aXZlIGV4dGVuZHMgQmFzZUxheW91dFRvZ2dsZURpcmVjdGl2ZSB7XG4gIEBJbnB1dCgndGRMYXlvdXRNYW5hZ2VMaXN0VG9nZ2xlJylcbiAgc2V0IHRkTGF5b3V0TWFuYWdlTGlzdFRvZ2dsZSh0ZExheW91dE1hbmFnZUxpc3RUb2dnbGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gISg8YW55PnRkTGF5b3V0TWFuYWdlTGlzdFRvZ2dsZSA9PT0gJycgfHwgdGRMYXlvdXRNYW5hZ2VMaXN0VG9nZ2xlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBUZExheW91dE1hbmFnZUxpc3RDb21wb25lbnQpKSBsYXlvdXQ6IFRkTGF5b3V0TWFuYWdlTGlzdENvbXBvbmVudCxcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICkge1xuICAgIHN1cGVyKGxheW91dCwgcmVuZGVyZXIsIGVsZW1lbnRSZWYpO1xuICB9XG5cbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLl9sYXlvdXQudG9nZ2xlKCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkTGF5b3V0TWFuYWdlTGlzdENsb3NlXScsXG4gIGlucHV0czogWydoaWRlV2hlbk9wZW5lZCddLFxufSlcbmV4cG9ydCBjbGFzcyBUZExheW91dE1hbmFnZUxpc3RDbG9zZURpcmVjdGl2ZSBleHRlbmRzIEJhc2VMYXlvdXRUb2dnbGVEaXJlY3RpdmUge1xuICBASW5wdXQoJ3RkTGF5b3V0TWFuYWdlTGlzdENsb3NlJylcbiAgc2V0IHRkTGF5b3V0TWFuYWdlTGlzdENsb3NlKHRkTGF5b3V0TWFuYWdlTGlzdENsb3NlOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9ICEoPGFueT50ZExheW91dE1hbmFnZUxpc3RDbG9zZSA9PT0gJycgfHwgdGRMYXlvdXRNYW5hZ2VMaXN0Q2xvc2UpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChmb3J3YXJkUmVmKCgpID0+IFRkTGF5b3V0TWFuYWdlTGlzdENvbXBvbmVudCkpIGxheW91dDogVGRMYXlvdXRNYW5hZ2VMaXN0Q29tcG9uZW50LFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgKSB7XG4gICAgc3VwZXIobGF5b3V0LCByZW5kZXJlciwgZWxlbWVudFJlZik7XG4gIH1cblxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuX2xheW91dC5jbG9zZSgpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZExheW91dE1hbmFnZUxpc3RPcGVuXScsXG4gIGlucHV0czogWydoaWRlV2hlbk9wZW5lZCddLFxufSlcbmV4cG9ydCBjbGFzcyBUZExheW91dE1hbmFnZUxpc3RPcGVuRGlyZWN0aXZlIGV4dGVuZHMgQmFzZUxheW91dFRvZ2dsZURpcmVjdGl2ZSB7XG4gIEBJbnB1dCgndGRMYXlvdXRNYW5hZ2VMaXN0T3BlbicpXG4gIHNldCB0ZExheW91dE1hbmFnZUxpc3RPcGVuKHRkTGF5b3V0TWFuYWdlTGlzdE9wZW46IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gISg8YW55PnRkTGF5b3V0TWFuYWdlTGlzdE9wZW4gPT09ICcnIHx8IHRkTGF5b3V0TWFuYWdlTGlzdE9wZW4pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChmb3J3YXJkUmVmKCgpID0+IFRkTGF5b3V0TWFuYWdlTGlzdENvbXBvbmVudCkpIGxheW91dDogVGRMYXlvdXRNYW5hZ2VMaXN0Q29tcG9uZW50LFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgKSB7XG4gICAgc3VwZXIobGF5b3V0LCByZW5kZXJlciwgZWxlbWVudFJlZik7XG4gIH1cblxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuX2xheW91dC5vcGVuKCk7XG4gIH1cbn1cbiJdfQ==