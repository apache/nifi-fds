/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, NgZone, PLATFORM_ID, NgModule } from '@angular/core';
import { ɵMatchMedia, BREAKPOINTS, LAYOUT_CONFIG, CLASS_NAME, SERVER_TOKEN, StylesheetMap, sortAscendingPriority } from '@angular/flex-layout/core';
import { BEFORE_APP_SERIALIZED } from '@angular/platform-server';

/**
 * @fileoverview added by tsickle
 * Generated from: server/server-match-media.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Special server-only class to simulate a MediaQueryList and
 * - supports manual activation to simulate mediaQuery matching
 * - manages listeners
 */
class ServerMediaQueryList {
    /**
     * @param {?} _mediaQuery
     * @param {?=} _isActive
     */
    constructor(_mediaQuery, _isActive = false) {
        this._mediaQuery = _mediaQuery;
        this._isActive = _isActive;
        this._listeners = [];
        this.onchange = null;
    }
    /**
     * @return {?}
     */
    get matches() {
        return this._isActive;
    }
    /**
     * @return {?}
     */
    get media() {
        return this._mediaQuery;
    }
    /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     * @return {?}
     */
    destroy() {
        this.deactivate();
        this._listeners = [];
    }
    /**
     * Notify all listeners that 'matches === TRUE'
     * @return {?}
     */
    activate() {
        if (!this._isActive) {
            this._isActive = true;
            this._listeners.forEach((/**
             * @param {?} callback
             * @return {?}
             */
            (callback) => {
                /** @type {?} */
                const cb = (/** @type {?} */ (callback));
                cb.call(this, (/** @type {?} */ ({ matches: this.matches, media: this.media })));
            }));
        }
        return this;
    }
    /**
     * Notify all listeners that 'matches === false'
     * @return {?}
     */
    deactivate() {
        if (this._isActive) {
            this._isActive = false;
            this._listeners.forEach((/**
             * @param {?} callback
             * @return {?}
             */
            (callback) => {
                /** @type {?} */
                const cb = (/** @type {?} */ (callback));
                cb.call(this, (/** @type {?} */ ({ matches: this.matches, media: this.media })));
            }));
        }
        return this;
    }
    /**
     * Add a listener to our internal list to activate later
     * @param {?} listener
     * @return {?}
     */
    addListener(listener) {
        if (this._listeners.indexOf(listener) === -1) {
            this._listeners.push(listener);
        }
        if (this._isActive) {
            /** @type {?} */
            const cb = (/** @type {?} */ (listener));
            cb.call(this, (/** @type {?} */ ({ matches: this.matches, media: this.media })));
        }
    }
    /**
     * Don't need to remove listeners in the server environment
     * @param {?} _
     * @return {?}
     */
    removeListener(_) {
    }
    /**
     * @param {?} _
     * @param {?} __
     * @param {?=} ___
     * @return {?}
     */
    addEventListener(_, __, ___) {
    }
    /**
     * @param {?} _
     * @param {?} __
     * @param {?=} ___
     * @return {?}
     */
    removeEventListener(_, __, ___) {
    }
    /**
     * @param {?} _
     * @return {?}
     */
    dispatchEvent(_) {
        return false;
    }
}
/**
 * Special server-only implementation of MatchMedia that uses the above
 * ServerMediaQueryList as its internal representation
 *
 * Also contains methods to activate and deactivate breakpoints
 */
class ServerMatchMedia extends ɵMatchMedia {
    /**
     * @param {?} _zone
     * @param {?} _platformId
     * @param {?} _document
     * @param {?} breakpoints
     * @param {?} layoutConfig
     */
    constructor(_zone, _platformId, _document, breakpoints, layoutConfig) {
        super(_zone, _platformId, _document);
        this._zone = _zone;
        this._platformId = _platformId;
        this._document = _document;
        this.breakpoints = breakpoints;
        this.layoutConfig = layoutConfig;
        this._activeBreakpoints = [];
        /** @type {?} */
        const serverBps = layoutConfig.ssrObserveBreakpoints;
        if (serverBps) {
            this._activeBreakpoints = serverBps
                .reduce((/**
             * @param {?} acc
             * @param {?} serverBp
             * @return {?}
             */
            (acc, serverBp) => {
                /** @type {?} */
                const foundBp = breakpoints.find((/**
                 * @param {?} bp
                 * @return {?}
                 */
                bp => serverBp === bp.alias));
                if (!foundBp) {
                    console.warn(`FlexLayoutServerModule: unknown breakpoint alias "${serverBp}"`);
                }
                else {
                    acc.push(foundBp);
                }
                return acc;
            }), []);
        }
    }
    /**
     * Activate the specified breakpoint if we're on the server, no-op otherwise
     * @param {?} bp
     * @return {?}
     */
    activateBreakpoint(bp) {
        /** @type {?} */
        const lookupBreakpoint = (/** @type {?} */ (this.registry.get(bp.mediaQuery)));
        if (lookupBreakpoint) {
            lookupBreakpoint.activate();
        }
    }
    /**
     * Deactivate the specified breakpoint if we're on the server, no-op otherwise
     * @param {?} bp
     * @return {?}
     */
    deactivateBreakpoint(bp) {
        /** @type {?} */
        const lookupBreakpoint = (/** @type {?} */ (this.registry.get(bp.mediaQuery)));
        if (lookupBreakpoint) {
            lookupBreakpoint.deactivate();
        }
    }
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @protected
     * @param {?} query
     * @return {?}
     */
    buildMQL(query) {
        /** @type {?} */
        const isActive = this._activeBreakpoints.some((/**
         * @param {?} ab
         * @return {?}
         */
        ab => ab.mediaQuery === query));
        return new ServerMediaQueryList(query, isActive);
    }
}
ServerMatchMedia.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ServerMatchMedia.ctorParameters = () => [
    { type: NgZone },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Array, decorators: [{ type: Inject, args: [BREAKPOINTS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [LAYOUT_CONFIG,] }] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: server/server-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Activate all of the registered breakpoints in sequence, and then
 * retrieve the associated stylings from the virtual stylesheet
 * @param {?} serverSheet the virtual stylesheet that stores styles for each
 *        element
 * @param {?} mediaController the MatchMedia service to activate/deactivate breakpoints
 * @param {?} breakpoints the registered breakpoints to activate/deactivate
 * @return {?}
 */
function generateStaticFlexLayoutStyles(serverSheet, mediaController, breakpoints) {
    // Store the custom classes in the following map, that way only
    // one class gets allocated per HTMLElement, and each class can
    // be referenced in the static media queries
    /** @type {?} */
    const classMap = new Map();
    // Get the initial stylings for all of the directives,
    // and initialize the fallback block of stylings
    /** @type {?} */
    const defaultStyles = new Map(serverSheet.stylesheet);
    // Reset the class counter, otherwise class numbers will
    // increase with each server render
    nextId = 0;
    /** @type {?} */
    let styleText = generateCss(defaultStyles, 'all', classMap);
    [...breakpoints].sort(sortAscendingPriority).forEach((/**
     * @param {?} bp
     * @param {?} i
     * @return {?}
     */
    (bp, i) => {
        serverSheet.clearStyles();
        mediaController.activateBreakpoint(bp);
        /** @type {?} */
        const stylesheet = new Map(serverSheet.stylesheet);
        if (stylesheet.size > 0) {
            styleText += generateCss(stylesheet, bp.mediaQuery, classMap);
        }
        mediaController.deactivateBreakpoint(breakpoints[i]);
    }));
    return styleText;
}
/**
 * Create a style tag populated with the dynamic stylings from Flex
 * components and attach it to the head of the DOM
 * @param {?} serverSheet
 * @param {?} mediaController
 * @param {?} _document
 * @param {?} breakpoints
 * @return {?}
 */
function FLEX_SSR_SERIALIZER_FACTORY(serverSheet, mediaController, _document, breakpoints) {
    return (/**
     * @return {?}
     */
    () => {
        // This is the style tag that gets inserted into the head of the DOM,
        // populated with the manual media queries
        /** @type {?} */
        const styleTag = _document.createElement('style');
        /** @type {?} */
        const styleText = generateStaticFlexLayoutStyles(serverSheet, mediaController, breakpoints);
        styleTag.classList.add(`${CLASS_NAME}ssr`);
        styleTag.textContent = styleText;
        (/** @type {?} */ (_document.head)).appendChild(styleTag);
    });
}
/**
 *  Provider to set static styles on the server
 * @type {?}
 */
const SERVER_PROVIDERS = [
    {
        provide: (/** @type {?} */ (BEFORE_APP_SERIALIZED)),
        useFactory: FLEX_SSR_SERIALIZER_FACTORY,
        deps: [
            StylesheetMap,
            ɵMatchMedia,
            DOCUMENT,
            BREAKPOINTS
        ],
        multi: true
    },
    {
        provide: SERVER_TOKEN,
        useValue: true
    },
    {
        provide: ɵMatchMedia,
        useClass: ServerMatchMedia
    }
];
/** @type {?} */
let nextId = 0;
/** @type {?} */
const IS_DEBUG_MODE = false;
/**
 * create \@media queries based on a virtual stylesheet
 * * Adds a unique class to each element and stores it
 *   in a shared classMap for later reuse
 * @param {?} stylesheet the virtual stylesheet that stores styles for each
 *        element
 * @param {?} mediaQuery the given \@media CSS selector for the current breakpoint
 * @param {?} classMap the map of HTML elements to class names to avoid duplications
 * @return {?}
 */
function generateCss(stylesheet, mediaQuery, classMap) {
    /** @type {?} */
    let css = '';
    stylesheet.forEach((/**
     * @param {?} styles
     * @param {?} el
     * @return {?}
     */
    (styles, el) => {
        /** @type {?} */
        let keyVals = '';
        /** @type {?} */
        let className = getClassName(el, classMap);
        styles.forEach((/**
         * @param {?} v
         * @param {?} k
         * @return {?}
         */
        (v, k) => {
            keyVals += v ? format(`${k}:${v};`) : '';
        }));
        // Build list of CSS styles; each with a className
        css += format(`.${className} {`, keyVals, '}');
    }));
    // Group 1 or more styles (each with className) in a specific mediaQuery
    return format(`@media ${mediaQuery} {`, css, '}');
}
/**
 * For debugging purposes, prefix css segment with linefeed(s) for easy
 * debugging purposes.
 * @param {...?} list
 * @return {?}
 */
function format(...list) {
    /** @type {?} */
    let result = '';
    list.forEach((/**
     * @param {?} css
     * @param {?} i
     * @return {?}
     */
    (css, i) => {
        result += IS_DEBUG_MODE ? formatSegment(css, i !== 0) : css;
    }));
    return result;
}
/**
 * @param {?} css
 * @param {?=} asPrefix
 * @return {?}
 */
function formatSegment(css, asPrefix = true) {
    return asPrefix ? `\n${css}` : `${css}\n`;
}
/**
 * Get className associated with CSS styling
 * If not found, generate global className and set
 * association.
 * @param {?} element
 * @param {?} classMap
 * @return {?}
 */
function getClassName(element, classMap) {
    /** @type {?} */
    let className = classMap.get(element);
    if (!className) {
        className = `${CLASS_NAME}${nextId++}`;
        classMap.set(element, className);
    }
    element.classList.add(className);
    return className;
}

/**
 * @fileoverview added by tsickle
 * Generated from: server/module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FlexLayoutServerModule {
}
FlexLayoutServerModule.decorators = [
    { type: NgModule, args: [{
                providers: [SERVER_PROVIDERS]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: server/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: server/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FlexLayoutServerModule, generateStaticFlexLayoutStyles, FLEX_SSR_SERIALIZER_FACTORY, SERVER_PROVIDERS, ServerMatchMedia as ɵserver_privatea };
//# sourceMappingURL=server.js.map
