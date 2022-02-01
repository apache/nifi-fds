import { QueryList, OnInit, OnDestroy, AfterContentInit, DoCheck, ChangeDetectorRef, ElementRef } from '@angular/core';
import { TdBreadcrumbComponent } from './breadcrumb/breadcrumb.component';
export declare class TdBreadcrumbsComponent implements OnInit, DoCheck, AfterContentInit, OnDestroy {
    private _elementRef;
    private _changeDetectorRef;
    private _resizeSubscription;
    private _widthSubject;
    private _contentChildrenSub;
    private _resizing;
    private _separatorIcon;
    _breadcrumbs: QueryList<TdBreadcrumbComponent>;
    hiddenBreadcrumbs: TdBreadcrumbComponent[];
    /**
     * Sets the icon url shown between breadcrumbs. Defaults to 'chevron_right'.
     */
    set separatorIcon(separatorIcon: string);
    get separatorIcon(): string;
    constructor(_elementRef: ElementRef, _changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngDoCheck(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    get nativeElementWidth(): number;
    /**
     * The total count of individual breadcrumbs
     */
    get count(): number;
    /**
     * Set the crumb icon separators
     */
    private setCrumbIcons;
    private _calculateVisibility;
}
