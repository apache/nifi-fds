import { ICanDisable, ICanDisableRipple } from '@covalent/core/common';
import { StepState } from '../step.component';
export declare class TdStepHeaderBase {
}
export declare const _TdStepHeaderMixinBase: (new (...args: any[]) => ICanDisableRipple) & (new (...args: any[]) => ICanDisable) & typeof TdStepHeaderBase;
export declare class TdStepHeaderComponent extends _TdStepHeaderMixinBase implements ICanDisable, ICanDisableRipple {
    /**
     * Number assigned to [TdStepHeaderComponent].
     */
    number: number;
    /**
     * active?: boolean
     * Sets for active/inactive states on header.
     */
    active: boolean;
    /**
     * state?: StepState or ['none' | 'required' | 'complete']
     * Sets styles for state of header.
     * Defaults to [StepState.None | 'none'].
     */
    state: StepState;
    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     */
    isComplete(): boolean;
    /**
     * Returns 'true' if [state] equals to [StepState.Required | 'required'], else 'false'.
     */
    isRequired(): boolean;
}
