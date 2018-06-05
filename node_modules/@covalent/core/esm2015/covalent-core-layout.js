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
class TdLayoutComponent {
    constructor() {
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
    /**
     * Checks if `ESC` should close the sidenav
     * Should only close it for `push` and `over` modes
     * @return {?}
     */
    get disableClose() {
        return this.mode === 'side';
    }
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    toggle() {
        return this.sidenav.toggle(!this.sidenav.opened);
    }
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    open() {
        return this.sidenav.open();
    }
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    close() {
        return this.sidenav.close();
    }
}
TdLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-layout',
                styles: [`:host{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  margin:0;
  width:100%;
  min-height:100%;
  height:100%;
  overflow:hidden; }
  :host ::ng-deep > mat-sidenav-container > mat-sidenav{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
        -ms-flex-direction:column;
            flex-direction:column; }
`],
                template: `<mat-sidenav-container fullscreen>
  <mat-sidenav #sidenav
              class="td-layout-sidenav"
              [mode]="mode"
              [opened]="opened"
              [style.max-width]="sidenavWidth"
              [style.min-width]="sidenavWidth"
              [disableClose]="disableClose">
    <ng-content select="td-navigation-drawer"></ng-content>
    <ng-content select="[td-sidenav-content]"></ng-content>
  </mat-sidenav>
  <ng-content></ng-content>
</mat-sidenav-container>
`,
            },] },
];
/** @nocollapse */
TdLayoutComponent.ctorParameters = () => [];
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

class LayoutToggleBase {
}
/* tslint:disable-next-line */
const _TdLayoutToggleMixinBase = mixinDisabled(LayoutToggleBase);
/**
 * @abstract
 */
class LayoutToggle extends _TdLayoutToggleMixinBase {
    /**
     * @param {?} _layout
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    constructor(_layout, _renderer, _elementRef) {
        super();
        this._layout = _layout;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._initialized = false;
        this._hideWhenOpened = false;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-layout-menu-button');
    }
    /**
     * hideWhenOpened?: boolean
     * When this is set to true, the host will be hidden when
     * the sidenav is opened.
     * @param {?} hideWhenOpened
     * @return {?}
     */
    set hideWhenOpened(hideWhenOpened) {
        this._hideWhenOpened = hideWhenOpened;
        if (this._initialized) {
            this._toggleVisibility();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._initialized = true;
        this._toggleSubs = this._layout.sidenav._animationStarted.subscribe(() => {
            this._toggleVisibility();
        });
        // execute toggleVisibility since the onOpenStart and onCloseStart
        // methods might not be executed always when the element is rendered
        this._toggleVisibility();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._toggleSubs) {
            this._toggleSubs.unsubscribe();
            this._toggleSubs = undefined;
        }
    }
    /**
     * Listens to host click event to trigger the layout toggle
     * @param {?} event
     * @return {?}
     */
    clickListener(event) {
        event.preventDefault();
        if (!this.disabled) {
            this.onClick();
        }
    }
    /**
     * @return {?}
     */
    _toggleVisibility() {
        if (this._layout.sidenav.opened && this._hideWhenOpened) {
            this._renderer.setStyle(this._elementRef.nativeElement, 'display', 'none');
        }
        else {
            this._renderer.setStyle(this._elementRef.nativeElement, 'display', '');
        }
    }
}
LayoutToggle.propDecorators = {
    "hideWhenOpened": [{ type: Input, args: ['hideWhenOpened',] },],
    "clickListener": [{ type: HostListener, args: ['click', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdLayoutToggleDirective extends LayoutToggle {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutToggle
     * @return {?}
     */
    set tdLayoutToggle(tdLayoutToggle) {
        this.disabled = !(/** @type {?} */ (tdLayoutToggle) === '' || tdLayoutToggle);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.toggle();
    }
}
TdLayoutToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutToggle]',
            },] },
];
/** @nocollapse */
TdLayoutToggleDirective.ctorParameters = () => [
    { type: TdLayoutComponent, decorators: [{ type: Inject, args: [forwardRef(() => TdLayoutComponent),] },] },
    { type: Renderer2, },
    { type: ElementRef, },
];
TdLayoutToggleDirective.propDecorators = {
    "tdLayoutToggle": [{ type: Input, args: ['tdLayoutToggle',] },],
};
class TdLayoutCloseDirective extends LayoutToggle {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutClose
     * @return {?}
     */
    set tdLayoutClose(tdLayoutClose) {
        this.disabled = !(/** @type {?} */ (tdLayoutClose) === '' || tdLayoutClose);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.close();
    }
}
TdLayoutCloseDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutClose]',
            },] },
];
/** @nocollapse */
TdLayoutCloseDirective.ctorParameters = () => [
    { type: TdLayoutComponent, decorators: [{ type: Inject, args: [forwardRef(() => TdLayoutComponent),] },] },
    { type: Renderer2, },
    { type: ElementRef, },
];
TdLayoutCloseDirective.propDecorators = {
    "tdLayoutClose": [{ type: Input, args: ['tdLayoutClose',] },],
};
class TdLayoutOpenDirective extends LayoutToggle {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutOpen
     * @return {?}
     */
    set tdLayoutClose(tdLayoutOpen) {
        this.disabled = !(/** @type {?} */ (tdLayoutOpen) === '' || tdLayoutOpen);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.open();
    }
}
TdLayoutOpenDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutOpen]',
            },] },
];
/** @nocollapse */
TdLayoutOpenDirective.ctorParameters = () => [
    { type: TdLayoutComponent, decorators: [{ type: Inject, args: [forwardRef(() => TdLayoutComponent),] },] },
    { type: Renderer2, },
    { type: ElementRef, },
];
TdLayoutOpenDirective.propDecorators = {
    "tdLayoutClose": [{ type: Input, args: ['tdLayoutOpen',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdLayoutNavComponent {
    /**
     * @param {?} _router
     */
    constructor(_router) {
        this._router = _router;
        /**
         * color?: string
         *
         * toolbar color option: primary | accent | warn.
         * If [color] is not set, primary is used.
         */
        this.color = 'primary';
    }
    /**
     * Checks if router was injected.
     * @return {?}
     */
    get routerEnabled() {
        return !!this._router && !!this.navigationRoute;
    }
    /**
     * @return {?}
     */
    handleNavigationClick() {
        if (this.routerEnabled) {
            this._router.navigateByUrl(this.navigationRoute);
        }
    }
}
TdLayoutNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-layout-nav',
                styles: [`.td-menu-button{
  margin-left:0; }
  ::ng-deep [dir='rtl'] .td-menu-button{
    margin-right:0;
    margin-left:6px; }
:host{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  margin:0;
  width:100%;
  min-height:100%;
  height:100%;
  overflow:hidden; }
  :host .td-layout-nav-wrapper{
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
        -ms-flex-direction:column;
            flex-direction:column;
    -webkit-box-sizing:border-box;
            box-sizing:border-box;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    margin:0;
    width:100%;
    min-height:100%;
    height:100%; }
    :host .td-layout-nav-wrapper .td-layout-nav-toolbar-content{
      -webkit-box-orient:horizontal;
      -webkit-box-direction:normal;
          -ms-flex-direction:row;
              flex-direction:row;
      -webkit-box-sizing:border-box;
              box-sizing:border-box;
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -webkit-box-align:center;
          -ms-flex-align:center;
              align-items:center;
      -ms-flex-line-pack:center;
          align-content:center;
      max-width:100%;
      -webkit-box-pack:start;
          -ms-flex-pack:start;
              justify-content:start; }
    :host .td-layout-nav-wrapper .td-layout-nav-content{
      -webkit-box-orient:vertical;
      -webkit-box-direction:normal;
          -ms-flex-direction:column;
              flex-direction:column;
      -webkit-box-sizing:border-box;
              box-sizing:border-box;
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -webkit-box-flex:1;
          -ms-flex:1;
              flex:1;
      position:relative;
      overflow:auto;
      -webkit-overflow-scrolling:touch; }
`],
                template: `<div class="td-layout-nav-wrapper">
  <mat-toolbar [color]="color">
    <ng-content select="[td-menu-button]"></ng-content>
    <span *ngIf="icon || logo || toolbarTitle"
          [class.cursor-pointer]="routerEnabled"
          (click)="handleNavigationClick()"
          class="td-layout-nav-toolbar-content">
      <mat-icon *ngIf="icon">{{icon}}</mat-icon>
      <mat-icon *ngIf="logo && !icon" class="mat-icon-logo" [svgIcon]="logo"></mat-icon>
      <span *ngIf="toolbarTitle">{{toolbarTitle}}</span>
    </span>
    <ng-content select="[td-toolbar-content]"></ng-content>
  </mat-toolbar>
  <div class="td-layout-nav-content" cdkScrollable>
    <ng-content></ng-content>
  </div>
  <ng-content select="td-layout-footer"></ng-content>
</div>
`,
            },] },
];
/** @nocollapse */
TdLayoutNavComponent.ctorParameters = () => [
    { type: Router, decorators: [{ type: Optional },] },
];
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
class TdLayoutNavListComponent {
    /**
     * @param {?} _router
     */
    constructor(_router) {
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
    /**
     * Checks if `ESC` should close the sidenav
     * Should only close it for `push` and `over` modes
     * @return {?}
     */
    get disableClose() {
        return this.mode === 'side';
    }
    /**
     * Checks if router was injected.
     * @return {?}
     */
    get routerEnabled() {
        return !!this._router && !!this.navigationRoute;
    }
    /**
     * @return {?}
     */
    handleNavigationClick() {
        if (this.routerEnabled) {
            this._router.navigateByUrl(this.navigationRoute);
        }
    }
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    toggle() {
        return this.sidenav.toggle(!this.sidenav.opened);
    }
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    open() {
        return this.sidenav.open();
    }
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    close() {
        return this.sidenav.close();
    }
}
TdLayoutNavListComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-layout-nav-list',
                styles: [`:host{
  margin:0;
  width:100%;
  min-height:100%;
  height:100%;
  overflow:hidden;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  -webkit-box-sizing:border-box;
          box-sizing:border-box;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-flex:1;
      -ms-flex:1;
          flex:1; }
  :host .td-layout-nav-list-wrapper{
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
        -ms-flex-direction:column;
            flex-direction:column;
    -webkit-box-sizing:border-box;
            box-sizing:border-box;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-flex:1;
        -ms-flex:1;
            flex:1;
    position:relative;
    overflow:auto;
    -webkit-overflow-scrolling:touch; }
    :host .td-layout-nav-list-wrapper .td-layout-nav-list-toolbar-content{
      -webkit-box-orient:horizontal;
      -webkit-box-direction:normal;
          -ms-flex-direction:row;
              flex-direction:row;
      -webkit-box-sizing:border-box;
              box-sizing:border-box;
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -webkit-box-align:center;
          -ms-flex-align:center;
              align-items:center;
      -ms-flex-line-pack:center;
          align-content:center;
      max-width:100%;
      -webkit-box-pack:start;
          -ms-flex-pack:start;
              justify-content:start; }
    :host .td-layout-nav-list-wrapper .td-layout-nav-list-content{
      text-align:start;
      -webkit-box-flex:1;
          -ms-flex:1;
              flex:1;
      display:block;
      position:relative;
      overflow:auto;
      -webkit-overflow-scrolling:touch; }
    :host .td-layout-nav-list-wrapper .td-layout-nav-list-main{
      -webkit-box-orient:vertical;
      -webkit-box-direction:normal;
          -ms-flex-direction:column;
              flex-direction:column;
      -webkit-box-sizing:border-box;
              box-sizing:border-box;
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      margin:0;
      width:100%;
      min-height:100%;
      height:100%;
      position:relative;
      overflow:auto; }
      :host .td-layout-nav-list-wrapper .td-layout-nav-list-main .td-layout-nav-list-content{
        display:block;
        position:relative;
        overflow:auto;
        -webkit-overflow-scrolling:touch;
        -webkit-box-flex:1;
            -ms-flex:1;
                flex:1; }
    :host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list{
      -webkit-box-flex:1;
          -ms-flex:1;
              flex:1; }
      :host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list > mat-sidenav.mat-drawer-opened, :host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list > mat-sidenav.mat-drawer-opening, :host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list > mat-sidenav.mat-drawer-closed, :host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list > mat-sidenav.mat-drawer-closing{
        -webkit-box-shadow:none;
                box-shadow:none; }
:host ::ng-deep mat-sidenav-container.td-layout-nav-list{ }
  :host ::ng-deep mat-sidenav-container.td-layout-nav-list > .mat-drawer-content{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1; }
  :host ::ng-deep mat-sidenav-container.td-layout-nav-list > mat-sidenav{
    -webkit-box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
            box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
    -webkit-box-sizing:border-box;
            box-sizing:border-box;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
        -ms-flex-direction:column;
            flex-direction:column; }
`],
                template: `<div class="td-layout-nav-list-wrapper">
  <mat-sidenav-container fullscreen class="td-layout-nav-list">
    <mat-sidenav #sidenav
                position="start"
                [mode]="mode"
                [opened]="opened"
                [disableClose]="disableClose"
                [style.max-width]="sidenavWidth"
                [style.min-width]="sidenavWidth">
      <mat-toolbar [color]="color">
        <ng-content select="[td-menu-button]"></ng-content>
        <span *ngIf="icon || logo || toolbarTitle"
              class="td-layout-nav-list-toolbar-content"
              [class.cursor-pointer]="routerEnabled"
              (click)="handleNavigationClick()">
          <mat-icon *ngIf="icon">{{icon}}</mat-icon>
          <mat-icon *ngIf="logo && !icon" class="mat-icon-logo" [svgIcon]="logo"></mat-icon>
          <span *ngIf="toolbarTitle">{{toolbarTitle}}</span>
        </span>
        <ng-content select="[td-sidenav-toolbar-content]"></ng-content>
      </mat-toolbar>
      <div class="td-layout-nav-list-content" cdkScrollable>
        <ng-content select="[td-sidenav-content]"></ng-content>
      </div>
    </mat-sidenav>
    <div class="td-layout-nav-list-main">
      <mat-toolbar [color]="color">
        <ng-content select="[td-toolbar-content]"></ng-content>
      </mat-toolbar>
      <div class="td-layout-nav-list-content" cdkScrollable>
        <ng-content></ng-content>
      </div>
      <ng-content select="td-layout-footer-inner"></ng-content>
    </div>
  </mat-sidenav-container>
</div>
<ng-content select="td-layout-footer"></ng-content>`,
            },] },
];
/** @nocollapse */
TdLayoutNavListComponent.ctorParameters = () => [
    { type: Router, decorators: [{ type: Optional },] },
];
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
class TdLayoutNavListToggleDirective extends LayoutToggle {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutNavListToggle
     * @return {?}
     */
    set tdLayoutNavListToggle(tdLayoutNavListToggle) {
        this.disabled = !(/** @type {?} */ (tdLayoutNavListToggle) === '' || tdLayoutNavListToggle);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.toggle();
    }
}
TdLayoutNavListToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutNavListToggle]',
            },] },
];
/** @nocollapse */
TdLayoutNavListToggleDirective.ctorParameters = () => [
    { type: TdLayoutNavListComponent, decorators: [{ type: Inject, args: [forwardRef(() => TdLayoutNavListComponent),] },] },
    { type: Renderer2, },
    { type: ElementRef, },
];
TdLayoutNavListToggleDirective.propDecorators = {
    "tdLayoutNavListToggle": [{ type: Input, args: ['tdLayoutNavListToggle',] },],
};
class TdLayoutNavListCloseDirective extends LayoutToggle {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutNavListClose
     * @return {?}
     */
    set tdLayoutNavListClose(tdLayoutNavListClose) {
        this.disabled = !(/** @type {?} */ (tdLayoutNavListClose) === '' || tdLayoutNavListClose);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.close();
    }
}
TdLayoutNavListCloseDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutNavListClose]',
            },] },
];
/** @nocollapse */
TdLayoutNavListCloseDirective.ctorParameters = () => [
    { type: TdLayoutNavListComponent, decorators: [{ type: Inject, args: [forwardRef(() => TdLayoutNavListComponent),] },] },
    { type: Renderer2, },
    { type: ElementRef, },
];
TdLayoutNavListCloseDirective.propDecorators = {
    "tdLayoutNavListClose": [{ type: Input, args: ['tdLayoutNavListClose',] },],
};
class TdLayoutNavListOpenDirective extends LayoutToggle {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutNavListOpen
     * @return {?}
     */
    set tdLayoutNavListOpen(tdLayoutNavListOpen) {
        this.disabled = !(/** @type {?} */ (tdLayoutNavListOpen) === '' || tdLayoutNavListOpen);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.open();
    }
}
TdLayoutNavListOpenDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutNavListOpen]',
            },] },
];
/** @nocollapse */
TdLayoutNavListOpenDirective.ctorParameters = () => [
    { type: TdLayoutNavListComponent, decorators: [{ type: Inject, args: [forwardRef(() => TdLayoutNavListComponent),] },] },
    { type: Renderer2, },
    { type: ElementRef, },
];
TdLayoutNavListOpenDirective.propDecorators = {
    "tdLayoutNavListOpen": [{ type: Input, args: ['tdLayoutNavListOpen',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdLayoutCardOverComponent {
    constructor() {
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
}
TdLayoutCardOverComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-layout-card-over',
                styles: [`:host{
  position:relative;
  display:block;
  z-index:2;
  width:100%;
  min-height:100%;
  height:100%; }
  :host [td-after-card]{
    display:block; }
.td-layout-card-over-wrapper{
  margin:-64px;
  margin-left:0;
  margin-right:0;
  width:100%;
  min-height:100%;
  height:100%; }
  @media (min-width: 600px){
    .td-layout-card-over-wrapper{
      -webkit-box-orient:horizontal;
      -webkit-box-direction:normal;
          -ms-flex-direction:row;
              flex-direction:row;
      -webkit-box-sizing:border-box;
              box-sizing:border-box;
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -webkit-box-align:start;
          -ms-flex-align:start;
              align-items:flex-start;
      -ms-flex-line-pack:start;
          align-content:flex-start;
      -webkit-box-pack:center;
          -ms-flex-pack:center;
              justify-content:center; }
      .td-layout-card-over-wrapper .td-layout-card-over{
        max-height:100%;
        -webkit-box-sizing:border-box;
                box-sizing:border-box; } }
  @media (max-width: 599px){
    .td-layout-card-over-wrapper .td-layout-card-over{
      max-width:100% !important; } }
`],
                template: `<mat-toolbar [color]="color">
</mat-toolbar>
<div class="td-layout-card-over-wrapper">
  <div class="td-layout-card-over"
        [style.max-width.%]="cardWidth"
        [style.flex]="'1 1 ' + cardWidth + '%'"
        [style.-ms-flex]="'1 1 ' + cardWidth + '%'"
        [style.-webkit-box-flex]="1">
    <mat-card>
      <mat-card-title *ngIf="cardTitle">{{cardTitle}}</mat-card-title>
      <mat-card-subtitle *ngIf="cardSubtitle">{{cardSubtitle}}</mat-card-subtitle>
      <mat-divider *ngIf="cardTitle || cardSubtitle"></mat-divider>
      <ng-content></ng-content>
    </mat-card>
    <ng-content select="[td-after-card]"></ng-content>
  </div>
</div>
`,
            },] },
];
/** @nocollapse */
TdLayoutCardOverComponent.ctorParameters = () => [];
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
class TdLayoutManageListComponent {
    constructor() {
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
    /**
     * Checks if `ESC` should close the sidenav
     * Should only close it for `push` and `over` modes
     * @return {?}
     */
    get disableClose() {
        return this.mode === 'side';
    }
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    toggle() {
        return this.sidenav.toggle(!this.sidenav.opened);
    }
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    open() {
        return this.sidenav.open();
    }
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    close() {
        return this.sidenav.close();
    }
}
TdLayoutManageListComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-layout-manage-list',
                styles: [`:host{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  margin:0;
  width:100%;
  min-height:100%;
  height:100%;
  overflow:hidden; }
  :host mat-sidenav-container.td-layout-manage-list{
    -webkit-box-flex:1;
        -ms-flex:1;
            flex:1; }
    :host mat-sidenav-container.td-layout-manage-list > mat-sidenav.mat-drawer-opened, :host mat-sidenav-container.td-layout-manage-list > mat-sidenav.mat-drawer-opening, :host mat-sidenav-container.td-layout-manage-list > mat-sidenav.mat-drawer-closed, :host mat-sidenav-container.td-layout-manage-list > mat-sidenav.mat-drawer-closing{
      -webkit-box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.2);
              box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.2); }
  :host .td-layout-manage-list-sidenav{
    text-align:start;
    -webkit-box-flex:1;
        -ms-flex:1;
            flex:1;
    display:block;
    position:relative;
    overflow:auto;
    -webkit-overflow-scrolling:touch; }
  :host .td-layout-manage-list-main{
    margin:0;
    width:100%;
    min-height:100%;
    height:100%;
    position:relative;
    overflow:auto;
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
        -ms-flex-direction:column;
            flex-direction:column;
    -webkit-box-sizing:border-box;
            box-sizing:border-box;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex; }
    :host .td-layout-manage-list-main .td-layout-manage-list-content{
      display:block;
      position:relative;
      overflow:auto;
      -webkit-overflow-scrolling:touch;
      -webkit-box-flex:1;
          -ms-flex:1;
              flex:1; }
:host ::ng-deep mat-sidenav-container.td-layout-manage-list{ }
  :host ::ng-deep mat-sidenav-container.td-layout-manage-list > .mat-drawer-content{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1; }
  :host ::ng-deep mat-sidenav-container.td-layout-manage-list > mat-sidenav{
    -webkit-box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
            box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
    -webkit-box-sizing:border-box;
            box-sizing:border-box;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
        -ms-flex-direction:column;
            flex-direction:column; }
:host ::ng-deep mat-nav-list a[mat-list-item] .mat-list-item-content{
  font-size:14px; }
:host ::ng-deep .mat-toolbar{
  font-weight:400; }
`],
                template: `<mat-sidenav-container fullscreen class="td-layout-manage-list">
  <mat-sidenav #sidenav
              position="start"
              [mode]="mode"
              [opened]="opened"
              [disableClose]="disableClose"
              [style.max-width]="sidenavWidth"
              [style.min-width]="sidenavWidth">
    <ng-content select="mat-toolbar[td-sidenav-content]"></ng-content>
    <div class="td-layout-manage-list-sidenav" cdkScrollable>
      <ng-content select="[td-sidenav-content]"></ng-content>
    </div>
  </mat-sidenav>
  <div class="td-layout-manage-list-main">
    <ng-content select="mat-toolbar"></ng-content>
    <div class="td-layout-manage-list-content" cdkScrollable>
      <ng-content></ng-content>
    </div>
    <ng-content select="td-layout-footer-inner"></ng-content>
  </div>
</mat-sidenav-container>
`,
            },] },
];
/** @nocollapse */
TdLayoutManageListComponent.ctorParameters = () => [];
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
class TdLayoutManageListToggleDirective extends LayoutToggle {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutManageListToggle
     * @return {?}
     */
    set tdLayoutManageListToggle(tdLayoutManageListToggle) {
        this.disabled = !(/** @type {?} */ (tdLayoutManageListToggle) === '' || tdLayoutManageListToggle);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.toggle();
    }
}
TdLayoutManageListToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutManageListToggle]',
            },] },
];
/** @nocollapse */
TdLayoutManageListToggleDirective.ctorParameters = () => [
    { type: TdLayoutManageListComponent, decorators: [{ type: Inject, args: [forwardRef(() => TdLayoutManageListComponent),] },] },
    { type: Renderer2, },
    { type: ElementRef, },
];
TdLayoutManageListToggleDirective.propDecorators = {
    "tdLayoutManageListToggle": [{ type: Input, args: ['tdLayoutManageListToggle',] },],
};
class TdLayoutManageListCloseDirective extends LayoutToggle {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutManageListClose
     * @return {?}
     */
    set tdLayoutManageListClose(tdLayoutManageListClose) {
        this.disabled = !(/** @type {?} */ (tdLayoutManageListClose) === '' || tdLayoutManageListClose);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.close();
    }
}
TdLayoutManageListCloseDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutManageListClose]',
            },] },
];
/** @nocollapse */
TdLayoutManageListCloseDirective.ctorParameters = () => [
    { type: TdLayoutManageListComponent, decorators: [{ type: Inject, args: [forwardRef(() => TdLayoutManageListComponent),] },] },
    { type: Renderer2, },
    { type: ElementRef, },
];
TdLayoutManageListCloseDirective.propDecorators = {
    "tdLayoutManageListClose": [{ type: Input, args: ['tdLayoutManageListClose',] },],
};
class TdLayoutManageListOpenDirective extends LayoutToggle {
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(layout, renderer, elementRef) {
        super(layout, renderer, elementRef);
    }
    /**
     * @param {?} tdLayoutManageListOpen
     * @return {?}
     */
    set tdLayoutManageListOpen(tdLayoutManageListOpen) {
        this.disabled = !(/** @type {?} */ (tdLayoutManageListOpen) === '' || tdLayoutManageListOpen);
    }
    /**
     * @return {?}
     */
    onClick() {
        this._layout.open();
    }
}
TdLayoutManageListOpenDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLayoutManageListOpen]',
            },] },
];
/** @nocollapse */
TdLayoutManageListOpenDirective.ctorParameters = () => [
    { type: TdLayoutManageListComponent, decorators: [{ type: Inject, args: [forwardRef(() => TdLayoutManageListComponent),] },] },
    { type: Renderer2, },
    { type: ElementRef, },
];
TdLayoutManageListOpenDirective.propDecorators = {
    "tdLayoutManageListOpen": [{ type: Input, args: ['tdLayoutManageListOpen',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdLayoutFooterComponent {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    constructor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-layout-footer');
    }
    /**
     * color?: string
     *
     * Optional color option: primary | accent | warn.
     * @param {?} color
     * @return {?}
     */
    set color(color) {
        if (color) {
            this._renderer.removeClass(this._elementRef.nativeElement, 'mat-' + this._color);
            this._color = color;
            this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + this._color);
        }
    }
    /**
     * @return {?}
     */
    get color() {
        return this._color;
    }
}
TdLayoutFooterComponent.decorators = [
    { type: Component, args: [{
                /* tslint:disable-next-line */
                selector: 'td-layout-footer,td-layout-footer-inner',
                styles: [`:host{
  display:block;
  padding:10px 16px; }
`],
                template: `<ng-content></ng-content>
`,
            },] },
];
/** @nocollapse */
TdLayoutFooterComponent.ctorParameters = () => [
    { type: Renderer2, },
    { type: ElementRef, },
];
TdLayoutFooterComponent.propDecorators = {
    "color": [{ type: Input, args: ['color',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdNavigationDrawerMenuDirective {
}
TdNavigationDrawerMenuDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-navigation-drawer-menu]',
            },] },
];
/** @nocollapse */
TdNavigationDrawerMenuDirective.ctorParameters = () => [];
class TdNavigationDrawerToolbarDirective {
}
TdNavigationDrawerToolbarDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-navigation-drawer-toolbar]',
            },] },
];
/** @nocollapse */
TdNavigationDrawerToolbarDirective.ctorParameters = () => [];
class TdNavigationDrawerComponent {
    /**
     * @param {?} _layout
     * @param {?} _router
     * @param {?} _sanitize
     */
    constructor(_layout, _router, _sanitize) {
        this._layout = _layout;
        this._router = _router;
        this._sanitize = _sanitize;
        this._menuToggled = false;
    }
    /**
     * @return {?}
     */
    get menuToggled() {
        return this._menuToggled;
    }
    /**
     * Checks if there is a [TdNavigationDrawerMenuDirective] has content.
     * @return {?}
     */
    get isMenuAvailable() {
        return this._drawerMenu ? this._drawerMenu.length > 0 : false;
    }
    /**
     * Checks if there is a [TdNavigationDrawerToolbarDirective] has content.
     * @return {?}
     */
    get isCustomToolbar() {
        return this._toolbar ? this._toolbar.length > 0 : false;
    }
    /**
     * Checks if there is a background image for the toolbar.
     * @return {?}
     */
    get isBackgroundAvailable() {
        return !!this._backgroundImage;
    }
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
    set backgroundUrl(backgroundUrl) {
        if (backgroundUrl) {
            let /** @type {?} */ sanitizedUrl = this._sanitize.sanitize(SecurityContext.RESOURCE_URL, backgroundUrl);
            this._backgroundImage = this._sanitize.sanitize(SecurityContext.STYLE, 'url(' + sanitizedUrl + ')');
        }
    }
    /**
     * @return {?}
     */
    get backgroundImage() {
        return this._backgroundImage;
    }
    /**
     * Checks if router was injected.
     * @return {?}
     */
    get routerEnabled() {
        return !!this._router && !!this.navigationRoute;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._closeSubscription = this._layout.sidenav.openedChange.subscribe((opened) => {
            if (!opened) {
                this._menuToggled = false;
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._closeSubscription) {
            this._closeSubscription.unsubscribe();
            this._closeSubscription = undefined;
        }
    }
    /**
     * @return {?}
     */
    toggleMenu() {
        if (this.isMenuAvailable) {
            this._menuToggled = !this._menuToggled;
        }
    }
    /**
     * @return {?}
     */
    handleNavigationClick() {
        if (this.routerEnabled) {
            this._router.navigateByUrl(this.navigationRoute);
            this.close();
        }
    }
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    toggle() {
        return this._layout.toggle();
    }
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    open() {
        return this._layout.open();
    }
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    close() {
        return this._layout.close();
    }
}
TdNavigationDrawerComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-navigation-drawer',
                styles: [`:host{
  width:100%; }
  :host .td-navigation-drawer-content.ng-animating,
  :host .td-navigation-drawer-menu-content.ng-animating{
    overflow:hidden; }
  :host mat-toolbar{
    padding:16px; }
    :host mat-toolbar.td-toolbar-background{
      background-repeat:no-repeat;
      background-size:cover; }
    :host mat-toolbar.td-nagivation-drawer-toolbar{
      -webkit-box-orient:vertical;
      -webkit-box-direction:normal;
          -ms-flex-direction:column;
              flex-direction:column;
      height:auto !important;
      display:block !important; }
    :host mat-toolbar .td-navigation-drawer-toolbar-content{
      -webkit-box-orient:horizontal;
      -webkit-box-direction:normal;
          -ms-flex-direction:row;
              flex-direction:row;
      -webkit-box-sizing:border-box;
              box-sizing:border-box;
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -webkit-box-align:center;
          -ms-flex-align:center;
              align-items:center;
      -ms-flex-line-pack:center;
          align-content:center;
      max-width:100%;
      -webkit-box-pack:start;
          -ms-flex-pack:start;
              justify-content:start; }
    :host mat-toolbar .td-navigation-drawer-menu-toggle{
      -webkit-box-orient:horizontal;
      -webkit-box-direction:normal;
          -ms-flex-direction:row;
              flex-direction:row;
      -webkit-box-sizing:border-box;
              box-sizing:border-box;
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex; }
      :host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-label{
        -webkit-box-flex:1;
            -ms-flex:1;
                flex:1; }
      :host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-menu-button{
        height:24px;
        line-height:24px;
        width:24px; }
  :host > div{
    overflow:hidden; }
`],
                template: `<mat-toolbar [color]="color"
             [style.background-image]="backgroundImage"
             [class.td-toolbar-background]="!!isBackgroundAvailable"
             class="td-nagivation-drawer-toolbar">
  <ng-content select="[td-navigation-drawer-toolbar]"></ng-content>
  <ng-container *ngIf="!isCustomToolbar">
    <div *ngIf="icon || logo || sidenavTitle"
          class="td-navigation-drawer-toolbar-content"
          [class.cursor-pointer]="routerEnabled"
          (click)="handleNavigationClick()">
      <mat-icon *ngIf="icon">{{icon}}</mat-icon>
      <mat-icon *ngIf="logo && !icon" class="mat-icon-logo" [svgIcon]="logo"></mat-icon>
      <span *ngIf="sidenavTitle" class="td-navigation-drawer-title">{{sidenavTitle}}</span>
    </div>
    <div class="td-navigation-drawer-name" *ngIf="email && name">{{name}}</div>
    <div class="td-navigation-drawer-menu-toggle"
        href
        *ngIf="email || name"
        (click)="toggleMenu()">
      <span class="td-navigation-drawer-label">{{email || name}}</span>
      <button mat-icon-button class="td-navigation-drawer-menu-button" *ngIf="isMenuAvailable">
        <mat-icon *ngIf="!menuToggled">arrow_drop_down</mat-icon>
        <mat-icon *ngIf="menuToggled">arrow_drop_up</mat-icon>
      </button>
    </div>
  </ng-container>
</mat-toolbar>
<div class="td-navigation-drawer-content" [@tdCollapse]="menuToggled">
  <ng-content></ng-content>
</div>
<div class="td-navigation-drawer-menu-content" [@tdCollapse]="!menuToggled">
  <ng-content select="[td-navigation-drawer-menu]"></ng-content>
</div>
`,
                animations: [TdCollapseAnimation()],
            },] },
];
/** @nocollapse */
TdNavigationDrawerComponent.ctorParameters = () => [
    { type: TdLayoutComponent, decorators: [{ type: Inject, args: [forwardRef(() => TdLayoutComponent),] },] },
    { type: Router, decorators: [{ type: Optional },] },
    { type: DomSanitizer, },
];
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
const TD_LAYOUTS = [
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
class CovalentLayoutModule {
}
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
CovalentLayoutModule.ctorParameters = () => [];

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
