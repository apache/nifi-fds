import { ChangeDetectorRef, ElementRef, DoCheck } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
export declare enum LoadingType {
    Circular = "circular",
    Linear = "linear"
}
export declare enum LoadingMode {
    Determinate = "determinate",
    Indeterminate = "indeterminate"
}
export declare enum LoadingStrategy {
    Overlay = "overlay",
    Replace = "replace"
}
export declare enum LoadingStyle {
    FullScreen = "fullscreen",
    Overlay = "overlay",
    None = "none"
}
export declare const TD_CIRCLE_DIAMETER: number;
export declare class TdLoadingComponent implements DoCheck {
    private _elementRef;
    private _changeDetectorRef;
    private _mode;
    private _defaultMode;
    private _value;
    private _circleDiameter;
    /**
     * Flag for animation
     */
    animation: boolean;
    /**
     * Content injected into loading component.
     */
    content: TemplatePortal<any>;
    /**
     * Sets mode of [TdLoadingComponent] to LoadingMode.Determinate or LoadingMode.Indeterminate
     */
    set mode(mode: LoadingMode);
    get mode(): LoadingMode;
    /**
     * Sets value of [TdLoadingComponent] if mode is 'LoadingMode.Determinate'
     */
    set value(value: number);
    get value(): number;
    style: LoadingStyle;
    /**
     * height: number
     * Sets height of [TdLoadingComponent].
     */
    height: number;
    /**
     * type: LoadingType
     * Sets type of [TdLoadingComponent] rendered.
     */
    type: LoadingType;
    /**
     * color: primary' | 'accent' | 'warn'
     * Sets theme color of [TdLoadingComponent] rendered.
     */
    color: 'primary' | 'accent' | 'warn';
    constructor(_elementRef: ElementRef, _changeDetectorRef: ChangeDetectorRef);
    ngDoCheck(): void;
    getHeight(): string;
    getCircleDiameter(): number;
    getCircleStrokeWidth(): number;
    isCircular(): boolean;
    isLinear(): boolean;
    isFullScreen(): boolean;
    isOverlay(): boolean;
    /**
     * Starts in animation and returns an observable for completition event.
     */
    show(): void;
    /**
     * Starts out animation and returns an observable for completition event.
     */
    hide(): void;
    /**
     * Calculate the proper diameter for the circle and set it
     */
    private _setCircleDiameter;
    /**
     * Returns the host height of the loading component
     */
    private _hostHeight;
}
