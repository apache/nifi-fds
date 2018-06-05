/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ElementRef, EventEmitter, OnDestroy, AfterContentInit, NgZone, OnChanges, SimpleChanges } from '@angular/core';
/**
 * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
 * @docs-private
 */
export declare class MutationObserverFactory {
    create(callback: MutationCallback): MutationObserver | null;
}
/**
 * Directive that triggers a callback whenever the content of
 * its associated element has changed.
 */
export declare class CdkObserveContent implements AfterContentInit, OnChanges, OnDestroy {
    private _mutationObserverFactory;
    private _elementRef;
    private _ngZone;
    private _observer;
    private _disabled;
    /** Event emitted for each change in the element's content. */
    event: EventEmitter<MutationRecord[]>;
    /**
     * Whether observing content is disabled. This option can be used
     * to disconnect the underlying MutationObserver until it is needed.
     */
    disabled: any;
    /** Used for debouncing the emitted values to the observeContent event. */
    private _debouncer;
    /** Debounce interval for emitting the changes. */
    debounce: number;
    constructor(_mutationObserverFactory: MutationObserverFactory, _elementRef: ElementRef, _ngZone: NgZone);
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private _disable();
    private _enable();
}
export declare class ObserversModule {
}
