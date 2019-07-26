"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const version_changes_1 = require("../update-tool/version-changes");
const data_1 = require("./data");
/** Upgrade data for the Angular CDK. */
exports.cdkUpgradeData = {
    attributeSelectors: data_1.attributeSelectors,
    classNames: data_1.classNames,
    constructorChecks: data_1.constructorChecks,
    cssSelectors: data_1.cssSelectors,
    elementSelectors: data_1.elementSelectors,
    inputNames: data_1.inputNames,
    methodCallChecks: data_1.methodCallChecks,
    outputNames: data_1.outputNames,
    propertyNames: data_1.propertyNames,
};
/**
 * Gets the reduced upgrade data for the specified data key from the rule walker options.
 *
 * The function reads out the target version and upgrade data object from the rule options and
 * resolves the specified data portion that is specifically tied to the target version.
 */
function getVersionUpgradeData(r, dataName) {
    return version_changes_1.getChangesForTarget(r.targetVersion, r.upgradeData[dataName]);
}
exports.getVersionUpgradeData = getVersionUpgradeData;
//# sourceMappingURL=upgrade-data.js.map