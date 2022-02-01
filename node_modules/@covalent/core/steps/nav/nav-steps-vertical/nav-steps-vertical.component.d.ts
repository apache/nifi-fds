import { QueryList, OnDestroy, AfterContentInit, Renderer2, ChangeDetectorRef, ElementRef } from '@angular/core';
import { TdNavStepLinkComponent } from '../nav-step-link/nav-step-link.component';
export declare class TdNavStepsVerticalComponent implements AfterContentInit, OnDestroy {
    private _renderer;
    private _changeDetectorRef;
    private _separators;
    /** Emits when the component is destroyed. */
    private readonly _destroyed;
    _steps: QueryList<TdNavStepLinkComponent>;
    _stepList: ElementRef;
    constructor(_renderer: Renderer2, _changeDetectorRef: ChangeDetectorRef);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    /**
     * Set the step line separators and display numbers
     */
    private _configureSteps;
}
