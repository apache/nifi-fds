import { TemplateRef, ViewContainerRef, ElementRef, Renderer2 } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { ICanDisable, ICanDisableRipple } from '@covalent/core/common';
export declare class TdExpansionPanelHeaderDirective extends TemplatePortalDirective {
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
}
export declare class TdExpansionPanelLabelDirective extends TemplatePortalDirective {
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
}
export declare class TdExpansionPanelSublabelDirective extends TemplatePortalDirective {
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
}
export declare class TdExpansionPanelSummaryComponent {
}
export declare class TdExpansionPanelBase {
}
export declare const _TdExpansionPanelMixinBase: (new (...args: any[]) => ICanDisableRipple) & (new (...args: any[]) => ICanDisable) & typeof TdExpansionPanelBase;
export declare class TdExpansionPanelComponent extends _TdExpansionPanelMixinBase implements ICanDisable, ICanDisableRipple {
    private _renderer;
    private _elementRef;
    private _expand;
    expansionPanelHeader: TdExpansionPanelHeaderDirective;
    expansionPanelLabel: TdExpansionPanelLabelDirective;
    expansionPanelSublabel: TdExpansionPanelSublabelDirective;
    /**
     * label?: string
     * Sets label of [TdExpansionPanelComponent] header.
     * Defaults to 'Click to expand'
     */
    label: string;
    /**
     * sublabel?: string
     * Sets sublabel of [TdExpansionPanelComponent] header.
     */
    sublabel: string;
    /**
     * expand?: boolean
     * Toggles [TdExpansionPanelComponent] between expand/collapse.
     */
    set expand(expand: boolean);
    get expand(): boolean;
    /**
     * expanded?: function
     * Event emitted when [TdExpansionPanelComponent] is expanded.
     */
    expanded: EventEmitter<void>;
    /**
     * collapsed?: function
     * Event emitted when [TdExpansionPanelComponent] is collapsed.
     */
    collapsed: EventEmitter<void>;
    constructor(_renderer: Renderer2, _elementRef: ElementRef);
    /**
     * Method executed when [TdExpansionPanelComponent] is clicked.
     */
    clickEvent(): void;
    /**
     * Toggle expand state of [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     */
    toggle(): boolean;
    /**
     * Opens [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     */
    open(): boolean;
    /**
     * Closes [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     */
    close(): boolean;
    /** Method executed when the disabled value changes */
    onDisabledChange(v: boolean): void;
    /**
     * Method to change expand state internally and emit the [onExpanded] event if 'true' or [onCollapsed]
     * event if 'false'. (Blocked if [disabled] is 'true')
     */
    private _setExpand;
    private _onExpanded;
    private _onCollapsed;
}
