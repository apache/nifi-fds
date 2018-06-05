/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken, NgZone, Optional } from '@angular/core';
import { MatchMedia } from '../match-media/match-media';
/**
 * Ensure a single global service provider
 */
export declare function MATCH_MEDIA_PROVIDER_FACTORY(parentMedia: MatchMedia, ngZone: NgZone, platformId: Object, _document: Document): MatchMedia;
/**
 * Export provider that uses a global service factory (above)
 */
export declare const MATCH_MEDIA_PROVIDER: {
    provide: typeof MatchMedia;
    deps: (InjectionToken<Document> | Optional[] | typeof NgZone)[];
    useFactory: (parentMedia: MatchMedia, ngZone: NgZone, platformId: Object, _document: Document) => MatchMedia;
};
