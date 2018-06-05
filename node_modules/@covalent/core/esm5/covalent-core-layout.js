import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, HostListener, Directive, Renderer2, ElementRef, Inject, forwardRef, Optional, ContentChildren, SecurityContext, NgModule } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { mixinDisabled, TdCollapseAnimation } from '@covalent/core/common';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdLayoutComponent = /** @class */ (function () {
    function TdLayoutComponent() {
        /**
         * mode?: 'side', 'push' or 'over'
         *
         * The mode or styling of the sidenav.
         * Defaults to "over".
         * See "MatSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.mode = 'over';
        /**
         * opened?: boolean
         *
         * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
         * Defaults to "false".
         *
         * See "MatSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.opened = false;
        /**
         * sidenavWidth?: string
         *
         * Sets the "width" of the sidenav in either "px" or "%"
         * Defaults to "320px".
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.sidenavWidth = '320px';
    }
    Object.defineProperty(TdLayoutComponent.prototype, "disableClose", {
        /**
         * Checks if `ESC` should close the sidenav
         * Should only close it for `push` and `over` modes
         * @return {?}
         */
        get: function () {
            return this.mode === 'side';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdLayoutComponent.prototype.toggle = function () {
        return this.sidenav.toggle(!this.sidenav.opened);
    };
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdLayoutComponent.prototype.open = function () {
        return this.sidenav.open();
    };
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdLayoutComponent.prototype.close = function () {
        return this.sidenav.close();
    };
    return TdLayoutComponent;
}());
TdLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-layout',
                styles: [":host{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  margin:0;\n  width:100%;\n  min-height:100%;\n  height:100%;\n  overflow:hidden; }\n  :host ::ng-deep > mat-sidenav-container > mat-sidenav{\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-orient:vertical;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:column;\n            flex-direction:column; }\n"],
                template: "<mat-sidenav-container fullscreen>\n  <mat-sidenav #sidenav\n              class=\"td-layout-sidenav\"\n              [mode]=\"mode\"\n              [opened]=\"opened\"\n              [style.max-width]=\"sidenavWidth\"\n              [style.min-width]=\"sidenavWidth\"\n              [disableClose]=\"disableClose\">\n    <ng-content select=\"td-navigation-drawer\"></ng-content>\n    <ng-content select=\"[td-sidenav-content]\"></ng-content>\n  </mat-sidenav>\n  <ng-content></ng-content>\n</mat-sidenav-container>\n",
            },] },
];
/** @nocollapse */
TdLayoutComponent.ctorParameters = function () { return []; };
TdLayoutComponent.propDecorators = {
    "sidenav": [{ type: ViewChild, args: [MatSidenav,] },],
    "mode": [{ type: Input, args: ['mode',] },],
    "opened": [{ type: Input, args: ['opened',] },],
    "sidenavWidth": [{ type: Input, args: ['sidenavWidth',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
var LayoutToggleBase = /** @class */ (function () {
    function LayoutToggleBase() {
    }
    return LayoutToggleBase;
}());
/* tslint:disable-next-line */
var _TdLayoutToggleMixinBase = mixinDisabled(LayoutToggleBase);
/**
 * @abstract
 */
var LayoutToggle = /** @class */ (function (_super) {
    tslib_1.__extends(LayoutToggle, _super);
    /**
     * @param {?} _layout
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function LayoutToggle(_layout, _renderer, _elementRef) {
        var _this = _super.call(this) || this;
        _this._layout = _layout;
        _this._renderer = _renderer;
        _this._elementRef = _elementRef;
        _this._initialized = false;
        _this._hideWhenOpened = false;
        _this._renderer.addClass(_this._elementRef.nativeElement, 'td-layout-menu-button');
        return _this;
    }
    Object.defineProperty(LayoutToggle.prototype, "hideWhenOpened", {
        /**
         * hideWhenOpened?: boolean
         * When this is set to true, the host will be hidden when
         * the sidenav is opened.
         * @param {?} hideWhenOpened
         * @return {?}
         */
        set: function (hideWhenOpened) {
            this._hideWhenOpened = hideWhenOpened;
            if (this._initialized) {
                this._toggleVisibility();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LayoutToggle.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._initialized = true;
        this._toggleSubs = this._layout.sidenav._animationStarted.subscribe(function () {
            _this._toggleVisibility();
        });
        // execute toggleVisibility since the onOpenStart and onCloseStart
        // methods might not be executed always when the element is rendered
        this._toggleVisibility();
    };
    /**
     * @return {?}
     */
    LayoutToggle.prototype.ngOnDestroy = function () {
        if (this._toggleSubs) {
            this._toggleSubs.unsubscribe();
            this._toggleSubs = undefined;
        }
    };
    /**
     * Listens to host click event to trigger the layout toggle
     * @param {?} event
     * @return {?}
     */
    LayoutToggle.prototype.clickListener = function (event) {
        event.preventDefault();
        if (!this.disabled) {
            this.onClick();
        }
    };
    /**
     * @return {?}
     */
    LayoutToggle.prototype._toggleVisibility = function () {
        if (this._layout.sidenav.opened && this._hideWhenOpened) {
            this._renderer.setStyle(this._elementRef.nativeElement, 'display', 'none');
        }
        else {
            this._renderer.setStyle(this._elementRef.nativeElement, 'display', '');
        }
    };
    return LayoutToggle;
}(_TdLayoutToggleMixinBase));
LayoutToggle.propDecorators = {
    "hideWhenOpened": [{ type: Input, args: ['hideWhenOpened',] },],
    "clickListener": [{ type: HostListener, args: ['click', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdLayoutToggleDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdLayoutToggleDirective, _super);
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    function TdLayoutToggleDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutToggleDirective.prototype, "tdLayoutToggle", {
        /**
         * @param {?} tdLayoutToggle
         * @return {?}
         */
        set: function (tdLayoutToggle) {
            this.disabled = !((tdLayoutToggle) === '' || tdLayoutToggle);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutToggleDirective.prototype.onClick = function () {
        this._layout.toggle();
    };
    return TdLayoutToggleDirective;
}(LayoutToggle));
TdLayoutToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutToggle]',
            },] },
];
/** @nocollapse */
TdLayoutToggleDirective.ctorParameters = function () { return [
    { type: TdLayoutComponent, decorators: [{ type: Inject, args: [forwardRef(function () { return TdLayoutComponent; }),] },] },
    { type: Renderer2, },
    { type: ElementRef, },
]; };
TdLayoutToggleDirective.propDecorators = {
    "tdLayoutToggle": [{ type: Input, args: ['tdLayoutToggle',] },],
};
var TdLayoutCloseDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdLayoutCloseDirective, _super);
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    function TdLayoutCloseDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutCloseDirective.prototype, "tdLayoutClose", {
        /**
         * @param {?} tdLayoutClose
         * @return {?}
         */
        set: function (tdLayoutClose) {
            this.disabled = !((tdLayoutClose) === '' || tdLayoutClose);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutCloseDirective.prototype.onClick = function () {
        this._layout.close();
    };
    return TdLayoutCloseDirective;
}(LayoutToggle));
TdLayoutCloseDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutClose]',
            },] },
];
/** @nocollapse */
TdLayoutCloseDirective.ctorParameters = function () { return [
    { type: TdLayoutComponent, decorators: [{ type: Inject, args: [forwardRef(function () { return TdLayoutComponent; }),] },] },
    { type: Renderer2, },
    { type: ElementRef, },
]; };
TdLayoutCloseDirective.propDecorators = {
    "tdLayoutClose": [{ type: Input, args: ['tdLayoutClose',] },],
};
var TdLayoutOpenDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdLayoutOpenDirective, _super);
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    function TdLayoutOpenDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutOpenDirective.prototype, "tdLayoutClose", {
        /**
         * @param {?} tdLayoutOpen
         * @return {?}
         */
        set: function (tdLayoutOpen) {
            this.disabled = !((tdLayoutOpen) === '' || tdLayoutOpen);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutOpenDirective.prototype.onClick = function () {
        this._layout.open();
    };
    return TdLayoutOpenDirective;
}(LayoutToggle));
TdLayoutOpenDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutOpen]',
            },] },
];
/** @nocollapse */
TdLayoutOpenDirective.ctorParameters = function () { return [
    { type: TdLayoutComponent, decorators: [{ type: Inject, args: [forwardRef(function () { return TdLayoutComponent; }),] },] },
    { type: Renderer2, },
    { type: ElementRef, },
]; };
TdLayoutOpenDirective.propDecorators = {
    "tdLayoutClose": [{ type: Input, args: ['tdLayoutOpen',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdLayoutNavComponent = /** @class */ (function () {
    /**
     * @param {?} _router
     */
    function TdLayoutNavComponent(_router) {
        this._router = _router;
        /**
         * color?: string
         *
         * toolbar color option: primary | accent | warn.
         * If [color] is not set, primary is used.
         */
        this.color = 'primary';
    }
    Object.defineProperty(TdLayoutNavComponent.prototype, "routerEnabled", {
        /**
         * Checks if router was injected.
         * @return {?}
         */
        get: function () {
            return !!this._router && !!this.navigationRoute;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutNavComponent.prototype.handleNavigationClick = function () {
        if (this.routerEnabled) {
            this._router.navigateByUrl(this.navigationRoute);
        }
    };
    return TdLayoutNavComponent;
}());
TdLayoutNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-layout-nav',
                styles: [".td-menu-button{\n  margin-left:0; }\n  ::ng-deep [dir='rtl'] .td-menu-button{\n    margin-right:0;\n    margin-left:6px; }\n:host{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  margin:0;\n  width:100%;\n  min-height:100%;\n  height:100%;\n  overflow:hidden; }\n  :host .td-layout-nav-wrapper{\n    -webkit-box-orient:vertical;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:column;\n            flex-direction:column;\n    -webkit-box-sizing:border-box;\n            box-sizing:border-box;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    margin:0;\n    width:100%;\n    min-height:100%;\n    height:100%; }\n    :host .td-layout-nav-wrapper .td-layout-nav-toolbar-content{\n      -webkit-box-orient:horizontal;\n      -webkit-box-direction:normal;\n          -ms-flex-direction:row;\n              flex-direction:row;\n      -webkit-box-sizing:border-box;\n              box-sizing:border-box;\n      display:-webkit-box;\n      display:-ms-flexbox;\n      display:flex;\n      -webkit-box-align:center;\n          -ms-flex-align:center;\n              align-items:center;\n      -ms-flex-line-pack:center;\n          align-content:center;\n      max-width:100%;\n      -webkit-box-pack:start;\n          -ms-flex-pack:start;\n              justify-content:start; }\n    :host .td-layout-nav-wrapper .td-layout-nav-content{\n      -webkit-box-orient:vertical;\n      -webkit-box-direction:normal;\n          -ms-flex-direction:column;\n              flex-direction:column;\n      -webkit-box-sizing:border-box;\n              box-sizing:border-box;\n      display:-webkit-box;\n      display:-ms-flexbox;\n      display:flex;\n      -webkit-box-flex:1;\n          -ms-flex:1;\n              flex:1;\n      position:relative;\n      overflow:auto;\n      -webkit-overflow-scrolling:touch; }\n"],
                template: "<div class=\"td-layout-nav-wrapper\">\n  <mat-toolbar [color]=\"color\">\n    <ng-content select=\"[td-menu-button]\"></ng-content>\n    <span *ngIf=\"icon || logo || toolbarTitle\"\n          [class.cursor-pointer]=\"routerEnabled\"\n          (click)=\"handleNavigationClick()\"\n          class=\"td-layout-nav-toolbar-content\">\n      <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon>\n      <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n      <span *ngIf=\"toolbarTitle\">{{toolbarTitle}}</span>\n    </span>\n    <ng-content select=\"[td-toolbar-content]\"></ng-content>\n  </mat-toolbar>\n  <div class=\"td-layout-nav-content\" cdkScrollable>\n    <ng-content></ng-content>\n  </div>\n  <ng-content select=\"td-layout-footer\"></ng-content>\n</div>\n",
            },] },
];
/** @nocollapse */
TdLayoutNavComponent.ctorParameters = function () { return [
    { type: Router, decorators: [{ type: Optional },] },
]; };
TdLayoutNavComponent.propDecorators = {
    "toolbarTitle": [{ type: Input, args: ['toolbarTitle',] },],
    "icon": [{ type: Input, args: ['icon',] },],
    "logo": [{ type: Input, args: ['logo',] },],
    "color": [{ type: Input, args: ['color',] },],
    "navigationRoute": [{ type: Input, args: ['navigationRoute',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdLayoutNavListComponent = /** @class */ (function () {
    /**
     * @param {?} _router
     */
    function TdLayoutNavListComponent(_router) {
        this._router = _router;
        /**
         * color?: string
         *
         * toolbar color option: primary | accent | warn.
         * If [color] is not set, primary is used.
         */
        this.color = 'primary';
        /**
         * mode?: 'side', 'push' or 'over'
         *
         * The mode or styling of the sidenav.
         * Defaults to "side".
         * See "MatSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.mode = 'side';
        /**
         * opened?: boolean
         * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
         * Defaults to "true".
         *
         * See "MatSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.opened = true;
        /**
         * sidenavWidth?: string
         *
         * Sets the "width" of the sidenav in either "px" or "%"
         * Defaults to "350px".
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.sidenavWidth = '350px';
    }
    Object.defineProperty(TdLayoutNavListComponent.prototype, "disableClose", {
        /**
         * Checks if `ESC` should close the sidenav
         * Should only close it for `push` and `over` modes
         * @return {?}
         */
        get: function () {
            return this.mode === 'side';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdLayoutNavListComponent.prototype, "routerEnabled", {
        /**
         * Checks if router was injected.
         * @return {?}
         */
        get: function () {
            return !!this._router && !!this.navigationRoute;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutNavListComponent.prototype.handleNavigationClick = function () {
        if (this.routerEnabled) {
            this._router.navigateByUrl(this.navigationRoute);
        }
    };
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdLayoutNavListComponent.prototype.toggle = function () {
        return this.sidenav.toggle(!this.sidenav.opened);
    };
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdLayoutNavListComponent.prototype.open = function () {
        return this.sidenav.open();
    };
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdLayoutNavListComponent.prototype.close = function () {
        return this.sidenav.close();
    };
    return TdLayoutNavListComponent;
}());
TdLayoutNavListComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-layout-nav-list',
                styles: [":host{\n  margin:0;\n  width:100%;\n  min-height:100%;\n  height:100%;\n  overflow:hidden;\n  -webkit-box-orient:vertical;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:column;\n          flex-direction:column;\n  -webkit-box-sizing:border-box;\n          box-sizing:border-box;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-flex:1;\n      -ms-flex:1;\n          flex:1; }\n  :host .td-layout-nav-list-wrapper{\n    -webkit-box-orient:vertical;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:column;\n            flex-direction:column;\n    -webkit-box-sizing:border-box;\n            box-sizing:border-box;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-flex:1;\n        -ms-flex:1;\n            flex:1;\n    position:relative;\n    overflow:auto;\n    -webkit-overflow-scrolling:touch; }\n    :host .td-layout-nav-list-wrapper .td-layout-nav-list-toolbar-content{\n      -webkit-box-orient:horizontal;\n      -webkit-box-direction:normal;\n          -ms-flex-direction:row;\n              flex-direction:row;\n      -webkit-box-sizing:border-box;\n              box-sizing:border-box;\n      display:-webkit-box;\n      display:-ms-flexbox;\n      display:flex;\n      -webkit-box-align:center;\n          -ms-flex-align:center;\n              align-items:center;\n      -ms-flex-line-pack:center;\n          align-content:center;\n      max-width:100%;\n      -webkit-box-pack:start;\n          -ms-flex-pack:start;\n              justify-content:start; }\n    :host .td-layout-nav-list-wrapper .td-layout-nav-list-content{\n      text-align:start;\n      -webkit-box-flex:1;\n          -ms-flex:1;\n              flex:1;\n      display:block;\n      position:relative;\n      overflow:auto;\n      -webkit-overflow-scrolling:touch; }\n    :host .td-layout-nav-list-wrapper .td-layout-nav-list-main{\n      -webkit-box-orient:vertical;\n      -webkit-box-direction:normal;\n          -ms-flex-direction:column;\n              flex-direction:column;\n      -webkit-box-sizing:border-box;\n              box-sizing:border-box;\n      display:-webkit-box;\n      display:-ms-flexbox;\n      display:flex;\n      margin:0;\n      width:100%;\n      min-height:100%;\n      height:100%;\n      position:relative;\n      overflow:auto; }\n      :host .td-layout-nav-list-wrapper .td-layout-nav-list-main .td-layout-nav-list-content{\n        display:block;\n        position:relative;\n        overflow:auto;\n        -webkit-overflow-scrolling:touch;\n        -webkit-box-flex:1;\n            -ms-flex:1;\n                flex:1; }\n    :host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list{\n      -webkit-box-flex:1;\n          -ms-flex:1;\n              flex:1; }\n      :host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list > mat-sidenav.mat-drawer-opened, :host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list > mat-sidenav.mat-drawer-opening, :host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list > mat-sidenav.mat-drawer-closed, :host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list > mat-sidenav.mat-drawer-closing{\n        -webkit-box-shadow:none;\n                box-shadow:none; }\n:host ::ng-deep mat-sidenav-container.td-layout-nav-list{ }\n  :host ::ng-deep mat-sidenav-container.td-layout-nav-list > .mat-drawer-content{\n    -webkit-box-flex:1;\n        -ms-flex-positive:1;\n            flex-grow:1; }\n  :host ::ng-deep mat-sidenav-container.td-layout-nav-list > mat-sidenav{\n    -webkit-box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n            box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n    -webkit-box-sizing:border-box;\n            box-sizing:border-box;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-orient:vertical;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:column;\n            flex-direction:column; }\n"],
                template: "<div class=\"td-layout-nav-list-wrapper\">\n  <mat-sidenav-container fullscreen class=\"td-layout-nav-list\">\n    <mat-sidenav #sidenav\n                position=\"start\"\n                [mode]=\"mode\"\n                [opened]=\"opened\"\n                [disableClose]=\"disableClose\"\n                [style.max-width]=\"sidenavWidth\"\n                [style.min-width]=\"sidenavWidth\">\n      <mat-toolbar [color]=\"color\">\n        <ng-content select=\"[td-menu-button]\"></ng-content>\n        <span *ngIf=\"icon || logo || toolbarTitle\"\n              class=\"td-layout-nav-list-toolbar-content\"\n              [class.cursor-pointer]=\"routerEnabled\"\n              (click)=\"handleNavigationClick()\">\n          <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon>\n          <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n          <span *ngIf=\"toolbarTitle\">{{toolbarTitle}}</span>\n        </span>\n        <ng-content select=\"[td-sidenav-toolbar-content]\"></ng-content>\n      </mat-toolbar>\n      <div class=\"td-layout-nav-list-content\" cdkScrollable>\n        <ng-content select=\"[td-sidenav-content]\"></ng-content>\n      </div>\n    </mat-sidenav>\n    <div class=\"td-layout-nav-list-main\">\n      <mat-toolbar [color]=\"color\">\n        <ng-content select=\"[td-toolbar-content]\"></ng-content>\n      </mat-toolbar>\n      <div class=\"td-layout-nav-list-content\" cdkScrollable>\n        <ng-content></ng-content>\n      </div>\n      <ng-content select=\"td-layout-footer-inner\"></ng-content>\n    </div>\n  </mat-sidenav-container>\n</div>\n<ng-content select=\"td-layout-footer\"></ng-content>",
            },] },
];
/** @nocollapse */
TdLayoutNavListComponent.ctorParameters = function () { return [
    { type: Router, decorators: [{ type: Optional },] },
]; };
TdLayoutNavListComponent.propDecorators = {
    "sidenav": [{ type: ViewChild, args: [MatSidenav,] },],
    "toolbarTitle": [{ type: Input, args: ['toolbarTitle',] },],
    "icon": [{ type: Input, args: ['icon',] },],
    "logo": [{ type: Input, args: ['logo',] },],
    "color": [{ type: Input, args: ['color',] },],
    "mode": [{ type: Input, args: ['mode',] },],
    "opened": [{ type: Input, args: ['opened',] },],
    "sidenavWidth": [{ type: Input, args: ['sidenavWidth',] },],
    "navigationRoute": [{ type: Input, args: ['navigationRoute',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdLayoutNavListToggleDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdLayoutNavListToggleDirective, _super);
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    function TdLayoutNavListToggleDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutNavListToggleDirective.prototype, "tdLayoutNavListToggle", {
        /**
         * @param {?} tdLayoutNavListToggle
         * @return {?}
         */
        set: function (tdLayoutNavListToggle) {
            this.disabled = !((tdLayoutNavListToggle) === '' || tdLayoutNavListToggle);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutNavListToggleDirective.prototype.onClick = function () {
        this._layout.toggle();
    };
    return TdLayoutNavListToggleDirective;
}(LayoutToggle));
TdLayoutNavListToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutNavListToggle]',
            },] },
];
/** @nocollapse */
TdLayoutNavListToggleDirective.ctorParameters = function () { return [
    { type: TdLayoutNavListComponent, decorators: [{ type: Inject, args: [forwardRef(function () { return TdLayoutNavListComponent; }),] },] },
    { type: Renderer2, },
    { type: ElementRef, },
]; };
TdLayoutNavListToggleDirective.propDecorators = {
    "tdLayoutNavListToggle": [{ type: Input, args: ['tdLayoutNavListToggle',] },],
};
var TdLayoutNavListCloseDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdLayoutNavListCloseDirective, _super);
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    function TdLayoutNavListCloseDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutNavListCloseDirective.prototype, "tdLayoutNavListClose", {
        /**
         * @param {?} tdLayoutNavListClose
         * @return {?}
         */
        set: function (tdLayoutNavListClose) {
            this.disabled = !((tdLayoutNavListClose) === '' || tdLayoutNavListClose);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutNavListCloseDirective.prototype.onClick = function () {
        this._layout.close();
    };
    return TdLayoutNavListCloseDirective;
}(LayoutToggle));
TdLayoutNavListCloseDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutNavListClose]',
            },] },
];
/** @nocollapse */
TdLayoutNavListCloseDirective.ctorParameters = function () { return [
    { type: TdLayoutNavListComponent, decorators: [{ type: Inject, args: [forwardRef(function () { return TdLayoutNavListComponent; }),] },] },
    { type: Renderer2, },
    { type: ElementRef, },
]; };
TdLayoutNavListCloseDirective.propDecorators = {
    "tdLayoutNavListClose": [{ type: Input, args: ['tdLayoutNavListClose',] },],
};
var TdLayoutNavListOpenDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdLayoutNavListOpenDirective, _super);
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    function TdLayoutNavListOpenDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutNavListOpenDirective.prototype, "tdLayoutNavListOpen", {
        /**
         * @param {?} tdLayoutNavListOpen
         * @return {?}
         */
        set: function (tdLayoutNavListOpen) {
            this.disabled = !((tdLayoutNavListOpen) === '' || tdLayoutNavListOpen);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutNavListOpenDirective.prototype.onClick = function () {
        this._layout.open();
    };
    return TdLayoutNavListOpenDirective;
}(LayoutToggle));
TdLayoutNavListOpenDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutNavListOpen]',
            },] },
];
/** @nocollapse */
TdLayoutNavListOpenDirective.ctorParameters = function () { return [
    { type: TdLayoutNavListComponent, decorators: [{ type: Inject, args: [forwardRef(function () { return TdLayoutNavListComponent; }),] },] },
    { type: Renderer2, },
    { type: ElementRef, },
]; };
TdLayoutNavListOpenDirective.propDecorators = {
    "tdLayoutNavListOpen": [{ type: Input, args: ['tdLayoutNavListOpen',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdLayoutCardOverComponent = /** @class */ (function () {
    function TdLayoutCardOverComponent() {
        /**
         * cardWidth?: string
         *
         * Card flex width in %.
         * Defaults to 70%.
         */
        this.cardWidth = 70;
        /**
         * color?: string
         *
         * toolbar color option: primary | accent | warn.
         * If [color] is not set, primary is used.
         */
        this.color = 'primary';
    }
    return TdLayoutCardOverComponent;
}());
TdLayoutCardOverComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-layout-card-over',
                styles: [":host{\n  position:relative;\n  display:block;\n  z-index:2;\n  width:100%;\n  min-height:100%;\n  height:100%; }\n  :host [td-after-card]{\n    display:block; }\n.td-layout-card-over-wrapper{\n  margin:-64px;\n  margin-left:0;\n  margin-right:0;\n  width:100%;\n  min-height:100%;\n  height:100%; }\n  @media (min-width: 600px){\n    .td-layout-card-over-wrapper{\n      -webkit-box-orient:horizontal;\n      -webkit-box-direction:normal;\n          -ms-flex-direction:row;\n              flex-direction:row;\n      -webkit-box-sizing:border-box;\n              box-sizing:border-box;\n      display:-webkit-box;\n      display:-ms-flexbox;\n      display:flex;\n      -webkit-box-align:start;\n          -ms-flex-align:start;\n              align-items:flex-start;\n      -ms-flex-line-pack:start;\n          align-content:flex-start;\n      -webkit-box-pack:center;\n          -ms-flex-pack:center;\n              justify-content:center; }\n      .td-layout-card-over-wrapper .td-layout-card-over{\n        max-height:100%;\n        -webkit-box-sizing:border-box;\n                box-sizing:border-box; } }\n  @media (max-width: 599px){\n    .td-layout-card-over-wrapper .td-layout-card-over{\n      max-width:100% !important; } }\n"],
                template: "<mat-toolbar [color]=\"color\">\n</mat-toolbar>\n<div class=\"td-layout-card-over-wrapper\">\n  <div class=\"td-layout-card-over\"\n        [style.max-width.%]=\"cardWidth\"\n        [style.flex]=\"'1 1 ' + cardWidth + '%'\"\n        [style.-ms-flex]=\"'1 1 ' + cardWidth + '%'\"\n        [style.-webkit-box-flex]=\"1\">\n    <mat-card>\n      <mat-card-title *ngIf=\"cardTitle\">{{cardTitle}}</mat-card-title>\n      <mat-card-subtitle *ngIf=\"cardSubtitle\">{{cardSubtitle}}</mat-card-subtitle>\n      <mat-divider *ngIf=\"cardTitle || cardSubtitle\"></mat-divider>\n      <ng-content></ng-content>\n    </mat-card>\n    <ng-content select=\"[td-after-card]\"></ng-content>\n  </div>\n</div>\n",
            },] },
];
/** @nocollapse */
TdLayoutCardOverComponent.ctorParameters = function () { return []; };
TdLayoutCardOverComponent.propDecorators = {
    "cardTitle": [{ type: Input, args: ['cardTitle',] },],
    "cardSubtitle": [{ type: Input, args: ['cardSubtitle',] },],
    "cardWidth": [{ type: Input, args: ['cardWidth',] },],
    "color": [{ type: Input, args: ['color',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdLayoutManageListComponent = /** @class */ (function () {
    function TdLayoutManageListComponent() {
        /**
         * mode?: 'side', 'push' or 'over'
         *
         * The mode or styling of the sidenav.
         * Defaults to "side".
         * See "MatSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.mode = 'side';
        /**
         * opened?: boolean
         *
         * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
         * Defaults to "true".
         *
         * See "MatSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.opened = true;
        /**
         * sidenavWidth?: string
         *
         * Sets the "width" of the sidenav in either "px" or "%"
         * Defaults to "257px".
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.sidenavWidth = '257px';
    }
    Object.defineProperty(TdLayoutManageListComponent.prototype, "disableClose", {
        /**
         * Checks if `ESC` should close the sidenav
         * Should only close it for `push` and `over` modes
         * @return {?}
         */
        get: function () {
            return this.mode === 'side';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdLayoutManageListComponent.prototype.toggle = function () {
        return this.sidenav.toggle(!this.sidenav.opened);
    };
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdLayoutManageListComponent.prototype.open = function () {
        return this.sidenav.open();
    };
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdLayoutManageListComponent.prototype.close = function () {
        return this.sidenav.close();
    };
    return TdLayoutManageListComponent;
}());
TdLayoutManageListComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-layout-manage-list',
                styles: [":host{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  margin:0;\n  width:100%;\n  min-height:100%;\n  height:100%;\n  overflow:hidden; }\n  :host mat-sidenav-container.td-layout-manage-list{\n    -webkit-box-flex:1;\n        -ms-flex:1;\n            flex:1; }\n    :host mat-sidenav-container.td-layout-manage-list > mat-sidenav.mat-drawer-opened, :host mat-sidenav-container.td-layout-manage-list > mat-sidenav.mat-drawer-opening, :host mat-sidenav-container.td-layout-manage-list > mat-sidenav.mat-drawer-closed, :host mat-sidenav-container.td-layout-manage-list > mat-sidenav.mat-drawer-closing{\n      -webkit-box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.2);\n              box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.2); }\n  :host .td-layout-manage-list-sidenav{\n    text-align:start;\n    -webkit-box-flex:1;\n        -ms-flex:1;\n            flex:1;\n    display:block;\n    position:relative;\n    overflow:auto;\n    -webkit-overflow-scrolling:touch; }\n  :host .td-layout-manage-list-main{\n    margin:0;\n    width:100%;\n    min-height:100%;\n    height:100%;\n    position:relative;\n    overflow:auto;\n    -webkit-box-orient:vertical;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:column;\n            flex-direction:column;\n    -webkit-box-sizing:border-box;\n            box-sizing:border-box;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex; }\n    :host .td-layout-manage-list-main .td-layout-manage-list-content{\n      display:block;\n      position:relative;\n      overflow:auto;\n      -webkit-overflow-scrolling:touch;\n      -webkit-box-flex:1;\n          -ms-flex:1;\n              flex:1; }\n:host ::ng-deep mat-sidenav-container.td-layout-manage-list{ }\n  :host ::ng-deep mat-sidenav-container.td-layout-manage-list > .mat-drawer-content{\n    -webkit-box-flex:1;\n        -ms-flex-positive:1;\n            flex-grow:1; }\n  :host ::ng-deep mat-sidenav-container.td-layout-manage-list > mat-sidenav{\n    -webkit-box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n            box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n    -webkit-box-sizing:border-box;\n            box-sizing:border-box;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-orient:vertical;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:column;\n            flex-direction:column; }\n:host ::ng-deep mat-nav-list a[mat-list-item] .mat-list-item-content{\n  font-size:14px; }\n:host ::ng-deep .mat-toolbar{\n  font-weight:400; }\n"],
                template: "<mat-sidenav-container fullscreen class=\"td-layout-manage-list\">\n  <mat-sidenav #sidenav\n              position=\"start\"\n              [mode]=\"mode\"\n              [opened]=\"opened\"\n              [disableClose]=\"disableClose\"\n              [style.max-width]=\"sidenavWidth\"\n              [style.min-width]=\"sidenavWidth\">\n    <ng-content select=\"mat-toolbar[td-sidenav-content]\"></ng-content>\n    <div class=\"td-layout-manage-list-sidenav\" cdkScrollable>\n      <ng-content select=\"[td-sidenav-content]\"></ng-content>\n    </div>\n  </mat-sidenav>\n  <div class=\"td-layout-manage-list-main\">\n    <ng-content select=\"mat-toolbar\"></ng-content>\n    <div class=\"td-layout-manage-list-content\" cdkScrollable>\n      <ng-content></ng-content>\n    </div>\n    <ng-content select=\"td-layout-footer-inner\"></ng-content>\n  </div>\n</mat-sidenav-container>\n",
            },] },
];
/** @nocollapse */
TdLayoutManageListComponent.ctorParameters = function () { return []; };
TdLayoutManageListComponent.propDecorators = {
    "sidenav": [{ type: ViewChild, args: [MatSidenav,] },],
    "mode": [{ type: Input, args: ['mode',] },],
    "opened": [{ type: Input, args: ['opened',] },],
    "sidenavWidth": [{ type: Input, args: ['sidenavWidth',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdLayoutManageListToggleDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdLayoutManageListToggleDirective, _super);
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    function TdLayoutManageListToggleDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutManageListToggleDirective.prototype, "tdLayoutManageListToggle", {
        /**
         * @param {?} tdLayoutManageListToggle
         * @return {?}
         */
        set: function (tdLayoutManageListToggle) {
            this.disabled = !((tdLayoutManageListToggle) === '' || tdLayoutManageListToggle);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutManageListToggleDirective.prototype.onClick = function () {
        this._layout.toggle();
    };
    return TdLayoutManageListToggleDirective;
}(LayoutToggle));
TdLayoutManageListToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutManageListToggle]',
            },] },
];
/** @nocollapse */
TdLayoutManageListToggleDirective.ctorParameters = function () { return [
    { type: TdLayoutManageListComponent, decorators: [{ type: Inject, args: [forwardRef(function () { return TdLayoutManageListComponent; }),] },] },
    { type: Renderer2, },
    { type: ElementRef, },
]; };
TdLayoutManageListToggleDirective.propDecorators = {
    "tdLayoutManageListToggle": [{ type: Input, args: ['tdLayoutManageListToggle',] },],
};
var TdLayoutManageListCloseDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdLayoutManageListCloseDirective, _super);
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    function TdLayoutManageListCloseDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutManageListCloseDirective.prototype, "tdLayoutManageListClose", {
        /**
         * @param {?} tdLayoutManageListClose
         * @return {?}
         */
        set: function (tdLayoutManageListClose) {
            this.disabled = !((tdLayoutManageListClose) === '' || tdLayoutManageListClose);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutManageListCloseDirective.prototype.onClick = function () {
        this._layout.close();
    };
    return TdLayoutManageListCloseDirective;
}(LayoutToggle));
TdLayoutManageListCloseDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutManageListClose]',
            },] },
];
/** @nocollapse */
TdLayoutManageListCloseDirective.ctorParameters = function () { return [
    { type: TdLayoutManageListComponent, decorators: [{ type: Inject, args: [forwardRef(function () { return TdLayoutManageListComponent; }),] },] },
    { type: Renderer2, },
    { type: ElementRef, },
]; };
TdLayoutManageListCloseDirective.propDecorators = {
    "tdLayoutManageListClose": [{ type: Input, args: ['tdLayoutManageListClose',] },],
};
var TdLayoutManageListOpenDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdLayoutManageListOpenDirective, _super);
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    function TdLayoutManageListOpenDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutManageListOpenDirective.prototype, "tdLayoutManageListOpen", {
        /**
         * @param {?} tdLayoutManageListOpen
         * @return {?}
         */
        set: function (tdLayoutManageListOpen) {
            this.disabled = !((tdLayoutManageListOpen) === '' || tdLayoutManageListOpen);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutManageListOpenDirective.prototype.onClick = function () {
        this._layout.open();
    };
    return TdLayoutManageListOpenDirective;
}(LayoutToggle));
TdLayoutManageListOpenDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutManageListOpen]',
            },] },
];
/** @nocollapse */
TdLayoutManageListOpenDirective.ctorParameters = function () { return [
    { type: TdLayoutManageListComponent, decorators: [{ type: Inject, args: [forwardRef(function () { return TdLayoutManageListComponent; }),] },] },
    { type: Renderer2, },
    { type: ElementRef, },
]; };
TdLayoutManageListOpenDirective.propDecorators = {
    "tdLayoutManageListOpen": [{ type: Input, args: ['tdLayoutManageListOpen',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdLayoutFooterComponent = /** @class */ (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function TdLayoutFooterComponent(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-layout-footer');
    }
    Object.defineProperty(TdLayoutFooterComponent.prototype, "color", {
        /**
         * @return {?}
         */
        get: function () {
            return this._color;
        },
        /**
         * color?: string
         *
         * Optional color option: primary | accent | warn.
         * @param {?} color
         * @return {?}
         */
        set: function (color) {
            if (color) {
                this._renderer.removeClass(this._elementRef.nativeElement, 'mat-' + this._color);
                this._color = color;
                this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + this._color);
            }
        },
        enumerable: true,
        configurable: true
    });
    return TdLayoutFooterComponent;
}());
TdLayoutFooterComponent.decorators = [
    { type: Component, args: [{
                /* tslint:disable-next-line */
                selector: 'td-layout-footer,td-layout-footer-inner',
                styles: [":host{\n  display:block;\n  padding:10px 16px; }\n"],
                template: "<ng-content></ng-content>\n",
            },] },
];
/** @nocollapse */
TdLayoutFooterComponent.ctorParameters = function () { return [
    { type: Renderer2, },
    { type: ElementRef, },
]; };
TdLayoutFooterComponent.propDecorators = {
    "color": [{ type: Input, args: ['color',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdNavigationDrawerMenuDirective = /** @class */ (function () {
    function TdNavigationDrawerMenuDirective() {
    }
    return TdNavigationDrawerMenuDirective;
}());
TdNavigationDrawerMenuDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-navigation-drawer-menu]',
            },] },
];
/** @nocollapse */
TdNavigationDrawerMenuDirective.ctorParameters = function () { return []; };
var TdNavigationDrawerToolbarDirective = /** @class */ (function () {
    function TdNavigationDrawerToolbarDirective() {
    }
    return TdNavigationDrawerToolbarDirective;
}());
TdNavigationDrawerToolbarDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-navigation-drawer-toolbar]',
            },] },
];
/** @nocollapse */
TdNavigationDrawerToolbarDirective.ctorParameters = function () { return []; };
var TdNavigationDrawerComponent = /** @class */ (function () {
    /**
     * @param {?} _layout
     * @param {?} _router
     * @param {?} _sanitize
     */
    function TdNavigationDrawerComponent(_layout, _router, _sanitize) {
        this._layout = _layout;
        this._router = _router;
        this._sanitize = _sanitize;
        this._menuToggled = false;
    }
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "menuToggled", {
        /**
         * @return {?}
         */
        get: function () {
            return this._menuToggled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "isMenuAvailable", {
        /**
         * Checks if there is a [TdNavigationDrawerMenuDirective] has content.
         * @return {?}
         */
        get: function () {
            return this._drawerMenu ? this._drawerMenu.length > 0 : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "isCustomToolbar", {
        /**
         * Checks if there is a [TdNavigationDrawerToolbarDirective] has content.
         * @return {?}
         */
        get: function () {
            return this._toolbar ? this._toolbar.length > 0 : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "isBackgroundAvailable", {
        /**
         * Checks if there is a background image for the toolbar.
         * @return {?}
         */
        get: function () {
            return !!this._backgroundImage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "backgroundUrl", {
        /**
         * backgroundUrl?: SafeResourceUrl
         *
         * image to be displayed as the background of the toolbar.
         * URL used will be sanitized, but it should be always from a trusted source to avoid XSS.
         * @param {?} backgroundUrl
         * @return {?}
         */
        // TODO angular complains with warnings if this is type [SafeResourceUrl].. so we will make it <any> until its fixed.
        // https://github.com/webpack/webpack/issues/2977
        set: function (backgroundUrl) {
            if (backgroundUrl) {
                var /** @type {?} */ sanitizedUrl = this._sanitize.sanitize(SecurityContext.RESOURCE_URL, backgroundUrl);
                this._backgroundImage = this._sanitize.sanitize(SecurityContext.STYLE, 'url(' + sanitizedUrl + ')');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "backgroundImage", {
        /**
         * @return {?}
         */
        get: function () {
            return this._backgroundImage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "routerEnabled", {
        /**
         * Checks if router was injected.
         * @return {?}
         */
        get: function () {
            return !!this._router && !!this.navigationRoute;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdNavigationDrawerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._closeSubscription = this._layout.sidenav.openedChange.subscribe(function (opened) {
            if (!opened) {
                _this._menuToggled = false;
            }
        });
    };
    /**
     * @return {?}
     */
    TdNavigationDrawerComponent.prototype.ngOnDestroy = function () {
        if (this._closeSubscription) {
            this._closeSubscription.unsubscribe();
            this._closeSubscription = undefined;
        }
    };
    /**
     * @return {?}
     */
    TdNavigationDrawerComponent.prototype.toggleMenu = function () {
        if (this.isMenuAvailable) {
            this._menuToggled = !this._menuToggled;
        }
    };
    /**
     * @return {?}
     */
    TdNavigationDrawerComponent.prototype.handleNavigationClick = function () {
        if (this.routerEnabled) {
            this._router.navigateByUrl(this.navigationRoute);
            this.close();
        }
    };
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdNavigationDrawerComponent.prototype.toggle = function () {
        return this._layout.toggle();
    };
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdNavigationDrawerComponent.prototype.open = function () {
        return this._layout.open();
    };
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdNavigationDrawerComponent.prototype.close = function () {
        return this._layout.close();
    };
    return TdNavigationDrawerComponent;
}());
TdNavigationDrawerComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-navigation-drawer',
                styles: [":host{\n  width:100%; }\n  :host .td-navigation-drawer-content.ng-animating,\n  :host .td-navigation-drawer-menu-content.ng-animating{\n    overflow:hidden; }\n  :host mat-toolbar{\n    padding:16px; }\n    :host mat-toolbar.td-toolbar-background{\n      background-repeat:no-repeat;\n      background-size:cover; }\n    :host mat-toolbar.td-nagivation-drawer-toolbar{\n      -webkit-box-orient:vertical;\n      -webkit-box-direction:normal;\n          -ms-flex-direction:column;\n              flex-direction:column;\n      height:auto !important;\n      display:block !important; }\n    :host mat-toolbar .td-navigation-drawer-toolbar-content{\n      -webkit-box-orient:horizontal;\n      -webkit-box-direction:normal;\n          -ms-flex-direction:row;\n              flex-direction:row;\n      -webkit-box-sizing:border-box;\n              box-sizing:border-box;\n      display:-webkit-box;\n      display:-ms-flexbox;\n      display:flex;\n      -webkit-box-align:center;\n          -ms-flex-align:center;\n              align-items:center;\n      -ms-flex-line-pack:center;\n          align-content:center;\n      max-width:100%;\n      -webkit-box-pack:start;\n          -ms-flex-pack:start;\n              justify-content:start; }\n    :host mat-toolbar .td-navigation-drawer-menu-toggle{\n      -webkit-box-orient:horizontal;\n      -webkit-box-direction:normal;\n          -ms-flex-direction:row;\n              flex-direction:row;\n      -webkit-box-sizing:border-box;\n              box-sizing:border-box;\n      display:-webkit-box;\n      display:-ms-flexbox;\n      display:flex; }\n      :host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-label{\n        -webkit-box-flex:1;\n            -ms-flex:1;\n                flex:1; }\n      :host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-menu-button{\n        height:24px;\n        line-height:24px;\n        width:24px; }\n  :host > div{\n    overflow:hidden; }\n"],
                template: "<mat-toolbar [color]=\"color\"\n             [style.background-image]=\"backgroundImage\"\n             [class.td-toolbar-background]=\"!!isBackgroundAvailable\"\n             class=\"td-nagivation-drawer-toolbar\">\n  <ng-content select=\"[td-navigation-drawer-toolbar]\"></ng-content>\n  <ng-container *ngIf=\"!isCustomToolbar\">\n    <div *ngIf=\"icon || logo || sidenavTitle\"\n          class=\"td-navigation-drawer-toolbar-content\"\n          [class.cursor-pointer]=\"routerEnabled\"\n          (click)=\"handleNavigationClick()\">\n      <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon>\n      <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n      <span *ngIf=\"sidenavTitle\" class=\"td-navigation-drawer-title\">{{sidenavTitle}}</span>\n    </div>\n    <div class=\"td-navigation-drawer-name\" *ngIf=\"email && name\">{{name}}</div>\n    <div class=\"td-navigation-drawer-menu-toggle\"\n        href\n        *ngIf=\"email || name\"\n        (click)=\"toggleMenu()\">\n      <span class=\"td-navigation-drawer-label\">{{email || name}}</span>\n      <button mat-icon-button class=\"td-navigation-drawer-menu-button\" *ngIf=\"isMenuAvailable\">\n        <mat-icon *ngIf=\"!menuToggled\">arrow_drop_down</mat-icon>\n        <mat-icon *ngIf=\"menuToggled\">arrow_drop_up</mat-icon>\n      </button>\n    </div>\n  </ng-container>\n</mat-toolbar>\n<div class=\"td-navigation-drawer-content\" [@tdCollapse]=\"menuToggled\">\n  <ng-content></ng-content>\n</div>\n<div class=\"td-navigation-drawer-menu-content\" [@tdCollapse]=\"!menuToggled\">\n  <ng-content select=\"[td-navigation-drawer-menu]\"></ng-content>\n</div>\n",
                animations: [TdCollapseAnimation()],
            },] },
];
/** @nocollapse */
TdNavigationDrawerComponent.ctorParameters = function () { return [
    { type: TdLayoutComponent, decorators: [{ type: Inject, args: [forwardRef(function () { return TdLayoutComponent; }),] },] },
    { type: Router, decorators: [{ type: Optional },] },
    { type: DomSanitizer, },
]; };
TdNavigationDrawerComponent.propDecorators = {
    "_drawerMenu": [{ type: ContentChildren, args: [TdNavigationDrawerMenuDirective,] },],
    "_toolbar": [{ type: ContentChildren, args: [TdNavigationDrawerToolbarDirective,] },],
    "sidenavTitle": [{ type: Input, args: ['sidenavTitle',] },],
    "icon": [{ type: Input, args: ['icon',] },],
    "logo": [{ type: Input, args: ['logo',] },],
    "color": [{ type: Input, args: ['color',] },],
    "navigationRoute": [{ type: Input, args: ['navigationRoute',] },],
    "backgroundUrl": [{ type: Input, args: ['backgroundUrl',] },],
    "name": [{ type: Input, args: ['name',] },],
    "email": [{ type: Input, args: ['email',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TD_LAYOUTS = [
    TdLayoutComponent,
    TdLayoutToggleDirective,
    TdLayoutCloseDirective,
    TdLayoutOpenDirective,
    TdLayoutNavComponent,
    TdLayoutNavListComponent,
    TdLayoutNavListToggleDirective,
    TdLayoutNavListCloseDirective,
    TdLayoutNavListOpenDirective,
    TdLayoutCardOverComponent,
    TdLayoutManageListComponent,
    TdLayoutManageListToggleDirective,
    TdLayoutManageListCloseDirective,
    TdLayoutManageListOpenDirective,
    TdLayoutFooterComponent,
    TdNavigationDrawerComponent,
    TdNavigationDrawerMenuDirective,
    TdNavigationDrawerToolbarDirective,
];
var CovalentLayoutModule = /** @class */ (function () {
    function CovalentLayoutModule() {
    }
    return CovalentLayoutModule;
}());
CovalentLayoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ScrollDispatchModule,
                    MatSidenavModule,
                    MatToolbarModule,
                    MatButtonModule,
                    MatIconModule,
                    MatCardModule,
                    MatDividerModule,
                ],
                declarations: [
                    TD_LAYOUTS,
                ],
                exports: [
                    TD_LAYOUTS,
                ],
            },] },
];
/** @nocollapse */
CovalentLayoutModule.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */
export { CovalentLayoutModule, TdLayoutComponent, TdLayoutToggleDirective, TdLayoutCloseDirective, TdLayoutOpenDirective, LayoutToggleBase, _TdLayoutToggleMixinBase, LayoutToggle, TdLayoutCardOverComponent, TdLayoutFooterComponent, TdLayoutManageListComponent, TdLayoutManageListToggleDirective, TdLayoutManageListCloseDirective, TdLayoutManageListOpenDirective, TdLayoutNavComponent, TdLayoutNavListComponent, TdLayoutNavListToggleDirective, TdLayoutNavListCloseDirective, TdLayoutNavListOpenDirective, TdNavigationDrawerMenuDirective, TdNavigationDrawerToolbarDirective, TdNavigationDrawerComponent };
//# sourceMappingURL=covalent-core-layout.js.map
