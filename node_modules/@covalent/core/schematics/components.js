"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.covalentPackages = exports.components = exports.MarkdownNavigator = exports.CodeEditor = exports.TextEditor = exports.Echarts = exports.FlavoredMarkdown = exports.Markdown = exports.Highlight = exports.Http = exports.DynamicForms = void 0;
var DynamicForms = /** @class */ (function () {
    function DynamicForms() {
    }
    DynamicForms.prototype.enabled = function (options) {
        return options.dynamicForms;
    };
    DynamicForms.prototype.dependency = function () {
        return '@covalent/dynamic-forms';
    };
    return DynamicForms;
}());
exports.DynamicForms = DynamicForms;
var Http = /** @class */ (function () {
    function Http() {
    }
    Http.prototype.enabled = function (options) {
        return options.http;
    };
    Http.prototype.dependency = function () {
        return '@covalent/http';
    };
    return Http;
}());
exports.Http = Http;
var Highlight = /** @class */ (function () {
    function Highlight() {
    }
    Highlight.prototype.enabled = function (options) {
        return options.highlight;
    };
    Highlight.prototype.dependency = function () {
        return '@covalent/highlight';
    };
    return Highlight;
}());
exports.Highlight = Highlight;
var Markdown = /** @class */ (function () {
    function Markdown() {
    }
    Markdown.prototype.enabled = function (options) {
        return options.markdown;
    };
    Markdown.prototype.dependency = function () {
        return '@covalent/markdown';
    };
    return Markdown;
}());
exports.Markdown = Markdown;
var FlavoredMarkdown = /** @class */ (function () {
    function FlavoredMarkdown() {
    }
    FlavoredMarkdown.prototype.enabled = function (options) {
        return options.flavoredMarkdown;
    };
    FlavoredMarkdown.prototype.dependency = function () {
        return '@covalent/flavored-markdown';
    };
    return FlavoredMarkdown;
}());
exports.FlavoredMarkdown = FlavoredMarkdown;
var Echarts = /** @class */ (function () {
    function Echarts() {
    }
    Echarts.prototype.enabled = function (options) {
        return options.echarts;
    };
    Echarts.prototype.dependency = function () {
        return '@covalent/echarts';
    };
    return Echarts;
}());
exports.Echarts = Echarts;
var TextEditor = /** @class */ (function () {
    function TextEditor() {
    }
    TextEditor.prototype.enabled = function (options) {
        return options.textEditor;
    };
    TextEditor.prototype.dependency = function () {
        return '@covalent/text-editor';
    };
    return TextEditor;
}());
exports.TextEditor = TextEditor;
var CodeEditor = /** @class */ (function () {
    function CodeEditor() {
    }
    CodeEditor.prototype.enabled = function (options) {
        return options.codeEditor;
    };
    CodeEditor.prototype.dependency = function () {
        return '@covalent/code-editor';
    };
    return CodeEditor;
}());
exports.CodeEditor = CodeEditor;
var MarkdownNavigator = /** @class */ (function () {
    function MarkdownNavigator() {
    }
    MarkdownNavigator.prototype.enabled = function (options) {
        return options.markdownNavigator;
    };
    MarkdownNavigator.prototype.dependency = function () {
        return '@covalent/markdown-navigator';
    };
    return MarkdownNavigator;
}());
exports.MarkdownNavigator = MarkdownNavigator;
exports.components = [
    new DynamicForms(),
    new Http(),
    new Highlight(),
    new Markdown(),
    new FlavoredMarkdown(),
    new Echarts(),
    new TextEditor(),
    new CodeEditor(),
    new MarkdownNavigator(),
];
exports.covalentPackages = exports.components.map(function (c) { return c.dependency(); });
//# sourceMappingURL=components.js.map