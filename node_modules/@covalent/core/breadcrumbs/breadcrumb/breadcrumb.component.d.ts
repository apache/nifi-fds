import { ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
export declare class TdBreadcrumbComponent implements AfterViewInit {
    private _elementRef;
    private _changeDetectorRef;
    private _displayCrumb;
    private _width;
    private _displayIcon;
    private _separatorIcon;
    get separatorIcon(): string;
    set separatorIcon(separatorIcon: string);
    get displayIcon(): boolean;
    set displayIcon(displayIcon: boolean);
    get displayCrumb(): boolean;
    /**
     * Whether to display the crumb or not
     */
    set displayCrumb(shouldDisplay: boolean);
    /**
     * Width of the DOM element of the crumb
     */
    get width(): number;
    /**
     * Gets the display style of the crumb
     */
    get displayBinding(): string;
    constructor(_elementRef: ElementRef, _changeDetectorRef: ChangeDetectorRef);
    ngAfterViewInit(): void;
    /**
     * Stop click propagation when clicking on icon
     */
    _handleIconClick(event: Event): void;
}
