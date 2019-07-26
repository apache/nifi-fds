"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
const migration_rule_1 = require("../../update-tool/migration-rule");
const literal_1 = require("../typescript/literal");
const upgrade_data_1 = require("../upgrade-data");
/**
 * Rule that walks through every template or stylesheet and replaces outdated input
 * names to the new input name. Selectors in stylesheets could also target input
 * bindings declared as static attribute. See for example:
 *
 * e.g. `<my-component color="primary">` becomes `my-component[color]`
 */
class InputNamesRule extends migration_rule_1.MigrationRule {
    constructor() {
        super(...arguments);
        /** Change data that upgrades to the specified target version. */
        this.data = upgrade_data_1.getVersionUpgradeData(this, 'inputNames');
        // Only enable the migration rule if there is upgrade data.
        this.ruleEnabled = this.data.length !== 0;
    }
    visitStylesheet(stylesheet) {
        this.data.forEach(name => {
            const currentSelector = `[${name.replace}]`;
            const updatedSelector = `[${name.replaceWith}]`;
            literal_1.findAllSubstringIndices(stylesheet.content, currentSelector)
                .map(offset => stylesheet.start + offset)
                .forEach(start => this._replaceInputName(stylesheet.filePath, start, currentSelector.length, updatedSelector));
        });
    }
    visitTemplate(template) {
        this.data.forEach(name => {
            const whitelist = name.whitelist;
            const relativeOffsets = [];
            if (whitelist.attributes) {
                relativeOffsets.push(...__1.findInputsOnElementWithAttr(template.content, name.replace, whitelist.attributes));
            }
            if (whitelist.elements) {
                relativeOffsets.push(...__1.findInputsOnElementWithTag(template.content, name.replace, whitelist.elements));
            }
            relativeOffsets.map(offset => template.start + offset)
                .forEach(start => this._replaceInputName(template.filePath, start, name.replace.length, name.replaceWith));
        });
    }
    _replaceInputName(filePath, start, width, newName) {
        const updateRecorder = this.getUpdateRecorder(filePath);
        updateRecorder.remove(start, width);
        updateRecorder.insertRight(start, newName);
    }
}
exports.InputNamesRule = InputNamesRule;
//# sourceMappingURL=input-names-rule.js.map