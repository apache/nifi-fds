/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Optional, Directive, Input, Renderer2, ElementRef, Inject, forwardRef } from '@angular/core';
import { TdLayoutNavListComponent } from './layout-nav-list.component';
import { LayoutToggle } from '../layout-toggle.class';
var TdLayoutNavListToggleDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdLayoutNavListToggleDirective, _super);
    function TdLayoutNavListToggleDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutNavListToggleDirective.prototype, "tdLayoutNavListToggle", {
        set: /**
         * @param {?} tdLayoutNavListToggle
         * @return {?}
         */
        function (tdLayoutNavListToggle) {
            this.disabled = !((/** @type {?} */ (tdLayoutNavListToggle)) === '' || tdLayoutNavListToggle);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutNavListToggleDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._layout.toggle();
    };
    TdLayoutNavListToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdLayoutNavListToggle]',
                },] }
    ];
    /** @nocollapse */
    TdLayoutNavListToggleDirective.ctorParameters = function () { return [
        { type: TdLayoutNavListComponent, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef(function () { return TdLayoutNavListComponent; }),] }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    TdLayoutNavListToggleDirective.propDecorators = {
        tdLayoutNavListToggle: [{ type: Input, args: ['tdLayoutNavListToggle',] }]
    };
    return TdLayoutNavListToggleDirective;
}(LayoutToggle));
export { TdLayoutNavListToggleDirective };
var TdLayoutNavListCloseDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdLayoutNavListCloseDirective, _super);
    function TdLayoutNavListCloseDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutNavListCloseDirective.prototype, "tdLayoutNavListClose", {
        set: /**
         * @param {?} tdLayoutNavListClose
         * @return {?}
         */
        function (tdLayoutNavListClose) {
            this.disabled = !((/** @type {?} */ (tdLayoutNavListClose)) === '' || tdLayoutNavListClose);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutNavListCloseDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._layout.close();
    };
    TdLayoutNavListCloseDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdLayoutNavListClose]',
                },] }
    ];
    /** @nocollapse */
    TdLayoutNavListCloseDirective.ctorParameters = function () { return [
        { type: TdLayoutNavListComponent, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef(function () { return TdLayoutNavListComponent; }),] }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    TdLayoutNavListCloseDirective.propDecorators = {
        tdLayoutNavListClose: [{ type: Input, args: ['tdLayoutNavListClose',] }]
    };
    return TdLayoutNavListCloseDirective;
}(LayoutToggle));
export { TdLayoutNavListCloseDirective };
var TdLayoutNavListOpenDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdLayoutNavListOpenDirective, _super);
    function TdLayoutNavListOpenDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutNavListOpenDirective.prototype, "tdLayoutNavListOpen", {
        set: /**
         * @param {?} tdLayoutNavListOpen
         * @return {?}
         */
        function (tdLayoutNavListOpen) {
            this.disabled = !((/** @type {?} */ (tdLayoutNavListOpen)) === '' || tdLayoutNavListOpen);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutNavListOpenDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._layout.open();
    };
    TdLayoutNavListOpenDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdLayoutNavListOpen]',
                },] }
    ];
    /** @nocollapse */
    TdLayoutNavListOpenDirective.ctorParameters = function () { return [
        { type: TdLayoutNavListComponent, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef(function () { return TdLayoutNavListComponent; }),] }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    TdLayoutNavListOpenDirective.propDecorators = {
        tdLayoutNavListOpen: [{ type: Input, args: ['tdLayoutNavListOpen',] }]
    };
    return TdLayoutNavListOpenDirective;
}(LayoutToggle));
export { TdLayoutNavListOpenDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW5hdi1saXN0LmRpcmVjdGl2ZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9sYXlvdXQvIiwic291cmNlcyI6WyJsYXlvdXQtbmF2LWxpc3QvbGF5b3V0LW5hdi1saXN0LmRpcmVjdGl2ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RDtJQUdvRCwwREFBWTtJQU85RCx3Q0FBNEUsTUFBZ0MsRUFDaEcsUUFBbUIsRUFDbkIsVUFBc0I7ZUFDaEMsa0JBQU0sTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUM7SUFDckMsQ0FBQztJQVRELHNCQUNJLGlFQUFxQjs7Ozs7UUFEekIsVUFDMEIscUJBQThCO1lBQ3RELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLG1CQUFLLHFCQUFxQixFQUFBLEtBQUssRUFBRSxJQUFJLHFCQUFxQixDQUFDLENBQUM7UUFDaEYsQ0FBQzs7O09BQUE7Ozs7SUFRRCxnREFBTzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3hCLENBQUM7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtpQkFDcEM7Ozs7Z0JBTFEsd0JBQXdCLHVCQWFsQixRQUFRLFlBQUksTUFBTSxTQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsd0JBQXdCLEVBQXhCLENBQXdCLENBQUM7Z0JBZHZDLFNBQVM7Z0JBQUUsVUFBVTs7O3dDQVN2RCxLQUFLLFNBQUMsdUJBQXVCOztJQWNoQyxxQ0FBQztDQUFBLEFBbkJELENBR29ELFlBQVksR0FnQi9EO1NBaEJZLDhCQUE4QjtBQWtCM0M7SUFHbUQseURBQVk7SUFPN0QsdUNBQTRFLE1BQWdDLEVBQ2hHLFFBQW1CLEVBQ25CLFVBQXNCO2VBQ2hDLGtCQUFNLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDO0lBQ3JDLENBQUM7SUFURCxzQkFDSSwrREFBb0I7Ozs7O1FBRHhCLFVBQ3lCLG9CQUE2QjtZQUNwRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxtQkFBSyxvQkFBb0IsRUFBQSxLQUFLLEVBQUUsSUFBSSxvQkFBb0IsQ0FBQyxDQUFDO1FBQzlFLENBQUM7OztPQUFBOzs7O0lBUUQsK0NBQU87OztJQUFQO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDOztnQkFsQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7aUJBQ25DOzs7O2dCQTFCUSx3QkFBd0IsdUJBa0NsQixRQUFRLFlBQUksTUFBTSxTQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsd0JBQXdCLEVBQXhCLENBQXdCLENBQUM7Z0JBbkN2QyxTQUFTO2dCQUFFLFVBQVU7Ozt1Q0E4QnZELEtBQUssU0FBQyxzQkFBc0I7O0lBYy9CLG9DQUFDO0NBQUEsQUFuQkQsQ0FHbUQsWUFBWSxHQWdCOUQ7U0FoQlksNkJBQTZCO0FBa0IxQztJQUdrRCx3REFBWTtJQU81RCxzQ0FBNEUsTUFBZ0MsRUFDaEcsUUFBbUIsRUFDbkIsVUFBc0I7ZUFDaEMsa0JBQU0sTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUM7SUFDckMsQ0FBQztJQVRELHNCQUNJLDZEQUFtQjs7Ozs7UUFEdkIsVUFDd0IsbUJBQTRCO1lBQ2xELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLG1CQUFLLG1CQUFtQixFQUFBLEtBQUssRUFBRSxJQUFJLG1CQUFtQixDQUFDLENBQUM7UUFDNUUsQ0FBQzs7O09BQUE7Ozs7SUFRRCw4Q0FBTzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtpQkFDbEM7Ozs7Z0JBL0NRLHdCQUF3Qix1QkF1RGxCLFFBQVEsWUFBSSxNQUFNLFNBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSx3QkFBd0IsRUFBeEIsQ0FBd0IsQ0FBQztnQkF4RHZDLFNBQVM7Z0JBQUUsVUFBVTs7O3NDQW1EdkQsS0FBSyxTQUFDLHFCQUFxQjs7SUFjOUIsbUNBQUM7Q0FBQSxBQW5CRCxDQUdrRCxZQUFZLEdBZ0I3RDtTQWhCWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcHRpb25hbCwgRGlyZWN0aXZlLCBJbnB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBJbmplY3QsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRkTGF5b3V0TmF2TGlzdENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LW5hdi1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXRUb2dnbGUgfSBmcm9tICcuLi9sYXlvdXQtdG9nZ2xlLmNsYXNzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkTGF5b3V0TmF2TGlzdFRvZ2dsZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZExheW91dE5hdkxpc3RUb2dnbGVEaXJlY3RpdmUgZXh0ZW5kcyBMYXlvdXRUb2dnbGUge1xuXG4gIEBJbnB1dCgndGRMYXlvdXROYXZMaXN0VG9nZ2xlJykgXG4gIHNldCB0ZExheW91dE5hdkxpc3RUb2dnbGUodGRMYXlvdXROYXZMaXN0VG9nZ2xlOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9ICEoPGFueT50ZExheW91dE5hdkxpc3RUb2dnbGUgPT09ICcnIHx8IHRkTGF5b3V0TmF2TGlzdFRvZ2dsZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gVGRMYXlvdXROYXZMaXN0Q29tcG9uZW50KSkgbGF5b3V0OiBUZExheW91dE5hdkxpc3RDb21wb25lbnQsXG4gICAgICAgICAgICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihsYXlvdXQsIHJlbmRlcmVyLCBlbGVtZW50UmVmKTtcbiAgfVxuXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5fbGF5b3V0LnRvZ2dsZSgpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZExheW91dE5hdkxpc3RDbG9zZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZExheW91dE5hdkxpc3RDbG9zZURpcmVjdGl2ZSBleHRlbmRzIExheW91dFRvZ2dsZSB7XG4gIFxuICBASW5wdXQoJ3RkTGF5b3V0TmF2TGlzdENsb3NlJykgXG4gIHNldCB0ZExheW91dE5hdkxpc3RDbG9zZSh0ZExheW91dE5hdkxpc3RDbG9zZTogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSAhKDxhbnk+dGRMYXlvdXROYXZMaXN0Q2xvc2UgPT09ICcnIHx8IHRkTGF5b3V0TmF2TGlzdENsb3NlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBUZExheW91dE5hdkxpc3RDb21wb25lbnQpKSBsYXlvdXQ6IFRkTGF5b3V0TmF2TGlzdENvbXBvbmVudCxcbiAgICAgICAgICAgICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGxheW91dCwgcmVuZGVyZXIsIGVsZW1lbnRSZWYpO1xuICB9XG5cbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLl9sYXlvdXQuY2xvc2UoKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRMYXlvdXROYXZMaXN0T3Blbl0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZExheW91dE5hdkxpc3RPcGVuRGlyZWN0aXZlIGV4dGVuZHMgTGF5b3V0VG9nZ2xlIHtcblxuICBASW5wdXQoJ3RkTGF5b3V0TmF2TGlzdE9wZW4nKSBcbiAgc2V0IHRkTGF5b3V0TmF2TGlzdE9wZW4odGRMYXlvdXROYXZMaXN0T3BlbjogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSAhKDxhbnk+dGRMYXlvdXROYXZMaXN0T3BlbiA9PT0gJycgfHwgdGRMYXlvdXROYXZMaXN0T3Blbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gVGRMYXlvdXROYXZMaXN0Q29tcG9uZW50KSkgbGF5b3V0OiBUZExheW91dE5hdkxpc3RDb21wb25lbnQsXG4gICAgICAgICAgICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihsYXlvdXQsIHJlbmRlcmVyLCBlbGVtZW50UmVmKTtcbiAgfVxuXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5fbGF5b3V0Lm9wZW4oKTtcbiAgfVxufVxuIl19