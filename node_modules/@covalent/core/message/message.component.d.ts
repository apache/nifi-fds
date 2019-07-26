import { Renderer2, ElementRef, AfterViewInit, ViewContainerRef, TemplateRef, ChangeDetectorRef } from '@angular/core';
export declare class TdMessageContainerDirective {
    viewContainer: ViewContainerRef;
    constructor(viewContainer: ViewContainerRef);
}
export declare class TdMessageComponent implements AfterViewInit {
    private _renderer;
    private _changeDetectorRef;
    private _elementRef;
    private _color;
    private _opened;
    private _hidden;
    private _animating;
    private _initialized;
    _childElement: TdMessageContainerDirective;
    _template: TemplateRef<any>;
    /**
     * Binding host to tdCollapse animation
     */
    readonly collapsedAnimation: any;
    /**
     * Binding host to display style when hidden
     */
    readonly hidden: string;
    /**
     * label: string
     *
     * Sets the label of the message.
     */
    label: string;
    /**
     * sublabel?: string
     *
     * Sets the sublabel of the message.
     */
    sublabel: string;
    /**
     * icon?: string
     *
     * The icon to be displayed before the title.
     * Defaults to `info_outline` icon
     */
    icon: string;
    /**
     * color?: primary | accent | warn
     *
     * Sets the color of the message.
     * Can also use any material color: purple | light-blue, etc.
     */
    color: string;
    /**
     * opened?: boolean
     *
     * Shows or hiddes the message depending on its value.
     * Defaults to 'true'.
     */
    opened: boolean;
    constructor(_renderer: Renderer2, _changeDetectorRef: ChangeDetectorRef, _elementRef: ElementRef);
    /**
     * Detach element when close animation is finished to set animating state to false
     * hidden state to true and detach element from DOM
     */
    animationDoneListener(): void;
    /**
     * Initializes the component and attaches the content.
     */
    ngAfterViewInit(): void;
    /**
     * Renders the message on screen
     * Validates if there is an animation currently and if its already opened
     */
    open(): void;
    /**
     * Removes the message content from screen.
     * Validates if there is an animation currently and if its already closed
     */
    close(): void;
    /**
     * Toggles between open and close depending on state.
     */
    toggle(): void;
    /**
     * Method to set the state before starting an animation
     */
    private _startAnimationState;
    /**
     * Method to attach template to DOM
     */
    private _attach;
    /**
     * Method to detach template from DOM
     */
    private _detach;
}
