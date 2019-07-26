/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { logging } from '@angular-devkit/core';
import { Tree } from '@angular-devkit/schematics';
import { MigrationRule } from './migration-rule';
import { TargetVersion } from './target-version';
export declare type Constructor<T> = new (...args: any[]) => T;
export declare function runMigrationRules<T>(tree: Tree, logger: logging.LoggerApi, tsconfigPath: string, targetVersion: TargetVersion, ruleTypes: Constructor<MigrationRule<T>>[], upgradeData: T, analyzedFiles: Set<string>): boolean;
