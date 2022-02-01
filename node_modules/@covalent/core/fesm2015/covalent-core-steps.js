import { Directive, TemplateRef, ViewContainerRef, EventEmitter, Component, ViewChild, ContentChild, Input, Output, ContentChildren, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, Optional, Renderer2, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatePortalDirective, TemplatePortal, PortalModule } from '@angular/cdk/portal';
import { ViewportRuler, ScrollingModule } from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { mixinDisableRipple, mixinDisabled, tdCollapseAnimation, CovalentCommonModule } from '@covalent/core/common';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subject, merge, of } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Directionality } from '@angular/cdk/bidi';
import { RIGHT_ARROW, LEFT_ARROW } from '@angular/cdk/keycodes';

/**
 * @fileoverview added by tsickle
 * Generated from: step.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const StepState = {
    None: "none",
    Required: "required",
    Complete: "complete",
};
class TdStepLabelDirective extends TemplatePortalDirective {
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    constructor(templateRef, viewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}
TdStepLabelDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-step-label]ng-template',
            },] }
];
/** @nocollapse */
TdStepLabelDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
class TdStepActionsDirective extends TemplatePortalDirective {
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    constructor(templateRef, viewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}
TdStepActionsDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-step-actions]ng-template',
            },] }
];
/** @nocollapse */
TdStepActionsDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
class TdStepSummaryDirective extends TemplatePortalDirective {
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    constructor(templateRef, viewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}
TdStepSummaryDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-step-summary]ng-template',
            },] }
];
/** @nocollapse */
TdStepSummaryDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
class TdStepBase {
}
/* tslint:disable-next-line */
/** @type {?} */
const _TdStepMixinBase = mixinDisableRipple(mixinDisabled(TdStepBase));
class TdStepComponent extends _TdStepMixinBase {
    /**
     * @param {?} _viewContainerRef
     */
    constructor(_viewContainerRef) {
        super();
        this._viewContainerRef = _viewContainerRef;
        this._active = false;
        this._state = StepState.None;
        /**
         * activated?: function
         * Event emitted when [TdStepComponent] is activated.
         */
        this.activated = new EventEmitter();
        /**
         * deactivated?: function
         * Event emitted when [TdStepComponent] is deactivated.
         */
        this.deactivated = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get stepContent() {
        return this._contentPortal;
    }
    /**
     * active?: boolean
     * Toggles [TdStepComponent] between active/deactive.
     * @param {?} active
     * @return {?}
     */
    set active(active) {
        this._setActive(coerceBooleanProperty(active));
    }
    /**
     * @return {?}
     */
    get active() {
        return this._active;
    }
    /**
     * state?: StepState or ['none' | 'required' | 'complete']
     * Sets state of [TdStepComponent] depending on value.
     * Defaults to [StepState.None | 'none'].
     * @param {?} state
     * @return {?}
     */
    set state(state) {
        switch (state) {
            case StepState.Complete:
                this._state = StepState.Complete;
                break;
            case StepState.Required:
                this._state = StepState.Required;
                break;
            default:
                this._state = StepState.None;
                break;
        }
    }
    /**
     * @return {?}
     */
    get state() {
        return this._state;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._contentPortal = new TemplatePortal(this._content, this._viewContainerRef);
    }
    /**
     * Toggle active state of [TdStepComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    toggle() {
        return this._setActive(!this._active);
    }
    /**
     * Opens [TdStepComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    open() {
        return this._setActive(true);
    }
    /**
     * Closes [TdStepComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    close() {
        return this._setActive(false);
    }
    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     * @return {?}
     */
    isComplete() {
        return this._state === StepState.Complete;
    }
    /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    onDisabledChange(v) {
        if (v && this._active) {
            this._active = false;
            this._onDeactivated();
        }
    }
    /**
     * Method to change active state internally and emit the [activated] event if 'true' or [deactivated]
     * event if 'false'. (Blocked if [disabled] is 'true')
     * returns true if successfully changed state
     * @private
     * @param {?} newActive
     * @return {?}
     */
    _setActive(newActive) {
        if (this.disabled) {
            return false;
        }
        if (this._active !== newActive) {
            this._active = newActive;
            if (newActive) {
                this._onActivated();
            }
            else {
                this._onDeactivated();
            }
            return true;
        }
        return false;
    }
    /**
     * @private
     * @return {?}
     */
    _onActivated() {
        this.activated.emit();
    }
    /**
     * @private
     * @return {?}
     */
    _onDeactivated() {
        this.deactivated.emit();
    }
}
TdStepComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-step',
                inputs: ['disabled', 'disableRipple'],
                template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
TdStepComponent.ctorParameters = () => [
    { type: ViewContainerRef }
];
TdStepComponent.propDecorators = {
    _content: [{ type: ViewChild, args: [TemplateRef, { static: true },] }],
    stepLabel: [{ type: ContentChild, args: [TdStepLabelDirective,] }],
    stepActions: [{ type: ContentChild, args: [TdStepActionsDirective,] }],
    stepSummary: [{ type: ContentChild, args: [TdStepSummaryDirective,] }],
    label: [{ type: Input }],
    sublabel: [{ type: Input }],
    active: [{ type: Input, args: ['active',] }],
    state: [{ type: Input, args: ['state',] }],
    activated: [{ type: Output }],
    deactivated: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdStepComponent.prototype._active;
    /**
     * @type {?}
     * @private
     */
    TdStepComponent.prototype._state;
    /**
     * @type {?}
     * @private
     */
    TdStepComponent.prototype._contentPortal;
    /** @type {?} */
    TdStepComponent.prototype._content;
    /** @type {?} */
    TdStepComponent.prototype.stepLabel;
    /** @type {?} */
    TdStepComponent.prototype.stepActions;
    /** @type {?} */
    TdStepComponent.prototype.stepSummary;
    /**
     * label?: string
     * Sets label of [TdStepComponent] header.
     * Defaults to 'Step #'
     * @type {?}
     */
    TdStepComponent.prototype.label;
    /**
     * sublabel?: string
     * Sets sublabel of [TdStepComponent] header.
     * @type {?}
     */
    TdStepComponent.prototype.sublabel;
    /**
     * activated?: function
     * Event emitted when [TdStepComponent] is activated.
     * @type {?}
     */
    TdStepComponent.prototype.activated;
    /**
     * deactivated?: function
     * Event emitted when [TdStepComponent] is deactivated.
     * @type {?}
     */
    TdStepComponent.prototype.deactivated;
    /**
     * @type {?}
     * @private
     */
    TdStepComponent.prototype._viewContainerRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: steps.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IStepChangeEvent() { }
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
class TdStepsComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: step-header/step-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdStepHeaderBase {
}
/* tslint:disable-next-line */
/** @type {?} */
const _TdStepHeaderMixinBase = mixinDisableRipple(mixinDisabled(TdStepHeaderBase));
class TdStepHeaderComponent extends _TdStepHeaderMixinBase {
    constructor() {
        super(...arguments);
        /**
         * state?: StepState or ['none' | 'required' | 'complete']
         * Sets styles for state of header.
         * Defaults to [StepState.None | 'none'].
         */
        this.state = StepState.None;
    }
    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     * @return {?}
     */
    isComplete() {
        return this.state === StepState.Complete;
    }
    /**
     * Returns 'true' if [state] equals to [StepState.Required | 'required'], else 'false'.
     * @return {?}
     */
    isRequired() {
        return this.state === StepState.Required;
    }
}
TdStepHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-step-header',
                inputs: ['disabled', 'disableRipple'],
                template: "<div\n  class=\"td-step-header\"\n  [class.mat-disabled]=\"disabled\"\n  matRipple\n  [matRippleDisabled]=\"disabled || disableRipple\"\n  [tabIndex]=\"disabled ? -1 : tabIndex || 0\"\n>\n  <div\n    class=\"td-circle\"\n    [class.mat-inactive]=\"(!active && !isComplete()) || disabled\"\n    [class.mat-active]=\"active && !disabled\"\n    *ngIf=\"!isRequired() && !isComplete()\"\n  >\n    <span *ngIf=\"active || !isComplete()\">{{ number || '' }}</span>\n  </div>\n  <div class=\"td-complete\" *ngIf=\"isComplete()\">\n    <mat-icon class=\"mat-complete\">check_circle</mat-icon>\n  </div>\n  <div class=\"td-triangle\" [class.bg-muted]=\"disabled\" *ngIf=\"isRequired()\">\n    <mat-icon class=\"mat-warn\">warning</mat-icon>\n  </div>\n  <div\n    class=\"td-step-label-wrapper\"\n    [class.mat-inactive]=\"(!active && !isComplete()) || disabled\"\n    [class.mat-warn]=\"isRequired() && !disabled\"\n  >\n    <div class=\"td-step-label\">\n      <ng-content select=\"[td-step-header-label]\"></ng-content>\n    </div>\n    <div class=\"td-step-sublabel\">\n      <ng-content select=\"[td-step-header-sublabel]\"></ng-content>\n    </div>\n  </div>\n  <span class=\"td-step-header-separator\"></span>\n  <mat-icon class=\"td-edit-icon\" *ngIf=\"isComplete() && !active && !disabled\">mode_edit</mat-icon>\n</div>\n",
                styles: [".td-step-header{-ms-flex:1;-ms-flex-align:center;-ms-flex-direction:row;-ms-flex-line-pack:center;-ms-flex-pack:start;align-content:center;align-items:center;box-sizing:border-box;display:-ms-flexbox;display:flex;flex:1;flex-direction:row;height:72px;justify-content:flex-start;max-width:100%;min-width:120px;outline:none;position:relative}.td-step-header:hover:not(.mat-disabled){cursor:pointer}.td-step-header mat-icon.td-edit-icon{margin:0 8px}.td-step-header mat-icon.mat-warn{font-size:24px;height:24px;width:24px}.td-step-header mat-icon.mat-complete{font-size:28px;height:24px;left:-2px;position:relative;top:2px;width:24px}.td-step-header .td-circle{-ms-flex:none;border-radius:99%;flex:none;height:24px;line-height:24px;text-align:center;width:24px}.td-step-header .td-circle mat-icon{font-weight:700;margin-top:2px}.td-step-header .td-triangle>mat-icon{font-size:25px}.td-step-header .td-complete{font-size:0}::ng-deep :not([dir=rtl]) .td-step-header .td-circle,::ng-deep :not([dir=rtl]) .td-step-header .td-complete,::ng-deep :not([dir=rtl]) .td-step-header .td-triangle{margin-left:8px;margin-right:0}::ng-deep [dir=rtl] .td-step-header .td-circle,::ng-deep [dir=rtl] .td-step-header .td-complete,::ng-deep [dir=rtl] .td-step-header .td-triangle{margin-left:0;margin-right:8px}.td-step-header .td-circle,.td-step-header .td-complete{font-size:14px}.td-step-header .td-step-label-wrapper{padding-left:8px;padding-right:8px}.td-step-header .td-step-header-separator{-ms-flex:1;box-sizing:border-box;flex:1}"]
            }] }
];
TdStepHeaderComponent.propDecorators = {
    number: [{ type: Input }],
    active: [{ type: Input }],
    state: [{ type: Input }],
    tabIndex: [{ type: Input }]
};
if (false) {
    /**
     * Number assigned to [TdStepHeaderComponent].
     * @type {?}
     */
    TdStepHeaderComponent.prototype.number;
    /**
     * active?: boolean
     * Sets for active/inactive states on header.
     * @type {?}
     */
    TdStepHeaderComponent.prototype.active;
    /**
     * state?: StepState or ['none' | 'required' | 'complete']
     * Sets styles for state of header.
     * Defaults to [StepState.None | 'none'].
     * @type {?}
     */
    TdStepHeaderComponent.prototype.state;
    /**
     * tabIndex?: number
     * tabIndex of the step header for a11y
     * @type {?}
     */
    TdStepHeaderComponent.prototype.tabIndex;
}

/**
 * @fileoverview added by tsickle
 * Generated from: step-body/step-body.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdStepBodyComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: nav/nav-step-link/nav-step-link.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdNavStepLinkComponent extends _TdStepMixinBase {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} elementRef
     */
    constructor(_changeDetectorRef, elementRef) {
        super();
        this._changeDetectorRef = _changeDetectorRef;
        this.elementRef = elementRef;
        this._active = false;
        this._state = StepState.None;
    }
    /**
     * state?: StepState or ['none' | 'required' | 'complete']
     * Sets state of component depending on value.
     * Defaults to [StepState.None | 'none'].
     * @param {?} state
     * @return {?}
     */
    set state(state) {
        switch (state) {
            case StepState.Complete:
                this._state = StepState.Complete;
                break;
            case StepState.Required:
                this._state = StepState.Required;
                break;
            default:
                this._state = StepState.None;
                break;
        }
    }
    /**
     * @return {?}
     */
    get state() {
        return this._state;
    }
    /**
     * active?: boolean
     * Toggles component between active/deactive.
     * @param {?} active
     * @return {?}
     */
    set active(active) {
        this._active = coerceBooleanProperty(active);
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    get active() {
        return this._active;
    }
    /**
     * @param {?} click
     * @return {?}
     */
    _handleClick(click) {
        if (this.disabled) {
            click.preventDefault();
            click.stopImmediatePropagation();
        }
    }
}
TdNavStepLinkComponent.decorators = [
    { type: Component, args: [{
                selector: '[td-step-link],[tdStepLink]',
                template: "<td-step-header\n  class=\"td-step-header-wrapper\"\n  [tabIndex]=\"-1\"\n  [number]=\"number\"\n  [active]=\"active\"\n  [disableRipple]=\"disableRipple || disabled\"\n  [disabled]=\"disabled\"\n  [state]=\"state\"\n>\n  <ng-template td-step-header-label [ngIf]=\"true\">{{ label }}</ng-template>\n  <ng-template td-step-header-sublabel [ngIf]=\"true\">{{ sublabel | truncate: 30 }}</ng-template>\n  <ng-content></ng-content>\n</td-step-header>\n",
                inputs: ['disabled', 'disableRipple'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                /* tslint:disable-next-line */
                host: {
                    '[class.td-step-link]': 'true',
                    '[attr.tabindex]': 'disabled ? -1 : (tabIndex || 0)',
                    '[attr.disabled]': 'disabled || null',
                    '[class.mat-disabled]': 'disabled || null',
                    '(click)': '_handleClick($event)',
                },
                styles: [":host{-ms-flex-align:center;-ms-flex-direction:row;-ms-flex-line-pack:center;-ms-flex-pack:start;align-content:center;align-items:center;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:row;justify-content:flex-start;max-width:100%}:host.mat-disabled{pointer-events:none}:host .td-step-header-wrapper{width:100%}"]
            }] }
];
/** @nocollapse */
TdNavStepLinkComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
TdNavStepLinkComponent.propDecorators = {
    state: [{ type: Input, args: ['state',] }],
    label: [{ type: Input }],
    sublabel: [{ type: Input }],
    active: [{ type: Input, args: ['active',] }],
    tabIndex: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdNavStepLinkComponent.prototype._active;
    /**
     * @type {?}
     * @private
     */
    TdNavStepLinkComponent.prototype._state;
    /** @type {?} */
    TdNavStepLinkComponent.prototype.number;
    /**
     * label?: string
     * Label to display in step header
     * Defaults to empty
     * @type {?}
     */
    TdNavStepLinkComponent.prototype.label;
    /**
     * sublabel?: string
     * Sublabel to display in step header
     * Defaults to empty
     * @type {?}
     */
    TdNavStepLinkComponent.prototype.sublabel;
    /**
     * tabIndex?: number
     * tabIndex for component
     * @type {?}
     */
    TdNavStepLinkComponent.prototype.tabIndex;
    /**
     * @type {?}
     * @private
     */
    TdNavStepLinkComponent.prototype._changeDetectorRef;
    /** @type {?} */
    TdNavStepLinkComponent.prototype.elementRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: nav/nav-steps-horizontal/nav-steps-horizontal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdNavStepsHorizontalComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _viewportRuler
     * @param {?} _dir
     * @param {?} _renderer
     * @param {?} _changeDetectorRef
     */
    constructor(_elementRef, _viewportRuler, _dir, _renderer, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._viewportRuler = _viewportRuler;
        this._dir = _dir;
        this._renderer = _renderer;
        this._changeDetectorRef = _changeDetectorRef;
        this._separators = [];
        /**
         * Emits when the component is destroyed.
         */
        this._destroyed = new Subject();
        this._widthSubject = new Subject();
        this._scrollDistance = 0;
        this._scrollDistanceChanged = false;
        /**
         * Whether the controls for pagination should be displayed
         */
        this._showPaginationControls = false;
        /**
         * Whether the step list can be scrolled more towards the end.
         */
        this._disableScrollAfter = true;
        /**
         * Whether the step list can be scrolled more towards the beginning.
         */
        this._disableScrollBefore = true;
    }
    /*
       * Current width of the element container
       */
    /**
     * @return {?}
     */
    get nativeElementWidth() {
        /** @type {?} */
        const element = (/** @type {?} */ (this._elementRef.nativeElement));
        // Need to take into account border, margin and padding that might be around all the crumbs
        /** @type {?} */
        const style = window.getComputedStyle(element);
        /** @type {?} */
        const borderLeft = parseInt(style.borderLeft, 10);
        /** @type {?} */
        const borderRight = parseInt(style.borderRight, 10);
        /** @type {?} */
        const marginLeft = parseInt(style.marginLeft, 10);
        /** @type {?} */
        const marginRight = parseInt(style.marginRight, 10);
        /** @type {?} */
        const paddingLeft = parseInt(style.paddingLeft, 10);
        /** @type {?} */
        const paddingRight = parseInt(style.paddingRight, 10);
        return (element.getBoundingClientRect().width -
            borderLeft -
            borderRight -
            marginLeft -
            marginRight -
            paddingLeft -
            paddingRight);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        merge(this._widthSubject.asObservable().pipe(distinctUntilChanged()), this._viewportRuler.change(150), this._dir ? this._dir.change : of(undefined), this._steps.changes)
            .pipe(takeUntil(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this._configureSteps();
            this.updatePagination();
            this._changeDetectorRef.markForCheck();
        }));
        this._configureSteps();
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        if (this._elementRef && this._elementRef.nativeElement) {
            this._widthSubject.next(this.nativeElementWidth);
        }
        if (this._scrollDistanceChanged) {
            this._updateStepScrollPosition();
            this._scrollDistanceChanged = false;
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    /**
     * Listen to right and left key events to move the the viewport.
     * @param {?} event
     * @return {?}
     */
    _handleKeydown(event) {
        switch (event.keyCode) {
            case LEFT_ARROW:
                this._scrollHeader('before');
                event.preventDefault();
                break;
            case RIGHT_ARROW:
                this._scrollHeader('after');
                event.preventDefault();
                break;
            default:
            // do something
        }
    }
    /**
     * Updates the view whether pagination should be enabled or not.
     * @return {?}
     */
    updatePagination() {
        this._checkPaginationEnabled();
        this._checkScrollingControls();
        this._updateStepScrollPosition();
    }
    /**
     * The layout direction of the containing app.
     * @return {?}
     */
    _getLayoutDirection() {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /**
     * Performs the CSS transformation on the step list that will cause the list to scroll.
     * @return {?}
     */
    _updateStepScrollPosition() {
        /** @type {?} */
        const translateX = this._getLayoutDirection() === 'ltr' ? -this.scrollDistance : this.scrollDistance;
        // Move step list the amount of pixels scrolled
        this._stepList.nativeElement.style.transform = `translateX(${Math.round(translateX)}px)`;
        // Setting the `transform` on IE will change the scroll offset of the parent, causing the
        // position to be thrown off in some cases. We have to reset it ourselves to ensure that
        // it doesn't get thrown off.
        if (this._getLayoutDirection() === 'ltr') {
            this._stepListContainer.nativeElement.scrollLeft = 0;
        }
        else {
            this._stepListContainer.nativeElement.scrollLeft = this._getMaxScrollDistance();
        }
    }
    /**
     * Sets the distance in pixels that the step header should be transformed in the X-axis.
     * @return {?}
     */
    get scrollDistance() {
        return this._scrollDistance;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set scrollDistance(v) {
        this._scrollDistance = Math.max(0, Math.min(this._getMaxScrollDistance(), v));
        // Mark that the scroll distance has changed so that after the view is checked, the CSS
        // transformation can move the header.
        this._scrollDistanceChanged = true;
        this._checkScrollingControls();
    }
    /**
     * Moves the step list in the 'before' or 'after' direction (towards the beginning of the list or
     * the end of the list, respectively).
     * @param {?} scrollDir
     * @return {?}
     */
    _scrollHeader(scrollDir) {
        // Move the scroll distance one-half the length of the step list's viewport.
        this.scrollDistance += ((scrollDir === 'before' ? -1 : 1) * this._stepListContainer.nativeElement.offsetWidth) / 2;
    }
    /**
     * Evaluate whether the pagination controls should be displayed. If the scroll width of the
     * step list is wider than the size of the header container, then the pagination controls should
     * be shown.
     * @return {?}
     */
    _checkPaginationEnabled() {
        /** @type {?} */
        const isEnabled = this._stepList.nativeElement.scrollWidth > this._elementRef.nativeElement.offsetWidth;
        if (!isEnabled) {
            this.scrollDistance = 0;
        }
        if (isEnabled !== this._showPaginationControls) {
            this._changeDetectorRef.markForCheck();
        }
        this._showPaginationControls = isEnabled;
    }
    /**
     * Evaluate whether the before and after controls should be enabled or disabled.
     * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
     * before button. If the header is at the end of the list (scroll distance is equal to the
     * maximum distance we can scroll), then disable the after button.
     * @return {?}
     */
    _checkScrollingControls() {
        // Check if the pagination arrows should be activated.
        this._disableScrollBefore = this.scrollDistance === 0;
        this._disableScrollAfter = this.scrollDistance === this._getMaxScrollDistance();
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the step list container and step header container.
     * @return {?}
     */
    _getMaxScrollDistance() {
        return this._stepList.nativeElement.scrollWidth - this._stepListContainer.nativeElement.offsetWidth || 0;
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
                this._renderer.addClass(separator, 'td-horizontal-line');
                this._separators.push(separator);
                this._renderer.insertBefore(this._stepList.nativeElement, separator, step.elementRef.nativeElement);
            }
            step.number = index + 1;
        }));
    }
}
TdNavStepsHorizontalComponent.decorators = [
    { type: Component, args: [{
                selector: 'nav[td-steps][horizontal]',
                template: "<div class=\"td-steps-header\">\n  <div\n    class=\"td-step-header-pagination td-step-header-pagination-before mat-elevation-z4\"\n    aria-hidden=\"true\"\n    mat-ripple\n    [matRippleDisabled]=\"_disableScrollBefore\"\n    [class.td-step-header-pagination-disabled]=\"_disableScrollBefore\"\n    (click)=\"_scrollHeader('before')\"\n  >\n    <div class=\"td-step-header-pagination-chevron\"></div>\n  </div>\n  <div #stepListContainer class=\"td-steps-header-container\" (keydown)=\"_handleKeydown($event)\">\n    <div #stepList class=\"td-steps-header-list\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <div\n    class=\"td-step-header-pagination td-step-header-pagination-after mat-elevation-z4\"\n    aria-hidden=\"true\"\n    mat-ripple\n    [matRippleDisabled]=\"_disableScrollAfter\"\n    [class.td-step-header-pagination-disabled]=\"_disableScrollAfter\"\n    (click)=\"_scrollHeader('after')\"\n  >\n    <div class=\"td-step-header-pagination-chevron\"></div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                /* tslint:disable-next-line */
                host: {
                    'class': 'td-steps td-steps-horizontal',
                    '[class.td-step-header-pagination-controls-enabled]': '_showPaginationControls',
                    '[class.td-step-header-rtl]': "_getLayoutDirection() == 'rtl'",
                },
                styles: [":host{display:block;width:100%}.td-steps-header,.td-steps-header-list{-ms-flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:row}.td-steps-header-container{-ms-flex-positive:1;display:-ms-flexbox;display:flex;flex-grow:1;overflow:hidden;z-index:1}.td-steps-header-list{-ms-flex-align:center;-ms-flex-line-pack:center;-ms-flex-pack:start;-ms-flex-positive:1;align-content:center;align-items:center;flex-grow:1;justify-content:flex-start;max-width:100%;position:relative;transition:transform .5s cubic-bezier(.35,0,.25,1)}.td-step-header-pagination{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;cursor:pointer;display:none;justify-content:center;min-width:32px;position:relative;z-index:2}:host.td-step-header-pagination-controls-enabled .td-step-header-pagination{display:-ms-flexbox;display:flex}.td-step-header-pagination-before,:host.td-step-header-rtl .td-step-header-pagination-after{padding-left:4px}.td-step-header-pagination-before .td-step-header-pagination-chevron,:host.td-step-header-rtl .td-step-header-pagination-after .td-step-header-pagination-chevron{-ms-transform:rotate(-135deg);transform:rotate(-135deg)}.td-step-header-pagination-after,:host.td-step-header-rtl .td-step-header-pagination-before{padding-right:4px}.td-step-header-pagination-after .td-step-header-pagination-chevron,:host.td-step-header-rtl .td-step-header-pagination-before .td-step-header-pagination-chevron{-ms-transform:rotate(45deg);transform:rotate(45deg)}.td-step-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.td-step-header-pagination-disabled{box-shadow:none;cursor:default}.td-horizontal-line{-ms-flex:1;border-bottom-style:solid;border-bottom-width:1px;box-sizing:border-box;flex:1;height:1px;min-width:20px}"]
            }] }
];
/** @nocollapse */
TdNavStepsHorizontalComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewportRuler },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
TdNavStepsHorizontalComponent.propDecorators = {
    _steps: [{ type: ContentChildren, args: [TdNavStepLinkComponent, { descendants: true },] }],
    _stepListContainer: [{ type: ViewChild, args: ['stepListContainer', { static: true },] }],
    _stepList: [{ type: ViewChild, args: ['stepList', { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdNavStepsHorizontalComponent.prototype._separators;
    /**
     * Emits when the component is destroyed.
     * @type {?}
     * @private
     */
    TdNavStepsHorizontalComponent.prototype._destroyed;
    /**
     * @type {?}
     * @private
     */
    TdNavStepsHorizontalComponent.prototype._widthSubject;
    /**
     * @type {?}
     * @private
     */
    TdNavStepsHorizontalComponent.prototype._scrollDistance;
    /**
     * @type {?}
     * @private
     */
    TdNavStepsHorizontalComponent.prototype._scrollDistanceChanged;
    /**
     * Whether the controls for pagination should be displayed
     * @type {?}
     */
    TdNavStepsHorizontalComponent.prototype._showPaginationControls;
    /**
     * Whether the step list can be scrolled more towards the end.
     * @type {?}
     */
    TdNavStepsHorizontalComponent.prototype._disableScrollAfter;
    /**
     * Whether the step list can be scrolled more towards the beginning.
     * @type {?}
     */
    TdNavStepsHorizontalComponent.prototype._disableScrollBefore;
    /** @type {?} */
    TdNavStepsHorizontalComponent.prototype._steps;
    /** @type {?} */
    TdNavStepsHorizontalComponent.prototype._stepListContainer;
    /** @type {?} */
    TdNavStepsHorizontalComponent.prototype._stepList;
    /**
     * @type {?}
     * @private
     */
    TdNavStepsHorizontalComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TdNavStepsHorizontalComponent.prototype._viewportRuler;
    /**
     * @type {?}
     * @private
     */
    TdNavStepsHorizontalComponent.prototype._dir;
    /**
     * @type {?}
     * @private
     */
    TdNavStepsHorizontalComponent.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    TdNavStepsHorizontalComponent.prototype._changeDetectorRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: nav/nav-steps-vertical/nav-steps-vertical.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdNavStepsVerticalComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: steps.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TD_STEPS = [
    TdStepsComponent,
    TdStepComponent,
    TdStepHeaderComponent,
    TdStepBodyComponent,
    TdStepLabelDirective,
    TdStepActionsDirective,
    TdStepSummaryDirective,
    TdNavStepsHorizontalComponent,
    TdNavStepsVerticalComponent,
    TdNavStepLinkComponent,
];
class CovalentStepsModule {
}
CovalentStepsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, MatIconModule, MatRippleModule, PortalModule, ScrollingModule, CovalentCommonModule],
                declarations: [TD_STEPS],
                exports: [TD_STEPS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: covalent-core-steps.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CovalentStepsModule, StepMode, StepState, TdNavStepLinkComponent, TdNavStepsHorizontalComponent, TdNavStepsVerticalComponent, TdStepActionsDirective, TdStepBase, TdStepBodyComponent, TdStepComponent, TdStepHeaderBase, TdStepHeaderComponent, TdStepLabelDirective, TdStepSummaryDirective, TdStepsComponent, _TdStepHeaderMixinBase, _TdStepMixinBase };
//# sourceMappingURL=covalent-core-steps.js.map
