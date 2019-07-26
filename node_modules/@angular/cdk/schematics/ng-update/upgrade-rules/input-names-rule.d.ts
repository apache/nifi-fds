/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ResolvedResource } from '../../update-tool/component-resource-collector';
import { MigrationRule } from '../../update-tool/migration-rule';
import { InputNameUpgradeData } from '../data';
import { RuleUpgradeData } from '../upgrade-data';
/**
 * Rule that walks through every template or stylesheet and replaces outdated input
 * names to the new input name. Selectors in stylesheets could also target input
 * bindings declared as static attribute. See for example:
 *
 * e.g. `<my-component color="primary">` becomes `my-component[color]`
 */
export declare class InputNamesRule extends MigrationRule<RuleUpgradeData> {
    /** Change data that upgrades to the specified target version. */
    data: InputNameUpgradeData[];
    ruleEnabled: boolean;
    visitStylesheet(stylesheet: ResolvedResource): void;
    visitTemplate(template: ResolvedResource): void;
    private _replaceInputName;
}
