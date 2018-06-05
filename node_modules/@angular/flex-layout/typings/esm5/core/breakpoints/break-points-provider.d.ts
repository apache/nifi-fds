/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken, Optional } from '@angular/core';
import { BreakPoint } from './break-point';
/**
 * Options to identify which breakpoint types to include as part of
 * a BreakPoint provider
 * @deprecated
 * @deletion-target v6.0.0-beta.15
 */
export interface BreakPointProviderOptions {
    /**
     * include pre-configured, internal default breakpoints.
     * @default 'true'
     */
    defaults?: boolean;
    /**
     * include pre-configured, internal orientations breakpoints.
     * @default 'false'
     */
    orientations?: boolean;
}
/**
 * Add new custom items to the default list or override existing default with custom overrides
 * @deprecated
 * @deletion-target v6.0.0-beta.15
 */
export declare function buildMergedBreakPoints(_custom?: BreakPoint[], options?: BreakPointProviderOptions): () => BreakPoint[];
/**
 *  Ensure that only a single global BreakPoint list is instantiated...
 *  @deprecated
 *  @deletion-target v6.0.0-beta.15
 */
export declare function DEFAULT_BREAKPOINTS_PROVIDER_FACTORY(): BreakPoint[];
/**
 * Default Provider that does not support external customization nor provide
 * the extra extended breakpoints:   "handset", "tablet", and "web"
 *
 *  NOTE: !! breakpoints are considered to have unique 'alias' properties,
 *        custom breakpoints matching existing breakpoints will override the properties
 *        of the existing (and not be added as an extra breakpoint entry).
 *        [xs, gt-xs, sm, gt-sm, md, gt-md, lg, gt-lg, xl]
 * @deprecated
 * @deletion-target v6.0.0-beta.15
 */
export declare const DEFAULT_BREAKPOINTS_PROVIDER: {
    provide: InjectionToken<BreakPoint[]>;
    useFactory: () => BreakPoint[];
};
/**
 * Factory that combines the configured breakpoints into one array and then merges
 * them using a utility function
 */
export declare function BREAKPOINTS_PROVIDER_FACTORY(parentBreakpoints: BreakPoint[], breakpoints: (BreakPoint | BreakPoint[])[], disableDefaults: boolean, addOrientation: boolean): BreakPoint[];
/**
 * Provider that combines the provided extra breakpoints with the default and
 * orientation breakpoints based on configuration
 */
export declare const BREAKPOINTS_PROVIDER: {
    provide: InjectionToken<BreakPoint[]>;
    useFactory: (parentBreakpoints: BreakPoint[], breakpoints: (BreakPoint | BreakPoint[])[], disableDefaults: boolean, addOrientation: boolean) => BreakPoint[];
    deps: Optional[][];
};
/**
 * Use with FlexLayoutModule.CUSTOM_BREAKPOINTS_PROVIDER_FACTORY!
 * @deprecated
 * @deletion-target v6.0.0-beta.15
 */
export declare function CUSTOM_BREAKPOINTS_PROVIDER_FACTORY(custom?: BreakPoint[], options?: BreakPointProviderOptions): {
    provide: InjectionToken<BreakPoint[]>;
    useFactory: () => BreakPoint[];
};
