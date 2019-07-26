/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from 'typescript';
import { MigrationRule } from '../../update-tool/migration-rule';
import { PropertyNameUpgradeData } from '../data';
import { RuleUpgradeData } from '../upgrade-data';
/**
 * Rule that walks through every property access expression and updates
 * accessed properties that have been updated to a new name.
 */
export declare class PropertyNamesRule extends MigrationRule<RuleUpgradeData> {
    /** Change data that upgrades to the specified target version. */
    data: PropertyNameUpgradeData[];
    ruleEnabled: boolean;
    visitNode(node: ts.Node): void;
    private _visitPropertyAccessExpression;
}
