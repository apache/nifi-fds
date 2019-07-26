"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const migration_rule_1 = require("../../update-tool/migration-rule");
const angular_1 = require("../html-parsing/angular");
const upgrade_data_1 = require("../upgrade-data");
/**
 * Rule that walks through every inline or external HTML template and switches
 * changed output binding names to the proper new output name.
 */
class OutputNamesRule extends migration_rule_1.MigrationRule {
    constructor() {
        super(...arguments);
        /** Change data that upgrades to the specified target version. */
        this.data = upgrade_data_1.getVersionUpgradeData(this, 'outputNames');
        // Only enable the migration rule if there is upgrade data.
        this.ruleEnabled = this.data.length !== 0;
    }
    visitTemplate(template) {
        this.data.forEach(name => {
            const whitelist = name.whitelist;
            const relativeOffsets = [];
            if (whitelist.attributes) {
                relativeOffsets.push(...angular_1.findOutputsOnElementWithAttr(template.content, name.replace, whitelist.attributes));
            }
            if (whitelist.elements) {
                relativeOffsets.push(...angular_1.findOutputsOnElementWithTag(template.content, name.replace, whitelist.elements));
            }
            relativeOffsets.map(offset => template.start + offset)
                .forEach(start => this._replaceOutputName(template.filePath, start, name.replace.length, name.replaceWith));
        });
    }
    _replaceOutputName(filePath, start, width, newName) {
        const updateRecorder = this.getUpdateRecorder(filePath);
        updateRecorder.remove(start, width);
        updateRecorder.insertRight(start, newName);
    }
}
exports.OutputNamesRule = OutputNamesRule;
//# sourceMappingURL=output-names-rule.js.map