import { QueryList, OnDestroy, AfterContentInit, AfterContentChecked, ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { TdNavStepLinkComponent } from '../nav-step-link/nav-step-link.component';
/**
 * The directions that scrolling can go in when the header's tabs exceed the header width. 'After'
 * will scroll the header towards the end of the tabs list and 'before' will scroll towards the
 * beginning of the list.
 */
export declare type ScrollDirection = 'after' | 'before';
export declare class TdNavStepsHorizontalComponent implements AfterContentChecked, AfterContentInit, OnDestroy {
    private _elementRef;
    private _viewportRuler;
    private _dir;
    private _renderer;
    private _changeDetectorRef;
    private _separators;
    /** Emits when the component is destroyed. */
    private readonly _destroyed;
    private _widthSubject;
    private _scrollDistance;
    private _scrollDistanceChanged;
    /** Whether the controls for pagination should be displayed */
    _showPaginationControls: boolean;
    /** Whether the step list can be scrolled more towards the end. */
    _disableScrollAfter: boolean;
    /** Whether the step list can be scrolled more towards the beginning. */
    _disableScrollBefore: boolean;
    _steps: QueryList<TdNavStepLinkComponent>;
    _stepListContainer: ElementRef;
    _stepList: ElementRef;
    readonly nativeElementWidth: number;
    constructor(_elementRef: ElementRef, _viewportRuler: ViewportRuler, _dir: Directionality, _renderer: Renderer2, _changeDetectorRef: ChangeDetectorRef);
    ngAfterContentInit(): void;
    ngAfterContentChecked(): void;
    ngOnDestroy(): void;
    /**
     * Listen to right and left key events to move the the viewport.
     */
    _handleKeydown(event: KeyboardEvent): void;
    /**
     * Updates the view whether pagination should be enabled or not.
     */
    updatePagination(): void;
    /** The layout direction of the containing app. */
    _getLayoutDirection(): Direction;
    /** Performs the CSS transformation on the step list that will cause the list to scroll. */
    _updateStepScrollPosition(): void;
    /** Sets the distance in pixels that the step header should be transformed in the X-axis. */
    scrollDistance: number;
    /**
     * Moves the step list in the 'before' or 'after' direction (towards the beginning of the list or
     * the end of the list, respectively).
     */
    _scrollHeader(scrollDir: ScrollDirection): void;
    /**
     * Evaluate whether the pagination controls should be displayed. If the scroll width of the
     * step list is wider than the size of the header container, then the pagination controls should
     * be shown.
     */
    _checkPaginationEnabled(): void;
    /**
     * Evaluate whether the before and after controls should be enabled or disabled.
     * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
     * before button. If the header is at the end of the list (scroll distance is equal to the
     * maximum distance we can scroll), then disable the after button.
     */
    _checkScrollingControls(): void;
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the step list container and step header container.
     */
    _getMaxScrollDistance(): number;
    /**
     * Set the step line separators and display numbers
     */
    private _configureSteps;
}
