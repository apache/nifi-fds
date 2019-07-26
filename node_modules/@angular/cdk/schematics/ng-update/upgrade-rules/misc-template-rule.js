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
/**
 * Rule that walks through every template and reports if there are
 * instances of outdated Angular CDK API that can't be migrated automatically.
 */
class MiscTemplateRule extends migration_rule_1.MigrationRule {
    constructor() {
        super(...arguments);
        // Only enable this rule if the migration targets version 6. The rule
        // currently only includes migrations for V6 deprecations.
        this.ruleEnabled = this.targetVersion === __1.TargetVersion.V6;
    }
    visitTemplate(template) {
        // Migration for https://github.com/angular/components/pull/10325 (v6)
        literal_1.findAllSubstringIndices(template.content, 'cdk-focus-trap').forEach(offset => {
            this.failures.push({
                filePath: template.filePath,
                position: template.getCharacterAndLineOfPosition(template.start + offset),
                message: `Found deprecated element selector "cdk-focus-trap" which has been ` +
                    `changed to an attribute selector "[cdkTrapFocus]".`
            });
        });
    }
}
exports.MiscTemplateRule = MiscTemplateRule;
//# sourceMappingURL=misc-template-rule.js.map