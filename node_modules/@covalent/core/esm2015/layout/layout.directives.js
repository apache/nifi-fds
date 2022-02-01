/**
 * @fileoverview added by tsickle
 * Generated from: layout.directives.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Optional, Directive, Input, Renderer2, ElementRef, Inject, forwardRef } from '@angular/core';
import { TdLayoutComponent } from './layout.component';
import { BaseLayoutToggleDirective } from './layout-toggle.class';
export class TdLayoutToggleDirective extends BaseLayoutToggleDirective {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutToggle
     * @return {?}
     */
    set tdLayoutToggle(tdLayoutToggle) {
        this.disabled = !((/** @type {?} */ (tdLayoutToggle)) === '' || tdLayoutToggle);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.toggle();
    }
}
TdLayoutToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutToggle]',
            },] }
];
/** @nocollapse */
TdLayoutToggleDirective.ctorParameters = () => [
    { type: TdLayoutComponent, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => TdLayoutComponent)),] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
TdLayoutToggleDirective.propDecorators = {
    tdLayoutToggle: [{ type: Input, args: ['tdLayoutToggle',] }]
};
export class TdLayoutCloseDirective extends BaseLayoutToggleDirective {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutClose
     * @return {?}
     */
    set tdLayoutClose(tdLayoutClose) {
        this.disabled = !((/** @type {?} */ (tdLayoutClose)) === '' || tdLayoutClose);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.close();
    }
}
TdLayoutCloseDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutClose]',
            },] }
];
/** @nocollapse */
TdLayoutCloseDirective.ctorParameters = () => [
    { type: TdLayoutComponent, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => TdLayoutComponent)),] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
TdLayoutCloseDirective.propDecorators = {
    tdLayoutClose: [{ type: Input, args: ['tdLayoutClose',] }]
};
export class TdLayoutOpenDirective extends BaseLayoutToggleDirective {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutOpen
     * @return {?}
     */
    set tdLayoutClose(tdLayoutOpen) {
        this.disabled = !((/** @type {?} */ (tdLayoutOpen)) === '' || tdLayoutOpen);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.open();
    }
}
TdLayoutOpenDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutOpen]',
            },] }
];
/** @nocollapse */
TdLayoutOpenDirective.ctorParameters = () => [
    { type: TdLayoutComponent, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => TdLayoutComponent)),] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
TdLayoutOpenDirective.propDecorators = {
    tdLayoutClose: [{ type: Input, args: ['tdLayoutOpen',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmRpcmVjdGl2ZXMuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2NvcmUvbGF5b3V0LyIsInNvdXJjZXMiOlsibGF5b3V0LmRpcmVjdGl2ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBS2xFLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSx5QkFBeUI7Ozs7OztJQU1wRSxZQUMyRCxNQUF5QixFQUNsRixRQUFtQixFQUNuQixVQUFzQjtRQUV0QixLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7OztJQVhELElBQ0ksY0FBYyxDQUFDLGNBQXVCO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLG1CQUFLLGNBQWMsRUFBQSxLQUFLLEVBQUUsSUFBSSxjQUFjLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7O0lBVUQsT0FBTztRQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCOzs7O1lBTFEsaUJBQWlCLHVCQWFyQixRQUFRLFlBQUksTUFBTSxTQUFDLFVBQVU7OztvQkFBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsRUFBQztZQWR0QixTQUFTO1lBQUUsVUFBVTs7OzZCQVF2RCxLQUFLLFNBQUMsZ0JBQWdCOztBQXFCekIsTUFBTSxPQUFPLHNCQUF1QixTQUFRLHlCQUF5Qjs7Ozs7O0lBTW5FLFlBQzJELE1BQXlCLEVBQ2xGLFFBQW1CLEVBQ25CLFVBQXNCO1FBRXRCLEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBWEQsSUFDSSxhQUFhLENBQUMsYUFBc0I7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsbUJBQUssYUFBYSxFQUFBLEtBQUssRUFBRSxJQUFJLGFBQWEsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7SUFVRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7YUFDNUI7Ozs7WUEzQlEsaUJBQWlCLHVCQW1DckIsUUFBUSxZQUFJLE1BQU0sU0FBQyxVQUFVOzs7b0JBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUM7WUFwQ3RCLFNBQVM7WUFBRSxVQUFVOzs7NEJBOEJ2RCxLQUFLLFNBQUMsZUFBZTs7QUFxQnhCLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSx5QkFBeUI7Ozs7OztJQU1sRSxZQUMyRCxNQUF5QixFQUNsRixRQUFtQixFQUNuQixVQUFzQjtRQUV0QixLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7OztJQVhELElBQ0ksYUFBYSxDQUFDLFlBQXFCO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLG1CQUFLLFlBQVksRUFBQSxLQUFLLEVBQUUsSUFBSSxZQUFZLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7O0lBVUQsT0FBTztRQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCOzs7O1lBakRRLGlCQUFpQix1QkF5RHJCLFFBQVEsWUFBSSxNQUFNLFNBQUMsVUFBVTs7O29CQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixFQUFDO1lBMUR0QixTQUFTO1lBQUUsVUFBVTs7OzRCQW9EdkQsS0FBSyxTQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcHRpb25hbCwgRGlyZWN0aXZlLCBJbnB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBJbmplY3QsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRkTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEJhc2VMYXlvdXRUb2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuL2xheW91dC10b2dnbGUuY2xhc3MnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRMYXlvdXRUb2dnbGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXRUb2dnbGVEaXJlY3RpdmUgZXh0ZW5kcyBCYXNlTGF5b3V0VG9nZ2xlRGlyZWN0aXZlIHtcbiAgQElucHV0KCd0ZExheW91dFRvZ2dsZScpXG4gIHNldCB0ZExheW91dFRvZ2dsZSh0ZExheW91dFRvZ2dsZTogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSAhKDxhbnk+dGRMYXlvdXRUb2dnbGUgPT09ICcnIHx8IHRkTGF5b3V0VG9nZ2xlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBUZExheW91dENvbXBvbmVudCkpIGxheW91dDogVGRMYXlvdXRDb21wb25lbnQsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICApIHtcbiAgICBzdXBlcihsYXlvdXQsIHJlbmRlcmVyLCBlbGVtZW50UmVmKTtcbiAgfVxuXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5fbGF5b3V0LnRvZ2dsZSgpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZExheW91dENsb3NlXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkTGF5b3V0Q2xvc2VEaXJlY3RpdmUgZXh0ZW5kcyBCYXNlTGF5b3V0VG9nZ2xlRGlyZWN0aXZlIHtcbiAgQElucHV0KCd0ZExheW91dENsb3NlJylcbiAgc2V0IHRkTGF5b3V0Q2xvc2UodGRMYXlvdXRDbG9zZTogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSAhKDxhbnk+dGRMYXlvdXRDbG9zZSA9PT0gJycgfHwgdGRMYXlvdXRDbG9zZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gVGRMYXlvdXRDb21wb25lbnQpKSBsYXlvdXQ6IFRkTGF5b3V0Q29tcG9uZW50LFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgKSB7XG4gICAgc3VwZXIobGF5b3V0LCByZW5kZXJlciwgZWxlbWVudFJlZik7XG4gIH1cblxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuX2xheW91dC5jbG9zZSgpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZExheW91dE9wZW5dJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXRPcGVuRGlyZWN0aXZlIGV4dGVuZHMgQmFzZUxheW91dFRvZ2dsZURpcmVjdGl2ZSB7XG4gIEBJbnB1dCgndGRMYXlvdXRPcGVuJylcbiAgc2V0IHRkTGF5b3V0Q2xvc2UodGRMYXlvdXRPcGVuOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9ICEoPGFueT50ZExheW91dE9wZW4gPT09ICcnIHx8IHRkTGF5b3V0T3Blbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gVGRMYXlvdXRDb21wb25lbnQpKSBsYXlvdXQ6IFRkTGF5b3V0Q29tcG9uZW50LFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgKSB7XG4gICAgc3VwZXIobGF5b3V0LCByZW5kZXJlciwgZWxlbWVudFJlZik7XG4gIH1cblxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuX2xheW91dC5vcGVuKCk7XG4gIH1cbn1cbiJdfQ==