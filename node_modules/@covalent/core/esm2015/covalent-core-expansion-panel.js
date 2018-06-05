import { Component, Directive, Input, Output, TemplateRef, ViewContainerRef, ContentChild, ElementRef, Renderer2, EventEmitter, NgModule } from '@angular/core';
import { TemplatePortalDirective, PortalModule } from '@angular/cdk/portal';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { TdCollapseAnimation, mixinDisabled, mixinDisableRipple, TdRotateAnimation } from '@covalent/core/common';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdExpansionPanelHeaderDirective extends TemplatePortalDirective {
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    constructor(templateRef, viewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}
TdExpansionPanelHeaderDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-expansion-panel-header]ng-template',
            },] },
];
/** @nocollapse */
TdExpansionPanelHeaderDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
];
class TdExpansionPanelLabelDirective extends TemplatePortalDirective {
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    constructor(templateRef, viewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}
TdExpansionPanelLabelDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-expansion-panel-label]ng-template',
            },] },
];
/** @nocollapse */
TdExpansionPanelLabelDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
];
class TdExpansionPanelSublabelDirective extends TemplatePortalDirective {
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    constructor(templateRef, viewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}
TdExpansionPanelSublabelDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-expansion-panel-sublabel]ng-template',
            },] },
];
/** @nocollapse */
TdExpansionPanelSublabelDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
];
class TdExpansionPanelSummaryComponent {
}
TdExpansionPanelSummaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-expansion-summary',
                template: '<ng-content></ng-content>',
            },] },
];
/** @nocollapse */
TdExpansionPanelSummaryComponent.ctorParameters = () => [];
class TdExpansionPanelBase {
}
/* tslint:disable-next-line */
const _TdExpansionPanelMixinBase = mixinDisableRipple(mixinDisabled(TdExpansionPanelBase));
class TdExpansionPanelComponent extends _TdExpansionPanelMixinBase {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    constructor(_renderer, _elementRef) {
        super();
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._expand = false;
        /**
         * expanded?: function
         * Event emitted when [TdExpansionPanelComponent] is expanded.
         */
        this.expanded = new EventEmitter();
        /**
         * collapsed?: function
         * Event emitted when [TdExpansionPanelComponent] is collapsed.
         */
        this.collapsed = new EventEmitter();
        this._renderer.addClass(this._elementRef.nativeElement, 'td-expansion-panel');
    }
    /**
     * expand?: boolean
     * Toggles [TdExpansionPanelComponent] between expand/collapse.
     * @param {?} expand
     * @return {?}
     */
    set expand(expand) {
        this._setExpand(coerceBooleanProperty(expand));
    }
    /**
     * @return {?}
     */
    get expand() {
        return this._expand;
    }
    /**
     * Method executed when [TdExpansionPanelComponent] is clicked.
     * @return {?}
     */
    clickEvent() {
        this._setExpand(!this._expand);
    }
    /**
     * Toggle expand state of [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    toggle() {
        return this._setExpand(!this._expand);
    }
    /**
     * Opens [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    open() {
        return this._setExpand(true);
    }
    /**
     * Closes [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    close() {
        return this._setExpand(false);
    }
    /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    onDisabledChange(v) {
        if (v && this._expand) {
            this._expand = false;
            this._onCollapsed();
        }
    }
    /**
     * Method to change expand state internally and emit the [onExpanded] event if 'true' or [onCollapsed]
     * event if 'false'. (Blocked if [disabled] is 'true')
     * @param {?} newExpand
     * @return {?}
     */
    _setExpand(newExpand) {
        if (this.disabled) {
            return false;
        }
        if (this._expand !== newExpand) {
            this._expand = newExpand;
            if (newExpand) {
                this._renderer.addClass(this._elementRef.nativeElement, 'td-expanded');
                this._onExpanded();
            }
            else {
                this._renderer.removeClass(this._elementRef.nativeElement, 'td-expanded');
                this._onCollapsed();
            }
            return true;
        }
        return false;
    }
    /**
     * @return {?}
     */
    _onExpanded() {
        this.expanded.emit(undefined);
    }
    /**
     * @return {?}
     */
    _onCollapsed() {
        this.collapsed.emit(undefined);
    }
}
TdExpansionPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-expansion-panel',
                styles: [`:host{
  display:block; }
  :host .td-expansion-panel-header{
    position:relative;
    outline:none; }
    :host .td-expansion-panel-header:focus:not(.mat-disabled), :host .td-expansion-panel-header:hover:not(.mat-disabled){
      cursor:pointer; }
    :host .td-expansion-panel-header .td-expansion-panel-header-content{
      height:48px;
      padding:0 24px;
      -webkit-box-sizing:border-box;
              box-sizing:border-box;
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -webkit-box-orient:horizontal;
      -webkit-box-direction:normal;
          -ms-flex-direction:row;
              flex-direction:row;
      -webkit-box-flex:1;
          -ms-flex:1;
              flex:1;
      -webkit-box-pack:start;
          -ms-flex-pack:start;
              justify-content:start;
      -webkit-box-align:center;
          -ms-flex-align:center;
              align-items:center;
      -ms-flex-line-pack:center;
          align-content:center;
      max-width:100%; }
      :host .td-expansion-panel-header .td-expansion-panel-header-content .td-expansion-label,
      :host .td-expansion-panel-header .td-expansion-panel-header-content .td-expansion-sublabel{
        -webkit-box-flex:1;
            -ms-flex:1;
                flex:1; }
  :host .td-expansion-content.ng-animating,
  :host .td-expansion-summary.ng-animating{
    overflow:hidden; }
.td-expansion-label,
.td-expansion-sublabel{
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  margin-right:16px; }
  ::ng-deep [dir='rtl'] .td-expansion-label, ::ng-deep [dir='rtl']
  .td-expansion-sublabel{
    margin-left:16px;
    margin-right:inherit; }
`],
                template: `<div class="td-expansion-panel-header"
      [class.mat-disabled]="disabled"
      matRipple
      [matRippleDisabled]="disabled || disableRipple"
      [tabIndex]="disabled? -1 : 0"
      (keydown.enter)="clickEvent()"
      (click)="clickEvent()">
  <ng-template [cdkPortalHost]="expansionPanelHeader"></ng-template>
  <div class="td-expansion-panel-header-content"
        [class.mat-disabled]="disabled"
        *ngIf="!expansionPanelHeader">
    <div *ngIf="label || expansionPanelLabel" class="td-expansion-label">
      <ng-template [cdkPortalHost]="expansionPanelLabel"></ng-template>
      <ng-template [ngIf]="!expansionPanelLabel">{{label}}</ng-template>
    </div>
    <div *ngIf="sublabel || expansionPanelSublabel" class="td-expansion-sublabel">
      <ng-template [cdkPortalHost]="expansionPanelSublabel"></ng-template>
      <ng-template [ngIf]="!expansionPanelSublabel">{{sublabel}}</ng-template>
    </div>
    <mat-icon class="td-expand-icon" *ngIf="!disabled" [@tdRotate]="expand">keyboard_arrow_down</mat-icon>
  </div>
</div>
<div class="td-expansion-content"
      [@tdCollapse]="!expand">
  <ng-content></ng-content>
</div>
<div class="td-expansion-summary"
      [@tdCollapse]="expand">
  <ng-content select="td-expansion-summary"></ng-content>
</div>
`,
                inputs: ['disabled', 'disableRipple'],
                animations: [
                    TdCollapseAnimation(),
                    TdRotateAnimation({ anchor: 'tdRotate' }),
                ],
            },] },
];
/** @nocollapse */
TdExpansionPanelComponent.ctorParameters = () => [
    { type: Renderer2, },
    { type: ElementRef, },
];
TdExpansionPanelComponent.propDecorators = {
    "expansionPanelHeader": [{ type: ContentChild, args: [TdExpansionPanelHeaderDirective,] },],
    "expansionPanelLabel": [{ type: ContentChild, args: [TdExpansionPanelLabelDirective,] },],
    "expansionPanelSublabel": [{ type: ContentChild, args: [TdExpansionPanelSublabelDirective,] },],
    "label": [{ type: Input },],
    "sublabel": [{ type: Input },],
    "expand": [{ type: Input, args: ['expand',] },],
    "expanded": [{ type: Output },],
    "collapsed": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdExpansionPanelGroupComponent {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    constructor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-expansion-panel-group');
    }
}
TdExpansionPanelGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-expansion-panel-group',
                styles: [``],
                template: `<ng-content></ng-content>`,
            },] },
];
/** @nocollapse */
TdExpansionPanelGroupComponent.ctorParameters = () => [
    { type: Renderer2, },
    { type: ElementRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const TD_EXPANSION_PANEL = [
    TdExpansionPanelGroupComponent,
    TdExpansionPanelComponent,
    TdExpansionPanelHeaderDirective,
    TdExpansionPanelLabelDirective,
    TdExpansionPanelSublabelDirective,
    TdExpansionPanelSummaryComponent,
];
class CovalentExpansionPanelModule {
}
CovalentExpansionPanelModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatRippleModule,
                    MatIconModule,
                    PortalModule,
                ],
                declarations: [
                    TD_EXPANSION_PANEL,
                ],
                exports: [
                    TD_EXPANSION_PANEL,
                ],
            },] },
];
/** @nocollapse */
CovalentExpansionPanelModule.ctorParameters = () => [];

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

export { CovalentExpansionPanelModule, TdExpansionPanelHeaderDirective, TdExpansionPanelLabelDirective, TdExpansionPanelSublabelDirective, TdExpansionPanelSummaryComponent, TdExpansionPanelBase, _TdExpansionPanelMixinBase, TdExpansionPanelComponent, TdExpansionPanelGroupComponent };
//# sourceMappingURL=covalent-core-expansion-panel.js.map
