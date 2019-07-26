/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from 'typescript';
import { MigrationRule } from '../../update-tool/migration-rule';
import { MethodCallUpgradeData } from '../data';
import { RuleUpgradeData } from '../upgrade-data';
/**
 * Rule that visits every TypeScript method call expression and checks if the
 * argument count is invalid and needs to be *manually* updated.
 */
export declare class MethodCallArgumentsRule extends MigrationRule<RuleUpgradeData> {
    /** Change data that upgrades to the specified target version. */
    data: MethodCallUpgradeData[];
    ruleEnabled: boolean;
    visitNode(node: ts.Node): void;
    private _checkPropertyAccessMethodCall;
}
