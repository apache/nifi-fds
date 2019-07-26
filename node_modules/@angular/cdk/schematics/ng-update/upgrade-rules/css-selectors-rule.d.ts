/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from 'typescript';
import { ResolvedResource } from '../../update-tool/component-resource-collector';
import { MigrationRule } from '../../update-tool/migration-rule';
import { RuleUpgradeData } from '../upgrade-data';
/**
 * Rule that walks through every string literal, template and stylesheet in
 * order to migrate outdated CSS selectors to the new selector.
 */
export declare class CssSelectorsRule extends MigrationRule<RuleUpgradeData> {
    /** Change data that upgrades to the specified target version. */
    data: any;
    ruleEnabled: any;
    visitNode(node: ts.Node): void;
    visitTemplate(template: ResolvedResource): void;
    visitStylesheet(stylesheet: ResolvedResource): void;
    private _visitStringLiteralLike;
    private _replaceSelector;
}
