/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/coercion'), require('rxjs/Subject'), require('rxjs/operators/debounceTime')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/cdk/coercion', 'rxjs/Subject', 'rxjs/operators/debounceTime'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.cdk = global.ng.cdk || {}, global.ng.cdk.observers = global.ng.cdk.observers || {}),global.ng.core,global.ng.cdk.coercion,global.Rx,global.Rx.operators));
}(this, (function (exports,_angular_core,_angular_cdk_coercion,rxjs_Subject,rxjs_operators_debounceTime) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
 * \@docs-private
 */
var MutationObserverFactory = /** @class */ (function () {
    function MutationObserverFactory() {
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    MutationObserverFactory.prototype.create = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
    };
    MutationObserverFactory.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    MutationObserverFactory.ctorParameters = function () { return []; };
    return MutationObserverFactory;
}());
/**
 * Directive that triggers a callback whenever the content of
 * its associated element has changed.
 */
var CdkObserveContent = /** @class */ (function () {
    function CdkObserveContent(_mutationObserverFactory, _elementRef, _ngZone) {
        this._mutationObserverFactory = _mutationObserverFactory;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._disabled = false;
        /**
         * Event emitted for each change in the element's content.
         */
        this.event = new _angular_core.EventEmitter();
        /**
         * Used for debouncing the emitted values to the observeContent event.
         */
        this._debouncer = new rxjs_Subject.Subject();
    }
    Object.defineProperty(CdkObserveContent.prototype, "disabled", {
        get: /**
         * Whether observing content is disabled. This option can be used
         * to disconnect the underlying MutationObserver until it is needed.
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = _angular_cdk_coercion.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkObserveContent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.debounce > 0) {
            this._ngZone.runOutsideAngular(function () {
                _this._debouncer.pipe(rxjs_operators_debounceTime.debounceTime(_this.debounce))
                    .subscribe(function (mutations) { return _this.event.emit(mutations); });
            });
        }
        else {
            this._debouncer.subscribe(function (mutations) { return _this.event.emit(mutations); });
        }
        this._observer = this._ngZone.runOutsideAngular(function () {
            return _this._mutationObserverFactory.create(function (mutations) {
                _this._debouncer.next(mutations);
            });
        });
        if (!this.disabled) {
            this._enable();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CdkObserveContent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['disabled']) {
            changes['disabled'].currentValue ? this._disable() : this._enable();
        }
    };
    /**
     * @return {?}
     */
    CdkObserveContent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._disable();
        this._debouncer.complete();
    };
    /**
     * @return {?}
     */
    CdkObserveContent.prototype._disable = /**
     * @return {?}
     */
    function () {
        if (this._observer) {
            this._observer.disconnect();
        }
    };
    /**
     * @return {?}
     */
    CdkObserveContent.prototype._enable = /**
     * @return {?}
     */
    function () {
        if (this._observer) {
            this._observer.observe(this._elementRef.nativeElement, {
                characterData: true,
                childList: true,
                subtree: true
            });
        }
    };
    CdkObserveContent.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: '[cdkObserveContent]',
                    exportAs: 'cdkObserveContent',
                },] },
    ];
    /** @nocollapse */
    CdkObserveContent.ctorParameters = function () { return [
        { type: MutationObserverFactory, },
        { type: _angular_core.ElementRef, },
        { type: _angular_core.NgZone, },
    ]; };
    CdkObserveContent.propDecorators = {
        "event": [{ type: _angular_core.Output, args: ['cdkObserveContent',] },],
        "disabled": [{ type: _angular_core.Input, args: ['cdkObserveContentDisabled',] },],
        "debounce": [{ type: _angular_core.Input },],
    };
    return CdkObserveContent;
}());
var ObserversModule = /** @class */ (function () {
    function ObserversModule() {
    }
    ObserversModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    exports: [CdkObserveContent],
                    declarations: [CdkObserveContent],
                    providers: [MutationObserverFactory]
                },] },
    ];
    /** @nocollapse */
    ObserversModule.ctorParameters = function () { return []; };
    return ObserversModule;
}());

exports.ObserveContent = CdkObserveContent;
exports.MutationObserverFactory = MutationObserverFactory;
exports.CdkObserveContent = CdkObserveContent;
exports.ObserversModule = ObserversModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cdk-observers.umd.js.map
