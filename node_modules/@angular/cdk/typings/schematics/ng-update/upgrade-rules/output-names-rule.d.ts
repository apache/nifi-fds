/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ResolvedResource } from '../../update-tool/component-resource-collector';
import { MigrationRule } from '../../update-tool/migration-rule';
import { OutputNameUpgradeData } from '../data';
import { RuleUpgradeData } from '../upgrade-data';
/**
 * Rule that walks through every inline or external HTML template and switches
 * changed output binding names to the proper new output name.
 */
export declare class OutputNamesRule extends MigrationRule<RuleUpgradeData> {
    /** Change data that upgrades to the specified target version. */
    data: OutputNameUpgradeData[];
    ruleEnabled: boolean;
    visitTemplate(template: ResolvedResource): void;
    private _replaceOutputName;
}
