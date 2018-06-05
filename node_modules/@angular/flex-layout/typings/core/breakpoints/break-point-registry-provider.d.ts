/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken, Optional } from '@angular/core';
import { BreakPointRegistry } from './break-point-registry';
import { BreakPoint } from './break-point';
/**
 * Ensure a single global service provider
 */
export declare function BREAKPOINT_REGISTRY_PROVIDER_FACTORY(parentRegistry: BreakPointRegistry, breakpoints: BreakPoint[]): BreakPointRegistry;
/**
 * Export provider that uses a global service factory (above)
 */
export declare const BREAKPOINT_REGISTRY_PROVIDER: {
    provide: typeof BreakPointRegistry;
    deps: (InjectionToken<BreakPoint[]> | Optional[])[];
    useFactory: (parentRegistry: BreakPointRegistry, breakpoints: BreakPoint[]) => BreakPointRegistry;
};
