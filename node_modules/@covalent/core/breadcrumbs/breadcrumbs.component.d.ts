import { QueryList, OnInit, OnDestroy, AfterContentInit, DoCheck, ChangeDetectorRef, ElementRef } from '@angular/core';
import { TdBreadcrumbComponent } from './breadcrumb/breadcrumb.component';
export declare class TdBreadcrumbsComponent implements OnInit, DoCheck, AfterContentInit, OnDestroy {
    private _elementRef;
    private _changeDetectorRef;
    private _resizeSubscription;
    private _widthSubject;
    private _resizing;
    _breadcrumbs: QueryList<TdBreadcrumbComponent>;
    hiddenBreadcrumbs: TdBreadcrumbComponent[];
    /**
     * Sets the icon url shown between breadcrumbs. Defaults to 'chevron_right'.
     */
    separatorIcon: string;
    constructor(_elementRef: ElementRef, _changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngDoCheck(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    readonly nativeElementWidth: number;
    /**
     * The total count of individual breadcrumbs
     */
    readonly count: number;
    /**
     * Set the crumb icon separators
     */
    private setCrumbIcons;
    private _calculateVisibility;
}
