import { ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';
import { AnimationBuilder } from '@angular/animations';
export declare class TdToggleDirective {
    private _renderer;
    private _element;
    private _changeDetectorRef;
    private _animationBuilder;
    private _state;
    private _defaultOverflow;
    private _defaultDisplay;
    private _animationShowPlayer;
    private _animationHidePlayer;
    /**
     * duration?: number
     * Sets duration of toggle animation in milliseconds.
     * Defaults to 150 ms.
     */
    duration: number;
    /**
     * tdToggle: boolean
     * Toggles element, hides if its 'true', shows if its 'false'.
     */
    state: boolean;
    /**
     * Binds native 'aria-expanded' attribute.
     */
    readonly ariaExpandedBinding: boolean;
    /**
     * Binds native 'aria-hidden' attribute.
     */
    readonly ariaHiddenBinding: boolean;
    constructor(_renderer: Renderer2, _element: ElementRef, _changeDetectorRef: ChangeDetectorRef, _animationBuilder: AnimationBuilder);
    /**
     * Hides element: sets "display:[default]" so animation is shown,
     * starts animation and adds "display:'none'" style at the end.
     */
    hide(): void;
    /**
     * Shows element: sets "display:[default]" so animation is shown,
     * starts animation and adds "overflow:[default]" style again at the end.
     */
    show(): void;
    private _onHideDone();
    private _onShowDone();
}
