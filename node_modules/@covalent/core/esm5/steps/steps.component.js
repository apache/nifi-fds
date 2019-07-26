/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, Output } from '@angular/core';
import { EventEmitter, ContentChildren, QueryList } from '@angular/core';
import { TdStepComponent } from './step.component';
/**
 * @record
 */
export function IStepChangeEvent() { }
if (false) {
    /** @type {?} */
    IStepChangeEvent.prototype.newStep;
    /** @type {?} */
    IStepChangeEvent.prototype.prevStep;
}
/** @enum {string} */
var StepMode = {
    Vertical: 'vertical',
    Horizontal: 'horizontal',
};
export { StepMode };
var TdStepsComponent = /** @class */ (function () {
    function TdStepsComponent() {
        this._mode = StepMode.Vertical;
        /**
         * stepChange?: function
         * Method to be executed when [onStepChange] event is emitted.
         * Emits an [IStepChangeEvent] implemented object.
         */
        this.onStepChange = new EventEmitter();
    }
    Object.defineProperty(TdStepsComponent.prototype, "stepsContent", {
        set: /**
         * @param {?} steps
         * @return {?}
         */
        function (steps) {
            if (steps) {
                this._steps = steps;
                this._registerSteps();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdStepsComponent.prototype, "steps", {
        get: /**
         * @return {?}
         */
        function () {
            return this._steps.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdStepsComponent.prototype, "mode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mode;
        },
        /**
         * mode?: StepMode or ["vertical" | "horizontal"]
         * Defines if the mode of the [TdStepsComponent].  Defaults to [StepMode.Vertical | "vertical"]
         */
        set: /**
         * mode?: StepMode or ["vertical" | "horizontal"]
         * Defines if the mode of the [TdStepsComponent].  Defaults to [StepMode.Vertical | "vertical"]
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            switch (mode) {
                case StepMode.Horizontal:
                    this._mode = StepMode.Horizontal;
                    break;
                default:
                    this._mode = StepMode.Vertical;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Executed after content is initialized, loops through any [TdStepComponent] children elements,
     * assigns them a number and subscribes as an observer to their [onActivated] event.
     */
    /**
     * Executed after content is initialized, loops through any [TdStepComponent] children elements,
     * assigns them a number and subscribes as an observer to their [onActivated] event.
     * @return {?}
     */
    TdStepsComponent.prototype.ngAfterContentInit = /**
     * Executed after content is initialized, loops through any [TdStepComponent] children elements,
     * assigns them a number and subscribes as an observer to their [onActivated] event.
     * @return {?}
     */
    function () {
        this._registerSteps();
    };
    /**
     * Unsubscribes from [TdStepComponent] children elements when component is destroyed.
     */
    /**
     * Unsubscribes from [TdStepComponent] children elements when component is destroyed.
     * @return {?}
     */
    TdStepsComponent.prototype.ngOnDestroy = /**
     * Unsubscribes from [TdStepComponent] children elements when component is destroyed.
     * @return {?}
     */
    function () {
        this._deregisterSteps();
    };
    /**
     * Returns 'true' if [mode] equals to [StepMode.Horizontal | 'horizontal'], else 'false'.
     */
    /**
     * Returns 'true' if [mode] equals to [StepMode.Horizontal | 'horizontal'], else 'false'.
     * @return {?}
     */
    TdStepsComponent.prototype.isHorizontal = /**
     * Returns 'true' if [mode] equals to [StepMode.Horizontal | 'horizontal'], else 'false'.
     * @return {?}
     */
    function () {
        return this._mode === StepMode.Horizontal;
    };
    /**
     * Returns 'true' if [mode] equals to [StepMode.Vertical | 'vertical'], else 'false'.
     */
    /**
     * Returns 'true' if [mode] equals to [StepMode.Vertical | 'vertical'], else 'false'.
     * @return {?}
     */
    TdStepsComponent.prototype.isVertical = /**
     * Returns 'true' if [mode] equals to [StepMode.Vertical | 'vertical'], else 'false'.
     * @return {?}
     */
    function () {
        return this._mode === StepMode.Vertical;
    };
    /**
     * @return {?}
     */
    TdStepsComponent.prototype.areStepsActive = /**
     * @return {?}
     */
    function () {
        return this._steps.filter(function (step) {
            return step.active;
        }).length > 0;
    };
    /**
     * Wraps previous and new [TdStepComponent] numbers in an object that implements [IStepChangeEvent]
     * and emits [onStepChange] event.
     */
    /**
     * Wraps previous and new [TdStepComponent] numbers in an object that implements [IStepChangeEvent]
     * and emits [onStepChange] event.
     * @param {?} step
     * @return {?}
     */
    TdStepsComponent.prototype._onStepSelection = /**
     * Wraps previous and new [TdStepComponent] numbers in an object that implements [IStepChangeEvent]
     * and emits [onStepChange] event.
     * @param {?} step
     * @return {?}
     */
    function (step) {
        if (this.prevStep !== step) {
            /** @type {?} */
            var prevStep = this.prevStep;
            this.prevStep = step;
            /** @type {?} */
            var event_1 = {
                newStep: step,
                prevStep: prevStep,
            };
            this._deactivateAllBut(step);
            this.onStepChange.emit(event_1);
        }
    };
    /**
     * Loops through [TdStepComponent] children elements and deactivates them ignoring the one passed as an argument.
     */
    /**
     * Loops through [TdStepComponent] children elements and deactivates them ignoring the one passed as an argument.
     * @param {?} activeStep
     * @return {?}
     */
    TdStepsComponent.prototype._deactivateAllBut = /**
     * Loops through [TdStepComponent] children elements and deactivates them ignoring the one passed as an argument.
     * @param {?} activeStep
     * @return {?}
     */
    function (activeStep) {
        this._steps.filter(function (step) { return step !== activeStep; })
            .forEach(function (step) {
            step.active = false;
        });
    };
    /**
     * @return {?}
     */
    TdStepsComponent.prototype._registerSteps = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subcriptions = [];
        this._steps.toArray().forEach(function (step) {
            /** @type {?} */
            var subscription = step.onActivated.asObservable().subscribe(function () {
                _this._onStepSelection(step);
            });
            _this._subcriptions.push(subscription);
        });
    };
    /**
     * @return {?}
     */
    TdStepsComponent.prototype._deregisterSteps = /**
     * @return {?}
     */
    function () {
        if (this._subcriptions) {
            this._subcriptions.forEach(function (subs) {
                subs.unsubscribe();
            });
            this._subcriptions = undefined;
        }
    };
    TdStepsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-steps',
                    template: "<div *ngIf=\"isHorizontal()\" class=\"td-steps-header\">\n  <ng-template let-step let-index=\"index\" let-last=\"last\" ngFor [ngForOf]=\"steps\">\n    <td-step-header class=\"td-step-horizontal-header\"\n                    (keydown.enter)=\"step.open()\"\n                    [number]=\"index + 1\"\n                    [active]=\"step.active\"\n                    [disableRipple]=\"step.disableRipple\"\n                    [disabled]=\"step.disabled\" \n                    [state]=\"step.state\"\n                    (click)=\"step.open()\">\n      <ng-template td-step-header-label [cdkPortalOutlet]=\"step.stepLabel\"></ng-template>\n      <ng-template td-step-header-label [ngIf]=\"!step.stepLabel\">{{step.label}}</ng-template>\n      <ng-template td-step-header-sublabel [ngIf]=\"true\">{{step.sublabel | truncate:30}}</ng-template>\n    </td-step-header>\n    <span *ngIf=\"!last\" class=\"td-horizontal-line\"></span>\n  </ng-template>\n</div>\n<div *ngFor=\"let step of steps; let index = index; let last = last\" class=\"td-step\">\n  <td-step-header class=\"td-step-vertical-header\"\n                  (keydown.enter)=\"step.toggle()\"\n                  [number]=\"index + 1\"\n                  [active]=\"step.active\" \n                  [disabled]=\"step.disabled\"\n                  [disableRipple]=\"step.disableRipple\"\n                  [state]=\"step.state\"\n                  (click)=\"step.toggle()\"\n                  *ngIf=\"isVertical()\">\n    <ng-template td-step-header-label [cdkPortalOutlet]=\"step.stepLabel\"></ng-template>\n    <ng-template td-step-header-label [ngIf]=\"!step.stepLabel\">{{step.label}}</ng-template>\n    <ng-template td-step-header-sublabel [ngIf]=\"true\">{{step.sublabel}}</ng-template>\n  </td-step-header>\n  <ng-template [ngIf]=\"isVertical() || step.active || (!areStepsActive() && prevStep === step)\">\n    <td-step-body [active]=\"step.active\" [state]=\"step.state\">\n      <div *ngIf=\"isVertical()\" class=\"td-line-wrapper\">\n        <div *ngIf=\"!last\" class=\"td-vertical-line\"></div>\n      </div>\n      <ng-template td-step-body-content [cdkPortalOutlet]=\"step.stepContent\"></ng-template>\n      <ng-template td-step-body-actions [cdkPortalOutlet]=\"step.stepActions\"></ng-template>\n      <ng-template td-step-body-summary [cdkPortalOutlet]=\"step.stepSummary\"></ng-template>\n    </td-step-body>\n  </ng-template>\n</div>\n",
                    /* tslint:disable-next-line */
                    host: {
                        class: 'td-steps',
                    },
                    styles: [".td-line-wrapper,.td-step{position:relative}.td-steps-header{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.td-line-wrapper{width:24px;min-height:1px}.td-horizontal-line{border-bottom-width:1px;border-bottom-style:solid;height:1px;position:relative;top:36px;min-width:15px;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box}::ng-deep :not([dir=rtl]) .td-horizontal-line{left:-6px;right:-3px}::ng-deep [dir=rtl] .td-horizontal-line{left:-3px;right:-6px}.td-vertical-line{position:absolute;bottom:-16px;top:-16px;border-left-width:1px;border-left-style:solid}::ng-deep :not([dir=rtl]) .td-vertical-line{left:20px;right:auto}::ng-deep [dir=rtl] .td-vertical-line{left:auto;right:20px}"]
                }] }
    ];
    TdStepsComponent.propDecorators = {
        stepsContent: [{ type: ContentChildren, args: [TdStepComponent,] }],
        mode: [{ type: Input, args: ['mode',] }],
        onStepChange: [{ type: Output, args: ['stepChange',] }]
    };
    return TdStepsComponent;
}());
export { TdStepsComponent };
if (false) {
    /** @type {?} */
    TdStepsComponent.prototype._subcriptions;
    /** @type {?} */
    TdStepsComponent.prototype._mode;
    /** @type {?} */
    TdStepsComponent.prototype._steps;
    /** @type {?} */
    TdStepsComponent.prototype.prevStep;
    /**
     * stepChange?: function
     * Method to be executed when [onStepChange] event is emitted.
     * Emits an [IStepChangeEvent] implemented object.
     * @type {?}
     */
    TdStepsComponent.prototype.onStepChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvc3RlcHMvIiwic291cmNlcyI6WyJzdGVwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBRW5ELHNDQUdDOzs7SUFGQyxtQ0FBeUI7O0lBQ3pCLG9DQUEwQjs7OztJQUkxQixVQUFXLFVBQVU7SUFDckIsWUFBYSxZQUFZOzs7QUFHM0I7SUFBQTtRQVlVLFVBQUssR0FBYSxRQUFRLENBQUMsUUFBUSxDQUFDOzs7Ozs7UUF1Q3RCLGlCQUFZLEdBQW1DLElBQUksWUFBWSxFQUFvQixDQUFDO0lBa0Y1RyxDQUFDO0lBdEhDLHNCQUNJLDBDQUFZOzs7OztRQURoQixVQUNpQixLQUFpQztZQUNoRCxJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDcEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3ZCO1FBQ0gsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtQ0FBSzs7OztRQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBT0Qsc0JBQ0ksa0NBQUk7Ozs7UUFTUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDO1FBaEJEOzs7V0FHRzs7Ozs7OztRQUNILFVBQ1MsSUFBYztZQUNyQixRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLFFBQVEsQ0FBQyxVQUFVO29CQUN0QixJQUFJLENBQUMsS0FBSyxH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QUNKLEtBQUssRUFBRSxVQUFVO3FCQUNsQjs7aUJBQ0Y7OzsrQkFPRSxlQUFlLFNBQUMsZUFBZTt1QkFpQi9CLEtBQUssU0FBQyxNQUFNOytCQW1CWixNQUFNLFNBQUMsWUFBWTs7SUFrRnRCLHVCQUFDO0NBQUEsQUFySUQsSUFxSUM7U0E1SFksZ0JBQWdCOzs7SUFFM0IseUNBQXNDOztJQUN0QyxpQ0FBNEM7O0lBQzVDLGtDQUEyQzs7SUFhM0Msb0NBQTBCOzs7Ozs7O0lBeUIxQix3Q0FBMEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFRkU3RlcENvbXBvbmVudCB9IGZyb20gJy4vc3RlcC5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTdGVwQ2hhbmdlRXZlbnQge1xuICBuZXdTdGVwOiBUZFN0ZXBDb21wb25lbnQ7XG4gIHByZXZTdGVwOiBUZFN0ZXBDb21wb25lbnQ7XG59XG5cbmV4cG9ydCBlbnVtIFN0ZXBNb2RlIHtcbiAgVmVydGljYWwgPSAndmVydGljYWwnLFxuICBIb3Jpem9udGFsID0gJ2hvcml6b250YWwnLFxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1zdGVwcycsXG4gIHN0eWxlVXJsczogWycuL3N0ZXBzLmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RlcHMuY29tcG9uZW50Lmh0bWwnLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgaG9zdDoge1xuICAgIGNsYXNzOiAndGQtc3RlcHMnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBUZFN0ZXBzQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcblxuICBwcml2YXRlIF9zdWJjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdO1xuICBwcml2YXRlIF9tb2RlOiBTdGVwTW9kZSA9IFN0ZXBNb2RlLlZlcnRpY2FsO1xuICBwcml2YXRlIF9zdGVwczogUXVlcnlMaXN0PFRkU3RlcENvbXBvbmVudD47XG5cbiAgQENvbnRlbnRDaGlsZHJlbihUZFN0ZXBDb21wb25lbnQpXG4gIHNldCBzdGVwc0NvbnRlbnQoc3RlcHM6IFF1ZXJ5TGlzdDxUZFN0ZXBDb21wb25lbnQ+KSB7XG4gICAgaWYgKHN0ZXBzKSB7XG4gICAgICB0aGlzLl9zdGVwcyA9IHN0ZXBzO1xuICAgICAgdGhpcy5fcmVnaXN0ZXJTdGVwcygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzdGVwcygpOiBUZFN0ZXBDb21wb25lbnRbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0ZXBzLnRvQXJyYXkoKTtcbiAgfVxuICBwcmV2U3RlcDogVGRTdGVwQ29tcG9uZW50O1xuXG4gIC8qKlxuICAgKiBtb2RlPzogU3RlcE1vZGUgb3IgW1widmVydGljYWxcIiB8IFwiaG9yaXpvbnRhbFwiXVxuICAgKiBEZWZpbmVzIGlmIHRoZSBtb2RlIG9mIHRoZSBbVGRTdGVwc0NvbXBvbmVudF0uICBEZWZhdWx0cyB0byBbU3RlcE1vZGUuVmVydGljYWwgfCBcInZlcnRpY2FsXCJdXG4gICAqL1xuICBASW5wdXQoJ21vZGUnKVxuICBzZXQgbW9kZShtb2RlOiBTdGVwTW9kZSkge1xuICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgY2FzZSBTdGVwTW9kZS5Ib3Jpem9udGFsOlxuICAgICAgICB0aGlzLl9tb2RlID0gU3RlcE1vZGUuSG9yaXpvbnRhbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLl9tb2RlID0gU3RlcE1vZGUuVmVydGljYWw7XG4gICAgfVxuICB9XG4gIGdldCBtb2RlKCk6IFN0ZXBNb2RlIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzdGVwQ2hhbmdlPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gW29uU3RlcENoYW5nZV0gZXZlbnQgaXMgZW1pdHRlZC5cbiAgICogRW1pdHMgYW4gW0lTdGVwQ2hhbmdlRXZlbnRdIGltcGxlbWVudGVkIG9iamVjdC5cbiAgICovXG4gIEBPdXRwdXQoJ3N0ZXBDaGFuZ2UnKSBvblN0ZXBDaGFuZ2U6IEV2ZW50RW1pdHRlcjxJU3RlcENoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8SVN0ZXBDaGFuZ2VFdmVudD4oKTtcblxuICAvKipcbiAgICogRXhlY3V0ZWQgYWZ0ZXIgY29udGVudCBpcyBpbml0aWFsaXplZCwgbG9vcHMgdGhyb3VnaCBhbnkgW1RkU3RlcENvbXBvbmVudF0gY2hpbGRyZW4gZWxlbWVudHMsXG4gICAqIGFzc2lnbnMgdGhlbSBhIG51bWJlciBhbmQgc3Vic2NyaWJlcyBhcyBhbiBvYnNlcnZlciB0byB0aGVpciBbb25BY3RpdmF0ZWRdIGV2ZW50LlxuICAgKi9cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlZ2lzdGVyU3RlcHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZXMgZnJvbSBbVGRTdGVwQ29tcG9uZW50XSBjaGlsZHJlbiBlbGVtZW50cyB3aGVuIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuXG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9kZXJlZ2lzdGVyU3RlcHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zICd0cnVlJyBpZiBbbW9kZV0gZXF1YWxzIHRvIFtTdGVwTW9kZS5Ib3Jpem9udGFsIHwgJ2hvcml6b250YWwnXSwgZWxzZSAnZmFsc2UnLlxuICAgKi9cbiAgaXNIb3Jpem9udGFsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tb2RlID09PSBTdGVwTW9kZS5Ib3Jpem9udGFsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgJ3RydWUnIGlmIFttb2RlXSBlcXVhbHMgdG8gW1N0ZXBNb2RlLlZlcnRpY2FsIHwgJ3ZlcnRpY2FsJ10sIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIGlzVmVydGljYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGUgPT09IFN0ZXBNb2RlLlZlcnRpY2FsO1xuICB9XG5cbiAgYXJlU3RlcHNBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0ZXBzLmZpbHRlcigoc3RlcDogVGRTdGVwQ29tcG9uZW50KSA9PiB7XG4gICAgICByZXR1cm4gc3RlcC5hY3RpdmU7XG4gICAgfSkubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcyBwcmV2aW91cyBhbmQgbmV3IFtUZFN0ZXBDb21wb25lbnRdIG51bWJlcnMgaW4gYW4gb2JqZWN0IHRoYXQgaW1wbGVtZW50cyBbSVN0ZXBDaGFuZ2VFdmVudF1cbiAgICogYW5kIGVtaXRzIFtvblN0ZXBDaGFuZ2VdIGV2ZW50LlxuICAgKi9cbiAgcHJpdmF0ZSBfb25TdGVwU2VsZWN0aW9uKHN0ZXA6IFRkU3RlcENvbXBvbmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnByZXZTdGVwICE9PSBzdGVwKSB7XG4gICAgICBsZXQgcHJldlN0ZXA6IFRkU3RlcENvbXBvbmVudCA9IHRoaXMucHJldlN0ZXA7XG4gICAgICB0aGlzLnByZXZTdGVwID0gc3RlcDtcbiAgICAgIGxldCBldmVudDogSVN0ZXBDaGFuZ2VFdmVudCA9IHtcbiAgICAgICAgbmV3U3RlcDogc3RlcCxcbiAgICAgICAgcHJldlN0ZXA6IHByZXZTdGVwLFxuICAgICAgfTtcbiAgICAgIHRoaXMuX2RlYWN0aXZhdGVBbGxCdXQoc3RlcCk7XG4gICAgICB0aGlzLm9uU3RlcENoYW5nZS5lbWl0KGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTG9vcHMgdGhyb3VnaCBbVGRTdGVwQ29tcG9uZW50XSBjaGlsZHJlbiBlbGVtZW50cyBhbmQgZGVhY3RpdmF0ZXMgdGhlbSBpZ25vcmluZyB0aGUgb25lIHBhc3NlZCBhcyBhbiBhcmd1bWVudC5cbiAgICovXG4gIHByaXZhdGUgX2RlYWN0aXZhdGVBbGxCdXQoYWN0aXZlU3RlcDogVGRTdGVwQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5fc3RlcHMuZmlsdGVyKChzdGVwOiBUZFN0ZXBDb21wb25lbnQpID0+IHN0ZXAgIT09IGFjdGl2ZVN0ZXApXG4gICAgLmZvckVhY2goKHN0ZXA6IFRkU3RlcENvbXBvbmVudCkgPT4ge1xuICAgICAgc3RlcC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlZ2lzdGVyU3RlcHMoKTogdm9pZCB7XG4gICAgdGhpcy5fc3ViY3JpcHRpb25zID0gW107XG4gICAgdGhpcy5fc3RlcHMudG9BcnJheSgpLmZvckVhY2goKHN0ZXA6IFRkU3RlcENvbXBvbmVudCkgPT4ge1xuICAgICAgbGV0IHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gc3RlcC5vbkFjdGl2YXRlZC5hc09ic2VydmFibGUoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl9vblN0ZXBTZWxlY3Rpb24oc3RlcCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3N1YmNyaXB0aW9ucy5wdXNoKHN1YnNjcmlwdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9kZXJlZ2lzdGVyU3RlcHMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3N1YmNyaXB0aW9ucykge1xuICAgICAgdGhpcy5fc3ViY3JpcHRpb25zLmZvckVhY2goKHN1YnM6IFN1YnNjcmlwdGlvbikgPT4ge1xuICAgICAgICBzdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3N1YmNyaXB0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==