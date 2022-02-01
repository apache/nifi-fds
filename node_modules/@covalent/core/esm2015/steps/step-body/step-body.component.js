/**
 * @fileoverview added by tsickle
 * Generated from: step-body/step-body.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { StepState } from '../step.component';
import { tdCollapseAnimation } from '@covalent/core/common';
export class TdStepBodyComponent {
    constructor() {
        /**
         * state?: StepState or ['none' | 'required' | 'complete']
         * Sets styles for state of body.
         * Defaults to [StepState.None | 'none'].
         */
        this.state = StepState.None;
    }
    /**
     * @return {?}
     */
    get hasContent() {
        return (this.contentRef &&
            (this.contentRef.nativeElement.children.length > 0 || !!this.contentRef.nativeElement.textContent.trim()));
    }
    /**
     * @return {?}
     */
    get hasActions() {
        return (this.actionsRef &&
            (this.actionsRef.nativeElement.children.length > 0 || !!this.actionsRef.nativeElement.textContent.trim()));
    }
    /**
     * @return {?}
     */
    get hasSummary() {
        return (this.summaryRef &&
            (this.summaryRef.nativeElement.children.length > 0 || !!this.summaryRef.nativeElement.textContent.trim()));
    }
    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     * @return {?}
     */
    isComplete() {
        return this.state === StepState.Complete;
    }
}
TdStepBodyComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-step-body',
                template: "<ng-content></ng-content>\n<div class=\"td-step-body\">\n  <div class=\"td-step-content-wrapper\" [@tdCollapse]=\"!active\">\n    <div #contentRef cdkScrollable [class.td-step-content]=\"hasContent\">\n      <ng-content select=\"[td-step-body-content]\"></ng-content>\n    </div>\n    <div #actionsRef [class.td-step-actions]=\"hasActions\">\n      <ng-content select=\"[td-step-body-actions]\"></ng-content>\n    </div>\n  </div>\n  <div #summaryRef [@tdCollapse]=\"active || !isComplete()\" [class.td-step-summary]=\"hasSummary\">\n    <ng-content select=\"[td-step-body-summary]\"></ng-content>\n  </div>\n</div>\n",
                animations: [tdCollapseAnimation],
                styles: [":host{-ms-flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:row}:host .td-step-body{-ms-flex:1;box-sizing:border-box;flex:1;overflow-x:hidden}:host .td-step-body .td-step-content-wrapper.ng-animating,:host .td-step-body .td-step-summary.ng-animating{overflow:hidden}:host .td-step-body .td-step-content{overflow-x:auto}:host .td-step-body .td-step-actions{-ms-flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:row}"]
            }] }
];
TdStepBodyComponent.propDecorators = {
    contentRef: [{ type: ViewChild, args: ['contentRef', { read: ElementRef, static: true },] }],
    actionsRef: [{ type: ViewChild, args: ['actionsRef', { read: ElementRef, static: true },] }],
    summaryRef: [{ type: ViewChild, args: ['summaryRef', { read: ElementRef, static: true },] }],
    active: [{ type: Input }],
    state: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TdStepBodyComponent.prototype.contentRef;
    /** @type {?} */
    TdStepBodyComponent.prototype.actionsRef;
    /** @type {?} */
    TdStepBodyComponent.prototype.summaryRef;
    /**
     * active?: boolean
     * Sets for active/inactive states on body.
     * @type {?}
     */
    TdStepBodyComponent.prototype.active;
    /**
     * state?: StepState or ['none' | 'required' | 'complete']
     * Sets styles for state of body.
     * Defaults to [StepState.None | 'none'].
     * @type {?}
     */
    TdStepBodyComponent.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1ib2R5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vY29yZS9zdGVwcy8iLCJzb3VyY2VzIjpbInN0ZXAtYm9keS9zdGVwLWJvZHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFOUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFRNUQsTUFBTSxPQUFPLG1CQUFtQjtJQU5oQzs7Ozs7O1FBNkNXLFVBQUssR0FBYyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBUTdDLENBQUM7Ozs7SUE1Q0MsSUFBSSxVQUFVO1FBQ1osT0FBTyxDQUNMLElBQUksQ0FBQyxVQUFVO1lBQ2YsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLENBQzFHLENBQUM7SUFDSixDQUFDOzs7O0lBSUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxDQUNMLElBQUksQ0FBQyxVQUFVO1lBQ2YsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLENBQzFHLENBQUM7SUFDSixDQUFDOzs7O0lBSUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxDQUNMLElBQUksQ0FBQyxVQUFVO1lBQ2YsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLENBQzFHLENBQUM7SUFDSixDQUFDOzs7OztJQWtCRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxRQUFRLENBQUM7SUFDM0MsQ0FBQzs7O1lBcERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFFeEIscW5CQUF5QztnQkFDekMsVUFBVSxFQUFFLENBQUMsbUJBQW1CLENBQUM7O2FBQ2xDOzs7eUJBRUUsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt5QkFTMUQsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt5QkFTMUQsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtxQkFhMUQsS0FBSztvQkFPTCxLQUFLOzs7O0lBdENOLHlDQUFvRjs7SUFTcEYseUNBQW9GOztJQVNwRix5Q0FBb0Y7Ozs7OztJQWFwRixxQ0FBeUI7Ozs7Ozs7SUFPekIsb0NBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0ZXBTdGF0ZSB9IGZyb20gJy4uL3N0ZXAuY29tcG9uZW50JztcblxuaW1wb3J0IHsgdGRDb2xsYXBzZUFuaW1hdGlvbiB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLXN0ZXAtYm9keScsXG4gIHN0eWxlVXJsczogWycuL3N0ZXAtYm9keS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RlcC1ib2R5LmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9uczogW3RkQ29sbGFwc2VBbmltYXRpb25dLFxufSlcbmV4cG9ydCBjbGFzcyBUZFN0ZXBCb2R5Q29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZCgnY29udGVudFJlZicsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pIGNvbnRlbnRSZWY6IEVsZW1lbnRSZWY7XG5cbiAgZ2V0IGhhc0NvbnRlbnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuY29udGVudFJlZiAmJlxuICAgICAgKHRoaXMuY29udGVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDAgfHwgISF0aGlzLmNvbnRlbnRSZWYubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudC50cmltKCkpXG4gICAgKTtcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoJ2FjdGlvbnNSZWYnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSBhY3Rpb25zUmVmOiBFbGVtZW50UmVmO1xuXG4gIGdldCBoYXNBY3Rpb25zKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmFjdGlvbnNSZWYgJiZcbiAgICAgICh0aGlzLmFjdGlvbnNSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPiAwIHx8ICEhdGhpcy5hY3Rpb25zUmVmLm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpKVxuICAgICk7XG4gIH1cblxuICBAVmlld0NoaWxkKCdzdW1tYXJ5UmVmJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSkgc3VtbWFyeVJlZjogRWxlbWVudFJlZjtcblxuICBnZXQgaGFzU3VtbWFyeSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5zdW1tYXJ5UmVmICYmXG4gICAgICAodGhpcy5zdW1tYXJ5UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMCB8fCAhIXRoaXMuc3VtbWFyeVJlZi5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIGFjdGl2ZT86IGJvb2xlYW5cbiAgICogU2V0cyBmb3IgYWN0aXZlL2luYWN0aXZlIHN0YXRlcyBvbiBib2R5LlxuICAgKi9cbiAgQElucHV0KCkgYWN0aXZlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBzdGF0ZT86IFN0ZXBTdGF0ZSBvciBbJ25vbmUnIHwgJ3JlcXVpcmVkJyB8ICdjb21wbGV0ZSddXG4gICAqIFNldHMgc3R5bGVzIGZvciBzdGF0ZSBvZiBib2R5LlxuICAgKiBEZWZhdWx0cyB0byBbU3RlcFN0YXRlLk5vbmUgfCAnbm9uZSddLlxuICAgKi9cbiAgQElucHV0KCkgc3RhdGU6IFN0ZXBTdGF0ZSA9IFN0ZXBTdGF0ZS5Ob25lO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zICd0cnVlJyBpZiBbc3RhdGVdIGVxdWFscyB0byBbU3RlcFN0YXRlLkNvbXBsZXRlIHwgJ2NvbXBsZXRlJ10sIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIGlzQ29tcGxldGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IFN0ZXBTdGF0ZS5Db21wbGV0ZTtcbiAgfVxufVxuIl19