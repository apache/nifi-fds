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
 * Migration rule that walks through every string literal, template and stylesheet
 * in order to switch deprecated attribute selectors to the updated selector.
 */
export declare class AttributeSelectorsRule extends MigrationRule<RuleUpgradeData> {
    /** Required upgrade changes for specified target version. */
    data: any;
    ruleEnabled: any;
    visitNode(node: ts.Node): void;
    visitTemplate(template: ResolvedResource): void;
    visitStylesheet(stylesheet: ResolvedResource): void;
    private _visitStringLiteralLike;
    private _replaceSelector;
}
