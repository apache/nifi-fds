import { Injectable, NgZone, Directive, Renderer2, ElementRef, Input, NgModule } from '@angular/core';
import { fromEvent, BehaviorSubject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * Generated from: services/media.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdMediaService {
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
        this._globalSubscription = this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            return fromEvent(window, 'resize').subscribe((/**
             * @return {?}
             */
            () => {
                // way to prevent the resize event from triggering the match media if there is already one event running already.
                if (!this._resizing) {
                    this._resizing = true;
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        this._onResize();
                        this._resizing = false;
                    }), 100);
                }
            }));
        }));
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
        return this._ngZone.run((/**
         * @return {?}
         */
        () => {
            return matchMedia(query).matches;
        }));
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
     * @private
     * @return {?}
     */
    _onResize() {
        for (const query of Object.keys(this._querySources)) {
            this._ngZone.run((/**
             * @return {?}
             */
            () => {
                this._matchMediaTrigger(query);
            }));
        }
    }
    /**
     * @private
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
    /**
     * @type {?}
     * @private
     */
    TdMediaService.prototype._resizing;
    /**
     * @type {?}
     * @private
     */
    TdMediaService.prototype._globalSubscription;
    /**
     * @type {?}
     * @private
     */
    TdMediaService.prototype._queryMap;
    /**
     * @type {?}
     * @private
     */
    TdMediaService.prototype._querySources;
    /**
     * @type {?}
     * @private
     */
    TdMediaService.prototype._queryObservables;
    /**
     * @type {?}
     * @private
     */
    TdMediaService.prototype._ngZone;
}

/**
 * @fileoverview added by tsickle
 * Generated from: directives/media-toggle.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdMediaToggleDirective {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _mediaService
     */
    constructor(_renderer, _elementRef, _mediaService) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._mediaService = _mediaService;
        this._matches = false;
        this._attributes = {};
        this._styles = {};
        this._classes = [];
    }
    /**
     * tdMediaToggle: string
     * Media query used to evaluate screen/window size.
     * Toggles attributes, classes and styles if media query is matched.
     * @param {?} query
     * @return {?}
     */
    set query(query) {
        if (!query) {
            throw new Error('Query needed for [tdMediaToggle] directive.');
        }
        this._query = query;
    }
    /**
     * mediaAttributes: {[key: string]: string}
     * Attributes to be toggled when media query matches.
     * @param {?} attributes
     * @return {?}
     */
    set attributes(attributes) {
        this._attributes = attributes;
    }
    /**
     * mediaClasses: string[]
     * CSS Classes to be toggled when media query matches.
     * @param {?} classes
     * @return {?}
     */
    set classes(classes) {
        this._classes = classes;
    }
    /**
     * mediaStyles: {[key: string]: string}
     * CSS Styles to be toggled when media query matches.
     * @param {?} styles
     * @return {?}
     */
    set styles(styles) {
        this._styles = styles;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._mediaChange(this._mediaService.query(this._query));
        this._subscription = this._mediaService.registerQuery(this._query).subscribe((/**
         * @param {?} matches
         * @return {?}
         */
        (matches) => {
            this._mediaChange(matches);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
    /**
     * @private
     * @param {?} matches
     * @return {?}
     */
    _mediaChange(matches) {
        this._matches = matches;
        this._changeAttributes();
        this._changeClasses();
        this._changeStyles();
    }
    /**
     * @private
     * @return {?}
     */
    _changeAttributes() {
        for (const attr in this._attributes) {
            if (this._matches) {
                this._renderer.setAttribute(this._elementRef.nativeElement, attr, this._attributes[attr]);
            }
            else {
                this._renderer.removeAttribute(this._elementRef.nativeElement, attr);
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    _changeClasses() {
        this._classes.forEach((/**
         * @param {?} className
         * @return {?}
         */
        (className) => {
            if (this._matches) {
                this._renderer.addClass(this._elementRef.nativeElement, className);
            }
            else {
                this._renderer.removeClass(this._elementRef.nativeElement, className);
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _changeStyles() {
        for (const style in this._styles) {
            if (this._matches) {
                this._renderer.setStyle(this._elementRef.nativeElement, style, this._styles[style]);
            }
            else {
                this._renderer.removeStyle(this._elementRef.nativeElement, style);
            }
        }
    }
}
TdMediaToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdMediaToggle]',
            },] }
];
/** @nocollapse */
TdMediaToggleDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: TdMediaService }
];
TdMediaToggleDirective.propDecorators = {
    query: [{ type: Input, args: ['tdMediaToggle',] }],
    attributes: [{ type: Input, args: ['mediaAttributes',] }],
    classes: [{ type: Input, args: ['mediaClasses',] }],
    styles: [{ type: Input, args: ['mediaStyles',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdMediaToggleDirective.prototype._subscription;
    /**
     * @type {?}
     * @private
     */
    TdMediaToggleDirective.prototype._query;
    /**
     * @type {?}
     * @private
     */
    TdMediaToggleDirective.prototype._matches;
    /**
     * @type {?}
     * @private
     */
    TdMediaToggleDirective.prototype._attributes;
    /**
     * @type {?}
     * @private
     */
    TdMediaToggleDirective.prototype._styles;
    /**
     * @type {?}
     * @private
     */
    TdMediaToggleDirective.prototype._classes;
    /**
     * @type {?}
     * @private
     */
    TdMediaToggleDirective.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    TdMediaToggleDirective.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TdMediaToggleDirective.prototype._mediaService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: media.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TD_MEDIA = [TdMediaToggleDirective];
class CovalentMediaModule {
}
CovalentMediaModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TD_MEDIA],
                exports: [TD_MEDIA],
                providers: [TdMediaService],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: covalent-core-media.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CovalentMediaModule, TdMediaService, TdMediaToggleDirective };
//# sourceMappingURL=covalent-core-media.js.map
