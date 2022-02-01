"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDependenciesAndFiles = void 0;
var tslib_1 = require("tslib");
var schematics_1 = require("@angular-devkit/schematics");
var package_config_1 = require("@angular/material/schematics/ng-add/package-config");
var version_names_1 = require("../version-names");
var components_1 = require("../components");
var core_1 = require("@angular-devkit/core");
var schematics_2 = require("@angular/cdk/schematics");
var workspace_1 = require("@schematics/angular/utility/workspace");
function addDependenciesAndFiles(options) {
    return schematics_1.chain([
        function (host) {
            package_config_1.addPackageToPackageJson(host, '@angular/material', "~" + version_names_1.materialVersion);
            package_config_1.addPackageToPackageJson(host, '@covalent/core', "~" + version_names_1.covalentCoreVersion);
            components_1.components.forEach(function (component) {
                if (component.enabled(options)) {
                    package_config_1.addPackageToPackageJson(host, component.dependency(), "~" + version_names_1.covalentCoreVersion);
                }
            });
        },
        mergeFiles(options),
        addThemeToAngularJson(),
    ]);
}
exports.addDependenciesAndFiles = addDependenciesAndFiles;
function mergeFiles(options) {
    var templateSource = schematics_1.apply(schematics_1.url('./files'), [
        schematics_1.template(tslib_1.__assign(tslib_1.__assign({}, core_1.strings), options)),
    ]);
    return schematics_1.branchAndMerge(schematics_1.mergeWith(templateSource));
}
function addThemeToAngularJson() {
    return workspace_1.updateWorkspace(function (workspace) {
        var project = schematics_2.getProjectFromWorkspace(workspace);
        var targetOptions = schematics_2.getProjectTargetOptions(project, 'build');
        var assetPath = "theme.scss";
        var prebuiltThemePathSegment = "styles.scss";
        if (!targetOptions.styles) {
            targetOptions.styles = [assetPath];
        }
        else {
            var existingStyles = targetOptions.styles.map(function (s) { return (typeof s === 'string' ? s : s.input); });
            for (var _i = 0, _a = existingStyles.entries(); _i < _a.length; _i++) {
                var _b = _a[_i], index = _b[0], stylePath = _b[1];
                if (stylePath === assetPath) {
                    return;
                }
                if (stylePath.includes(prebuiltThemePathSegment)) {
                    targetOptions.styles.splice(index, 0);
                }
            }
            targetOptions.styles.unshift(assetPath);
        }
    });
}
//# sourceMappingURL=index.js.map