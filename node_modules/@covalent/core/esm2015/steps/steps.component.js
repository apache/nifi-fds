/**
 * @fileoverview added by tsickle
 * Generated from: steps.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
const StepMode = {
    Vertical: "vertical",
    Horizontal: "horizontal",
};
export { StepMode };
export class TdStepsComponent {
    constructor() {
        this._mode = StepMode.Vertical;
        /**
         * stepChange?: function
         * Method to be executed when [stepChange] event is emitted.
         * Emits an [IStepChangeEvent] implemented object.
         */
        this.stepChange = new EventEmitter();
    }
    /**
     * @param {?} steps
     * @return {?}
     */
    set stepsContent(steps) {
        if (steps) {
            this._steps = steps;
            this._registerSteps();
        }
    }
    /**
     * @return {?}
     */
    get steps() {
        return this._steps.toArray();
    }
    /**
     * mode?: StepMode or ["vertical" | "horizontal"]
     * Defines if the mode of the [TdStepsComponent].  Defaults to [StepMode.Vertical | "vertical"]
     * @param {?} mode
     * @return {?}
     */
    set mode(mode) {
        if (mode === StepMode.Horizontal) {
            this._mode = StepMode.Horizontal;
        }
        else {
            this._mode = StepMode.Vertical;
        }
    }
    /**
     * @return {?}
     */
    get mode() {
        return this._mode;
    }
    /**
     * Executed after content is initialized, loops through any [TdStepComponent] children elements,
     * assigns them a number and subscribes as an observer to their [activated] event.
     * @return {?}
     */
    ngAfterContentInit() {
        this._registerSteps();
    }
    /**
     * Unsubscribes from [TdStepComponent] children elements when component is destroyed.
     * @return {?}
     */
    ngOnDestroy() {
        this._deregisterSteps();
    }
    /**
     * Returns 'true' if [mode] equals to [StepMode.Horizontal | 'horizontal'], else 'false'.
     * @return {?}
     */
    isHorizontal() {
        return this._mode === StepMode.Horizontal;
    }
    /**
     * Returns 'true' if [mode] equals to [StepMode.Vertical | 'vertical'], else 'false'.
     * @return {?}
     */
    isVertical() {
        return this._mode === StepMode.Vertical;
    }
    /**
     * @return {?}
     */
    areStepsActive() {
        return (this._steps.filter((/**
         * @param {?} step
         * @return {?}
         */
        (step) => {
            return step.active;
        })).length > 0);
    }
    /**
     * Wraps previous and new [TdStepComponent] numbers in an object that implements [IStepChangeEvent]
     * and emits [stepChange] event.
     * @private
     * @param {?} step
     * @return {?}
     */
    _onStepSelection(step) {
        if (this.prevStep !== step) {
            /** @type {?} */
            const prevStep = this.prevStep;
            this.prevStep = step;
            /** @type {?} */
            const event = {
                newStep: step,
                prevStep,
            };
            this._deactivateAllBut(step);
            this.stepChange.emit(event);
        }
    }
    /**
     * Loops through [TdStepComponent] children elements and deactivates them ignoring the one passed as an argument.
     * @private
     * @param {?} activeStep
     * @return {?}
     */
    _deactivateAllBut(activeStep) {
        this._steps
            .filter((/**
         * @param {?} step
         * @return {?}
         */
        (step) => step !== activeStep))
            .forEach((/**
         * @param {?} step
         * @return {?}
         */
        (step) => {
            step.active = false;
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _registerSteps() {
        this._subcriptions = [];
        this._steps.toArray().forEach((/**
         * @param {?} step
         * @return {?}
         */
        (step) => {
            /** @type {?} */
            const subscription = step.activated.asObservable().subscribe((/**
             * @return {?}
             */
            () => {
                this._onStepSelection(step);
            }));
            this._subcriptions.push(subscription);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _deregisterSteps() {
        if (this._subcriptions) {
            this._subcriptions.forEach((/**
             * @param {?} subs
             * @return {?}
             */
            (subs) => {
                subs.unsubscribe();
            }));
            this._subcriptions = undefined;
        }
    }
}
TdStepsComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-steps',
                template: "<div *ngIf=\"isHorizontal()\" class=\"td-steps-header\">\n  <ng-template let-step let-index=\"index\" let-last=\"last\" ngFor [ngForOf]=\"steps\">\n    <td-step-header\n      class=\"td-step-horizontal-header\"\n      (keydown.enter)=\"step.open()\"\n      [number]=\"index + 1\"\n      [active]=\"step.active\"\n      [disableRipple]=\"step.disableRipple\"\n      [disabled]=\"step.disabled\"\n      [state]=\"step.state\"\n      (click)=\"step.open()\"\n    >\n      <ng-template td-step-header-label [cdkPortalOutlet]=\"step.stepLabel\"></ng-template>\n      <ng-template td-step-header-label [ngIf]=\"!step.stepLabel\">{{ step.label }}</ng-template>\n      <ng-template td-step-header-sublabel [ngIf]=\"true\">{{ step.sublabel | truncate: 30 }}</ng-template>\n    </td-step-header>\n    <span *ngIf=\"!last\" class=\"td-horizontal-line\"></span>\n  </ng-template>\n</div>\n<div *ngFor=\"let step of steps; let index = index; let last = last\" class=\"td-step\">\n  <td-step-header\n    class=\"td-step-vertical-header\"\n    (keydown.enter)=\"step.toggle()\"\n    [number]=\"index + 1\"\n    [active]=\"step.active\"\n    [disabled]=\"step.disabled\"\n    [disableRipple]=\"step.disableRipple\"\n    [state]=\"step.state\"\n    (click)=\"step.toggle()\"\n    *ngIf=\"isVertical()\"\n  >\n    <ng-template td-step-header-label [cdkPortalOutlet]=\"step.stepLabel\"></ng-template>\n    <ng-template td-step-header-label [ngIf]=\"!step.stepLabel\">{{ step.label }}</ng-template>\n    <ng-template td-step-header-sublabel [ngIf]=\"true\">{{ step.sublabel }}</ng-template>\n  </td-step-header>\n  <ng-template [ngIf]=\"isVertical() || step.active || (!areStepsActive() && prevStep === step)\">\n    <td-step-body [active]=\"step.active\" [state]=\"step.state\">\n      <div *ngIf=\"isVertical()\" class=\"td-line-wrapper\">\n        <div *ngIf=\"!last\" class=\"td-vertical-line\"></div>\n      </div>\n      <ng-template td-step-body-content [cdkPortalOutlet]=\"step.stepContent\"></ng-template>\n      <ng-template td-step-body-actions [cdkPortalOutlet]=\"step.stepActions\"></ng-template>\n      <ng-template td-step-body-summary [cdkPortalOutlet]=\"step.stepSummary\"></ng-template>\n    </td-step-body>\n  </ng-template>\n</div>\n",
                /* tslint:disable-next-line */
                host: {
                    class: 'td-steps',
                },
                styles: [".td-line-wrapper,.td-step{position:relative}.td-steps-header{-ms-flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:row}.td-line-wrapper{min-height:1px;width:24px}.td-horizontal-line{-ms-flex:1;border-bottom-style:solid;border-bottom-width:1px;box-sizing:border-box;flex:1;height:1px;min-width:15px;position:relative;top:36px}::ng-deep :not([dir=rtl]) .td-horizontal-line{left:-6px;right:-3px}::ng-deep [dir=rtl] .td-horizontal-line{left:-3px;right:-6px}.td-vertical-line{border-left-style:solid;border-left-width:1px;bottom:-16px;position:absolute;top:-16px}::ng-deep :not([dir=rtl]) .td-vertical-line{left:20px;right:auto}::ng-deep [dir=rtl] .td-vertical-line{left:auto;right:20px}"]
            }] }
];
TdStepsComponent.propDecorators = {
    stepsContent: [{ type: ContentChildren, args: [TdStepComponent, { descendants: true },] }],
    mode: [{ type: Input, args: ['mode',] }],
    stepChange: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdStepsComponent.prototype._subcriptions;
    /**
     * @type {?}
     * @private
     */
    TdStepsComponent.prototype._mode;
    /**
     * @type {?}
     * @private
     */
    TdStepsComponent.prototype._steps;
    /** @type {?} */
    TdStepsComponent.prototype.prevStep;
    /**
     * stepChange?: function
     * Method to be executed when [stepChange] event is emitted.
     * Emits an [IStepChangeEvent] implemented object.
     * @type {?}
     */
    TdStepsComponent.prototype.stepChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9wbGF0Zm9ybS9jb3JlL3N0ZXBzLyIsInNvdXJjZXMiOlsic3RlcHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd6RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFFbkQsc0NBR0M7OztJQUZDLG1DQUF5Qjs7SUFDekIsb0NBQTBCOzs7QUFHNUIsTUFBWSxRQUFRO0lBQ2xCLFFBQVEsWUFBYTtJQUNyQixVQUFVLGNBQWU7RUFDMUI7O0FBV0QsTUFBTSxPQUFPLGdCQUFnQjtJQVQ3QjtRQVdVLFVBQUssR0FBYSxRQUFRLENBQUMsUUFBUSxDQUFDOzs7Ozs7UUFxQ2xDLGVBQVUsR0FBbUMsSUFBSSxZQUFZLEVBQW9CLENBQUM7SUFxRjlGLENBQUM7Ozs7O0lBdkhDLElBQ0ksWUFBWSxDQUFDLEtBQWlDO1FBQ2hELElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7Ozs7O0lBT0QsSUFDSSxJQUFJLENBQUMsSUFBYztRQUNyQixJQUFJLElBQUksS0FBSyxRQUFRLENBQUMsVUFBVSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztTQUNsQzthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FB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LE1BQU07Ozs7Ozs7SUF0Q1AseUNBQXNDOzs7OztJQUN0QyxpQ0FBNEM7Ozs7O0lBQzVDLGtDQUEyQzs7SUFhM0Msb0NBQTBCOzs7Ozs7O0lBdUIxQixzQ0FBNEYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFRkU3RlcENvbXBvbmVudCB9IGZyb20gJy4vc3RlcC5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTdGVwQ2hhbmdlRXZlbnQge1xuICBuZXdTdGVwOiBUZFN0ZXBDb21wb25lbnQ7XG4gIHByZXZTdGVwOiBUZFN0ZXBDb21wb25lbnQ7XG59XG5cbmV4cG9ydCBlbnVtIFN0ZXBNb2RlIHtcbiAgVmVydGljYWwgPSAndmVydGljYWwnLFxuICBIb3Jpem9udGFsID0gJ2hvcml6b250YWwnLFxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1zdGVwcycsXG4gIHN0eWxlVXJsczogWycuL3N0ZXBzLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGVwcy5jb21wb25lbnQuaHRtbCcsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBob3N0OiB7XG4gICAgY2xhc3M6ICd0ZC1zdGVwcycsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIFRkU3RlcHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xuICBwcml2YXRlIF9zdWJjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdO1xuICBwcml2YXRlIF9tb2RlOiBTdGVwTW9kZSA9IFN0ZXBNb2RlLlZlcnRpY2FsO1xuICBwcml2YXRlIF9zdGVwczogUXVlcnlMaXN0PFRkU3RlcENvbXBvbmVudD47XG5cbiAgQENvbnRlbnRDaGlsZHJlbihUZFN0ZXBDb21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgc2V0IHN0ZXBzQ29udGVudChzdGVwczogUXVlcnlMaXN0PFRkU3RlcENvbXBvbmVudD4pIHtcbiAgICBpZiAoc3RlcHMpIHtcbiAgICAgIHRoaXMuX3N0ZXBzID0gc3RlcHM7XG4gICAgICB0aGlzLl9yZWdpc3RlclN0ZXBzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHN0ZXBzKCk6IFRkU3RlcENvbXBvbmVudFtdIHtcbiAgICByZXR1cm4gdGhpcy5fc3RlcHMudG9BcnJheSgpO1xuICB9XG4gIHByZXZTdGVwOiBUZFN0ZXBDb21wb25lbnQ7XG5cbiAgLyoqXG4gICAqIG1vZGU/OiBTdGVwTW9kZSBvciBbXCJ2ZXJ0aWNhbFwiIHwgXCJob3Jpem9udGFsXCJdXG4gICAqIERlZmluZXMgaWYgdGhlIG1vZGUgb2YgdGhlIFtUZFN0ZXBzQ29tcG9uZW50XS4gIERlZmF1bHRzIHRvIFtTdGVwTW9kZS5WZXJ0aWNhbCB8IFwidmVydGljYWxcIl1cbiAgICovXG4gIEBJbnB1dCgnbW9kZScpXG4gIHNldCBtb2RlKG1vZGU6IFN0ZXBNb2RlKSB7XG4gICAgaWYgKG1vZGUgPT09IFN0ZXBNb2RlLkhvcml6b250YWwpIHtcbiAgICAgIHRoaXMuX21vZGUgPSBTdGVwTW9kZS5Ib3Jpem9udGFsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9tb2RlID0gU3RlcE1vZGUuVmVydGljYWw7XG4gICAgfVxuICB9XG4gIGdldCBtb2RlKCk6IFN0ZXBNb2RlIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzdGVwQ2hhbmdlPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gW3N0ZXBDaGFuZ2VdIGV2ZW50IGlzIGVtaXR0ZWQuXG4gICAqIEVtaXRzIGFuIFtJU3RlcENoYW5nZUV2ZW50XSBpbXBsZW1lbnRlZCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCkgc3RlcENoYW5nZTogRXZlbnRFbWl0dGVyPElTdGVwQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJU3RlcENoYW5nZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBFeGVjdXRlZCBhZnRlciBjb250ZW50IGlzIGluaXRpYWxpemVkLCBsb29wcyB0aHJvdWdoIGFueSBbVGRTdGVwQ29tcG9uZW50XSBjaGlsZHJlbiBlbGVtZW50cyxcbiAgICogYXNzaWducyB0aGVtIGEgbnVtYmVyIGFuZCBzdWJzY3JpYmVzIGFzIGFuIG9ic2VydmVyIHRvIHRoZWlyIFthY3RpdmF0ZWRdIGV2ZW50LlxuICAgKi9cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlZ2lzdGVyU3RlcHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZXMgZnJvbSBbVGRTdGVwQ29tcG9uZW50XSBjaGlsZHJlbiBlbGVtZW50cyB3aGVuIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuXG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9kZXJlZ2lzdGVyU3RlcHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zICd0cnVlJyBpZiBbbW9kZV0gZXF1YWxzIHRvIFtTdGVwTW9kZS5Ib3Jpem9udGFsIHwgJ2hvcml6b250YWwnXSwgZWxzZSAnZmFsc2UnLlxuICAgKi9cbiAgaXNIb3Jpem9udGFsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tb2RlID09PSBTdGVwTW9kZS5Ib3Jpem9udGFsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgJ3RydWUnIGlmIFttb2RlXSBlcXVhbHMgdG8gW1N0ZXBNb2RlLlZlcnRpY2FsIHwgJ3ZlcnRpY2FsJ10sIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIGlzVmVydGljYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGUgPT09IFN0ZXBNb2RlLlZlcnRpY2FsO1xuICB9XG5cbiAgYXJlU3RlcHNBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX3N0ZXBzLmZpbHRlcigoc3RlcDogVGRTdGVwQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIHJldHVybiBzdGVwLmFjdGl2ZTtcbiAgICAgIH0pLmxlbmd0aCA+IDBcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBzIHByZXZpb3VzIGFuZCBuZXcgW1RkU3RlcENvbXBvbmVudF0gbnVtYmVycyBpbiBhbiBvYmplY3QgdGhhdCBpbXBsZW1lbnRzIFtJU3RlcENoYW5nZUV2ZW50XVxuICAgKiBhbmQgZW1pdHMgW3N0ZXBDaGFuZ2VdIGV2ZW50LlxuICAgKi9cbiAgcHJpdmF0ZSBfb25TdGVwU2VsZWN0aW9uKHN0ZXA6IFRkU3RlcENvbXBvbmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnByZXZTdGVwICE9PSBzdGVwKSB7XG4gICAgICBjb25zdCBwcmV2U3RlcDogVGRTdGVwQ29tcG9uZW50ID0gdGhpcy5wcmV2U3RlcDtcbiAgICAgIHRoaXMucHJldlN0ZXAgPSBzdGVwO1xuICAgICAgY29uc3QgZXZlbnQ6IElTdGVwQ2hhbmdlRXZlbnQgPSB7XG4gICAgICAgIG5ld1N0ZXA6IHN0ZXAsXG4gICAgICAgIHByZXZTdGVwLFxuICAgICAgfTtcbiAgICAgIHRoaXMuX2RlYWN0aXZhdGVBbGxCdXQoc3RlcCk7XG4gICAgICB0aGlzLnN0ZXBDaGFuZ2UuZW1pdChldmVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExvb3BzIHRocm91Z2ggW1RkU3RlcENvbXBvbmVudF0gY2hpbGRyZW4gZWxlbWVudHMgYW5kIGRlYWN0aXZhdGVzIHRoZW0gaWdub3JpbmcgdGhlIG9uZSBwYXNzZWQgYXMgYW4gYXJndW1lbnQuXG4gICAqL1xuICBwcml2YXRlIF9kZWFjdGl2YXRlQWxsQnV0KGFjdGl2ZVN0ZXA6IFRkU3RlcENvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuX3N0ZXBzXG4gICAgICAuZmlsdGVyKChzdGVwOiBUZFN0ZXBDb21wb25lbnQpID0+IHN0ZXAgIT09IGFjdGl2ZVN0ZXApXG4gICAgICAuZm9yRWFjaCgoc3RlcDogVGRTdGVwQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIHN0ZXAuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlZ2lzdGVyU3RlcHMoKTogdm9pZCB7XG4gICAgdGhpcy5fc3ViY3JpcHRpb25zID0gW107XG4gICAgdGhpcy5fc3RlcHMudG9BcnJheSgpLmZvckVhY2goKHN0ZXA6IFRkU3RlcENvbXBvbmVudCkgPT4ge1xuICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBzdGVwLmFjdGl2YXRlZC5hc09ic2VydmFibGUoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl9vblN0ZXBTZWxlY3Rpb24oc3RlcCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3N1YmNyaXB0aW9ucy5wdXNoKHN1YnNjcmlwdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9kZXJlZ2lzdGVyU3RlcHMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3N1YmNyaXB0aW9ucykge1xuICAgICAgdGhpcy5fc3ViY3JpcHRpb25zLmZvckVhY2goKHN1YnM6IFN1YnNjcmlwdGlvbikgPT4ge1xuICAgICAgICBzdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3N1YmNyaXB0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==