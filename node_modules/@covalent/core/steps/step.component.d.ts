import { TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TemplatePortalDirective, TemplatePortal } from '@angular/cdk/portal';
import { ICanDisable, ICanDisableRipple } from '@covalent/core/common';
export declare enum StepState {
    None = "none",
    Required = "required",
    Complete = "complete"
}
export declare class TdStepLabelDirective extends TemplatePortalDirective {
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
}
export declare class TdStepActionsDirective extends TemplatePortalDirective {
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
}
export declare class TdStepSummaryDirective extends TemplatePortalDirective {
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
}
export declare class TdStepBase {
}
export declare const _TdStepMixinBase: (new (...args: any[]) => ICanDisableRipple) & (new (...args: any[]) => ICanDisable) & typeof TdStepBase;
export declare class TdStepComponent extends _TdStepMixinBase implements OnInit, ICanDisable, ICanDisableRipple {
    private _viewContainerRef;
    private _active;
    private _state;
    private _contentPortal;
    get stepContent(): TemplatePortal<any>;
    _content: TemplateRef<any>;
    stepLabel: TdStepLabelDirective;
    stepActions: TdStepActionsDirective;
    stepSummary: TdStepSummaryDirective;
    /**
     * label?: string
     * Sets label of [TdStepComponent] header.
     * Defaults to 'Step #'
     */
    label: string;
    /**
     * sublabel?: string
     * Sets sublabel of [TdStepComponent] header.
     */
    sublabel: string;
    /**
     * active?: boolean
     * Toggles [TdStepComponent] between active/deactive.
     */
    set active(active: boolean);
    get active(): boolean;
    /**
     * state?: StepState or ['none' | 'required' | 'complete']
     * Sets state of [TdStepComponent] depending on value.
     * Defaults to [StepState.None | 'none'].
     */
    set state(state: StepState);
    get state(): StepState;
    /**
     * activated?: function
     * Event emitted when [TdStepComponent] is activated.
     */
    activated: EventEmitter<void>;
    /**
     * deactivated?: function
     * Event emitted when [TdStepComponent] is deactivated.
     */
    deactivated: EventEmitter<void>;
    constructor(_viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    /**
     * Toggle active state of [TdStepComponent]
     * retuns 'true' if successful, else 'false'.
     */
    toggle(): boolean;
    /**
     * Opens [TdStepComponent]
     * retuns 'true' if successful, else 'false'.
     */
    open(): boolean;
    /**
     * Closes [TdStepComponent]
     * retuns 'true' if successful, else 'false'.
     */
    close(): boolean;
    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     */
    isComplete(): boolean;
    /** Method executed when the disabled value changes */
    onDisabledChange(v: boolean): void;
    /**
     * Method to change active state internally and emit the [activated] event if 'true' or [deactivated]
     * event if 'false'. (Blocked if [disabled] is 'true')
     * returns true if successfully changed state
     */
    private _setActive;
    private _onActivated;
    private _onDeactivated;
}
