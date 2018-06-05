import { Component, Directive, Input, Output, TemplateRef, ViewChild, ViewContainerRef, ContentChild, EventEmitter, ContentChildren, ElementRef, NgModule } from '@angular/core';
import { TemplatePortalDirective, TemplatePortal, PortalModule } from '@angular/cdk/portal';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { mixinDisabled, mixinDisableRipple, TdCollapseAnimation, CovalentCommonModule } from '@covalent/core/common';
import { CommonModule } from '@angular/common';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const StepState = {
    None: 'none',
    Required: 'required',
    Complete: 'complete',
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
            },] },
];
/** @nocollapse */
TdStepLabelDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
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
            },] },
];
/** @nocollapse */
TdStepActionsDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
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
            },] },
];
/** @nocollapse */
TdStepSummaryDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
];
class TdStepBase {
}
/* tslint:disable-next-line */
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
        this.onActivated = new EventEmitter();
        /**
         * deactivated?: function
         * Event emitted when [TdStepComponent] is deactivated.
         */
        this.onDeactivated = new EventEmitter();
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
     * Method to change active state internally and emit the [onActivated] event if 'true' or [onDeactivated]
     * event if 'false'. (Blocked if [disabled] is 'true')
     * returns true if successfully changed state
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
     * @return {?}
     */
    _onActivated() {
        this.onActivated.emit(undefined);
    }
    /**
     * @return {?}
     */
    _onDeactivated() {
        this.onDeactivated.emit(undefined);
    }
}
TdStepComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-step',
                inputs: ['disabled', 'disableRipple'],
                template: `<ng-template>
  <ng-content></ng-content>
</ng-template>`,
            },] },
];
/** @nocollapse */
TdStepComponent.ctorParameters = () => [
    { type: ViewContainerRef, },
];
TdStepComponent.propDecorators = {
    "_content": [{ type: ViewChild, args: [TemplateRef,] },],
    "stepLabel": [{ type: ContentChild, args: [TdStepLabelDirective,] },],
    "stepActions": [{ type: ContentChild, args: [TdStepActionsDirective,] },],
    "stepSummary": [{ type: ContentChild, args: [TdStepSummaryDirective,] },],
    "label": [{ type: Input, args: ['label',] },],
    "sublabel": [{ type: Input, args: ['sublabel',] },],
    "active": [{ type: Input, args: ['active',] },],
    "state": [{ type: Input, args: ['state',] },],
    "onActivated": [{ type: Output, args: ['activated',] },],
    "onDeactivated": [{ type: Output, args: ['deactivated',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

/** @enum {string} */
const StepMode = {
    Vertical: 'vertical',
    Horizontal: 'horizontal',
};
class TdStepsComponent {
    constructor() {
        this._mode = StepMode.Vertical;
        /**
         * stepChange?: function
         * Method to be executed when [onStepChange] event is emitted.
         * Emits an [IStepChangeEvent] implemented object.
         */
        this.onStepChange = new EventEmitter();
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
        switch (mode) {
            case StepMode.Horizontal:
                this._mode = StepMode.Horizontal;
                break;
            default:
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
     * assigns them a number and subscribes as an observer to their [onActivated] event.
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
        return this._steps.filter((step) => {
            return step.active;
        }).length > 0;
    }
    /**
     * Wraps previous and new [TdStepComponent] numbers in an object that implements [IStepChangeEvent]
     * and emits [onStepChange] event.
     * @param {?} step
     * @return {?}
     */
    _onStepSelection(step) {
        if (this.prevStep !== step) {
            let /** @type {?} */ prevStep = this.prevStep;
            this.prevStep = step;
            let /** @type {?} */ event = {
                newStep: step,
                prevStep: prevStep,
            };
            this._deactivateAllBut(step);
            this.onStepChange.emit(event);
        }
    }
    /**
     * Loops through [TdStepComponent] children elements and deactivates them ignoring the one passed as an argument.
     * @param {?} activeStep
     * @return {?}
     */
    _deactivateAllBut(activeStep) {
        this._steps.filter((step) => step !== activeStep)
            .forEach((step) => {
            step.active = false;
        });
    }
    /**
     * @return {?}
     */
    _registerSteps() {
        this._subcriptions = [];
        this._steps.toArray().forEach((step) => {
            let /** @type {?} */ subscription = step.onActivated.asObservable().subscribe(() => {
                this._onStepSelection(step);
            });
            this._subcriptions.push(subscription);
        });
    }
    /**
     * @return {?}
     */
    _deregisterSteps() {
        if (this._subcriptions) {
            this._subcriptions.forEach((subs) => {
                subs.unsubscribe();
            });
            this._subcriptions = undefined;
        }
    }
}
TdStepsComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-steps',
                styles: [`.td-line-wrapper,
.td-step{
  position:relative; }
.td-steps-header{
  -webkit-box-sizing:border-box;
          box-sizing:border-box;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row; }
.td-line-wrapper{
  width:24px;
  min-height:1px; }
.td-horizontal-line{
  border-bottom-width:1px;
  border-bottom-style:solid;
  height:1px;
  position:relative;
  top:36px;
  min-width:15px;
  -webkit-box-flex:1;
      -ms-flex:1;
          flex:1;
  -webkit-box-sizing:border-box;
          box-sizing:border-box; }
  ::ng-deep :not([dir='rtl']) .td-horizontal-line{
    left:-6px;
    right:-3px; }
  ::ng-deep [dir='rtl'] .td-horizontal-line{
    left:-3px;
    right:-6px; }
.td-vertical-line{
  position:absolute;
  bottom:-16px;
  top:-16px;
  border-left-width:1px;
  border-left-style:solid; }
  ::ng-deep :not([dir='rtl']) .td-vertical-line{
    left:20px;
    right:auto; }
  ::ng-deep [dir='rtl'] .td-vertical-line{
    left:auto;
    right:20px; }
`],
                template: `<div *ngIf="isHorizontal()" class="td-steps-header">
  <ng-template let-step let-index="index" let-last="last" ngFor [ngForOf]="steps">
    <td-step-header class="td-step-horizontal-header"
                    (keydown.enter)="step.open()"
                    [number]="index + 1"
                    [active]="step.active"
                    [disableRipple]="step.disableRipple"
                    [disabled]="step.disabled"
                    [state]="step.state"
                    (click)="step.open()">
      <ng-template td-step-header-label [cdkPortalHost]="step.stepLabel"></ng-template>
      <ng-template td-step-header-label [ngIf]="!step.stepLabel">{{step.label}}</ng-template>
      <ng-template td-step-header-sublabel [ngIf]="true">{{step.sublabel | truncate:30}}</ng-template>
    </td-step-header>
    <span *ngIf="!last" class="td-horizontal-line"></span>
  </ng-template>
</div>
<div *ngFor="let step of steps; let index = index; let last = last" class="td-step">
  <td-step-header class="td-step-vertical-header"
                  (keydown.enter)="step.toggle()"
                  [number]="index + 1"
                  [active]="step.active"
                  [disabled]="step.disabled"
                  [disableRipple]="step.disableRipple"
                  [state]="step.state"
                  (click)="step.toggle()"
                  *ngIf="isVertical()">
    <ng-template td-step-header-label [cdkPortalHost]="step.stepLabel"></ng-template>
    <ng-template td-step-header-label [ngIf]="!step.stepLabel">{{step.label}}</ng-template>
    <ng-template td-step-header-sublabel [ngIf]="true">{{step.sublabel}}</ng-template>
  </td-step-header>
  <ng-template [ngIf]="isVertical() || step.active || (!areStepsActive() && prevStep === step)">
    <td-step-body [active]="step.active" [state]="step.state">
      <div *ngIf="isVertical()" class="td-line-wrapper">
        <div *ngIf="!last" class="td-vertical-line"></div>
      </div>
      <ng-template td-step-body-content [cdkPortalHost]="step.stepContent"></ng-template>
      <ng-template td-step-body-actions [cdkPortalHost]="step.stepActions"></ng-template>
      <ng-template td-step-body-summary [cdkPortalHost]="step.stepSummary"></ng-template>
    </td-step-body>
  </ng-template>
</div>
`,
            },] },
];
/** @nocollapse */
TdStepsComponent.ctorParameters = () => [];
TdStepsComponent.propDecorators = {
    "stepsContent": [{ type: ContentChildren, args: [TdStepComponent,] },],
    "mode": [{ type: Input, args: ['mode',] },],
    "onStepChange": [{ type: Output, args: ['stepChange',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdStepHeaderBase {
}
/* tslint:disable-next-line */
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
                styles: [`.td-step-header{
  position:relative;
  outline:none;
  height:72px;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-sizing:border-box;
          box-sizing:border-box;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-flex:1;
      -ms-flex:1;
          flex:1;
  -webkit-box-pack:start;
      -ms-flex-pack:start;
          justify-content:start;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  -ms-flex-line-pack:center;
      align-content:center;
  max-width:100%; }
  .td-step-header:hover:not(.mat-disabled){
    cursor:pointer; }
  .td-step-header mat-icon.td-edit-icon{
    margin:0 8px; }
  .td-step-header mat-icon.mat-warn{
    font-size:24px;
    height:24px;
    width:24px; }
  .td-step-header mat-icon.mat-complete{
    position:relative;
    left:-2px;
    top:2px;
    font-size:28px;
    height:24px;
    width:24px; }
  .td-step-header .td-circle{
    height:24px;
    width:24px;
    line-height:24px;
    border-radius:99%;
    text-align:center;
    -webkit-box-flex:0;
        -ms-flex:none;
            flex:none; }
    .td-step-header .td-circle mat-icon{
      margin-top:2px;
      font-weight:bold; }
  .td-step-header .td-triangle > mat-icon{
    font-size:25px; }
  .td-step-header .td-complete{
    font-size:0; }
  ::ng-deep :not([dir='rtl']) .td-step-header .td-circle, ::ng-deep :not([dir='rtl'])
  .td-step-header .td-triangle, ::ng-deep :not([dir='rtl'])
  .td-step-header .td-complete{
    margin-left:8px;
    margin-right:0; }
  ::ng-deep [dir='rtl'] .td-step-header .td-circle, ::ng-deep [dir='rtl']
  .td-step-header .td-triangle, ::ng-deep [dir='rtl']
  .td-step-header .td-complete{
    margin-left:0;
    margin-right:8px; }
  .td-step-header .td-circle,
  .td-step-header .td-complete{
    font-size:14px; }
  .td-step-header .td-step-label-wrapper{
    padding-left:8px;
    padding-right:8px; }
  .td-step-header .td-step-header-separator{
    -webkit-box-flex:1;
        -ms-flex:1;
            flex:1;
    -webkit-box-sizing:border-box;
            box-sizing:border-box; }
`],
                template: `<div class="td-step-header"
      [class.mat-disabled]="disabled"
      matRipple
      [matRippleDisabled]="disabled || disableRipple"
      [tabIndex]="disabled ? -1 : 0">
  <div class="td-circle"
      [class.mat-inactive]="(!active && !isComplete()) || disabled"
      [class.mat-active]="active && !disabled"
      *ngIf="!isRequired() && !isComplete()">
    <span *ngIf="(active || !isComplete())">{{number || ''}}</span>
  </div>
  <div class="td-complete" *ngIf="isComplete()">
    <mat-icon class="mat-complete">check_circle</mat-icon>
  </div>
  <div class="td-triangle"
      [class.bg-muted]="disabled"
      *ngIf="isRequired()">
    <mat-icon class="mat-warn">warning</mat-icon>
  </div>
  <div class="td-step-label-wrapper"
        [class.mat-inactive]="(!active && !isComplete()) || disabled"
        [class.mat-warn]="isRequired() && !disabled">
    <div class="td-step-label">
      <ng-content select="[td-step-header-label]"></ng-content>
    </div>
    <div class="td-step-sublabel">
      <ng-content select="[td-step-header-sublabel]"></ng-content>
    </div>
  </div>
  <span class="td-step-header-separator"></span>
  <mat-icon class="td-edit-icon" *ngIf="isComplete() && !active && !disabled">mode_edit</mat-icon>
</div>`,
            },] },
];
/** @nocollapse */
TdStepHeaderComponent.ctorParameters = () => [];
TdStepHeaderComponent.propDecorators = {
    "number": [{ type: Input, args: ['number',] },],
    "active": [{ type: Input, args: ['active',] },],
    "state": [{ type: Input, args: ['state',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        return this.contentRef &&
            (this.contentRef.nativeElement.children.length > 0 || !!this.contentRef.nativeElement.textContent.trim());
    }
    /**
     * @return {?}
     */
    get hasActions() {
        return this.actionsRef &&
            (this.actionsRef.nativeElement.children.length > 0 || !!this.actionsRef.nativeElement.textContent.trim());
    }
    /**
     * @return {?}
     */
    get hasSummary() {
        return this.summaryRef &&
            (this.summaryRef.nativeElement.children.length > 0 || !!this.summaryRef.nativeElement.textContent.trim());
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
                styles: [`:host{
  -webkit-box-sizing:border-box;
          box-sizing:border-box;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row; }
  :host .td-step-body{
    overflow-x:hidden;
    -webkit-box-flex:1;
        -ms-flex:1;
            flex:1;
    -webkit-box-sizing:border-box;
            box-sizing:border-box; }
    :host .td-step-body .td-step-summary.ng-animating,
    :host .td-step-body .td-step-content-wrapper.ng-animating{
      overflow:hidden; }
    :host .td-step-body .td-step-content{
      overflow-x:auto; }
    :host .td-step-body .td-step-actions{
      -webkit-box-sizing:border-box;
              box-sizing:border-box;
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -webkit-box-orient:horizontal;
      -webkit-box-direction:normal;
          -ms-flex-direction:row;
              flex-direction:row; }
`],
                template: `<ng-content></ng-content>
<div class="td-step-body">
  <div class="td-step-content-wrapper"
       [@tdCollapse]="!active">
    <div #contentRef cdkScrollable [class.td-step-content]="hasContent">
      <ng-content select="[td-step-body-content]"></ng-content>
    </div>
    <div #actionsRef
         [class.td-step-actions]="hasActions">
      <ng-content select="[td-step-body-actions]"></ng-content>
    </div>
  </div>
  <div #summaryRef
       [@tdCollapse]="active || !isComplete()"
       [class.td-step-summary]="hasSummary">
    <ng-content select="[td-step-body-summary]"></ng-content>
  </div>
</div>`,
                animations: [
                    TdCollapseAnimation(),
                ],
            },] },
];
/** @nocollapse */
TdStepBodyComponent.ctorParameters = () => [];
TdStepBodyComponent.propDecorators = {
    "contentRef": [{ type: ViewChild, args: ['contentRef', { read: ElementRef },] },],
    "actionsRef": [{ type: ViewChild, args: ['actionsRef', { read: ElementRef },] },],
    "summaryRef": [{ type: ViewChild, args: ['summaryRef', { read: ElementRef },] },],
    "active": [{ type: Input, args: ['active',] },],
    "state": [{ type: Input, args: ['state',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const TD_STEPS = [
    TdStepsComponent,
    TdStepComponent,
    TdStepHeaderComponent,
    TdStepBodyComponent,
    TdStepLabelDirective,
    TdStepActionsDirective,
    TdStepSummaryDirective,
];
class CovalentStepsModule {
}
CovalentStepsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatIconModule,
                    MatRippleModule,
                    PortalModule,
                    ScrollDispatchModule,
                    CovalentCommonModule,
                ],
                declarations: [
                    TD_STEPS,
                ],
                exports: [
                    TD_STEPS,
                ],
            },] },
];
/** @nocollapse */
CovalentStepsModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { CovalentStepsModule, StepState, TdStepLabelDirective, TdStepActionsDirective, TdStepSummaryDirective, TdStepBase, _TdStepMixinBase, TdStepComponent, StepMode, TdStepsComponent, TdStepBodyComponent, TdStepHeaderBase, _TdStepHeaderMixinBase, TdStepHeaderComponent };
//# sourceMappingURL=covalent-core-steps.js.map
