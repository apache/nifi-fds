import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { ICanDisable, ICanDisableRipple } from '@covalent/core/common';
import { _TdStepMixinBase, StepState } from '../../step.component';
export declare class TdNavStepLinkComponent extends _TdStepMixinBase implements ICanDisable, ICanDisableRipple {
    private _changeDetectorRef;
    elementRef: ElementRef;
    private _active;
    private _state;
    number: number;
    /**
     * state?: StepState or ['none' | 'required' | 'complete']
     * Sets state of component depending on value.
     * Defaults to [StepState.None | 'none'].
     */
    set state(state: StepState);
    get state(): StepState;
    /**
     * label?: string
     * Label to display in step header
     * Defaults to empty
     */
    label: string;
    /**
     * sublabel?: string
     * Sublabel to display in step header
     * Defaults to empty
     */
    sublabel: string;
    /**
     * active?: boolean
     * Toggles component between active/deactive.
     */
    set active(active: boolean);
    get active(): boolean;
    /**
     * tabIndex?: number
     * tabIndex for component
     */
    tabIndex: number;
    constructor(_changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef);
    _handleClick(click: Event): void;
}
