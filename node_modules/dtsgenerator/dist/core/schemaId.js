"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var url_1 = tslib_1.__importDefault(require("url"));
var SchemaId = (function () {
    function SchemaId(inputId, parentIds) {
        this.inputId = inputId;
        var absoluteId = inputId;
        if (parentIds) {
            parentIds.forEach(function (parent) {
                if (parent) {
                    absoluteId = url_1.default.resolve(parent, absoluteId);
                }
            });
        }
        if (absoluteId.indexOf('#') < 0) {
            absoluteId += '#';
        }
        if (absoluteId.indexOf('://') < 0 && absoluteId[0] !== '/' && absoluteId[0] !== '#') {
            absoluteId = '/' + absoluteId;
        }
        this.absoluteId = absoluteId;
        this.id = url_1.default.parse(absoluteId);
    }
    SchemaId.prototype.getAbsoluteId = function () {
        return this.absoluteId;
    };
    SchemaId.prototype.isEmpty = function () {
        return !!this.absoluteId;
    };
    SchemaId.prototype.isFetchable = function () {
        return /https?\:\/\//.test(this.absoluteId);
    };
    SchemaId.prototype.getFileId = function () {
        return this.absoluteId.replace(/#.*$/, '#');
    };
    SchemaId.prototype.existsJsonPointerHash = function () {
        return this.absoluteId === '#' || /#\//.test(this.absoluteId);
    };
    SchemaId.prototype.getJsonPointerHash = function () {
        var m = /(#\/.*)$/.exec(this.absoluteId);
        if (m == null) {
            return '#';
        }
        return m[1];
    };
    SchemaId.empty = new SchemaId('');
    return SchemaId;
}());
exports.default = SchemaId;
//# sourceMappingURL=schemaId.js.map