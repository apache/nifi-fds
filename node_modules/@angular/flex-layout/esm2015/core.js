/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { APP_BOOTSTRAP_LISTENER, PLATFORM_ID, InjectionToken, Injectable, Inject, NgZone, Optional, SkipSelf, NgModule, SimpleChange } from '@angular/core';
import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { filter } from 'rxjs/operators/filter';
import { map } from 'rxjs/operators/map';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Find all of the server-generated stylings, if any, and remove them
 * This will be in the form of inline classes and the style block in the
 * head of the DOM
 * @param {?} _document
 * @param {?} platformId
 * @return {?}
 */
function removeStyles(_document, platformId) {
    return () => {
        if (isPlatformBrowser(platformId)) {
            const /** @type {?} */ elements = Array.from(_document.querySelectorAll(`[class*=${CLASS_NAME}]`));
            // RegExp constructor should only be used if passing a variable to the constructor.
            // When using static regular expression it is more performant to use reg exp literal.
            // This is also needed to provide Safari 9 compatibility, please see
            // https://stackoverflow.com/questions/37919802 for more discussion.
            const /** @type {?} */ classRegex = /\bflex-layout-.+?\b/g;
            elements.forEach(el => {
                el.classList.contains(`${CLASS_NAME}ssr`) && el.parentNode ?
                    el.parentNode.removeChild(el) : el.className.replace(classRegex, '');
            });
        }
    };
}
/**
 *  Provider to remove SSR styles on the browser
 */
const /** @type {?} */ BROWSER_PROVIDER = {
    provide: /** @type {?} */ (APP_BOOTSTRAP_LISTENER),
    useFactory: removeStyles,
    deps: [DOCUMENT, PLATFORM_ID],
    multi: true
};
const /** @type {?} */ CLASS_NAME = 'flex-layout-';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 *  Injection token unique to the flex-layout library.
 *  Use this token when build a custom provider (see below).
 */
const /** @type {?} */ BREAKPOINTS = new InjectionToken('Token (@angular/flex-layout) Breakpoints');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Registry of 1..n MediaQuery breakpoint ranges
 * This is published as a provider and may be overridden from custom, application-specific ranges
 *
 */
class BreakPointRegistry {
    /**
     * @param {?} _registry
     */
    constructor(_registry) {
        this._registry = _registry;
    }
    /**
     * Accessor to raw list
     * @return {?}
     */
    get items() {
        return [...this._registry];
    }
    /**
     * Accessor to sorted list used for registration with matchMedia API
     *
     * NOTE: During breakpoint registration, we want to register the overlaps FIRST
     *       so the non-overlaps will trigger the MatchMedia:BehaviorSubject last!
     *       And the largest, non-overlap, matching breakpoint should be the lastReplay value
     * @return {?}
     */
    get sortedItems() {
        let /** @type {?} */ overlaps = this._registry.filter(it => it.overlapping === true);
        let /** @type {?} */ nonOverlaps = this._registry.filter(it => it.overlapping !== true);
        return [...overlaps, ...nonOverlaps];
    }
    /**
     * Search breakpoints by alias (e.g. gt-xs)
     * @param {?} alias
     * @return {?}
     */
    findByAlias(alias) {
        return this._registry.find(bp => bp.alias == alias) || null;
    }
    /**
     * @param {?} query
     * @return {?}
     */
    findByQuery(query) {
        return this._registry.find(bp => bp.mediaQuery == query) || null;
    }
    /**
     * Get all the breakpoints whose ranges could overlapping `normal` ranges;
     * e.g. gt-sm overlaps md, lg, and xl
     * @return {?}
     */
    get overlappings() {
        return this._registry.filter(it => it.overlapping == true);
    }
    /**
     * Get list of all registered (non-empty) breakpoint aliases
     * @return {?}
     */
    get aliases() {
        return this._registry.map(it => it.alias);
    }
    /**
     * Aliases are mapped to properties using suffixes
     * e.g.  'gt-sm' for property 'layout'  uses suffix 'GtSm'
     * for property layoutGtSM.
     * @return {?}
     */
    get suffixes() {
        return this._registry.map(it => !!it.suffix ? it.suffix : '');
    }
}
BreakPointRegistry.decorators = [
    { type: Injectable },
];
/** @nocollapse */
BreakPointRegistry.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: [BREAKPOINTS,] },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Class instances emitted [to observers] for each mql notification
 */
class MediaChange {
    /**
     * @param {?=} matches
     * @param {?=} mediaQuery
     * @param {?=} mqAlias
     * @param {?=} suffix
     */
    constructor(matches = false, mediaQuery = 'all', mqAlias = '', suffix = '' // e.g.   GtSM, Md, GtLg
    ) {
        this.matches = matches;
        this.mediaQuery = mediaQuery;
        this.mqAlias = mqAlias;
        this.suffix = suffix;
    }
    /**
     * @return {?}
     */
    clone() {
        return new MediaChange(this.matches, this.mediaQuery, this.mqAlias, this.suffix);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * MediaMonitor configures listeners to mediaQuery changes and publishes an Observable facade to
 * convert mediaQuery change callbacks to subscriber notifications. These notifications will be
 * performed within the ng Zone to trigger change detections and component updates.
 *
 * NOTE: both mediaQuery activations and de-activations are announced in notifications
 */
class MatchMedia {
    /**
     * @param {?} _zone
     * @param {?} _platformId
     * @param {?} _document
     */
    constructor(_zone, _platformId, _document) {
        this._zone = _zone;
        this._platformId = _platformId;
        this._document = _document;
        this._registry = new Map();
        this._source = new BehaviorSubject(new MediaChange(true));
        this._observable$ = this._source.asObservable();
    }
    /**
     * For the specified mediaQuery?
     * @param {?} mediaQuery
     * @return {?}
     */
    isActive(mediaQuery) {
        let /** @type {?} */ mql = this._registry.get(mediaQuery);
        return !!mql ? mql.matches : false;
    }
    /**
     * External observers can watch for all (or a specific) mql changes.
     * Typically used by the MediaQueryAdaptor; optionally available to components
     * who wish to use the MediaMonitor as mediaMonitor$ observable service.
     *
     * NOTE: if a mediaQuery is not specified, then ALL mediaQuery activations will
     *       be announced.
     * @param {?=} mediaQuery
     * @return {?}
     */
    observe(mediaQuery) {
        if (mediaQuery) {
            this.registerQuery(mediaQuery);
        }
        return this._observable$.pipe(filter((change) => {
            return mediaQuery ? (change.mediaQuery === mediaQuery) : true;
        }));
    }
    /**
     * Based on the BreakPointRegistry provider, register internal listeners for each unique
     * mediaQuery. Each listener emits specific MediaChange data to observers
     * @param {?} mediaQuery
     * @return {?}
     */
    registerQuery(mediaQuery) {
        let /** @type {?} */ list = normalizeQuery(mediaQuery);
        if (list.length > 0) {
            this._prepareQueryCSS(list, this._document);
            list.forEach(query => {
                let /** @type {?} */ mql = this._registry.get(query);
                let /** @type {?} */ onMQLEvent = (e) => {
                    this._zone.run(() => {
                        let /** @type {?} */ change = new MediaChange(e.matches, query);
                        this._source.next(change);
                    });
                };
                if (!mql) {
                    mql = this._buildMQL(query);
                    mql.addListener(onMQLEvent);
                    this._registry.set(query, mql);
                }
                if (mql.matches) {
                    onMQLEvent(mql); // Announce activate range for initial subscribers
                }
            });
        }
    }
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    _buildMQL(query) {
        let /** @type {?} */ canListen = isPlatformBrowser(this._platformId) &&
            !!(/** @type {?} */ (window)).matchMedia('all').addListener;
        return canListen ? (/** @type {?} */ (window)).matchMedia(query) : /** @type {?} */ ({
            matches: query === 'all' || query === '',
            media: query,
            addListener: () => {
            },
            removeListener: () => {
            }
        });
    }
    /**
     * For Webkit engines that only trigger the MediaQueryList Listener
     * when there is at least one CSS selector for the respective media query.
     *
     * @param {?} mediaQueries
     * @param {?} _document
     * @return {?}
     */
    _prepareQueryCSS(mediaQueries, _document) {
        let /** @type {?} */ list = mediaQueries.filter(it => !ALL_STYLES[it]);
        if (list.length > 0) {
            let /** @type {?} */ query = list.join(', ');
            try {
                let /** @type {?} */ styleEl = _document.createElement('style');
                styleEl.setAttribute('type', 'text/css');
                if (!styleEl['styleSheet']) {
                    let /** @type {?} */ cssText = `
/*
  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners
  see http://bit.ly/2sd4HMP
*/
@media ${query} {.fx-query-test{ }}
`;
                    styleEl.appendChild(_document.createTextNode(cssText));
                }
                _document.head.appendChild(styleEl);
                // Store in private global registry
                list.forEach(mq => ALL_STYLES[mq] = styleEl);
            }
            catch (/** @type {?} */ e) {
                console.error(e);
            }
        }
    }
}
MatchMedia.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MatchMedia.ctorParameters = () => [
    { type: NgZone, },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
];
/**
 * Private global registry for all dynamically-created, injected style tags
 * @see prepare(query)
 */
const /** @type {?} */ ALL_STYLES = {};
/**
 * Always convert to unique list of queries; for iteration in ::registerQuery()
 * @param {?} mediaQuery
 * @return {?}
 */
function normalizeQuery(mediaQuery) {
    return (typeof mediaQuery === 'undefined') ? [] :
        (typeof mediaQuery === 'string') ? [mediaQuery] : unique(/** @type {?} */ (mediaQuery));
}
/**
 * Filter duplicate mediaQueries in the list
 * @param {?} list
 * @return {?}
 */
function unique(list) {
    let /** @type {?} */ seen = {};
    return list.filter(item => {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param {?} dest The object which will have properties copied to it.
 * @param {...?} sources The source objects from which properties will be copied.
 * @return {?}
 */
function extendObject(dest, ...sources) {
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (let /** @type {?} */ source of sources) {
        if (source != null) {
            for (let /** @type {?} */ key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * For the specified MediaChange, make sure it contains the breakpoint alias
 * and suffix (if available).
 * @param {?} dest
 * @param {?} source
 * @return {?}
 */
function mergeAlias(dest, source) {
    return extendObject(dest, source ? {
        mqAlias: source.alias,
        suffix: source.suffix
    } : {});
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * MediaMonitor uses the MatchMedia service to observe mediaQuery changes (both activations and
 * deactivations). These changes are are published as MediaChange notifications.
 *
 * Note: all notifications will be performed within the
 * ng Zone to trigger change detections and component updates.
 *
 * It is the MediaMonitor that:
 *  - auto registers all known breakpoints
 *  - injects alias information into each raw MediaChange event
 *  - provides accessor to the currently active BreakPoint
 *  - publish list of overlapping BreakPoint(s); used by ResponsiveActivation
 */
class MediaMonitor {
    /**
     * @param {?} _breakpoints
     * @param {?} _matchMedia
     */
    constructor(_breakpoints, _matchMedia) {
        this._breakpoints = _breakpoints;
        this._matchMedia = _matchMedia;
        this._registerBreakpoints();
    }
    /**
     * Read-only accessor to the list of breakpoints configured in the BreakPointRegistry provider
     * @return {?}
     */
    get breakpoints() {
        return [...this._breakpoints.items];
    }
    /**
     * @return {?}
     */
    get activeOverlaps() {
        let /** @type {?} */ items = this._breakpoints.overlappings.reverse();
        return items.filter((bp) => {
            return this._matchMedia.isActive(bp.mediaQuery);
        });
    }
    /**
     * @return {?}
     */
    get active() {
        let /** @type {?} */ found = null, /** @type {?} */ items = this.breakpoints.reverse();
        items.forEach(bp => {
            if (bp.alias !== '') {
                if (!found && this._matchMedia.isActive(bp.mediaQuery)) {
                    found = bp;
                }
            }
        });
        let /** @type {?} */ first = this.breakpoints[0];
        return found || (this._matchMedia.isActive(first.mediaQuery) ? first : null);
    }
    /**
     * For the specified mediaQuery alias, is the mediaQuery range active?
     * @param {?} alias
     * @return {?}
     */
    isActive(alias) {
        let /** @type {?} */ bp = this._breakpoints.findByAlias(alias) || this._breakpoints.findByQuery(alias);
        return this._matchMedia.isActive(bp ? bp.mediaQuery : alias);
    }
    /**
     * External observers can watch for all (or a specific) mql changes.
     * If specific breakpoint is observed, only return *activated* events
     * otherwise return all events for BOTH activated + deactivated changes.
     * @param {?=} alias
     * @return {?}
     */
    observe(alias) {
        let /** @type {?} */ bp = this._breakpoints.findByAlias(alias || '') ||
            this._breakpoints.findByQuery(alias || '');
        let /** @type {?} */ hasAlias = (change) => (bp ? change.mqAlias !== '' : true);
        // Note: the raw MediaChange events [from MatchMedia] do not contain important alias information
        let /** @type {?} */ media$ = this._matchMedia.observe(bp ? bp.mediaQuery : alias);
        return media$.pipe(map(change => mergeAlias(change, bp)), filter(hasAlias));
    }
    /**
     * Immediate calls to matchMedia() to establish listeners
     * and prepare for immediate subscription notifications
     * @return {?}
     */
    _registerBreakpoints() {
        let /** @type {?} */ queries = this._breakpoints.sortedItems.map(bp => bp.mediaQuery);
        this._matchMedia.registerQuery(queries);
    }
}
MediaMonitor.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MediaMonitor.ctorParameters = () => [
    { type: BreakPointRegistry, },
    { type: MatchMedia, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Ensure a single global service provider
 * @param {?} parentRegistry
 * @param {?} breakpoints
 * @return {?}
 */
function BREAKPOINT_REGISTRY_PROVIDER_FACTORY(parentRegistry, breakpoints) {
    return parentRegistry || new BreakPointRegistry(breakpoints);
}
/**
 * Export provider that uses a global service factory (above)
 */
const /** @type {?} */ BREAKPOINT_REGISTRY_PROVIDER = {
    provide: BreakPointRegistry,
    deps: [
        [new Optional(), new SkipSelf(), BreakPointRegistry],
        /** @type {?} */ (BREAKPOINTS),
    ],
    useFactory: BREAKPOINT_REGISTRY_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Base class for MediaService and pseudo-token for
 * @abstract
 */
class ObservableMedia {
}
/**
 * Class internalizes a MatchMedia service and exposes an Subscribable and Observable interface.
 * This an Observable with that exposes a feature to subscribe to mediaQuery
 * changes and a validator method (`isActive(<alias>)`) to test if a mediaQuery (or alias) is
 * currently active.
 *
 * !! Only mediaChange activations (not de-activations) are announced by the ObservableMedia
 *
 * This class uses the BreakPoint Registry to inject alias information into the raw MediaChange
 * notification. For custom mediaQuery notifications, alias information will not be injected and
 * those fields will be ''.
 *
 * !! This is not an actual Observable. It is a wrapper of an Observable used to publish additional
 * methods like `isActive(<alias>). To access the Observable and use RxJS operators, use
 * `.asObservable()` with syntax like media.asObservable().map(....).
 *
 *  \@usage
 *
 *  // RxJS
 *  import {filter} from 'rxjs/operators/filter';
 *  import { ObservableMedia } from '\@angular/flex-layout';
 *
 *  \@Component({ ... })
 *  export class AppComponent {
 *    status : string = '';
 *
 *    constructor(  media:ObservableMedia ) {
 *      let onChange = (change:MediaChange) => {
 *        this.status = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
 *      };
 *
 *      // Subscribe directly or access observable to use filter/map operators
 *      // e.g.
 *      //      media.subscribe(onChange);
 *
 *      media.asObservable()
 *        .pipe(
 *          filter((change:MediaChange) => true)   // silly noop filter
 *        ).subscribe(onChange);
 *    }
 *  }
 */
class MediaService {
    /**
     * @param {?} breakpoints
     * @param {?} mediaWatcher
     */
    constructor(breakpoints, mediaWatcher) {
        this.breakpoints = breakpoints;
        this.mediaWatcher = mediaWatcher;
        /**
         * Should we announce gt-<xxx> breakpoint activations ?
         */
        this.filterOverlaps = true;
        this._registerBreakPoints();
        this.observable$ = this._buildObservable();
    }
    /**
     * Test if specified query/alias is active.
     * @param {?} alias
     * @return {?}
     */
    isActive(alias) {
        let /** @type {?} */ query = this._toMediaQuery(alias);
        return this.mediaWatcher.isActive(query);
    }
    /**
     * Proxy to the Observable subscribe method
     * @param {?=} next
     * @param {?=} error
     * @param {?=} complete
     * @return {?}
     */
    subscribe(next, error, complete) {
        return this.observable$.subscribe(next, error, complete);
    }
    /**
     * Access to observable for use with operators like
     * .filter(), .map(), etc.
     * @return {?}
     */
    asObservable() {
        return this.observable$;
    }
    /**
     * Register all the mediaQueries registered in the BreakPointRegistry
     * This is needed so subscribers can be auto-notified of all standard, registered
     * mediaQuery activations
     * @return {?}
     */
    _registerBreakPoints() {
        let /** @type {?} */ queries = this.breakpoints.sortedItems.map(bp => bp.mediaQuery);
        this.mediaWatcher.registerQuery(queries);
    }
    /**
     * Prepare internal observable
     *
     * NOTE: the raw MediaChange events [from MatchMedia] do not
     *       contain important alias information; as such this info
     *       must be injected into the MediaChange
     * @return {?}
     */
    _buildObservable() {
        const /** @type {?} */ self = this;
        const /** @type {?} */ media$ = this.mediaWatcher.observe();
        const /** @type {?} */ activationsOnly = (change) => {
            return change.matches === true;
        };
        const /** @type {?} */ addAliasInformation = (change) => {
            return mergeAlias(change, this._findByQuery(change.mediaQuery));
        };
        const /** @type {?} */ excludeOverlaps = (change) => {
            let /** @type {?} */ bp = this.breakpoints.findByQuery(change.mediaQuery);
            return !bp ? true : !(self.filterOverlaps && bp.overlapping);
        };
        /**
             * Only pass/announce activations (not de-activations)
             * Inject associated (if any) alias information into the MediaChange event
             * Exclude mediaQuery activations for overlapping mQs. List bounded mQ ranges only
             */
        return media$.pipe(filter(activationsOnly), filter(excludeOverlaps), map(addAliasInformation));
    }
    /**
     * Breakpoint locator by alias
     * @param {?} alias
     * @return {?}
     */
    _findByAlias(alias) {
        return this.breakpoints.findByAlias(alias);
    }
    /**
     * Breakpoint locator by mediaQuery
     * @param {?} query
     * @return {?}
     */
    _findByQuery(query) {
        return this.breakpoints.findByQuery(query);
    }
    /**
     * Find associated breakpoint (if any)
     * @param {?} query
     * @return {?}
     */
    _toMediaQuery(query) {
        let /** @type {?} */ bp = this._findByAlias(query) || this._findByQuery(query);
        return bp ? bp.mediaQuery : query;
    }
}
MediaService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MediaService.ctorParameters = () => [
    { type: BreakPointRegistry, },
    { type: MatchMedia, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Ensure a single global ObservableMedia service provider
 * @param {?} parentService
 * @param {?} matchMedia
 * @param {?} breakpoints
 * @return {?}
 */
function OBSERVABLE_MEDIA_PROVIDER_FACTORY(parentService, matchMedia, breakpoints) {
    return parentService || new MediaService(breakpoints, matchMedia);
}
/**
 *  Provider to return global service for observable service for all MediaQuery activations
 */
const /** @type {?} */ OBSERVABLE_MEDIA_PROVIDER = {
    // tslint:disable-line:variable-name
    provide: ObservableMedia,
    deps: [
        [new Optional(), new SkipSelf(), ObservableMedia],
        MatchMedia,
        BreakPointRegistry
    ],
    useFactory: OBSERVABLE_MEDIA_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ RESPONSIVE_ALIASES = [
    'xs', 'gt-xs', 'sm', 'gt-sm', 'md', 'gt-md', 'lg', 'gt-lg', 'xl'
];
const /** @type {?} */ DEFAULT_BREAKPOINTS = [
    {
        alias: 'xs',
        mediaQuery: '(min-width: 0px) and (max-width: 599px)'
    },
    {
        alias: 'gt-xs',
        overlapping: true,
        mediaQuery: '(min-width: 600px)'
    },
    {
        alias: 'lt-sm',
        overlapping: true,
        mediaQuery: '(max-width: 599px)'
    },
    {
        alias: 'sm',
        mediaQuery: '(min-width: 600px) and (max-width: 959px)'
    },
    {
        alias: 'gt-sm',
        overlapping: true,
        mediaQuery: '(min-width: 960px)'
    },
    {
        alias: 'lt-md',
        overlapping: true,
        mediaQuery: '(max-width: 959px)'
    },
    {
        alias: 'md',
        mediaQuery: '(min-width: 960px) and (max-width: 1279px)'
    },
    {
        alias: 'gt-md',
        overlapping: true,
        mediaQuery: '(min-width: 1280px)'
    },
    {
        alias: 'lt-lg',
        overlapping: true,
        mediaQuery: '(max-width: 1279px)'
    },
    {
        alias: 'lg',
        mediaQuery: '(min-width: 1280px) and (max-width: 1919px)'
    },
    {
        alias: 'gt-lg',
        overlapping: true,
        mediaQuery: '(min-width: 1920px)'
    },
    {
        alias: 'lt-xl',
        overlapping: true,
        mediaQuery: '(max-width: 1920px)'
    },
    {
        alias: 'xl',
        mediaQuery: '(min-width: 1920px) and (max-width: 5000px)'
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/* tslint:disable */
const /** @type {?} */ HANDSET_PORTRAIT = '(orientations: portrait) and (max-width: 599px)';
const /** @type {?} */ HANDSET_LANDSCAPE = '(orientations: landscape) and (max-width: 959px)';
const /** @type {?} */ TABLET_LANDSCAPE = '(orientations: landscape) and (min-width: 960px) and (max-width: 1279px)';
const /** @type {?} */ TABLET_PORTRAIT = '(orientations: portrait) and (min-width: 600px) and (max-width: 839px)';
const /** @type {?} */ WEB_PORTRAIT = '(orientations: portrait) and (min-width: 840px)';
const /** @type {?} */ WEB_LANDSCAPE = '(orientations: landscape) and (min-width: 1280px)';
const /** @type {?} */ ScreenTypes = {
    'HANDSET': `${HANDSET_PORTRAIT}, ${HANDSET_LANDSCAPE}`,
    'TABLET': `${TABLET_PORTRAIT} , ${TABLET_LANDSCAPE}`,
    'WEB': `${WEB_PORTRAIT}, ${WEB_LANDSCAPE} `,
    'HANDSET_PORTRAIT': `${HANDSET_PORTRAIT}`,
    'TABLET_PORTRAIT': `${TABLET_PORTRAIT} `,
    'WEB_PORTRAIT': `${WEB_PORTRAIT}`,
    'HANDSET_LANDSCAPE': `${HANDSET_LANDSCAPE}]`,
    'TABLET_LANDSCAPE': `${TABLET_LANDSCAPE}`,
    'WEB_LANDSCAPE': `${WEB_LANDSCAPE}`
};
/**
 * Extended Breakpoints for handset/tablets with landscape or portrait orientations
 */
const /** @type {?} */ ORIENTATION_BREAKPOINTS = [
    { 'alias': 'handset', 'mediaQuery': ScreenTypes.HANDSET },
    { 'alias': 'handset.landscape', 'mediaQuery': ScreenTypes.HANDSET_LANDSCAPE },
    { 'alias': 'handset.portrait', 'mediaQuery': ScreenTypes.HANDSET_PORTRAIT },
    { 'alias': 'tablet', 'mediaQuery': ScreenTypes.TABLET },
    { 'alias': 'tablet.landscape', 'mediaQuery': ScreenTypes.TABLET },
    { 'alias': 'tablet.portrait', 'mediaQuery': ScreenTypes.TABLET_PORTRAIT },
    { 'alias': 'web', 'mediaQuery': ScreenTypes.WEB, overlapping: true },
    { 'alias': 'web.landscape', 'mediaQuery': ScreenTypes.WEB_LANDSCAPE, overlapping: true },
    { 'alias': 'web.portrait', 'mediaQuery': ScreenTypes.WEB_PORTRAIT, overlapping: true }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ ALIAS_DELIMITERS = /(\.|-|_)/g;
/**
 * @param {?} part
 * @return {?}
 */
function firstUpperCase(part) {
    let /** @type {?} */ first = part.length > 0 ? part.charAt(0) : '';
    let /** @type {?} */ remainder = (part.length > 1) ? part.slice(1) : '';
    return first.toUpperCase() + remainder;
}
/**
 * Converts snake-case to SnakeCase.
 * @param {?} name Text to UpperCamelCase
 * @return {?}
 */
function camelCase(name) {
    return name
        .replace(ALIAS_DELIMITERS, '|')
        .split('|')
        .map(firstUpperCase)
        .join('');
}
/**
 * For each breakpoint, ensure that a Suffix is defined;
 * fallback to UpperCamelCase the unique Alias value
 * @param {?} list
 * @return {?}
 */
function validateSuffixes(list) {
    list.forEach((bp) => {
        if (!bp.suffix) {
            bp.suffix = camelCase(bp.alias); // create Suffix value based on alias
            bp.overlapping = !!bp.overlapping; // ensure default value
        }
    });
    return list;
}
/**
 * Merge a custom breakpoint list with the default list based on unique alias values
 *  - Items are added if the alias is not in the default list
 *  - Items are merged with the custom override if the alias exists in the default list
 * @param {?} defaults
 * @param {?=} custom
 * @return {?}
 */
function mergeByAlias(defaults, custom = []) {
    const /** @type {?} */ dict = {};
    defaults.forEach(bp => {
        dict[bp.alias] = bp;
    });
    // Merge custom breakpoints
    custom.forEach((bp) => {
        if (dict[bp.alias]) {
            extendObject(dict[bp.alias], bp);
        }
        else {
            dict[bp.alias] = bp;
        }
    });
    return validateSuffixes(Object.keys(dict).map(k => dict[k]));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ DISABLE_DEFAULT_BREAKPOINTS = new InjectionToken('Flex Layout token, disable the default breakpoints');
const /** @type {?} */ ADD_ORIENTATION_BREAKPOINTS = new InjectionToken('Flex Layout token, add the orientation breakpoints');
const /** @type {?} */ BREAKPOINT = new InjectionToken('Flex Layout token, collect all breakpoints into one provider');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Add new custom items to the default list or override existing default with custom overrides
 * @deprecated
 * \@deletion-target v6.0.0-beta.15
 * @param {?=} _custom
 * @param {?=} options
 * @return {?}
 */
function buildMergedBreakPoints(_custom, options) {
    options = extendObject({}, {
        defaults: true,
        // exclude pre-configured, internal default breakpoints
        orientation: false // exclude pre-configured, internal orientations breakpoints
    }, options || {});
    return () => {
        // Order so the defaults are loaded last; so ObservableMedia will report these last!
        let /** @type {?} */ defaults = (options && options.orientations) ?
            ORIENTATION_BREAKPOINTS.concat(DEFAULT_BREAKPOINTS) : DEFAULT_BREAKPOINTS;
        return (options && options.defaults) ?
            mergeByAlias(defaults, _custom || []) : mergeByAlias(_custom || []);
    };
}
/**
 *  Ensure that only a single global BreakPoint list is instantiated...
 *  \@deprecated
 *  \@deletion-target v6.0.0-beta.15
 * @return {?}
 */
function DEFAULT_BREAKPOINTS_PROVIDER_FACTORY() {
    return validateSuffixes(DEFAULT_BREAKPOINTS);
}
/**
 * Default Provider that does not support external customization nor provide
 * the extra extended breakpoints:   "handset", "tablet", and "web"
 *
 *  NOTE: !! breakpoints are considered to have unique 'alias' properties,
 *        custom breakpoints matching existing breakpoints will override the properties
 *        of the existing (and not be added as an extra breakpoint entry).
 *        [xs, gt-xs, sm, gt-sm, md, gt-md, lg, gt-lg, xl]
 * @deprecated
 * \@deletion-target v6.0.0-beta.15
 */
const /** @type {?} */ DEFAULT_BREAKPOINTS_PROVIDER = {
    provide: BREAKPOINTS,
    useFactory: DEFAULT_BREAKPOINTS_PROVIDER_FACTORY
};
/**
 * Factory that combines the configured breakpoints into one array and then merges
 * them using a utility function
 * @param {?} parentBreakpoints
 * @param {?} breakpoints
 * @param {?} disableDefaults
 * @param {?} addOrientation
 * @return {?}
 */
function BREAKPOINTS_PROVIDER_FACTORY(parentBreakpoints, breakpoints, disableDefaults, addOrientation) {
    const /** @type {?} */ bpFlattenArray = [].concat.apply([], (breakpoints || [])
        .map(v => Array.isArray(v) ? v : [v]));
    const /** @type {?} */ builtIns = DEFAULT_BREAKPOINTS.concat(addOrientation ? ORIENTATION_BREAKPOINTS : []);
    return parentBreakpoints || disableDefaults ?
        mergeByAlias(bpFlattenArray) : mergeByAlias(builtIns, bpFlattenArray);
}
/**
 * Provider that combines the provided extra breakpoints with the default and
 * orientation breakpoints based on configuration
 */
const /** @type {?} */ BREAKPOINTS_PROVIDER = {
    provide: BREAKPOINTS,
    useFactory: BREAKPOINTS_PROVIDER_FACTORY,
    deps: [
        [new Optional(), new SkipSelf(), BREAKPOINTS],
        [new Optional(), BREAKPOINT],
        [new Optional(), DISABLE_DEFAULT_BREAKPOINTS],
        [new Optional(), ADD_ORIENTATION_BREAKPOINTS],
    ]
};
/**
 * Use with FlexLayoutModule.CUSTOM_BREAKPOINTS_PROVIDER_FACTORY!
 * @deprecated
 * \@deletion-target v6.0.0-beta.15
 * @param {?=} custom
 * @param {?=} options
 * @return {?}
 */
function CUSTOM_BREAKPOINTS_PROVIDER_FACTORY(custom, options) {
    return {
        provide: /** @type {?} */ (BREAKPOINTS),
        useFactory: buildMergedBreakPoints(custom, options)
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Ensure a single global service provider
 * @param {?} parentMedia
 * @param {?} ngZone
 * @param {?} platformId
 * @param {?} _document
 * @return {?}
 */
function MATCH_MEDIA_PROVIDER_FACTORY(parentMedia, ngZone, platformId, _document) {
    return parentMedia || new MatchMedia(ngZone, platformId, _document);
}
/**
 * Export provider that uses a global service factory (above)
 */
const /** @type {?} */ MATCH_MEDIA_PROVIDER = {
    provide: MatchMedia,
    deps: [
        [new Optional(), new SkipSelf(), MatchMedia],
        NgZone,
        /** @type {?} */ (PLATFORM_ID),
        /** @type {?} */ (DOCUMENT),
    ],
    useFactory: MATCH_MEDIA_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Applies CSS prefixes to appropriate style keys.
 *
 * Note: `-ms-`, `-moz` and `-webkit-box` are no longer supported. e.g.
 *    {
 *      display: -webkit-flex;     NEW - Safari 6.1+. iOS 7.1+, BB10
 *      display: flex;             NEW, Spec - Firefox, Chrome, Opera
 *      // display: -webkit-box;   OLD - iOS 6-, Safari 3.1-6, BB7
 *      // display: -ms-flexbox;   TWEENER - IE 10
 *      // display: -moz-flexbox;  OLD - Firefox
 *    }
 * @param {?} target
 * @return {?}
 */
function applyCssPrefixes(target) {
    for (let /** @type {?} */ key in target) {
        let /** @type {?} */ value = target[key] || '';
        switch (key) {
            case 'display':
                if (value === 'flex') {
                    target['display'] = [
                        '-webkit-flex',
                        'flex'
                    ];
                }
                else if (value === 'inline-flex') {
                    target['display'] = [
                        '-webkit-inline-flex',
                        'inline-flex'
                    ];
                }
                else {
                    target['display'] = value;
                }
                break;
            case 'align-items':
            case 'align-self':
            case 'align-content':
            case 'flex':
            case 'flex-basis':
            case 'flex-flow':
            case 'flex-grow':
            case 'flex-shrink':
            case 'flex-wrap':
            case 'justify-content':
                target['-webkit-' + key] = value;
                break;
            case 'flex-direction':
                value = value || 'row';
                target['-webkit-flex-direction'] = value;
                target['flex-direction'] = value;
                break;
            case 'order':
                target['order'] = target['-webkit-' + key] = isNaN(value) ? '0' : value;
                break;
        }
    }
    return target;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Utility to emulate a CSS stylesheet
 *
 * This utility class stores all of the styles for a given HTML element
 * as a readonly `stylesheet` map.
 */
class StylesheetMap {
    constructor() {
        this.stylesheet = new Map();
    }
    /**
     * Add an individual style to an HTML element
     * @param {?} element
     * @param {?} style
     * @param {?} value
     * @return {?}
     */
    addStyleToElement(element, style, value) {
        const /** @type {?} */ stylesheet = this.stylesheet.get(element);
        if (stylesheet) {
            stylesheet.set(style, value);
        }
        else {
            this.stylesheet.set(element, new Map([[style, value]]));
        }
    }
    /**
     * Clear the virtual stylesheet
     * @return {?}
     */
    clearStyles() {
        this.stylesheet.clear();
    }
    /**
     * Retrieve a given style for an HTML element
     * @param {?} el
     * @param {?} styleName
     * @return {?}
     */
    getStyleForElement(el, styleName) {
        const /** @type {?} */ styles = this.stylesheet.get(el);
        let /** @type {?} */ value = '';
        if (styles) {
            const /** @type {?} */ style = styles.get(styleName);
            if (typeof style === 'number' || typeof style === 'string') {
                value = style + '';
            }
        }
        return value;
    }
}
StylesheetMap.decorators = [
    { type: Injectable },
];
/** @nocollapse */
StylesheetMap.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Token that is provided to tell whether the FlexLayoutServerModule
 * has been included in the bundle
 *
 * NOTE: This can be manually provided to disable styles when using SSR
 */
const /** @type {?} */ SERVER_TOKEN = new InjectionToken('FlexLayoutServerLoaded');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ DISABLE_VENDOR_PREFIXES = new InjectionToken('Flex Layout token, whether to add vendor prefix styles inline for elements');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class StyleUtils {
    /**
     * @param {?} _serverStylesheet
     * @param {?} _serverModuleLoaded
     * @param {?} _platformId
     * @param {?} noVendorPrefixes
     */
    constructor(_serverStylesheet, _serverModuleLoaded, _platformId, noVendorPrefixes) {
        this._serverStylesheet = _serverStylesheet;
        this._serverModuleLoaded = _serverModuleLoaded;
        this._platformId = _platformId;
        this.noVendorPrefixes = noVendorPrefixes;
    }
    /**
     * Applies styles given via string pair or object map to the directive element
     * @param {?} element
     * @param {?} style
     * @param {?=} value
     * @return {?}
     */
    applyStyleToElement(element, style, value) {
        let /** @type {?} */ styles = {};
        if (typeof style === 'string') {
            styles[style] = value;
            style = styles;
        }
        styles = this.noVendorPrefixes ? style : applyCssPrefixes(style);
        this._applyMultiValueStyleToElement(styles, element);
    }
    /**
     * Applies styles given via string pair or object map to the directive's element
     * @param {?} style
     * @param {?=} elements
     * @return {?}
     */
    applyStyleToElements(style, elements = []) {
        const /** @type {?} */ styles = this.noVendorPrefixes ? style : applyCssPrefixes(style);
        elements.forEach(el => {
            this._applyMultiValueStyleToElement(styles, el);
        });
    }
    /**
     * Determine the DOM element's Flexbox flow (flex-direction)
     *
     * Check inline style first then check computed (stylesheet) style
     * @param {?} target
     * @return {?}
     */
    getFlowDirection(target) {
        const /** @type {?} */ query = 'flex-direction';
        let /** @type {?} */ value = this.lookupStyle(target, query);
        if (value === FALLBACK_STYLE) {
            value = '';
        }
        const /** @type {?} */ hasInlineValue = this.lookupInlineStyle(target, query) ||
            (isPlatformServer(this._platformId) && this._serverModuleLoaded) ? value : '';
        return [value || 'row', hasInlineValue];
    }
    /**
     * Find the DOM element's raw attribute value (if any)
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    lookupAttributeValue(element, attribute) {
        return element.getAttribute(attribute) || '';
    }
    /**
     * Find the DOM element's inline style value (if any)
     * @param {?} element
     * @param {?} styleName
     * @return {?}
     */
    lookupInlineStyle(element, styleName) {
        return element.style[styleName] || element.style.getPropertyValue(styleName) || '';
    }
    /**
     * Determine the inline or inherited CSS style
     * NOTE: platform-server has no implementation for getComputedStyle
     * @param {?} element
     * @param {?} styleName
     * @param {?=} inlineOnly
     * @return {?}
     */
    lookupStyle(element, styleName, inlineOnly = false) {
        let /** @type {?} */ value = '';
        if (element) {
            let /** @type {?} */ immediateValue = value = this.lookupInlineStyle(element, styleName);
            if (!immediateValue) {
                if (isPlatformBrowser(this._platformId)) {
                    if (!inlineOnly) {
                        value = getComputedStyle(element).getPropertyValue(styleName);
                    }
                }
                else {
                    if (this._serverModuleLoaded) {
                        value = this._serverStylesheet.getStyleForElement(element, styleName);
                    }
                }
            }
        }
        // Note: 'inline' is the default of all elements, unless UA stylesheet overrides;
        //       in which case getComputedStyle() should determine a valid value.
        return value ? value.trim() : FALLBACK_STYLE;
    }
    /**
     * Applies the styles to the element. The styles object map may contain an array of values
     * Each value will be added as element style
     * Keys are sorted to add prefixed styles (like -webkit-x) first, before the standard ones
     * @param {?} styles
     * @param {?} element
     * @return {?}
     */
    _applyMultiValueStyleToElement(styles, element) {
        Object.keys(styles).sort().forEach(key => {
            const /** @type {?} */ values = Array.isArray(styles[key]) ? styles[key] : [styles[key]];
            values.sort();
            for (let /** @type {?} */ value of values) {
                if (isPlatformBrowser(this._platformId) || !this._serverModuleLoaded) {
                    element.style.setProperty(key, value);
                }
                else {
                    this._serverStylesheet.addStyleToElement(element, key, value);
                }
            }
        });
    }
}
StyleUtils.decorators = [
    { type: Injectable },
];
/** @nocollapse */
StyleUtils.ctorParameters = () => [
    { type: StylesheetMap, decorators: [{ type: Optional },] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [SERVER_TOKEN,] },] },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DISABLE_VENDOR_PREFIXES,] },] },
];
const /** @type {?} */ FALLBACK_STYLE = 'block';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Ensure a single global service provider
 * @param {?} parentSheet
 * @return {?}
 */
function STYLESHEET_MAP_PROVIDER_FACTORY(parentSheet) {
    return parentSheet || new StylesheetMap();
}
/**
 * Export provider that uses a global service factory (above)
 */
const /** @type {?} */ STYLESHEET_MAP_PROVIDER = {
    provide: StylesheetMap,
    deps: [
        [new Optional(), new SkipSelf(), StylesheetMap],
    ],
    useFactory: STYLESHEET_MAP_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * *****************************************************************
 * Define module for the MediaQuery API
 * *****************************************************************
 */
class CoreModule {
}
CoreModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    BREAKPOINTS_PROVIDER,
                    BREAKPOINT_REGISTRY_PROVIDER,
                    MATCH_MEDIA_PROVIDER,
                    MediaMonitor,
                    OBSERVABLE_MEDIA_PROVIDER,
                    STYLESHEET_MAP_PROVIDER,
                    StyleUtils,
                    BROWSER_PROVIDER,
                ]
            },] },
];
/** @nocollapse */
CoreModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @deprecated use Core Module instead
 * \@deletion-target 5.0.0-beta.15
 * *****************************************************************
 * Define module for the MediaQuery API
 * *****************************************************************
 */
class MediaQueriesModule {
}
MediaQueriesModule.decorators = [
    { type: NgModule, args: [{
                imports: [CoreModule],
                exports: [CoreModule],
            },] },
];
/** @nocollapse */
MediaQueriesModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ ADD_FLEX_STYLES = new InjectionToken('Flex Layout token, should flex stylings be applied to parents automatically');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

const /** @type {?} */ INLINE = 'inline';
const /** @type {?} */ LAYOUT_VALUES = ['row', 'column', 'row-reverse', 'column-reverse'];
/**
 * Validate the direction|'direction wrap' value and then update the host's inline flexbox styles
 * @param {?} value
 * @return {?}
 */
function buildLayoutCSS(value) {
    let [direction, wrap, isInline] = validateValue(value);
    return buildCSS(direction, wrap, isInline);
}
/**
 * Validate the value to be one of the acceptable value options
 * Use default fallback of 'row'
 * @param {?} value
 * @return {?}
 */
function validateValue(value) {
    value = value ? value.toLowerCase() : '';
    let [direction, wrap, inline] = value.split(' ');
    // First value must be the `flex-direction`
    if (!LAYOUT_VALUES.find(x => x === direction)) {
        direction = LAYOUT_VALUES[0];
    }
    if (wrap === INLINE) {
        wrap = (inline !== INLINE) ? inline : '';
        inline = INLINE;
    }
    return [direction, validateWrapValue(wrap), !!inline];
}
/**
 * Convert layout-wrap='<value>' to expected flex-wrap style
 * @param {?} value
 * @return {?}
 */
function validateWrapValue(value) {
    if (!!value) {
        switch (value.toLowerCase()) {
            case 'reverse':
            case 'wrap-reverse':
            case 'reverse-wrap':
                value = 'wrap-reverse';
                break;
            case 'no':
            case 'none':
            case 'nowrap':
                value = 'nowrap';
                break;
            // All other values fallback to 'wrap'
            default:
                value = 'wrap';
                break;
        }
    }
    return value;
}
/**
 * Build the CSS that should be assigned to the element instance
 * BUG:
 *   1) min-height on a column flex container won’t apply to its flex item children in IE 10-11.
 *      Use height instead if possible; height : <xxx>vh;
 *
 *  This way any padding or border specified on the child elements are
 *  laid out and drawn inside that element's specified width and height.
 * @param {?} direction
 * @param {?=} wrap
 * @param {?=} inline
 * @return {?}
 */
function buildCSS(direction, wrap = null, inline = false) {
    return {
        'display': inline ? 'inline-flex' : 'flex',
        'box-sizing': 'border-box',
        'flex-direction': direction,
        'flex-wrap': !!wrap ? wrap : null
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class KeyOptions {
    /**
     * @param {?} baseKey
     * @param {?} defaultValue
     * @param {?} inputKeys
     */
    constructor(baseKey, defaultValue, inputKeys) {
        this.baseKey = baseKey;
        this.defaultValue = defaultValue;
        this.inputKeys = inputKeys;
    }
}
/**
 * ResponsiveActivation acts as a proxy between the MonitorMedia service (which emits mediaQuery
 * changes) and the fx API directives. The MQA proxies mediaQuery change events and notifies the
 * directive via the specified callback.
 *
 * - The MQA also determines which directive property should be used to determine the
 *   current change 'value'... BEFORE the original `onMediaQueryChanges()` method is called.
 * - The `ngOnDestroy()` method is also head-hooked to enable auto-unsubscribe from the
 *   MediaQueryServices.
 *
 * NOTE: these interceptions enables the logic in the fx API directives to remain terse and clean.
 */
class ResponsiveActivation {
    /**
     * Constructor
     * @param {?} _options
     * @param {?} _mediaMonitor
     * @param {?} _onMediaChanges
     */
    constructor(_options, _mediaMonitor, _onMediaChanges) {
        this._options = _options;
        this._mediaMonitor = _mediaMonitor;
        this._onMediaChanges = _onMediaChanges;
        this._subscribers = [];
        this._registryMap = this._buildRegistryMap();
        this._subscribers = this._configureChangeObservers();
    }
    /**
     * Get a readonly sorted list of the breakpoints corresponding to the directive properties
     * defined in the HTML markup: the sorting is done from largest to smallest. The order is
     * important when several media queries are 'registered' and from which, the browser uses the
     * first matching media query.
     * @return {?}
     */
    get registryFromLargest() {
        return [...this._registryMap].reverse();
    }
    /**
     * Accessor to the DI'ed directive property
     * Each directive instance has a reference to the MediaMonitor which is
     * used HERE to subscribe to mediaQuery change notifications.
     * @return {?}
     */
    get mediaMonitor() {
        return this._mediaMonitor;
    }
    /**
     * Determine which directive \@Input() property is currently active (for the viewport size):
     * The key must be defined (in use) or fallback to the 'closest' overlapping property key
     * that is defined; otherwise the default property key will be used.
     * e.g.
     *      if `<div fxHide fxHide.gt-sm="false">` is used but the current activated mediaQuery alias
     *      key is `.md` then `.gt-sm` should be used instead
     * @return {?}
     */
    get activatedInputKey() {
        return this._activatedInputKey || this._options.baseKey;
    }
    /**
     * Get the currently activated \@Input value or the fallback default \@Input value
     * @return {?}
     */
    get activatedInput() {
        let /** @type {?} */ key = this.activatedInputKey;
        return this.hasKeyValue(key) ? this._lookupKeyValue(key) : this._options.defaultValue;
    }
    /**
     * Fast validator for presence of attribute on the host element
     * @param {?} key
     * @return {?}
     */
    hasKeyValue(key) {
        let /** @type {?} */ value = this._options.inputKeys[key];
        return typeof value !== 'undefined';
    }
    /**
     * Remove interceptors, restore original functions, and forward the onDestroy() call
     * @return {?}
     */
    destroy() {
        this._subscribers.forEach((link) => {
            link.unsubscribe();
        });
        this._subscribers = [];
    }
    /**
     * For each *defined* API property, register a callback to `_onMonitorEvents( )`
     * Cache 1..n subscriptions for internal auto-unsubscribes when the the directive destructs
     * @return {?}
     */
    _configureChangeObservers() {
        let /** @type {?} */ subscriptions = [];
        this._registryMap.forEach((bp) => {
            if (this._keyInUse(bp.key)) {
                // Inject directive default property key name: to let onMediaChange() calls
                // know which property is being triggered...
                let /** @type {?} */ buildChanges = (change) => {
                    change = change.clone();
                    change.property = this._options.baseKey;
                    return change;
                };
                subscriptions.push(this.mediaMonitor
                    .observe(bp.alias)
                    .pipe(map(buildChanges))
                    .subscribe(change => {
                    this._onMonitorEvents(change);
                }));
            }
        });
        return subscriptions;
    }
    /**
     * Build mediaQuery key-hashmap; only for the directive properties that are actually defined/used
     * in the HTML markup
     * @return {?}
     */
    _buildRegistryMap() {
        return this.mediaMonitor.breakpoints
            .map(bp => {
            return /** @type {?} */ (extendObject({}, bp, {
                baseKey: this._options.baseKey,
                // e.g. layout, hide, self-align, flex-wrap
                key: this._options.baseKey + bp.suffix // e.g.  layoutGtSm, layoutMd, layoutGtLg
            }));
        })
            .filter(bp => this._keyInUse(bp.key));
    }
    /**
     * Synchronizes change notifications with the current mq-activated \@Input and calculates the
     * mq-activated input value or the default value
     * @param {?} change
     * @return {?}
     */
    _onMonitorEvents(change) {
        if (change.property == this._options.baseKey) {
            change.value = this._calculateActivatedValue(change);
            this._onMediaChanges(change);
        }
    }
    /**
     * Has the key been specified in the HTML markup and thus is intended
     * to participate in activation processes.
     * @param {?} key
     * @return {?}
     */
    _keyInUse(key) {
        return this._lookupKeyValue(key) !== undefined;
    }
    /**
     *  Map input key associated with mediaQuery activation to closest defined input key
     *  then return the values associated with the targeted input property
     *
     *  !! change events may arrive out-of-order (activate before deactivate)
     *     so make sure the deactivate is used ONLY when the keys match
     *     (since a different activate may be in use)
     * @param {?} current
     * @return {?}
     */
    _calculateActivatedValue(current) {
        const /** @type {?} */ currentKey = this._options.baseKey + current.suffix; // e.g. suffix == 'GtSm',
        let /** @type {?} */ newKey = this._activatedInputKey; // e.g. newKey == hideGtSm
        newKey = current.matches ? currentKey : ((newKey == currentKey) ? '' : newKey);
        this._activatedInputKey = this._validateInputKey(newKey);
        return this.activatedInput;
    }
    /**
     * For the specified input property key, validate it is defined (used in the markup)
     * If not see if a overlapping mediaQuery-related input key fallback has been defined
     *
     * NOTE: scans in the order defined by activeOverLaps (largest viewport ranges -> smallest ranges)
     * @param {?} inputKey
     * @return {?}
     */
    _validateInputKey(inputKey) {
        let /** @type {?} */ isMissingKey = (key) => !this._keyInUse(key);
        if (isMissingKey(inputKey)) {
            this.mediaMonitor.activeOverlaps.some(bp => {
                let /** @type {?} */ key = this._options.baseKey + bp.suffix;
                if (!isMissingKey(key)) {
                    inputKey = key;
                    return true; // exit .some()
                }
                return false;
            });
        }
        return inputKey;
    }
    /**
     * Get the value (if any) for the directive instances \@Input property (aka key)
     * @param {?} key
     * @return {?}
     */
    _lookupKeyValue(key) {
        return this._options.inputKeys[key];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Abstract base class for the Layout API styling directives.
 * @abstract
 */
class BaseFxDirective {
    /**
     * Constructor
     * @param {?} _mediaMonitor
     * @param {?} _elementRef
     * @param {?} _styler
     */
    constructor(_mediaMonitor, _elementRef, _styler) {
        this._mediaMonitor = _mediaMonitor;
        this._elementRef = _elementRef;
        this._styler = _styler;
        /**
         *  Dictionary of input keys with associated values
         */
        this._inputMap = {};
        /**
         * Has the `ngOnInit()` method fired
         *
         * Used to allow *ngFor tasks to finish and support queries like
         * getComputedStyle() during ngOnInit().
         */
        this._hasInitialized = false;
    }
    /**
     * @return {?}
     */
    get hasMediaQueryListener() {
        return !!this._mqActivation;
    }
    /**
     * Imperatively determine the current activated [input] value;
     * if called before ngOnInit() this will return `undefined`
     * @return {?}
     */
    get activatedValue() {
        return this._mqActivation ? this._mqActivation.activatedInput : undefined;
    }
    /**
     * Change the currently activated input value and force-update
     * the injected CSS (by-passing change detection).
     *
     * NOTE: Only the currently activated input value will be modified;
     *       other input values will NOT be affected.
     * @param {?} value
     * @return {?}
     */
    set activatedValue(value) {
        let /** @type {?} */ key = 'baseKey', /** @type {?} */ previousVal;
        if (this._mqActivation) {
            key = this._mqActivation.activatedInputKey;
            previousVal = this._inputMap[key];
            this._inputMap[key] = value;
        }
        let /** @type {?} */ change = new SimpleChange(previousVal, value, false);
        this.ngOnChanges(/** @type {?} */ ({ [key]: change }));
    }
    /**
     * Access to host element's parent DOM node
     * @return {?}
     */
    get parentElement() {
        return this._elementRef.nativeElement.parentNode;
    }
    /**
     * @return {?}
     */
    get nativeElement() {
        return this._elementRef.nativeElement;
    }
    /**
     * Access the current value (if any) of the \@Input property.
     * @param {?} key
     * @return {?}
     */
    _queryInput(key) {
        return this._inputMap[key];
    }
    /**
     * Use post-component-initialization event to perform extra
     * querying such as computed Display style
     * @return {?}
     */
    ngOnInit() {
        this._display = this._getDisplayStyle();
        this._hasInitialized = true;
    }
    /**
     * @param {?} change
     * @return {?}
     */
    ngOnChanges(change) {
        throw new Error(`BaseFxDirective::ngOnChanges should be overridden in subclass: ${change}`);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._mqActivation) {
            this._mqActivation.destroy();
        }
        delete this._mediaMonitor;
    }
    /**
     * Was the directive's default selector used ?
     * If not, use the fallback value!
     * @param {?} key
     * @param {?} fallbackVal
     * @return {?}
     */
    _getDefaultVal(key, fallbackVal) {
        let /** @type {?} */ val = this._queryInput(key);
        let /** @type {?} */ hasDefaultVal = (val !== undefined && val !== null);
        return (hasDefaultVal && val !== '') ? val : fallbackVal;
    }
    /**
     * Quick accessor to the current HTMLElement's `display` style
     * Note: this allows us to preserve the original style
     * and optional restore it when the mediaQueries deactivate
     * @param {?=} source
     * @return {?}
     */
    _getDisplayStyle(source = this.nativeElement) {
        const /** @type {?} */ query = 'display';
        return this._styler.lookupStyle(source, query);
    }
    /**
     * Quick accessor to raw attribute value on the target DOM element
     * @param {?} attribute
     * @param {?=} source
     * @return {?}
     */
    _getAttributeValue(attribute, source = this.nativeElement) {
        return this._styler.lookupAttributeValue(source, attribute);
    }
    /**
     * Determine the DOM element's Flexbox flow (flex-direction).
     *
     * Check inline style first then check computed (stylesheet) style.
     * And optionally add the flow value to element's inline style.
     * @param {?} target
     * @param {?=} addIfMissing
     * @return {?}
     */
    _getFlowDirection(target, addIfMissing = false) {
        let /** @type {?} */ value = 'row';
        let /** @type {?} */ hasInlineValue = '';
        if (target) {
            [value, hasInlineValue] = this._styler.getFlowDirection(target);
            if (!hasInlineValue && addIfMissing) {
                const /** @type {?} */ style = buildLayoutCSS(value);
                const /** @type {?} */ elements = [target];
                this._styler.applyStyleToElements(style, elements);
            }
        }
        return value.trim() || 'row';
    }
    /**
     * Applies styles given via string pair or object map to the directive element.
     * @param {?} style
     * @param {?=} value
     * @param {?=} element
     * @return {?}
     */
    _applyStyleToElement(style, value, element = this.nativeElement) {
        this._styler.applyStyleToElement(element, style, value);
    }
    /**
     * Applies styles given via string pair or object map to the directive's element.
     * @param {?} style
     * @param {?} elements
     * @return {?}
     */
    _applyStyleToElements(style, elements) {
        this._styler.applyStyleToElements(style, elements);
    }
    /**
     *  Save the property value; which may be a complex object.
     *  Complex objects support property chains
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    _cacheInput(key, source) {
        if (typeof source === 'object') {
            for (let /** @type {?} */ prop in source) {
                this._inputMap[prop] = source[prop];
            }
        }
        else {
            if (!!key) {
                this._inputMap[key] = source;
            }
        }
    }
    /**
     *  Build a ResponsiveActivation object used to manage subscriptions to mediaChange notifications
     *  and intelligent lookup of the directive's property value that corresponds to that mediaQuery
     *  (or closest match).
     * @param {?} key
     * @param {?} defaultValue
     * @param {?} onMediaQueryChange
     * @return {?}
     */
    _listenForMediaQueryChanges(key, defaultValue, onMediaQueryChange) {
        // tslint:disable-line:max-line-length
        if (!this._mqActivation) {
            let /** @type {?} */ keyOptions = new KeyOptions(key, defaultValue, this._inputMap);
            this._mqActivation = new ResponsiveActivation(keyOptions, this._mediaMonitor, (change) => onMediaQueryChange(change));
        }
        return this._mqActivation;
    }
    /**
     * Special accessor to query for all child 'element' nodes regardless of type, class, etc.
     * @return {?}
     */
    get childrenNodes() {
        const /** @type {?} */ obj = this.nativeElement.children;
        const /** @type {?} */ buffer = [];
        // iterate backwards ensuring that length is an UInt32
        for (let /** @type {?} */ i = obj.length; i--;) {
            buffer[i] = obj[i];
        }
        return buffer;
    }
    /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     * @param {?} baseKey
     * @return {?}
     */
    hasResponsiveAPI(baseKey) {
        const /** @type {?} */ totalKeys = Object.keys(this._inputMap).length;
        const /** @type {?} */ baseValue = this._inputMap[baseKey];
        return (totalKeys - (!!baseValue ? 1 : 0)) > 0;
    }
    /**
     * Fast validator for presence of attribute on the host element
     * @param {?} key
     * @return {?}
     */
    hasKeyValue(key) {
        return this._mqActivation.hasKeyValue(key);
    }
    /**
     * @return {?}
     */
    get hasInitialized() {
        return this._hasInitialized;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Adapter to the BaseFxDirective abstract class so it can be used via composition.
 * @see BaseFxDirective
 */
class BaseFxDirectiveAdapter extends BaseFxDirective {
    /**
     * BaseFxDirectiveAdapter constructor
     * @param {?} _baseKey
     * @param {?} _mediaMonitor
     * @param {?} _elementRef
     * @param {?} _styler
     */
    constructor(_baseKey, // non-responsive @Input property name
        // non-responsive @Input property name
        _mediaMonitor, _elementRef, _styler) {
        super(_mediaMonitor, _elementRef, _styler);
        this._baseKey = _baseKey;
        this._mediaMonitor = _mediaMonitor;
        this._elementRef = _elementRef;
        this._styler = _styler;
    }
    /**
     * Accessor to determine which \@Input property is "active"
     * e.g. which property value will be used.
     * @return {?}
     */
    get activeKey() {
        let /** @type {?} */ mqa = this._mqActivation;
        let /** @type {?} */ key = mqa ? mqa.activatedInputKey : this._baseKey;
        // Note: ClassDirective::SimpleChanges uses 'klazz' instead of 'class' as a key
        return (key === 'class') ? 'klazz' : key;
    }
    /**
     * Hash map of all \@Input keys/values defined/used
     * @return {?}
     */
    get inputMap() {
        return this._inputMap;
    }
    /**
     * @see BaseFxDirective._mqActivation
     * @return {?}
     */
    get mqActivation() {
        return this._mqActivation;
    }
    /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     * @return {?}
     */
    hasResponsiveAPI() {
        return super.hasResponsiveAPI(this._baseKey);
    }
    /**
     * @see BaseFxDirective._queryInput
     * @param {?} key
     * @return {?}
     */
    queryInput(key) {
        return key ? this._queryInput(key) : undefined;
    }
    /**
     *  Save the property value.
     * @param {?=} key
     * @param {?=} source
     * @param {?=} cacheRaw
     * @return {?}
     */
    cacheInput(key, source, cacheRaw = false) {
        if (cacheRaw) {
            this._cacheInputRaw(key, source);
        }
        else if (Array.isArray(source)) {
            this._cacheInputArray(key, source);
        }
        else if (typeof source === 'object') {
            this._cacheInputObject(key, source);
        }
        else if (typeof source === 'string') {
            this._cacheInputString(key, source);
        }
        else {
            throw new Error(`Invalid class value '${key}' provided. Did you want to cache the raw value?`);
        }
    }
    /**
     * @see BaseFxDirective._listenForMediaQueryChanges
     * @param {?} key
     * @param {?} defaultValue
     * @param {?} onMediaQueryChange
     * @return {?}
     */
    listenForMediaQueryChanges(key, defaultValue, onMediaQueryChange) {
        return this._listenForMediaQueryChanges(key, defaultValue, onMediaQueryChange);
    }
    /**
     * No implicit transforms of the source.
     * Required when caching values expected later for KeyValueDiffers
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    _cacheInputRaw(key, source) {
        if (key) {
            this._inputMap[key] = source;
        }
    }
    /**
     *  Save the property value for Array values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    _cacheInputArray(key = '', source) {
        this._inputMap[key] = source ? source.join(' ') : '';
    }
    /**
     *  Save the property value for key/value pair values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    _cacheInputObject(key = '', source) {
        let /** @type {?} */ classes = [];
        if (source) {
            for (let /** @type {?} */ prop in source) {
                if (!!source[prop]) {
                    classes.push(prop);
                }
            }
        }
        this._inputMap[key] = classes.join(' ');
    }
    /**
     *  Save the property value for string values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    _cacheInputString(key = '', source) {
        this._inputMap[key] = source;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * MockMatchMedia mocks calls to the Window API matchMedia with a build of a simulated
 * MockMediaQueryListener. Methods are available to simulate an activation of a mediaQuery
 * range and to clearAll mediaQuery listeners.
 */
class MockMatchMedia extends MatchMedia {
    /**
     * @param {?} _zone
     * @param {?} _platformId
     * @param {?} _document
     * @param {?} _breakpoints
     */
    constructor(_zone, _platformId, _document, _breakpoints) {
        super(_zone, _platformId, _document);
        this._breakpoints = _breakpoints;
        /**
         * Special flag used to test BreakPoint registrations with MatchMedia
         */
        this.autoRegisterQueries = true;
        /**
         * Allow fallback to overlapping mediaQueries to determine
         * activatedInput(s).
         */
        this.useOverlaps = false;
        this._actives = [];
        this._actives = [];
    }
    /**
     * Easy method to clear all listeners for all mediaQueries
     * @return {?}
     */
    clearAll() {
        this._registry.forEach((mql, _) => {
            mql.destroy();
        });
        this._registry.clear();
        this.useOverlaps = false;
    }
    /**
     * Feature to support manual, simulated activation of a mediaQuery.
     * @param {?} mediaQuery
     * @param {?=} useOverlaps
     * @return {?}
     */
    activate(mediaQuery, useOverlaps = false) {
        useOverlaps = useOverlaps || this.useOverlaps;
        mediaQuery = this._validateQuery(mediaQuery);
        if (useOverlaps || !this.isActive(mediaQuery)) {
            this._deactivateAll();
            this._registerMediaQuery(mediaQuery);
            this._activateWithOverlaps(mediaQuery, useOverlaps);
        }
        return this.hasActivated;
    }
    /**
     * Converts an optional mediaQuery alias to a specific, valid mediaQuery
     * @param {?} queryOrAlias
     * @return {?}
     */
    _validateQuery(queryOrAlias) {
        let /** @type {?} */ bp = this._breakpoints.findByAlias(queryOrAlias);
        if (bp) {
            queryOrAlias = bp.mediaQuery;
        }
        return queryOrAlias;
    }
    /**
     * Manually activate any overlapping mediaQueries to simulate
     * similar functionality in the window.matchMedia()
     * @param {?} mediaQuery
     * @param {?} useOverlaps
     * @return {?}
     */
    _activateWithOverlaps(mediaQuery, useOverlaps) {
        if (useOverlaps) {
            let /** @type {?} */ bp = this._breakpoints.findByQuery(mediaQuery);
            let /** @type {?} */ alias = bp ? bp.alias : 'unknown';
            // Simulate activation of overlapping lt-<XXX> ranges
            switch (alias) {
                case 'lg':
                    this._activateByAlias('lt-xl');
                    break;
                case 'md':
                    this._activateByAlias('lt-xl, lt-lg');
                    break;
                case 'sm':
                    this._activateByAlias('lt-xl, lt-lg, lt-md');
                    break;
                case 'xs':
                    this._activateByAlias('lt-xl, lt-lg, lt-md, lt-sm');
                    break;
            }
            // Simulate activate of overlapping gt-<xxxx> mediaQuery ranges
            switch (alias) {
                case 'xl':
                    this._activateByAlias('gt-lg, gt-md, gt-sm, gt-xs');
                    break;
                case 'lg':
                    this._activateByAlias('gt-md, gt-sm, gt-xs');
                    break;
                case 'md':
                    this._activateByAlias('gt-sm, gt-xs');
                    break;
                case 'sm':
                    this._activateByAlias('gt-xs');
                    break;
            }
        }
        // Activate last since the responsiveActivation is watching *this* mediaQuery
        return this._activateByQuery(mediaQuery);
    }
    /**
     *
     * @param {?} aliases
     * @return {?}
     */
    _activateByAlias(aliases) {
        let /** @type {?} */ activate = (alias) => {
            let /** @type {?} */ bp = this._breakpoints.findByAlias(alias);
            this._activateByQuery(bp ? bp.mediaQuery : alias);
        };
        aliases.split(',').forEach(alias => activate(alias.trim()));
    }
    /**
     *
     * @param {?} mediaQuery
     * @return {?}
     */
    _activateByQuery(mediaQuery) {
        let /** @type {?} */ mql = /** @type {?} */ (this._registry.get(mediaQuery));
        let /** @type {?} */ alreadyAdded = this._actives.reduce((found, it) => {
            return found || (mql && (it.media === mql.media));
        }, false);
        if (mql && !alreadyAdded) {
            this._actives.push(mql.activate());
        }
        return this.hasActivated;
    }
    /**
     * Deactivate all current Mock MQLs
     * @return {?}
     */
    _deactivateAll() {
        if (this._actives.length) {
            // Deactivate all current MQLs and reset the buffer
            for (const /** @type {?} */ it of this._actives) {
                it.deactivate();
            }
            this._actives = [];
        }
        return this;
    }
    /**
     * Insure the mediaQuery is registered with MatchMedia
     * @param {?} mediaQuery
     * @return {?}
     */
    _registerMediaQuery(mediaQuery) {
        if (!this._registry.has(mediaQuery) && this.autoRegisterQueries) {
            this.registerQuery(mediaQuery);
        }
    }
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    _buildMQL(query) {
        return new MockMediaQueryList(query);
    }
    /**
     * @return {?}
     */
    get hasActivated() {
        return (this._actives.length > 0);
    }
}
MockMatchMedia.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MockMatchMedia.ctorParameters = () => [
    { type: NgZone, },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
    { type: BreakPointRegistry, },
];
/**
 * Special internal class to simulate a MediaQueryList and
 * - supports manual activation to simulate mediaQuery matching
 * - manages listeners
 */
class MockMediaQueryList {
    /**
     * @param {?} _mediaQuery
     */
    constructor(_mediaQuery) {
        this._mediaQuery = _mediaQuery;
        this._isActive = false;
        this._listeners = [];
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
            this._listeners.forEach((callback) => {
                callback(this);
            });
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
            this._listeners.forEach((callback) => {
                callback(this);
            });
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
            listener(this);
        }
    }
    /**
     * Don't need to remove listeners in the testing environment
     * @param {?} _
     * @return {?}
     */
    removeListener(_) {
    }
}
/**
 * Pre-configured provider for MockMatchMedia
 */
const /** @type {?} */ MockMatchMediaProvider = {
    // tslint:disable-line:variable-name
    provide: MatchMedia,
    useClass: MockMatchMedia
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Special server-only class to simulate a MediaQueryList and
 * - supports manual activation to simulate mediaQuery matching
 * - manages listeners
 */
class ServerMediaQueryList {
    /**
     * @param {?} _mediaQuery
     */
    constructor(_mediaQuery) {
        this._mediaQuery = _mediaQuery;
        this._isActive = false;
        this._listeners = [];
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
            this._listeners.forEach((callback) => {
                callback(this);
            });
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
            this._listeners.forEach((callback) => {
                callback(this);
            });
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
            listener(this);
        }
    }
    /**
     * Don't need to remove listeners in the server environment
     * @param {?} _
     * @return {?}
     */
    removeListener(_) {
    }
}
/**
 * Special server-only implementation of MatchMedia that uses the above
 * ServerMediaQueryList as its internal representation
 *
 * Also contains methods to activate and deactivate breakpoints
 */
class ServerMatchMedia extends MatchMedia {
    /**
     * @param {?} _zone
     * @param {?} _platformId
     * @param {?} _document
     */
    constructor(_zone, _platformId, _document) {
        super(_zone, _platformId, _document);
        this._zone = _zone;
        this._platformId = _platformId;
        this._document = _document;
        this._registry = new Map();
        this._source = new BehaviorSubject(new MediaChange(true));
        this._observable$ = this._source.asObservable();
    }
    /**
     * Activate the specified breakpoint if we're on the server, no-op otherwise
     * @param {?} bp
     * @return {?}
     */
    activateBreakpoint(bp) {
        const /** @type {?} */ lookupBreakpoint = this._registry.get(bp.mediaQuery);
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
        const /** @type {?} */ lookupBreakpoint = this._registry.get(bp.mediaQuery);
        if (lookupBreakpoint) {
            lookupBreakpoint.deactivate();
        }
    }
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    _buildMQL(query) {
        return new ServerMediaQueryList(query);
    }
}
ServerMatchMedia.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ServerMatchMedia.ctorParameters = () => [
    { type: NgZone, },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Ensure a single global service provider
 * @param {?} parentMonitor
 * @param {?} breakpoints
 * @param {?} matchMedia
 * @return {?}
 */
function MEDIA_MONITOR_PROVIDER_FACTORY(parentMonitor, breakpoints, matchMedia) {
    return parentMonitor || new MediaMonitor(breakpoints, matchMedia);
}
/**
 * Export provider that uses a global service factory (above)
 */
const /** @type {?} */ MEDIA_MONITOR_PROVIDER = {
    provide: MediaMonitor,
    deps: [
        [new Optional(), new SkipSelf(), MediaMonitor],
        BreakPointRegistry,
        MatchMedia,
    ],
    useFactory: MEDIA_MONITOR_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { removeStyles, BROWSER_PROVIDER, CLASS_NAME, CoreModule, MediaQueriesModule, MediaChange, StylesheetMap, STYLESHEET_MAP_PROVIDER_FACTORY, STYLESHEET_MAP_PROVIDER, ADD_FLEX_STYLES, SERVER_TOKEN, DISABLE_DEFAULT_BREAKPOINTS, ADD_ORIENTATION_BREAKPOINTS, BREAKPOINT, DISABLE_VENDOR_PREFIXES, BaseFxDirective, BaseFxDirectiveAdapter, RESPONSIVE_ALIASES, DEFAULT_BREAKPOINTS, ScreenTypes, ORIENTATION_BREAKPOINTS, BreakPointRegistry, buildMergedBreakPoints, DEFAULT_BREAKPOINTS_PROVIDER_FACTORY, DEFAULT_BREAKPOINTS_PROVIDER, BREAKPOINTS_PROVIDER_FACTORY, BREAKPOINTS_PROVIDER, CUSTOM_BREAKPOINTS_PROVIDER_FACTORY, BREAKPOINTS, MatchMedia, MockMatchMedia, MockMediaQueryList, MockMatchMediaProvider, ServerMediaQueryList, ServerMatchMedia, MediaMonitor, MEDIA_MONITOR_PROVIDER_FACTORY, MEDIA_MONITOR_PROVIDER, ObservableMedia, MediaService, OBSERVABLE_MEDIA_PROVIDER_FACTORY, OBSERVABLE_MEDIA_PROVIDER, KeyOptions, ResponsiveActivation, StyleUtils, BREAKPOINT_REGISTRY_PROVIDER as ɵb, BREAKPOINT_REGISTRY_PROVIDER_FACTORY as ɵa, validateSuffixes as ɵe, MATCH_MEDIA_PROVIDER as ɵd, MATCH_MEDIA_PROVIDER_FACTORY as ɵc };
//# sourceMappingURL=core.js.map
