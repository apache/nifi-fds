/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Optional, Directive, Input, Renderer2, ElementRef, Inject, forwardRef } from '@angular/core';
import { TdLayoutManageListComponent } from './layout-manage-list.component';
import { LayoutToggle } from '../layout-toggle.class';
var TdLayoutManageListToggleDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdLayoutManageListToggleDirective, _super);
    function TdLayoutManageListToggleDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutManageListToggleDirective.prototype, "tdLayoutManageListToggle", {
        set: /**
         * @param {?} tdLayoutManageListToggle
         * @return {?}
         */
        function (tdLayoutManageListToggle) {
            this.disabled = !((/** @type {?} */ (tdLayoutManageListToggle)) === '' || tdLayoutManageListToggle);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutManageListToggleDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._layout.toggle();
    };
    TdLayoutManageListToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdLayoutManageListToggle]',
                },] }
    ];
    /** @nocollapse */
    TdLayoutManageListToggleDirective.ctorParameters = function () { return [
        { type: TdLayoutManageListComponent, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef(function () { return TdLayoutManageListComponent; }),] }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    TdLayoutManageListToggleDirective.propDecorators = {
        tdLayoutManageListToggle: [{ type: Input, args: ['tdLayoutManageListToggle',] }]
    };
    return TdLayoutManageListToggleDirective;
}(LayoutToggle));
export { TdLayoutManageListToggleDirective };
var TdLayoutManageListCloseDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdLayoutManageListCloseDirective, _super);
    function TdLayoutManageListCloseDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutManageListCloseDirective.prototype, "tdLayoutManageListClose", {
        set: /**
         * @param {?} tdLayoutManageListClose
         * @return {?}
         */
        function (tdLayoutManageListClose) {
            this.disabled = !((/** @type {?} */ (tdLayoutManageListClose)) === '' || tdLayoutManageListClose);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutManageListCloseDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._layout.close();
    };
    TdLayoutManageListCloseDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdLayoutManageListClose]',
                },] }
    ];
    /** @nocollapse */
    TdLayoutManageListCloseDirective.ctorParameters = function () { return [
        { type: TdLayoutManageListComponent, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef(function () { return TdLayoutManageListComponent; }),] }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    TdLayoutManageListCloseDirective.propDecorators = {
        tdLayoutManageListClose: [{ type: Input, args: ['tdLayoutManageListClose',] }]
    };
    return TdLayoutManageListCloseDirective;
}(LayoutToggle));
export { TdLayoutManageListCloseDirective };
var TdLayoutManageListOpenDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdLayoutManageListOpenDirective, _super);
    function TdLayoutManageListOpenDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutManageListOpenDirective.prototype, "tdLayoutManageListOpen", {
        set: /**
         * @param {?} tdLayoutManageListOpen
         * @return {?}
         */
        function (tdLayoutManageListOpen) {
            this.disabled = !((/** @type {?} */ (tdLayoutManageListOpen)) === '' || tdLayoutManageListOpen);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutManageListOpenDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._layout.open();
    };
    TdLayoutManageListOpenDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdLayoutManageListOpen]',
                },] }
    ];
    /** @nocollapse */
    TdLayoutManageListOpenDirective.ctorParameters = function () { return [
        { type: TdLayoutManageListComponent, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef(function () { return TdLayoutManageListComponent; }),] }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    TdLayoutManageListOpenDirective.propDecorators = {
        tdLayoutManageListOpen: [{ type: Input, args: ['tdLayoutManageListOpen',] }]
    };
    return TdLayoutManageListOpenDirective;
}(LayoutToggle));
export { TdLayoutManageListOpenDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW1hbmFnZS1saXN0LmRpcmVjdGl2ZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9sYXlvdXQvIiwic291cmNlcyI6WyJsYXlvdXQtbWFuYWdlLWxpc3QvbGF5b3V0LW1hbmFnZS1saXN0LmRpcmVjdGl2ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RDtJQUd1RCw2REFBWTtJQU9qRSwyQ0FBK0UsTUFBbUMsRUFDdEcsUUFBbUIsRUFDbkIsVUFBc0I7ZUFDaEMsa0JBQU0sTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUM7SUFDckMsQ0FBQztJQVRELHNCQUNJLHVFQUF3Qjs7Ozs7UUFENUIsVUFDNkIsd0JBQWlDO1lBQzVELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLG1CQUFLLHdCQUF3QixFQUFBLEtBQUssRUFBRSxJQUFJLHdCQUF3QixDQUFDLENBQUM7UUFDdEYsQ0FBQzs7O09BQUE7Ozs7SUFRRCxtREFBTzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3hCLENBQUM7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtpQkFDdkM7Ozs7Z0JBTFEsMkJBQTJCLHVCQWFyQixRQUFRLFlBQUksTUFBTSxTQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsMkJBQTJCLEVBQTNCLENBQTJCLENBQUM7Z0JBZDFDLFNBQVM7Z0JBQUUsVUFBVTs7OzJDQVN2RCxLQUFLLFNBQUMsMEJBQTBCOztJQWNuQyx3Q0FBQztDQUFBLEFBbkJELENBR3VELFlBQVksR0FnQmxFO1NBaEJZLGlDQUFpQztBQWtCOUM7SUFHc0QsNERBQVk7SUFPaEUsMENBQStFLE1BQW1DLEVBQ3RHLFFBQW1CLEVBQ25CLFVBQXNCO2VBQ2hDLGtCQUFNLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDO0lBQ3JDLENBQUM7SUFURCxzQkFDSSxxRUFBdUI7Ozs7O1FBRDNCLFVBQzRCLHVCQUFnQztZQUMxRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxtQkFBSyx1QkFBdUIsRUFBQSxLQUFLLEVBQUUsSUFBSSx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3BGLENBQUM7OztPQUFBOzs7O0lBUUQsa0RBQU87OztJQUFQO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDOztnQkFsQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7aUJBQ3RDOzs7O2dCQTFCUSwyQkFBMkIsdUJBa0NyQixRQUFRLFlBQUksTUFBTSxTQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsMkJBQTJCLEVBQTNCLENBQTJCLENBQUM7Z0JBbkMxQyxTQUFTO2dCQUFFLFVBQVU7OzswQ0E4QnZELEtBQUssU0FBQyx5QkFBeUI7O0lBY2xDLHVDQUFDO0NBQUEsQUFuQkQsQ0FHc0QsWUFBWSxHQWdCakU7U0FoQlksZ0NBQWdDO0FBa0I3QztJQUdxRCwyREFBWTtJQU8vRCx5Q0FBK0UsTUFBbUMsRUFDdEcsUUFBbUIsRUFDbkIsVUFBc0I7ZUFDaEMsa0JBQU0sTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUM7SUFDckMsQ0FBQztJQVRELHNCQUNJLG1FQUFzQjs7Ozs7UUFEMUIsVUFDMkIsc0JBQStCO1lBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLG1CQUFLLHNCQUFzQixFQUFBLEtBQUssRUFBRSxJQUFJLHNCQUFzQixDQUFDLENBQUM7UUFDbEYsQ0FBQzs7O09BQUE7Ozs7SUFRRCxpREFBTzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtpQkFDckM7Ozs7Z0JBL0NRLDJCQUEyQix1QkF1RHJCLFFBQVEsWUFBSSxNQUFNLFNBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSwyQkFBMkIsRUFBM0IsQ0FBMkIsQ0FBQztnQkF4RDFDLFNBQVM7Z0JBQUUsVUFBVTs7O3lDQW1EdkQsS0FBSyxTQUFDLHdCQUF3Qjs7SUFjakMsc0NBQUM7Q0FBQSxBQW5CRCxDQUdxRCxZQUFZLEdBZ0JoRTtTQWhCWSwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcHRpb25hbCwgRGlyZWN0aXZlLCBJbnB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBJbmplY3QsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRkTGF5b3V0TWFuYWdlTGlzdENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LW1hbmFnZS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXRUb2dnbGUgfSBmcm9tICcuLi9sYXlvdXQtdG9nZ2xlLmNsYXNzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkTGF5b3V0TWFuYWdlTGlzdFRvZ2dsZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZExheW91dE1hbmFnZUxpc3RUb2dnbGVEaXJlY3RpdmUgZXh0ZW5kcyBMYXlvdXRUb2dnbGUge1xuXG4gIEBJbnB1dCgndGRMYXlvdXRNYW5hZ2VMaXN0VG9nZ2xlJykgXG4gIHNldCB0ZExheW91dE1hbmFnZUxpc3RUb2dnbGUodGRMYXlvdXRNYW5hZ2VMaXN0VG9nZ2xlOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9ICEoPGFueT50ZExheW91dE1hbmFnZUxpc3RUb2dnbGUgPT09ICcnIHx8IHRkTGF5b3V0TWFuYWdlTGlzdFRvZ2dsZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gVGRMYXlvdXRNYW5hZ2VMaXN0Q29tcG9uZW50KSkgbGF5b3V0OiBUZExheW91dE1hbmFnZUxpc3RDb21wb25lbnQsXG4gICAgICAgICAgICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihsYXlvdXQsIHJlbmRlcmVyLCBlbGVtZW50UmVmKTtcbiAgfVxuXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5fbGF5b3V0LnRvZ2dsZSgpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZExheW91dE1hbmFnZUxpc3RDbG9zZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZExheW91dE1hbmFnZUxpc3RDbG9zZURpcmVjdGl2ZSBleHRlbmRzIExheW91dFRvZ2dsZSB7XG4gIFxuICBASW5wdXQoJ3RkTGF5b3V0TWFuYWdlTGlzdENsb3NlJykgXG4gIHNldCB0ZExheW91dE1hbmFnZUxpc3RDbG9zZSh0ZExheW91dE1hbmFnZUxpc3RDbG9zZTogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSAhKDxhbnk+dGRMYXlvdXRNYW5hZ2VMaXN0Q2xvc2UgPT09ICcnIHx8IHRkTGF5b3V0TWFuYWdlTGlzdENsb3NlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBUZExheW91dE1hbmFnZUxpc3RDb21wb25lbnQpKSBsYXlvdXQ6IFRkTGF5b3V0TWFuYWdlTGlzdENvbXBvbmVudCxcbiAgICAgICAgICAgICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGxheW91dCwgcmVuZGVyZXIsIGVsZW1lbnRSZWYpO1xuICB9XG5cbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLl9sYXlvdXQuY2xvc2UoKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRMYXlvdXRNYW5hZ2VMaXN0T3Blbl0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZExheW91dE1hbmFnZUxpc3RPcGVuRGlyZWN0aXZlIGV4dGVuZHMgTGF5b3V0VG9nZ2xlIHtcblxuICBASW5wdXQoJ3RkTGF5b3V0TWFuYWdlTGlzdE9wZW4nKSBcbiAgc2V0IHRkTGF5b3V0TWFuYWdlTGlzdE9wZW4odGRMYXlvdXRNYW5hZ2VMaXN0T3BlbjogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSAhKDxhbnk+dGRMYXlvdXRNYW5hZ2VMaXN0T3BlbiA9PT0gJycgfHwgdGRMYXlvdXRNYW5hZ2VMaXN0T3Blbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gVGRMYXlvdXRNYW5hZ2VMaXN0Q29tcG9uZW50KSkgbGF5b3V0OiBUZExheW91dE1hbmFnZUxpc3RDb21wb25lbnQsXG4gICAgICAgICAgICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihsYXlvdXQsIHJlbmRlcmVyLCBlbGVtZW50UmVmKTtcbiAgfVxuXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5fbGF5b3V0Lm9wZW4oKTtcbiAgfVxufVxuIl19