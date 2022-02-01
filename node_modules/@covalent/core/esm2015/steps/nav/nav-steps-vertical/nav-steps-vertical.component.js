/**
 * @fileoverview added by tsickle
 * Generated from: nav/nav-steps-vertical/nav-steps-vertical.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, ViewChild, QueryList, ChangeDetectionStrategy, Renderer2, ChangeDetectorRef, ElementRef, } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TdNavStepLinkComponent } from '../nav-step-link/nav-step-link.component';
export class TdNavStepsVerticalComponent {
    /**
     * @param {?} _renderer
     * @param {?} _changeDetectorRef
     */
    constructor(_renderer, _changeDetectorRef) {
        this._renderer = _renderer;
        this._changeDetectorRef = _changeDetectorRef;
        this._separators = [];
        /**
         * Emits when the component is destroyed.
         */
        this._destroyed = new Subject();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._steps.changes.pipe(takeUntil(this._destroyed)).subscribe((/**
         * @return {?}
         */
        () => {
            this._configureSteps();
            this._changeDetectorRef.markForCheck();
        }));
        this._configureSteps();
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    /**
     * Set the step line separators and display numbers
     * @private
     * @return {?}
     */
    _configureSteps() {
        this._separators.forEach((/**
         * @param {?} separator
         * @return {?}
         */
        (separator) => {
            this._renderer.removeChild(this._stepList.nativeElement, separator);
        }));
        /** @type {?} */
        const stepsArray = this._steps.toArray();
        // set the index number of the step so can display that number in circle
        stepsArray.forEach((/**
         * @param {?} step
         * @param {?} index
         * @return {?}
         */
        (step, index) => {
            if (index > 0 && index < stepsArray.length) {
                /** @type {?} */
                const separator = this._renderer.createElement('div');
                this._renderer.addClass(separator, 'td-vertical-line-wrapper');
                /** @type {?} */
                const separatorChild = this._renderer.createElement('div');
                this._renderer.addClass(separatorChild, 'td-vertical-line');
                this._renderer.appendChild(separator, separatorChild);
                this._separators.push(separator);
                this._renderer.insertBefore(this._stepList.nativeElement, separator, step.elementRef.nativeElement);
            }
            step.number = index + 1;
        }));
    }
}
TdNavStepsVerticalComponent.decorators = [
    { type: Component, args: [{
                selector: 'nav[td-steps][vertical]',
                template: "<div class=\"td-steps-header\">\n  <div class=\"td-steps-header-container\">\n    <div #stepList class=\"td-steps-header-list\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                /* tslint:disable-next-line */
                host: {
                    class: 'td-steps td-steps-vertical',
                },
                styles: [".td-vertical-line-wrapper{position:relative}.td-vertical-line-wrapper .td-vertical-line{border-left-style:solid;border-left-width:1px;height:34px;position:absolute;top:-16px}::ng-deep :not([dir=rtl]) .td-vertical-line-wrapper .td-vertical-line{left:20px;right:auto}::ng-deep [dir=rtl] .td-vertical-line-wrapper .td-vertical-line{left:auto;right:20px}"]
            }] }
];
/** @nocollapse */
TdNavStepsVerticalComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
TdNavStepsVerticalComponent.propDecorators = {
    _steps: [{ type: ContentChildren, args: [TdNavStepLinkComponent, { descendants: true },] }],
    _stepList: [{ type: ViewChild, args: ['stepList', { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdNavStepsVerticalComponent.prototype._separators;
    /**
     * Emits when the component is destroyed.
     * @type {?}
     * @private
     */
    TdNavStepsVerticalComponent.prototype._destroyed;
    /** @type {?} */
    TdNavStepsVerticalComponent.prototype._steps;
    /** @type {?} */
    TdNavStepsVerticalComponent.prototype._stepList;
    /**
     * @type {?}
     * @private
     */
    TdNavStepsVerticalComponent.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    TdNavStepsVerticalComponent.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LXN0ZXBzLXZlcnRpY2FsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vY29yZS9zdGVwcy8iLCJzb3VyY2VzIjpbIm5hdi9uYXYtc3RlcHMtdmVydGljYWwvbmF2LXN0ZXBzLXZlcnRpY2FsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFNBQVMsRUFDVCxTQUFTLEVBRVQsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBWWxGLE1BQU0sT0FBTywyQkFBMkI7Ozs7O0lBV3RDLFlBQW9CLFNBQW9CLEVBQVUsa0JBQXFDO1FBQW5FLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBVi9FLGdCQUFXLEdBQWtCLEVBQUUsQ0FBQzs7OztRQUd2QixlQUFVLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7SUFPeUIsQ0FBQzs7OztJQUUzRixrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDbEUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN6QyxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Ozs7O0lBS08sZUFBZTtRQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLFNBQXNCLEVBQUUsRUFBRTtZQUNsRCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN0RSxDQUFDLEVBQUMsQ0FBQzs7Y0FDRyxVQUFVLEdBQTZCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1FBQ2xFLHdFQUF3RTtRQUN4RSxVQUFVLENBQUMsT0FBTzs7Ozs7UUFBQyxDQUFDLElBQTRCLEVBQUUsS0FBYSxFQUFFLEVBQUU7WUFDakUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFOztzQkFDcEMsU0FBUyxHQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztnQkFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLDBCQUEwQixDQUFDLENBQUM7O3NCQUN6RCxjQUFjLEdBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO2dCQUMvRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztnQkFDNUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDckc7WUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUExREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBRW5DLDZNQUFrRDtnQkFDbEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2dCQUUvQyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLDRCQUE0QjtpQkFDcEM7O2FBQ0Y7Ozs7WUFuQkMsU0FBUztZQUNULGlCQUFpQjs7O3FCQTBCaEIsZUFBZSxTQUFDLHNCQUFzQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTt3QkFFN0QsU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7Ozs7SUFSdkMsa0RBQXdDOzs7Ozs7SUFHeEMsaURBQWlFOztJQUdqRSw2Q0FBMEc7O0lBRTFHLGdEQUErRDs7Ozs7SUFFbkQsZ0RBQTRCOzs7OztJQUFFLHlEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBWaWV3Q2hpbGQsXG4gIFF1ZXJ5TGlzdCxcbiAgT25EZXN0cm95LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgUmVuZGVyZXIyLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRWxlbWVudFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVGROYXZTdGVwTGlua0NvbXBvbmVudCB9IGZyb20gJy4uL25hdi1zdGVwLWxpbmsvbmF2LXN0ZXAtbGluay5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYXZbdGQtc3RlcHNdW3ZlcnRpY2FsXScsXG4gIHN0eWxlVXJsczogWycuL25hdi1zdGVwcy12ZXJ0aWNhbC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2LXN0ZXBzLXZlcnRpY2FsLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBob3N0OiB7XG4gICAgY2xhc3M6ICd0ZC1zdGVwcyB0ZC1zdGVwcy12ZXJ0aWNhbCcsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIFRkTmF2U3RlcHNWZXJ0aWNhbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3NlcGFyYXRvcnM6IEhUTUxFbGVtZW50W10gPSBbXTtcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZC4gKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfZGVzdHJveWVkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvLyBhbGwgdGhlIHN1YiBjb21wb25lbnRzLCB3aGljaCBhcmUgdGhlIGluZGl2aWR1YWwgc3RlcHNcbiAgQENvbnRlbnRDaGlsZHJlbihUZE5hdlN0ZXBMaW5rQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIF9zdGVwczogUXVlcnlMaXN0PFRkTmF2U3RlcExpbmtDb21wb25lbnQ+O1xuXG4gIEBWaWV3Q2hpbGQoJ3N0ZXBMaXN0JywgeyBzdGF0aWM6IHRydWUgfSkgX3N0ZXBMaXN0OiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fc3RlcHMuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fY29uZmlndXJlU3RlcHMoKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICAgIHRoaXMuX2NvbmZpZ3VyZVN0ZXBzKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9kZXN0cm95ZWQubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc3RlcCBsaW5lIHNlcGFyYXRvcnMgYW5kIGRpc3BsYXkgbnVtYmVyc1xuICAgKi9cbiAgcHJpdmF0ZSBfY29uZmlndXJlU3RlcHMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2VwYXJhdG9ycy5mb3JFYWNoKChzZXBhcmF0b3I6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLl9zdGVwTGlzdC5uYXRpdmVFbGVtZW50LCBzZXBhcmF0b3IpO1xuICAgIH0pO1xuICAgIGNvbnN0IHN0ZXBzQXJyYXk6IFRkTmF2U3RlcExpbmtDb21wb25lbnRbXSA9IHRoaXMuX3N0ZXBzLnRvQXJyYXkoKTtcbiAgICAvLyBzZXQgdGhlIGluZGV4IG51bWJlciBvZiB0aGUgc3RlcCBzbyBjYW4gZGlzcGxheSB0aGF0IG51bWJlciBpbiBjaXJjbGVcbiAgICBzdGVwc0FycmF5LmZvckVhY2goKHN0ZXA6IFRkTmF2U3RlcExpbmtDb21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChpbmRleCA+IDAgJiYgaW5kZXggPCBzdGVwc0FycmF5Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCBzZXBhcmF0b3I6IGFueSA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhzZXBhcmF0b3IsICd0ZC12ZXJ0aWNhbC1saW5lLXdyYXBwZXInKTtcbiAgICAgICAgY29uc3Qgc2VwYXJhdG9yQ2hpbGQ6IGFueSA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhzZXBhcmF0b3JDaGlsZCwgJ3RkLXZlcnRpY2FsLWxpbmUnKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQoc2VwYXJhdG9yLCBzZXBhcmF0b3JDaGlsZCk7XG4gICAgICAgIHRoaXMuX3NlcGFyYXRvcnMucHVzaChzZXBhcmF0b3IpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fc3RlcExpc3QubmF0aXZlRWxlbWVudCwgc2VwYXJhdG9yLCBzdGVwLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgICB9XG4gICAgICBzdGVwLm51bWJlciA9IGluZGV4ICsgMTtcbiAgICB9KTtcbiAgfVxufVxuIl19