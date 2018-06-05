import { NgZone, Provider } from '@angular/core';
import { Observable } from 'rxjs/Observable';
export declare class TdMediaService {
    private _ngZone;
    private _resizing;
    private _globalSubscription;
    private _queryMap;
    private _querySources;
    private _queryObservables;
    constructor(_ngZone: NgZone);
    /**
     * Deregisters a query so its stops being notified or used.
     */
    deregisterQuery(query: string): void;
    /**
     * Used to evaluate whether a given media query is true or false given the current device's screen / window size.
     */
    query(query: string): boolean;
    /**
     * Registers a media query and returns an [Observable] that will re-evaluate and
     * return if the given media query matches on window resize.
     * Note: don't forget to unsubscribe from [Observable] when finished watching.
     */
    registerQuery(query: string): Observable<boolean>;
    /**
     * Trigger a match media event on all subscribed observables.
     */
    broadcast(): void;
    private _onResize();
    private _matchMediaTrigger(query);
}
export declare function MEDIA_PROVIDER_FACTORY(parent: TdMediaService, ngZone: NgZone): TdMediaService;
export declare const MEDIA_PROVIDER: Provider;
