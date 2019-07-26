import { QueryList, OnDestroy, AfterContentInit, Renderer2, ChangeDetectorRef, ElementRef } from '@angular/core';
import { TdNavStepLinkComponent } from '../nav-step-link/nav-step-link.component';
/**
 * The directions that scrolling can go in when the header's tabs exceed the header width. 'After'
 * will scroll the header towards the end of the tabs list and 'before' will scroll towards the
 * beginning of the list.
 */
export declare type ScrollDirection = 'after' | 'before';
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
