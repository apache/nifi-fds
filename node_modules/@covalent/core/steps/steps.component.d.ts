import { OnDestroy, AfterContentInit } from '@angular/core';
import { EventEmitter, QueryList } from '@angular/core';
import { TdStepComponent } from './step.component';
export interface IStepChangeEvent {
    newStep: TdStepComponent;
    prevStep: TdStepComponent;
}
export declare enum StepMode {
    Vertical = "vertical",
    Horizontal = "horizontal"
}
export declare class TdStepsComponent implements OnDestroy, AfterContentInit {
    private _subcriptions;
    private _mode;
    private _steps;
    set stepsContent(steps: QueryList<TdStepComponent>);
    get steps(): TdStepComponent[];
    prevStep: TdStepComponent;
    /**
     * mode?: StepMode or ["vertical" | "horizontal"]
     * Defines if the mode of the [TdStepsComponent].  Defaults to [StepMode.Vertical | "vertical"]
     */
    set mode(mode: StepMode);
    get mode(): StepMode;
    /**
     * stepChange?: function
     * Method to be executed when [stepChange] event is emitted.
     * Emits an [IStepChangeEvent] implemented object.
     */
    stepChange: EventEmitter<IStepChangeEvent>;
    /**
     * Executed after content is initialized, loops through any [TdStepComponent] children elements,
     * assigns them a number and subscribes as an observer to their [activated] event.
     */
    ngAfterContentInit(): void;
    /**
     * Unsubscribes from [TdStepComponent] children elements when component is destroyed.
     */
    ngOnDestroy(): void;
    /**
     * Returns 'true' if [mode] equals to [StepMode.Horizontal | 'horizontal'], else 'false'.
     */
    isHorizontal(): boolean;
    /**
     * Returns 'true' if [mode] equals to [StepMode.Vertical | 'vertical'], else 'false'.
     */
    isVertical(): boolean;
    areStepsActive(): boolean;
    /**
     * Wraps previous and new [TdStepComponent] numbers in an object that implements [IStepChangeEvent]
     * and emits [stepChange] event.
     */
    private _onStepSelection;
    /**
     * Loops through [TdStepComponent] children elements and deactivates them ignoring the one passed as an argument.
     */
    private _deactivateAllBut;
    private _registerSteps;
    private _deregisterSteps;
}
