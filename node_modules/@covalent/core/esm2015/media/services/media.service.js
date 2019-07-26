/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable, NgZone, SkipSelf, Optional } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
export class TdMediaService {
    /**
     * @param {?} _ngZone
     */
    constructor(_ngZone) {
        this._ngZone = _ngZone;
        this._resizing = false;
        this._queryMap = new Map();
        this._querySources = {};
        this._queryObservables = {};
        this._queryMap.set('xs', '(max-width: 599px)');
        this._queryMap.set('gt-xs', '(min-width: 600px)');
        this._queryMap.set('sm', '(min-width: 600px) and (max-width: 959px)');
        this._queryMap.set('gt-sm', '(min-width: 960px)');
        this._queryMap.set('md', '(min-width: 960px) and (max-width: 1279px)');
        this._queryMap.set('gt-md', '(min-width: 1280px)');
        this._queryMap.set('lg', '(min-width: 1280px) and (max-width: 1919px)');
        this._queryMap.set('gt-lg', '(min-width: 1920px)');
        this._queryMap.set('xl', '(min-width: 1920px)');
        this._queryMap.set('landscape', '(orientation: landscape)');
        this._queryMap.set('portrait', '(orientation: portrait)');
        this._queryMap.set('print', 'print');
        this._resizing = false;
        // we make sure that the resize checking happend outside of Angular since it happens often
        this._globalSubscription = this._ngZone.runOutsideAngular(() => {
            return fromEvent(window, 'resize').subscribe(() => {
                // way to prevent the resize event from triggering the match media if there is already one event running already.
                if (!this._resizing) {
                    this._resizing = true;
                    setTimeout(() => {
                        this._onResize();
                        this._resizing = false;
                    }, 100);
                }
            });
        });
    }
    /**
     * Deregisters a query so its stops being notified or used.
     * @param {?} query
     * @return {?}
     */
    deregisterQuery(query) {
        if (this._queryMap.get(query.toLowerCase())) {
            query = this._queryMap.get(query.toLowerCase());
        }
        this._querySources[query].unsubscribe();
        delete this._querySources[query];
        delete this._queryObservables[query];
    }
    /**
     * Used to evaluate whether a given media query is true or false given the current device's screen / window size.
     * @param {?} query
     * @return {?}
     */
    query(query) {
        if (this._queryMap.get(query.toLowerCase())) {
            query = this._queryMap.get(query.toLowerCase());
        }
        return this._ngZone.run(() => {
            return matchMedia(query).matches;
        });
    }
    /**
     * Registers a media query and returns an [Observable] that will re-evaluate and
     * return if the given media query matches on window resize.
     * Note: don't forget to unsubscribe from [Observable] when finished watching.
     * @param {?} query
     * @return {?}
     */
    registerQuery(query) {
        if (this._queryMap.get(query.toLowerCase())) {
            query = this._queryMap.get(query.toLowerCase());
        }
        if (!this._querySources[query]) {
            this._querySources[query] = new BehaviorSubject(matchMedia(query).matches);
            this._queryObservables[query] = this._querySources[query].asObservable();
        }
        return this._queryObservables[query];
    }
    /**
     * Trigger a match media event on all subscribed observables.
     * @return {?}
     */
    broadcast() {
        this._onResize();
    }
    /**
     * @return {?}
     */
    _onResize() {
        for (let query in this._querySources) {
            this._ngZone.run(() => {
                this._matchMediaTrigger(query);
            });
        }
    }
    /**
     * @param {?} query
     * @return {?}
     */
    _matchMediaTrigger(query) {
        this._querySources[query].next(matchMedia(query).matches);
    }
}
TdMediaService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TdMediaService.ctorParameters = () => [
    { type: NgZone }
];
if (false) {
    /** @type {?} */
    TdMediaService.prototype._resizing;
    /** @type {?} */
    TdMediaService.prototype._globalSubscription;
    /** @type {?} */
    TdMediaService.prototype._queryMap;
    /** @type {?} */
    TdMediaService.prototype._querySources;
    /** @type {?} */
    TdMediaService.prototype._queryObservables;
    /** @type {?} */
    TdMediaService.prototype._ngZone;
}
/**
 * @param {?} parent
 * @param {?} ngZone
 * @return {?}
 */
export function MEDIA_PROVIDER_FACTORY(parent, ngZone) {
    return parent || new TdMediaService(ngZone);
}
/** @type {?} */
export const MEDIA_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdMediaService,
    deps: [[new Optional(), new SkipSelf(), TdMediaService], NgZone],
    useFactory: MEDIA_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsibWVkaWEvc2VydmljZXMvbWVkaWEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQWMsZUFBZSxFQUFnQixTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHNUUsTUFBTSxPQUFPLGNBQWM7Ozs7SUFRekIsWUFBb0IsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFOM0IsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUUzQixjQUFTLEdBQXdCLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQzNELGtCQUFhLEdBQStDLEVBQUUsQ0FBQztRQUMvRCxzQkFBaUIsR0FBeUMsRUFBRSxDQUFDO1FBR25FLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSwyQ0FBMkMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSw0Q0FBNEMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSw2Q0FBNkMsQ0FBQyxDQUFDO1FB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ZSwgU2tpcFNlbGYsIE9wdGlvbmFsLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb24sIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGRNZWRpYVNlcnZpY2Uge1xuXG4gIHByaXZhdGUgX3Jlc2l6aW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2dsb2JhbFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9xdWVyeU1hcDogTWFwPHN0cmluZywgc3RyaW5nPiA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG4gIHByaXZhdGUgX3F1ZXJ5U291cmNlczogeyBba2V5OiBzdHJpbmddOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj59ID0ge307XG4gIHByaXZhdGUgX3F1ZXJ5T2JzZXJ2YWJsZXM6IHtba2V5OiBzdHJpbmddOiBPYnNlcnZhYmxlPGJvb2xlYW4+fSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25nWm9uZTogTmdab25lKSB7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCd4cycsICcobWF4LXdpZHRoOiA1OTlweCknKTtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ2d0LXhzJywgJyhtaW4td2lkdGg6IDYwMHB4KScpO1xuICAgIHRoaXMuX3F1ZXJ5TWFwLnNldCgnc20nLCAnKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCknKTtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ2d0LXNtJywgJyhtaW4td2lkdGg6IDk2MHB4KScpO1xuICAgIHRoaXMuX3F1ZXJ5TWFwLnNldCgnbWQnLCAnKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpJyk7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCdndC1tZCcsICcobWluLXdpZHRoOiAxMjgwcHgpJyk7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCdsZycsICcobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpJyk7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCdndC1sZycsICcobWluLXdpZHRoOiAxOTIwcHgpJyk7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCd4bCcsICcobWluLXdpZHRoOiAxOTIwcHgpJyk7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCdsYW5kc2NhcGUnLCAnKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyk7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCdwb3J0cmFpdCcsICcob3JpZW50YXRpb246IHBvcnRyYWl0KScpO1xuICAgIHRoaXMuX3F1ZXJ5TWFwLnNldCgncHJpbnQnLCAncHJpbnQnKTtcblxuICAgIHRoaXMuX3Jlc2l6aW5nID0gZmFsc2U7XG4gICAgLy8gd2UgbWFrZSBzdXJlIHRoYXQgdGhlIHJlc2l6ZSBjaGVja2luZyBoYXBwZW5kIG91dHNpZGUgb2YgQW5ndWxhciBzaW5jZSBpdCBoYXBwZW5zIG9mdGVuXG4gICAgdGhpcy5fZ2xvYmFsU3Vic2NyaXB0aW9uID0gdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHJldHVybiBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgLy8gd2F5IHRvIHByZXZlbnQgdGhlIHJlc2l6ZSBldmVudCBmcm9tIHRyaWdnZXJpbmcgdGhlIG1hdGNoIG1lZGlhIGlmIHRoZXJlIGlzIGFscmVhZHkgb25lIGV2ZW50IHJ1bm5pbmcgYWxyZWFkeS5cbiAgICAgICAgaWYgKCF0aGlzLl9yZXNpemluZykge1xuICAgICAgICAgIHRoaXMuX3Jlc2l6aW5nID0gdHJ1ZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX29uUmVzaXplKCk7XG4gICAgICAgICAgICB0aGlzLl9yZXNpemluZyA9IGZhbHNlO1xuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlcmVnaXN0ZXJzIGEgcXVlcnkgc28gaXRzIHN0b3BzIGJlaW5nIG5vdGlmaWVkIG9yIHVzZWQuXG4gICAqL1xuICBkZXJlZ2lzdGVyUXVlcnkocXVlcnk6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9xdWVyeU1hcC5nZXQocXVlcnkudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgIHF1ZXJ5ID0gdGhpcy5fcXVlcnlNYXAuZ2V0KHF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cbiAgICB0aGlzLl9xdWVyeVNvdXJjZXNbcXVlcnldLnVuc3Vic2NyaWJlKCk7XG4gICAgZGVsZXRlIHRoaXMuX3F1ZXJ5U291cmNlc1txdWVyeV07XG4gICAgZGVsZXRlIHRoaXMuX3F1ZXJ5T2JzZXJ2YWJsZXNbcXVlcnldO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gZXZhbHVhdGUgd2hldGhlciBhIGdpdmVuIG1lZGlhIHF1ZXJ5IGlzIHRydWUgb3IgZmFsc2UgZ2l2ZW4gdGhlIGN1cnJlbnQgZGV2aWNlJ3Mgc2NyZWVuIC8gd2luZG93IHNpemUuXG4gICAqL1xuICBwdWJsaWMgcXVlcnkocXVlcnk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLl9xdWVyeU1hcC5nZXQocXVlcnkudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgIHF1ZXJ5ID0gdGhpcy5fcXVlcnlNYXAuZ2V0KHF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7XG4gICAgICByZXR1cm4gbWF0Y2hNZWRpYShxdWVyeSkubWF0Y2hlcztcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBtZWRpYSBxdWVyeSBhbmQgcmV0dXJucyBhbiBbT2JzZXJ2YWJsZV0gdGhhdCB3aWxsIHJlLWV2YWx1YXRlIGFuZFxuICAgKiByZXR1cm4gaWYgdGhlIGdpdmVuIG1lZGlhIHF1ZXJ5IG1hdGNoZXMgb24gd2luZG93IHJlc2l6ZS5cbiAgICogTm90ZTogZG9uJ3QgZm9yZ2V0IHRvIHVuc3Vic2NyaWJlIGZyb20gW09ic2VydmFibGVdIHdoZW4gZmluaXNoZWQgd2F0Y2hpbmcuXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXJRdWVyeShxdWVyeTogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgaWYgKHRoaXMuX3F1ZXJ5TWFwLmdldChxdWVyeS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgcXVlcnkgPSB0aGlzLl9xdWVyeU1hcC5nZXQocXVlcnkudG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuICAgIGlmICghdGhpcy5fcXVlcnlTb3VyY2VzW3F1ZXJ5XSkge1xuICAgICAgdGhpcy5fcXVlcnlTb3VyY2VzW3F1ZXJ5XSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4obWF0Y2hNZWRpYShxdWVyeSkubWF0Y2hlcyk7XG4gICAgICB0aGlzLl9xdWVyeU9ic2VydmFibGVzW3F1ZXJ5XSA9IHRoaXMuX3F1ZXJ5U291cmNlc1txdWVyeV0uYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9xdWVyeU9ic2VydmFibGVzW3F1ZXJ5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGEgbWF0Y2ggbWVkaWEgZXZlbnQgb24gYWxsIHN1YnNjcmliZWQgb2JzZXJ2YWJsZXMuXG4gICAqL1xuICBwdWJsaWMgYnJvYWRjYXN0KCk6IHZvaWQge1xuICAgIHRoaXMuX29uUmVzaXplKCk7XG4gIH1cblxuICBwcml2YXRlIF9vblJlc2l6ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBxdWVyeSBpbiB0aGlzLl9xdWVyeVNvdXJjZXMpIHtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLl9tYXRjaE1lZGlhVHJpZ2dlcihxdWVyeSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9tYXRjaE1lZGlhVHJpZ2dlcihxdWVyeTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fcXVlcnlTb3VyY2VzW3F1ZXJ5XS5uZXh0KG1hdGNoTWVkaWEocXVlcnkpLm1hdGNoZXMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBNRURJQV9QUk9WSURFUl9GQUNUT1JZKFxuICAgIHBhcmVudDogVGRNZWRpYVNlcnZpY2UsIG5nWm9uZTogTmdab25lKTogVGRNZWRpYVNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBUZE1lZGlhU2VydmljZShuZ1pvbmUpO1xufVxuXG5leHBvcnQgY29uc3QgTUVESUFfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBUZE1lZGlhU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFRkTWVkaWFTZXJ2aWNlXSwgTmdab25lXSxcbiAgdXNlRmFjdG9yeTogTUVESUFfUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=