import { ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { TdMediaService } from '../services/media.service';
export declare class TdMediaToggleDirective implements OnInit, OnDestroy {
    private _renderer;
    private _elementRef;
    private _mediaService;
    private _subscription;
    private _query;
    private _matches;
    private _attributes;
    private _styles;
    private _classes;
    /**
     * tdMediaToggle: string
     * Media query used to evaluate screen/window size.
     * Toggles attributes, classes and styles if media query is matched.
     */
    set query(query: string);
    /**
     * mediaAttributes: {[key: string]: string}
     * Attributes to be toggled when media query matches.
     */
    set attributes(attributes: any);
    /**
     * mediaClasses: string[]
     * CSS Classes to be toggled when media query matches.
     */
    set classes(classes: string[]);
    /**
     * mediaStyles: {[key: string]: string}
     * CSS Styles to be toggled when media query matches.
     */
    set styles(styles: any);
    constructor(_renderer: Renderer2, _elementRef: ElementRef, _mediaService: TdMediaService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private _mediaChange;
    private _changeAttributes;
    private _changeClasses;
    private _changeStyles;
}
