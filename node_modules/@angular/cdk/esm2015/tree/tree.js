import { isDataSource } from '@angular/cdk/collections';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Directive, ElementRef, Input, IterableDiffers, QueryList, ViewChild, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, isObservable, of as observableOf, Subject, } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CdkTreeNodeDef, CdkTreeNodeOutletContext } from './node';
import { CdkTreeNodeOutlet } from './outlet';
import { getTreeControlFunctionsMissingError, getTreeControlMissingError, getTreeMissingMatchingNodeDefError, getTreeMultipleDefaultNodeDefsError, getTreeNoValidDataSourceError } from './tree-errors';
import { coerceNumberProperty } from '@angular/cdk/coercion';
/**
 * CDK tree component that connects with a data source to retrieve data of type `T` and renders
 * dataNodes with hierarchy. Updates the dataNodes when new data is provided by the data source.
 */
export class CdkTree {
    constructor(_differs, _changeDetectorRef) {
        this._differs = _differs;
        this._changeDetectorRef = _changeDetectorRef;
        /** Subject that emits when the component has been destroyed. */
        this._onDestroy = new Subject();
        /** Level of nodes */
        this._levels = new Map();
        // TODO(tinayuangao): Setup a listener for scrolling, emit the calculated view to viewChange.
        //     Remove the MAX_VALUE in viewChange
        /**
         * Stream containing the latest information on what rows are being displayed on screen.
         * Can be used by the data source to as a heuristic of what data should be provided.
         */
        this.viewChange = new BehaviorSubject({ start: 0, end: Number.MAX_VALUE });
    }
    /**
     * Provides a stream containing the latest data array to render. Influenced by the tree's
     * stream of view window (what dataNodes are currently on screen).
     * Data source can be an observable of data array, or a data array to render.
     */
    get dataSource() { return this._dataSource; }
    set dataSource(dataSource) {
        if (this._dataSource !== dataSource) {
            this._switchDataSource(dataSource);
        }
    }
    ngOnInit() {
        this._dataDiffer = this._differs.find([]).create(this.trackBy);
        if (!this.treeControl && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getTreeControlMissingError();
        }
    }
    ngOnDestroy() {
        this._nodeOutlet.viewContainer.clear();
        this.viewChange.complete();
        this._onDestroy.next();
        this._onDestroy.complete();
        if (this._dataSource && typeof this._dataSource.disconnect === 'function') {
            this.dataSource.disconnect(this);
        }
        if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();
            this._dataSubscription = null;
        }
    }
    ngAfterContentChecked() {
        const defaultNodeDefs = this._nodeDefs.filter(def => !def.when);
        if (defaultNodeDefs.length > 1 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getTreeMultipleDefaultNodeDefsError();
        }
        this._defaultNodeDef = defaultNodeDefs[0];
        if (this.dataSource && this._nodeDefs && !this._dataSubscription) {
            this._observeRenderChanges();
        }
    }
    // TODO(tinayuangao): Work on keyboard traversal and actions, make sure it's working for RTL
    //     and nested trees.
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the node outlet. Otherwise start listening for new data.
     */
    _switchDataSource(dataSource) {
        if (this._dataSource && typeof this._dataSource.disconnect === 'function') {
            this.dataSource.disconnect(this);
        }
        if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();
            this._dataSubscription = null;
        }
        // Remove the all dataNodes if there is now no data source
        if (!dataSource) {
            this._nodeOutlet.viewContainer.clear();
        }
        this._dataSource = dataSource;
        if (this._nodeDefs) {
            this._observeRenderChanges();
        }
    }
    /** Set up a subscription for the data provided by the data source. */
    _observeRenderChanges() {
        let dataStream;
        if (isDataSource(this._dataSource)) {
            dataStream = this._dataSource.connect(this);
        }
        else if (isObservable(this._dataSource)) {
            dataStream = this._dataSource;
        }
        else if (Array.isArray(this._dataSource)) {
            dataStream = observableOf(this._dataSource);
        }
        if (dataStream) {
            this._dataSubscription = dataStream.pipe(takeUntil(this._onDestroy))
                .subscribe(data => this.renderNodeChanges(data));
        }
        else if (typeof ngDevMode === 'undefined' || ngDevMode) {
            throw getTreeNoValidDataSourceError();
        }
    }
    /** Check for changes made in the data and render each change (node added/removed/moved). */
    renderNodeChanges(data, dataDiffer = this._dataDiffer, viewContainer = this._nodeOutlet.viewContainer, parentData) {
        const changes = dataDiffer.diff(data);
        if (!changes) {
            return;
        }
        changes.forEachOperation((item, adjustedPreviousIndex, currentIndex) => {
            if (item.previousIndex == null) {
                this.insertNode(data[currentIndex], currentIndex, viewContainer, parentData);
            }
            else if (currentIndex == null) {
                viewContainer.remove(adjustedPreviousIndex);
                this._levels.delete(item.item);
            }
            else {
                const view = viewContainer.get(adjustedPreviousIndex);
                viewContainer.move(view, currentIndex);
            }
        });
        this._changeDetectorRef.detectChanges();
    }
    /**
     * Finds the matching node definition that should be used for this node data. If there is only
     * one node definition, it is returned. Otherwise, find the node definition that has a when
     * predicate that returns true with the data. If none return true, return the default node
     * definition.
     */
    _getNodeDef(data, i) {
        if (this._nodeDefs.length === 1) {
            return this._nodeDefs.first;
        }
        const nodeDef = this._nodeDefs.find(def => def.when && def.when(i, data)) || this._defaultNodeDef;
        if (!nodeDef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getTreeMissingMatchingNodeDefError();
        }
        return nodeDef;
    }
    /**
     * Create the embedded view for the data node template and place it in the correct index location
     * within the data node view container.
     */
    insertNode(nodeData, index, viewContainer, parentData) {
        const node = this._getNodeDef(nodeData, index);
        // Node context that will be provided to created embedded view
        const context = new CdkTreeNodeOutletContext(nodeData);
        // If the tree is flat tree, then use the `getLevel` function in flat tree control
        // Otherwise, use the level of parent node.
        if (this.treeControl.getLevel) {
            context.level = this.treeControl.getLevel(nodeData);
        }
        else if (typeof parentData !== 'undefined' && this._levels.has(parentData)) {
            context.level = this._levels.get(parentData) + 1;
        }
        else {
            context.level = 0;
        }
        this._levels.set(nodeData, context.level);
        // Use default tree nodeOutlet, or nested node's nodeOutlet
        const container = viewContainer ? viewContainer : this._nodeOutlet.viewContainer;
        container.createEmbeddedView(node.template, context, index);
        // Set the data to just created `CdkTreeNode`.
        // The `CdkTreeNode` created from `createEmbeddedView` will be saved in static variable
        //     `mostRecentTreeNode`. We get it from static variable and pass the node data to it.
        if (CdkTreeNode.mostRecentTreeNode) {
            CdkTreeNode.mostRecentTreeNode.data = nodeData;
        }
    }
}
CdkTree.decorators = [
    { type: Component, args: [{
                selector: 'cdk-tree',
                exportAs: 'cdkTree',
                template: `<ng-container cdkTreeNodeOutlet></ng-container>`,
                host: {
                    'class': 'cdk-tree',
                    'role': 'tree',
                },
                encapsulation: ViewEncapsulation.None,
                // The "OnPush" status for the `CdkTree` component is effectively a noop, so we are removing it.
                // The view for `CdkTree` consists entirely of templates declared in other views. As they are
                // declared elsewhere, they are checked when their declaration points are checked.
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default
            },] }
];
CdkTree.ctorParameters = () => [
    { type: IterableDiffers },
    { type: ChangeDetectorRef }
];
CdkTree.propDecorators = {
    dataSource: [{ type: Input }],
    treeControl: [{ type: Input }],
    trackBy: [{ type: Input }],
    _nodeOutlet: [{ type: ViewChild, args: [CdkTreeNodeOutlet, { static: true },] }],
    _nodeDefs: [{ type: ContentChildren, args: [CdkTreeNodeDef, {
                    // We need to use `descendants: true`, because Ivy will no longer match
                    // indirect descendants if it's left as false.
                    descendants: true
                },] }]
};
/**
 * Tree node for CdkTree. It contains the data in the tree node.
 */
export class CdkTreeNode {
    constructor(_elementRef, _tree) {
        this._elementRef = _elementRef;
        this._tree = _tree;
        /** Subject that emits when the component has been destroyed. */
        this._destroyed = new Subject();
        /** Emits when the node's data has changed. */
        this._dataChanges = new Subject();
        CdkTreeNode.mostRecentTreeNode = this;
        // The classes are directly added here instead of in the host property because classes on
        // the host property are not inherited with View Engine. It is not set as a @HostBinding because
        // it is not set by the time it's children nodes try to read the class from it.
        // TODO: move to host after View Engine deprecation
        this._elementRef.nativeElement.classList.add('cdk-tree-node');
        this.role = 'treeitem';
    }
    /**
     * The role of the tree node.
     * @deprecated The correct role is 'treeitem', 'group' should not be used. This input will be
     *   removed in a future version.
     * @breaking-change 12.0.0 Remove this input
     */
    get role() { return 'treeitem'; }
    set role(_role) {
        // TODO: move to host after View Engine deprecation
        this._elementRef.nativeElement.setAttribute('role', _role);
    }
    /** The tree node's data. */
    get data() { return this._data; }
    set data(value) {
        if (value !== this._data) {
            this._data = value;
            this._setRoleFromData();
            this._dataChanges.next();
        }
    }
    get isExpanded() {
        return this._tree.treeControl.isExpanded(this._data);
    }
    _setExpanded(_expanded) {
        this._isAriaExpanded = _expanded;
        this._elementRef.nativeElement.setAttribute('aria-expanded', `${_expanded}`);
    }
    get level() {
        // If the treeControl has a getLevel method, use it to get the level. Otherwise read the
        // aria-level off the parent node and use it as the level for this node (note aria-level is
        // 1-indexed, while this property is 0-indexed, so we don't need to increment).
        return this._tree.treeControl.getLevel ?
            this._tree.treeControl.getLevel(this._data) : this._parentNodeAriaLevel;
    }
    ngOnInit() {
        this._parentNodeAriaLevel = getParentNodeAriaLevel(this._elementRef.nativeElement);
        this._elementRef.nativeElement.setAttribute('aria-level', `${this.level + 1}`);
    }
    ngDoCheck() {
        // aria-expanded is be set here because the expanded state is stored in the tree control and
        // the node isn't aware when the state is changed.
        // It is not set using a @HostBinding because they sometimes get lost with Mixin based classes.
        // TODO: move to host after View Engine deprecation
        if (this.isExpanded != this._isAriaExpanded) {
            this._setExpanded(this.isExpanded);
        }
    }
    ngOnDestroy() {
        // If this is the last tree node being destroyed,
        // clear out the reference to avoid leaking memory.
        if (CdkTreeNode.mostRecentTreeNode === this) {
            CdkTreeNode.mostRecentTreeNode = null;
        }
        this._dataChanges.complete();
        this._destroyed.next();
        this._destroyed.complete();
    }
    /** Focuses the menu item. Implements for FocusableOption. */
    focus() {
        this._elementRef.nativeElement.focus();
    }
    // TODO: role should eventually just be set in the component host
    _setRoleFromData() {
        if (!this._tree.treeControl.isExpandable && !this._tree.treeControl.getChildren &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getTreeControlFunctionsMissingError();
        }
        this.role = 'treeitem';
    }
}
/**
 * The most recently created `CdkTreeNode`. We save it in static variable so we can retrieve it
 * in `CdkTree` and set the data to it.
 */
CdkTreeNode.mostRecentTreeNode = null;
CdkTreeNode.decorators = [
    { type: Directive, args: [{
                selector: 'cdk-tree-node',
                exportAs: 'cdkTreeNode',
            },] }
];
CdkTreeNode.ctorParameters = () => [
    { type: ElementRef },
    { type: CdkTree }
];
CdkTreeNode.propDecorators = {
    role: [{ type: Input }]
};
function getParentNodeAriaLevel(nodeElement) {
    let parent = nodeElement.parentElement;
    while (parent && !isNodeElement(parent)) {
        parent = parent.parentElement;
    }
    if (!parent) {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            throw Error('Incorrect tree structure containing detached node.');
        }
        else {
            return -1;
        }
    }
    else if (parent.classList.contains('cdk-nested-tree-node')) {
        return coerceNumberProperty(parent.getAttribute('aria-level'));
    }
    else {
        // The ancestor element is the cdk-tree itself
        return 0;
    }
}
function isNodeElement(element) {
    const classList = element.classList;
    return !!((classList === null || classList === void 0 ? void 0 : classList.contains('cdk-nested-tree-node')) || (classList === null || classList === void 0 ? void 0 : classList.contains('cdk-tree')));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvdHJlZS90cmVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBLE9BQU8sRUFBK0IsWUFBWSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDcEYsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixTQUFTLEVBRVQsVUFBVSxFQUNWLEtBQUssRUFHTCxlQUFlLEVBR2YsU0FBUyxFQUVULFNBQVMsRUFFVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLGVBQWUsRUFDZixZQUFZLEVBRVosRUFBRSxJQUFJLFlBQVksRUFDbEIsT0FBTyxHQUVSLE1BQU0sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXpDLE9BQU8sRUFBQyxjQUFjLEVBQUUsd0JBQXdCLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDaEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxtQ0FBbUMsRUFDbkMsMEJBQTBCLEVBQzFCLGtDQUFrQyxFQUNsQyxtQ0FBbUMsRUFDbkMsNkJBQTZCLEVBQzlCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRTNEOzs7R0FHRztBQWlCSCxNQUFNLE9BQU8sT0FBTztJQTREbEIsWUFBb0IsUUFBeUIsRUFDekIsa0JBQXFDO1FBRHJDLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUE1RHpELGdFQUFnRTtRQUN4RCxlQUFVLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQVd6QyxxQkFBcUI7UUFDYixZQUFPLEdBQW1CLElBQUksR0FBRyxFQUFhLENBQUM7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LENBQUM7S0FDakU7U0FBTTtRQUNMLDhDQUE4QztRQUM5QyxPQUFPLENBQUMsQ0FBQztLQUNWO0FBQ0gsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFDLE9BQW9CO0lBQ3pDLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7SUFDcEMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBLFNBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxRQUFRLENBQUMsc0JBQXNCLE9BQUssU0FBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLFFBQVEsQ0FBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDO0FBQzVGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7Rm9jdXNhYmxlT3B0aW9ufSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge0NvbGxlY3Rpb25WaWV3ZXIsIERhdGFTb3VyY2UsIGlzRGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIERpcmVjdGl2ZSxcbiAgRG9DaGVjayxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIEl0ZXJhYmxlQ2hhbmdlUmVjb3JkLFxuICBJdGVyYWJsZURpZmZlcixcbiAgSXRlcmFibGVEaWZmZXJzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUXVlcnlMaXN0LFxuICBUcmFja0J5RnVuY3Rpb24sXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBCZWhhdmlvclN1YmplY3QsXG4gIGlzT2JzZXJ2YWJsZSxcbiAgT2JzZXJ2YWJsZSxcbiAgb2YgYXMgb2JzZXJ2YWJsZU9mLFxuICBTdWJqZWN0LFxuICBTdWJzY3JpcHRpb24sXG59IGZyb20gJ3J4anMnO1xuaW1wb3J0IHt0YWtlVW50aWx9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7VHJlZUNvbnRyb2x9IGZyb20gJy4vY29udHJvbC90cmVlLWNvbnRyb2wnO1xuaW1wb3J0IHtDZGtUcmVlTm9kZURlZiwgQ2RrVHJlZU5vZGVPdXRsZXRDb250ZXh0fSBmcm9tICcuL25vZGUnO1xuaW1wb3J0IHtDZGtUcmVlTm9kZU91dGxldH0gZnJvbSAnLi9vdXRsZXQnO1xuaW1wb3J0IHtcbiAgZ2V0VHJlZUNvbnRyb2xGdW5jdGlvbnNNaXNzaW5nRXJyb3IsXG4gIGdldFRyZWVDb250cm9sTWlzc2luZ0Vycm9yLFxuICBnZXRUcmVlTWlzc2luZ01hdGNoaW5nTm9kZURlZkVycm9yLFxuICBnZXRUcmVlTXVsdGlwbGVEZWZhdWx0Tm9kZURlZnNFcnJvcixcbiAgZ2V0VHJlZU5vVmFsaWREYXRhU291cmNlRXJyb3Jcbn0gZnJvbSAnLi90cmVlLWVycm9ycyc7XG5pbXBvcnQge2NvZXJjZU51bWJlclByb3BlcnR5fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG4vKipcbiAqIENESyB0cmVlIGNvbXBvbmVudCB0aGF0IGNvbm5lY3RzIHdpdGggYSBkYXRhIHNvdXJjZSB0byByZXRyaWV2ZSBkYXRhIG9mIHR5cGUgYFRgIGFuZCByZW5kZXJzXG4gKiBkYXRhTm9kZXMgd2l0aCBoaWVyYXJjaHkuIFVwZGF0ZXMgdGhlIGRhdGFOb2RlcyB3aGVuIG5ldyBkYXRhIGlzIHByb3ZpZGVkIGJ5IHRoZSBkYXRhIHNvdXJjZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXRyZWUnLFxuICBleHBvcnRBczogJ2Nka1RyZWUnLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgY2RrVHJlZU5vZGVPdXRsZXQ+PC9uZy1jb250YWluZXI+YCxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdjZGstdHJlZScsXG4gICAgJ3JvbGUnOiAndHJlZScsXG4gIH0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cbiAgLy8gVGhlIFwiT25QdXNoXCIgc3RhdHVzIGZvciB0aGUgYENka1RyZWVgIGNvbXBvbmVudCBpcyBlZmZlY3RpdmVseSBhIG5vb3AsIHNvIHdlIGFyZSByZW1vdmluZyBpdC5cbiAgLy8gVGhlIHZpZXcgZm9yIGBDZGtUcmVlYCBjb25zaXN0cyBlbnRpcmVseSBvZiB0ZW1wbGF0ZXMgZGVjbGFyZWQgaW4gb3RoZXIgdmlld3MuIEFzIHRoZXkgYXJlXG4gIC8vIGRlY2xhcmVkIGVsc2V3aGVyZSwgdGhleSBhcmUgY2hlY2tlZCB3aGVuIHRoZWlyIGRlY2xhcmF0aW9uIHBvaW50cyBhcmUgY2hlY2tlZC5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhbGlkYXRlLWRlY29yYXRvcnNcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0XG59KVxuZXhwb3J0IGNsYXNzIENka1RyZWU8VCwgSyA9IFQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQ29sbGVjdGlvblZpZXdlciwgT25EZXN0cm95LCBPbkluaXQge1xuICAvKiogU3ViamVjdCB0aGF0IGVtaXRzIHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBkZXN0cm95ZWQuICovXG4gIHByaXZhdGUgX29uRGVzdHJveSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqIERpZmZlciB1c2VkIHRvIGZpbmQgdGhlIGNoYW5nZXMgaW4gdGhlIGRhdGEgcHJvdmlkZWQgYnkgdGhlIGRhdGEgc291cmNlLiAqL1xuICBwcml2YXRlIF9kYXRhRGlmZmVyOiBJdGVyYWJsZURpZmZlcjxUPjtcblxuICAvKiogU3RvcmVzIHRoZSBub2RlIGRlZmluaXRpb24gdGhhdCBkb2VzIG5vdCBoYXZlIGEgd2hlbiBwcmVkaWNhdGUuICovXG4gIHByaXZhdGUgX2RlZmF1bHROb2RlRGVmOiBDZGtUcmVlTm9kZURlZjxUPiB8IG51bGw7XG5cbiAgLyoqIERhdGEgc3Vic2NyaXB0aW9uICovXG4gIHByaXZhdGUgX2RhdGFTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiB8IG51bGw7XG5cbiAgLyoqIExldmVsIG9mIG5vZGVzICovXG4gIHByaXZhdGUgX2xldmVsczogTWFwPFQsIG51bWJlcj4gPSBuZXcgTWFwPFQsIG51bWJlcj4oKTtcblxuICAvKipcbiAgICogUHJvdmlkZXMgYSBzdHJlYW0gY29udGFpbmluZyB0aGUgbGF0ZXN0IGRhdGEgYXJyYXkgdG8gcmVuZGVyLiBJbmZsdWVuY2VkIGJ5IHRoZSB0cmVlJ3NcbiAgICogc3RyZWFtIG9mIHZpZXcgd2luZG93ICh3aGF0IGRhdGFOb2RlcyBhcmUgY3VycmVudGx5IG9uIHNjcmVlbikuXG4gICAqIERhdGEgc291cmNlIGNhbiBiZSBhbiBvYnNlcnZhYmxlIG9mIGRhdGEgYXJyYXksIG9yIGEgZGF0YSBhcnJheSB0byByZW5kZXIuXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgZGF0YVNvdXJjZSgpOiBEYXRhU291cmNlPFQ+IHwgT2JzZXJ2YWJsZTxUW10+IHwgVFtdIHsgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2U7IH1cbiAgc2V0IGRhdGFTb3VyY2UoZGF0YVNvdXJjZTogRGF0YVNvdXJjZTxUPiB8IE9ic2VydmFibGU8VFtdPiB8IFRbXSkge1xuICAgIGlmICh0aGlzLl9kYXRhU291cmNlICE9PSBkYXRhU291cmNlKSB7XG4gICAgICB0aGlzLl9zd2l0Y2hEYXRhU291cmNlKGRhdGFTb3VyY2UpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9kYXRhU291cmNlOiBEYXRhU291cmNlPFQ+IHwgT2JzZXJ2YWJsZTxUW10+IHwgVFtdO1xuXG4gIC8qKiBUaGUgdHJlZSBjb250cm9sbGVyICovXG4gIEBJbnB1dCgpIHRyZWVDb250cm9sOiBUcmVlQ29udHJvbDxULCBLPjtcblxuICAvKipcbiAgICogVHJhY2tpbmcgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHVzZWQgdG8gY2hlY2sgdGhlIGRpZmZlcmVuY2VzIGluIGRhdGEgY2hhbmdlcy4gVXNlZCBzaW1pbGFybHlcbiAgICogdG8gYG5nRm9yYCBgdHJhY2tCeWAgZnVuY3Rpb24uIE9wdGltaXplIG5vZGUgb3BlcmF0aW9ucyBieSBpZGVudGlmeWluZyBhIG5vZGUgYmFzZWQgb24gaXRzIGRhdGFcbiAgICogcmVsYXRpdmUgdG8gdGhlIGZ1bmN0aW9uIHRvIGtub3cgaWYgYSBub2RlIHNob3VsZCBiZSBhZGRlZC9yZW1vdmVkL21vdmVkLlxuICAgKiBBY2NlcHRzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0d28gcGFyYW1ldGVycywgYGluZGV4YCBhbmQgYGl0ZW1gLlxuICAgKi9cbiAgQElucHV0KCkgdHJhY2tCeTogVHJhY2tCeUZ1bmN0aW9uPFQ+O1xuXG4gIC8vIE91dGxldHMgd2l0aGluIHRoZSB0cmVlJ3MgdGVtcGxhdGUgd2hlcmUgdGhlIGRhdGFOb2RlcyB3aWxsIGJlIGluc2VydGVkLlxuICBAVmlld0NoaWxkKENka1RyZWVOb2RlT3V0bGV0LCB7c3RhdGljOiB0cnVlfSkgX25vZGVPdXRsZXQ6IENka1RyZWVOb2RlT3V0bGV0O1xuXG4gIC8qKiBUaGUgdHJlZSBub2RlIHRlbXBsYXRlIGZvciB0aGUgdHJlZSAqL1xuICBAQ29udGVudENoaWxkcmVuKENka1RyZWVOb2RlRGVmLCB7XG4gICAgLy8gV2UgbmVlZCB0byB1c2UgYGRlc2NlbmRhbnRzOiB0cnVlYCwgYmVjYXVzZSBJdnkgd2lsbCBubyBsb25nZXIgbWF0Y2hcbiAgICAvLyBpbmRpcmVjdCBkZXNjZW5kYW50cyBpZiBpdCdzIGxlZnQgYXMgZmFsc2UuXG4gICAgZGVzY2VuZGFudHM6IHRydWVcbiAgfSkgX25vZGVEZWZzOiBRdWVyeUxpc3Q8Q2RrVHJlZU5vZGVEZWY8VD4+O1xuXG4gIC8vIFRPRE8odGluYXl1YW5nYW8pOiBTZXR1cCBhIGxpc3RlbmVyIGZvciBzY3JvbGxpbmcsIGVtaXQgdGhlIGNhbGN1bGF0ZWQgdmlldyB0byB2aWV3Q2hhbmdlLlxuICAvLyAgICAgUmVtb3ZlIHRoZSBNQVhfVkFMVUUgaW4gdmlld0NoYW5nZVxuICAvKipcbiAgICogU3RyZWFtIGNvbnRhaW5pbmcgdGhlIGxhdGVzdCBpbmZvcm1hdGlvbiBvbiB3aGF0IHJvd3MgYXJlIGJlaW5nIGRpc3BsYXllZCBvbiBzY3JlZW4uXG4gICAqIENhbiBiZSB1c2VkIGJ5IHRoZSBkYXRhIHNvdXJjZSB0byBhcyBhIGhldXJpc3RpYyBvZiB3aGF0IGRhdGEgc2hvdWxkIGJlIHByb3ZpZGVkLlxuICAgKi9cbiAgdmlld0NoYW5nZSA9XG4gICAgbmV3IEJlaGF2aW9yU3ViamVjdDx7c3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXJ9Pih7c3RhcnQ6IDAsIGVuZDogTnVtYmVyLk1BWF9WQUxVRX0pO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2RhdGFEaWZmZXIgPSB0aGlzLl9kaWZmZXJzLmZpbmQoW10pLmNyZWF0ZSh0aGlzLnRyYWNrQnkpO1xuICAgIGlmICghdGhpcy50cmVlQ29udHJvbCAmJiAodHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlKSkge1xuICAgICAgdGhyb3cgZ2V0VHJlZUNvbnRyb2xNaXNzaW5nRXJyb3IoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9ub2RlT3V0bGV0LnZpZXdDb250YWluZXIuY2xlYXIoKTtcblxuICAgIHRoaXMudmlld0NoYW5nZS5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX29uRGVzdHJveS5uZXh0KCk7XG4gICAgdGhpcy5fb25EZXN0cm95LmNvbXBsZXRlKCk7XG5cbiAgICBpZiAodGhpcy5fZGF0YVNvdXJjZSAmJiB0eXBlb2YgKHRoaXMuX2RhdGFTb3VyY2UgYXMgRGF0YVNvdXJjZTxUPikuZGlzY29ubmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgKHRoaXMuZGF0YVNvdXJjZSBhcyBEYXRhU291cmNlPFQ+KS5kaXNjb25uZWN0KHRoaXMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9kYXRhU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9kYXRhU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLl9kYXRhU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgY29uc3QgZGVmYXVsdE5vZGVEZWZzID0gdGhpcy5fbm9kZURlZnMuZmlsdGVyKGRlZiA9PiAhZGVmLndoZW4pO1xuICAgIGlmIChkZWZhdWx0Tm9kZURlZnMubGVuZ3RoID4gMSAmJiAodHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlKSkge1xuICAgICAgdGhyb3cgZ2V0VHJlZU11bHRpcGxlRGVmYXVsdE5vZGVEZWZzRXJyb3IoKTtcbiAgICB9XG4gICAgdGhpcy5fZGVmYXVsdE5vZGVEZWYgPSBkZWZhdWx0Tm9kZURlZnNbMF07XG5cbiAgICBpZiAodGhpcy5kYXRhU291cmNlICYmIHRoaXMuX25vZGVEZWZzICYmICF0aGlzLl9kYXRhU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9vYnNlcnZlUmVuZGVyQ2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG5cbiAgLy8gVE9ETyh0aW5heXVhbmdhbyk6IFdvcmsgb24ga2V5Ym9hcmQgdHJhdmVyc2FsIGFuZCBhY3Rpb25zLCBtYWtlIHN1cmUgaXQncyB3b3JraW5nIGZvciBSVExcbiAgLy8gICAgIGFuZCBuZXN0ZWQgdHJlZXMuXG5cbiAgLyoqXG4gICAqIFN3aXRjaCB0byB0aGUgcHJvdmlkZWQgZGF0YSBzb3VyY2UgYnkgcmVzZXR0aW5nIHRoZSBkYXRhIGFuZCB1bnN1YnNjcmliaW5nIGZyb20gdGhlIGN1cnJlbnRcbiAgICogcmVuZGVyIGNoYW5nZSBzdWJzY3JpcHRpb24gaWYgb25lIGV4aXN0cy4gSWYgdGhlIGRhdGEgc291cmNlIGlzIG51bGwsIGludGVycHJldCB0aGlzIGJ5XG4gICAqIGNsZWFyaW5nIHRoZSBub2RlIG91dGxldC4gT3RoZXJ3aXNlIHN0YXJ0IGxpc3RlbmluZyBmb3IgbmV3IGRhdGEuXG4gICAqL1xuICBwcml2YXRlIF9zd2l0Y2hEYXRhU291cmNlKGRhdGFTb3VyY2U6IERhdGFTb3VyY2U8VD4gfCBPYnNlcnZhYmxlPFRbXT4gfCBUW10pIHtcbiAgICBpZiAodGhpcy5fZGF0YVNvdXJjZSAmJiB0eXBlb2YgKHRoaXMuX2RhdGFTb3VyY2UgYXMgRGF0YVNvdXJjZTxUPikuZGlzY29ubmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgKHRoaXMuZGF0YVNvdXJjZSBhcyBEYXRhU291cmNlPFQ+KS5kaXNjb25uZWN0KHRoaXMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9kYXRhU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9kYXRhU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLl9kYXRhU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgdGhlIGFsbCBkYXRhTm9kZXMgaWYgdGhlcmUgaXMgbm93IG5vIGRhdGEgc291cmNlXG4gICAgaWYgKCFkYXRhU291cmNlKSB7XG4gICAgICB0aGlzLl9ub2RlT3V0bGV0LnZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kYXRhU291cmNlID0gZGF0YVNvdXJjZTtcbiAgICBpZiAodGhpcy5fbm9kZURlZnMpIHtcbiAgICAgIHRoaXMuX29ic2VydmVSZW5kZXJDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFNldCB1cCBhIHN1YnNjcmlwdGlvbiBmb3IgdGhlIGRhdGEgcHJvdmlkZWQgYnkgdGhlIGRhdGEgc291cmNlLiAqL1xuICBwcml2YXRlIF9vYnNlcnZlUmVuZGVyQ2hhbmdlcygpIHtcbiAgICBsZXQgZGF0YVN0cmVhbTogT2JzZXJ2YWJsZTxUW10gfCBSZWFkb25seUFycmF5PFQ+PiB8IHVuZGVmaW5lZDtcblxuICAgIGlmIChpc0RhdGFTb3VyY2UodGhpcy5fZGF0YVNvdXJjZSkpIHtcbiAgICAgIGRhdGFTdHJlYW0gPSB0aGlzLl9kYXRhU291cmNlLmNvbm5lY3QodGhpcyk7XG4gICAgfSBlbHNlIGlmIChpc09ic2VydmFibGUodGhpcy5fZGF0YVNvdXJjZSkpIHtcbiAgICAgIGRhdGFTdHJlYW0gPSB0aGlzLl9kYXRhU291cmNlO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLl9kYXRhU291cmNlKSkge1xuICAgICAgZGF0YVN0cmVhbSA9IG9ic2VydmFibGVPZih0aGlzLl9kYXRhU291cmNlKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YVN0cmVhbSkge1xuICAgICAgdGhpcy5fZGF0YVN1YnNjcmlwdGlvbiA9IGRhdGFTdHJlYW0ucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSlcbiAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMucmVuZGVyTm9kZUNoYW5nZXMoZGF0YSkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlKSB7XG4gICAgICB0aHJvdyBnZXRUcmVlTm9WYWxpZERhdGFTb3VyY2VFcnJvcigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBDaGVjayBmb3IgY2hhbmdlcyBtYWRlIGluIHRoZSBkYXRhIGFuZCByZW5kZXIgZWFjaCBjaGFuZ2UgKG5vZGUgYWRkZWQvcmVtb3ZlZC9tb3ZlZCkuICovXG4gIHJlbmRlck5vZGVDaGFuZ2VzKGRhdGE6IFRbXSB8IFJlYWRvbmx5QXJyYXk8VD4sIGRhdGFEaWZmZXI6IEl0ZXJhYmxlRGlmZmVyPFQ+ID0gdGhpcy5fZGF0YURpZmZlcixcbiAgICAgICAgICAgICAgICAgICAgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiA9IHRoaXMuX25vZGVPdXRsZXQudmlld0NvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50RGF0YT86IFQpIHtcbiAgICBjb25zdCBjaGFuZ2VzID0gZGF0YURpZmZlci5kaWZmKGRhdGEpO1xuICAgIGlmICghY2hhbmdlcykgeyByZXR1cm47IH1cblxuICAgIGNoYW5nZXMuZm9yRWFjaE9wZXJhdGlvbigoaXRlbTogSXRlcmFibGVDaGFuZ2VSZWNvcmQ8VD4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGp1c3RlZFByZXZpb3VzSW5kZXg6IG51bWJlciB8IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXg6IG51bWJlciB8IG51bGwpID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ucHJldmlvdXNJbmRleCA9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5pbnNlcnROb2RlKGRhdGFbY3VycmVudEluZGV4IV0sIGN1cnJlbnRJbmRleCEsIHZpZXdDb250YWluZXIsIHBhcmVudERhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRJbmRleCA9PSBudWxsKSB7XG4gICAgICAgICAgdmlld0NvbnRhaW5lci5yZW1vdmUoYWRqdXN0ZWRQcmV2aW91c0luZGV4ISk7XG4gICAgICAgICAgdGhpcy5fbGV2ZWxzLmRlbGV0ZShpdGVtLml0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHZpZXcgPSB2aWV3Q29udGFpbmVyLmdldChhZGp1c3RlZFByZXZpb3VzSW5kZXghKTtcbiAgICAgICAgICB2aWV3Q29udGFpbmVyLm1vdmUodmlldyEsIGN1cnJlbnRJbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIHRoZSBtYXRjaGluZyBub2RlIGRlZmluaXRpb24gdGhhdCBzaG91bGQgYmUgdXNlZCBmb3IgdGhpcyBub2RlIGRhdGEuIElmIHRoZXJlIGlzIG9ubHlcbiAgICogb25lIG5vZGUgZGVmaW5pdGlvbiwgaXQgaXMgcmV0dXJuZWQuIE90aGVyd2lzZSwgZmluZCB0aGUgbm9kZSBkZWZpbml0aW9uIHRoYXQgaGFzIGEgd2hlblxuICAgKiBwcmVkaWNhdGUgdGhhdCByZXR1cm5zIHRydWUgd2l0aCB0aGUgZGF0YS4gSWYgbm9uZSByZXR1cm4gdHJ1ZSwgcmV0dXJuIHRoZSBkZWZhdWx0IG5vZGVcbiAgICogZGVmaW5pdGlvbi5cbiAgICovXG4gIF9nZXROb2RlRGVmKGRhdGE6IFQsIGk6IG51bWJlcik6IENka1RyZWVOb2RlRGVmPFQ+IHtcbiAgICBpZiAodGhpcy5fbm9kZURlZnMubGVuZ3RoID09PSAxKSB7IHJldHVybiB0aGlzLl9ub2RlRGVmcy5maXJzdDsgfVxuXG4gICAgY29uc3Qgbm9kZURlZiA9XG4gICAgICB0aGlzLl9ub2RlRGVmcy5maW5kKGRlZiA9PiBkZWYud2hlbiAmJiBkZWYud2hlbihpLCBkYXRhKSkgfHwgdGhpcy5fZGVmYXVsdE5vZGVEZWY7XG5cbiAgICBpZiAoIW5vZGVEZWYgJiYgKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkpIHtcbiAgICAgIHRocm93IGdldFRyZWVNaXNzaW5nTWF0Y2hpbmdOb2RlRGVmRXJyb3IoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZURlZiE7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBlbWJlZGRlZCB2aWV3IGZvciB0aGUgZGF0YSBub2RlIHRlbXBsYXRlIGFuZCBwbGFjZSBpdCBpbiB0aGUgY29ycmVjdCBpbmRleCBsb2NhdGlvblxuICAgKiB3aXRoaW4gdGhlIGRhdGEgbm9kZSB2aWV3IGNvbnRhaW5lci5cbiAgICovXG4gIGluc2VydE5vZGUobm9kZURhdGE6IFQsIGluZGV4OiBudW1iZXIsIHZpZXdDb250YWluZXI/OiBWaWV3Q29udGFpbmVyUmVmLCBwYXJlbnREYXRhPzogVCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLl9nZXROb2RlRGVmKG5vZGVEYXRhLCBpbmRleCk7XG5cbiAgICAvLyBOb2RlIGNvbnRleHQgdGhhdCB3aWxsIGJlIHByb3ZpZGVkIHRvIGNyZWF0ZWQgZW1iZWRkZWQgdmlld1xuICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgQ2RrVHJlZU5vZGVPdXRsZXRDb250ZXh0PFQ+KG5vZGVEYXRhKTtcblxuICAgIC8vIElmIHRoZSB0cmVlIGlzIGZsYXQgdHJlZSwgdGhlbiB1c2UgdGhlIGBnZXRMZXZlbGAgZnVuY3Rpb24gaW4gZmxhdCB0cmVlIGNvbnRyb2xcbiAgICAvLyBPdGhlcndpc2UsIHVzZSB0aGUgbGV2ZWwgb2YgcGFyZW50IG5vZGUuXG4gICAgaWYgKHRoaXMudHJlZUNvbnRyb2wuZ2V0TGV2ZWwpIHtcbiAgICAgIGNvbnRleHQubGV2ZWwgPSB0aGlzLnRyZWVDb250cm9sLmdldExldmVsKG5vZGVEYXRhKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJlbnREYXRhICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLl9sZXZlbHMuaGFzKHBhcmVudERhdGEpKSB7XG4gICAgICBjb250ZXh0LmxldmVsID0gdGhpcy5fbGV2ZWxzLmdldChwYXJlbnREYXRhKSEgKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmxldmVsID0gMDtcbiAgICB9XG4gICAgdGhpcy5fbGV2ZWxzLnNldChub2RlRGF0YSwgY29udGV4dC5sZXZlbCk7XG5cbiAgICAvLyBVc2UgZGVmYXVsdCB0cmVlIG5vZGVPdXRsZXQsIG9yIG5lc3RlZCBub2RlJ3Mgbm9kZU91dGxldFxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHZpZXdDb250YWluZXIgPyB2aWV3Q29udGFpbmVyIDogdGhpcy5fbm9kZU91dGxldC52aWV3Q29udGFpbmVyO1xuICAgIGNvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcobm9kZS50ZW1wbGF0ZSwgY29udGV4dCwgaW5kZXgpO1xuXG4gICAgLy8gU2V0IHRoZSBkYXRhIHRvIGp1c3QgY3JlYXRlZCBgQ2RrVHJlZU5vZGVgLlxuICAgIC8vIFRoZSBgQ2RrVHJlZU5vZGVgIGNyZWF0ZWQgZnJvbSBgY3JlYXRlRW1iZWRkZWRWaWV3YCB3aWxsIGJlIHNhdmVkIGluIHN0YXRpYyB2YXJpYWJsZVxuICAgIC8vICAgICBgbW9zdFJlY2VudFRyZWVOb2RlYC4gV2UgZ2V0IGl0IGZyb20gc3RhdGljIHZhcmlhYmxlIGFuZCBwYXNzIHRoZSBub2RlIGRhdGEgdG8gaXQuXG4gICAgaWYgKENka1RyZWVOb2RlLm1vc3RSZWNlbnRUcmVlTm9kZSkge1xuICAgICAgQ2RrVHJlZU5vZGUubW9zdFJlY2VudFRyZWVOb2RlLmRhdGEgPSBub2RlRGF0YTtcbiAgICB9XG4gIH1cbn1cblxuXG4vKipcbiAqIFRyZWUgbm9kZSBmb3IgQ2RrVHJlZS4gSXQgY29udGFpbnMgdGhlIGRhdGEgaW4gdGhlIHRyZWUgbm9kZS5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnY2RrLXRyZWUtbm9kZScsXG4gIGV4cG9ydEFzOiAnY2RrVHJlZU5vZGUnLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtUcmVlTm9kZTxULCBLID0gVD4gaW1wbGVtZW50cyBEb0NoZWNrLCBGb2N1c2FibGVPcHRpb24sIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgLyoqXG4gICAqIFRoZSByb2xlIG9mIHRoZSB0cmVlIG5vZGUuXG4gICAqIEBkZXByZWNhdGVkIFRoZSBjb3JyZWN0IHJvbGUgaXMgJ3RyZWVpdGVtJywgJ2dyb3VwJyBzaG91bGQgbm90IGJlIHVzZWQuIFRoaXMgaW5wdXQgd2lsbCBiZVxuICAgKiAgIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi5cbiAgICogQGJyZWFraW5nLWNoYW5nZSAxMi4wLjAgUmVtb3ZlIHRoaXMgaW5wdXRcbiAgICovXG4gIEBJbnB1dCgpIGdldCByb2xlKCk6ICd0cmVlaXRlbSd8J2dyb3VwJyB7IHJldHVybiAndHJlZWl0ZW0nOyB9XG5cbiAgc2V0IHJvbGUoX3JvbGU6ICd0cmVlaXRlbSd8J2dyb3VwJykge1xuICAgIC8vIFRPRE86IG1vdmUgdG8gaG9zdCBhZnRlciBWaWV3IEVuZ2luZSBkZXByZWNhdGlvblxuICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCBfcm9sZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG1vc3QgcmVjZW50bHkgY3JlYXRlZCBgQ2RrVHJlZU5vZGVgLiBXZSBzYXZlIGl0IGluIHN0YXRpYyB2YXJpYWJsZSBzbyB3ZSBjYW4gcmV0cmlldmUgaXRcbiAgICogaW4gYENka1RyZWVgIGFuZCBzZXQgdGhlIGRhdGEgdG8gaXQuXG4gICAqL1xuICBzdGF0aWMgbW9zdFJlY2VudFRyZWVOb2RlOiBDZGtUcmVlTm9kZTxhbnk+IHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqIFN1YmplY3QgdGhhdCBlbWl0cyB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gZGVzdHJveWVkLiAqL1xuICBwcm90ZWN0ZWQgX2Rlc3Ryb3llZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIG5vZGUncyBkYXRhIGhhcyBjaGFuZ2VkLiAqL1xuICBfZGF0YUNoYW5nZXMgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIHByaXZhdGUgX3BhcmVudE5vZGVBcmlhTGV2ZWw6IG51bWJlcjtcblxuICAvKiogVGhlIHRyZWUgbm9kZSdzIGRhdGEuICovXG4gIGdldCBkYXRhKCk6IFQgeyByZXR1cm4gdGhpcy5fZGF0YTsgfVxuICBzZXQgZGF0YSh2YWx1ZTogVCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fZGF0YSkge1xuICAgICAgdGhpcy5fZGF0YSA9IHZhbHVlO1xuICAgICAgdGhpcy5fc2V0Um9sZUZyb21EYXRhKCk7XG4gICAgICB0aGlzLl9kYXRhQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG4gIHByb3RlY3RlZCBfZGF0YTogVDtcblxuICBnZXQgaXNFeHBhbmRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdHJlZS50cmVlQ29udHJvbC5pc0V4cGFuZGVkKHRoaXMuX2RhdGEpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0RXhwYW5kZWQoX2V4cGFuZGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNBcmlhRXhwYW5kZWQgPSBfZXhwYW5kZWQ7XG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGAke19leHBhbmRlZH1gKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfaXNBcmlhRXhwYW5kZWQ6IGJvb2xlYW47XG5cbiAgZ2V0IGxldmVsKCk6IG51bWJlciB7XG4gICAvLyBJZiB0aGUgdHJlZUNvbnRyb2wgaGFzIGEgZ2V0TGV2ZWwgbWV0aG9kLCB1c2UgaXQgdG8gZ2V0IHRoZSBsZXZlbC4gT3RoZXJ3aXNlIHJlYWQgdGhlXG4gICAvLyBhcmlhLWxldmVsIG9mZiB0aGUgcGFyZW50IG5vZGUgYW5kIHVzZSBpdCBhcyB0aGUgbGV2ZWwgZm9yIHRoaXMgbm9kZSAobm90ZSBhcmlhLWxldmVsIGlzXG4gICAvLyAxLWluZGV4ZWQsIHdoaWxlIHRoaXMgcHJvcGVydHkgaXMgMC1pbmRleGVkLCBzbyB3ZSBkb24ndCBuZWVkIHRvIGluY3JlbWVudCkuXG4gICByZXR1cm4gdGhpcy5fdHJlZS50cmVlQ29udHJvbC5nZXRMZXZlbCA/XG4gICAgIHRoaXMuX3RyZWUudHJlZUNvbnRyb2wuZ2V0TGV2ZWwodGhpcy5fZGF0YSkgOiB0aGlzLl9wYXJlbnROb2RlQXJpYUxldmVsO1xuICAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfdHJlZTogQ2RrVHJlZTxULCBLPikge1xuICAgIENka1RyZWVOb2RlLm1vc3RSZWNlbnRUcmVlTm9kZSA9IHRoaXMgYXMgQ2RrVHJlZU5vZGU8VCwgSz47XG4gICAgLy8gVGhlIGNsYXNzZXMgYXJlIGRpcmVjdGx5IGFkZGVkIGhlcmUgaW5zdGVhZCBvZiBpbiB0aGUgaG9zdCBwcm9wZXJ0eSBiZWNhdXNlIGNsYXNzZXMgb25cbiAgICAvLyB0aGUgaG9zdCBwcm9wZXJ0eSBhcmUgbm90IGluaGVyaXRlZCB3aXRoIFZpZXcgRW5naW5lLiBJdCBpcyBub3Qgc2V0IGFzIGEgQEhvc3RCaW5kaW5nIGJlY2F1c2VcbiAgICAvLyBpdCBpcyBub3Qgc2V0IGJ5IHRoZSB0aW1lIGl0J3MgY2hpbGRyZW4gbm9kZXMgdHJ5IHRvIHJlYWQgdGhlIGNsYXNzIGZyb20gaXQuXG4gICAgLy8gVE9ETzogbW92ZSB0byBob3N0IGFmdGVyIFZpZXcgRW5naW5lIGRlcHJlY2F0aW9uXG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Nkay10cmVlLW5vZGUnKTtcbiAgICB0aGlzLnJvbGUgPSAndHJlZWl0ZW0nO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fcGFyZW50Tm9kZUFyaWFMZXZlbCA9IGdldFBhcmVudE5vZGVBcmlhTGV2ZWwodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxldmVsJywgYCR7dGhpcy5sZXZlbCArIDF9YCk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgLy8gYXJpYS1leHBhbmRlZCBpcyBiZSBzZXQgaGVyZSBiZWNhdXNlIHRoZSBleHBhbmRlZCBzdGF0ZSBpcyBzdG9yZWQgaW4gdGhlIHRyZWUgY29udHJvbCBhbmRcbiAgICAvLyB0aGUgbm9kZSBpc24ndCBhd2FyZSB3aGVuIHRoZSBzdGF0ZSBpcyBjaGFuZ2VkLlxuICAgIC8vIEl0IGlzIG5vdCBzZXQgdXNpbmcgYSBASG9zdEJpbmRpbmcgYmVjYXVzZSB0aGV5IHNvbWV0aW1lcyBnZXQgbG9zdCB3aXRoIE1peGluIGJhc2VkIGNsYXNzZXMuXG4gICAgLy8gVE9ETzogbW92ZSB0byBob3N0IGFmdGVyIFZpZXcgRW5naW5lIGRlcHJlY2F0aW9uXG4gICAgaWYgKHRoaXMuaXNFeHBhbmRlZCAhPSB0aGlzLl9pc0FyaWFFeHBhbmRlZCkge1xuICAgICAgdGhpcy5fc2V0RXhwYW5kZWQodGhpcy5pc0V4cGFuZGVkKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBJZiB0aGlzIGlzIHRoZSBsYXN0IHRyZWUgbm9kZSBiZWluZyBkZXN0cm95ZWQsXG4gICAgLy8gY2xlYXIgb3V0IHRoZSByZWZlcmVuY2UgdG8gYXZvaWQgbGVha2luZyBtZW1vcnkuXG4gICAgaWYgKENka1RyZWVOb2RlLm1vc3RSZWNlbnRUcmVlTm9kZSA9PT0gdGhpcykge1xuICAgICAgQ2RrVHJlZU5vZGUubW9zdFJlY2VudFRyZWVOb2RlID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLl9kYXRhQ2hhbmdlcy5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5uZXh0KCk7XG4gICAgdGhpcy5fZGVzdHJveWVkLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKiogRm9jdXNlcyB0aGUgbWVudSBpdGVtLiBJbXBsZW1lbnRzIGZvciBGb2N1c2FibGVPcHRpb24uICovXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgLy8gVE9ETzogcm9sZSBzaG91bGQgZXZlbnR1YWxseSBqdXN0IGJlIHNldCBpbiB0aGUgY29tcG9uZW50IGhvc3RcbiAgcHJvdGVjdGVkIF9zZXRSb2xlRnJvbURhdGEoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl90cmVlLnRyZWVDb250cm9sLmlzRXhwYW5kYWJsZSAmJiAhdGhpcy5fdHJlZS50cmVlQ29udHJvbC5nZXRDaGlsZHJlbiAmJlxuICAgICAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkpIHtcbiAgICAgIHRocm93IGdldFRyZWVDb250cm9sRnVuY3Rpb25zTWlzc2luZ0Vycm9yKCk7XG4gICAgfVxuICAgIHRoaXMucm9sZSA9ICd0cmVlaXRlbSc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZUFyaWFMZXZlbChub2RlRWxlbWVudDogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICBsZXQgcGFyZW50ID0gbm9kZUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgd2hpbGUgKHBhcmVudCAmJiAhaXNOb2RlRWxlbWVudChwYXJlbnQpKSB7XG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XG4gIH1cbiAgaWYgKCFwYXJlbnQpIHtcbiAgICBpZiAodHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlKSB7XG4gICAgICB0aHJvdyBFcnJvcignSW5jb3JyZWN0IHRyZWUgc3RydWN0dXJlIGNvbnRhaW5pbmcgZGV0YWNoZWQgbm9kZS4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgfSBlbHNlIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZGstbmVzdGVkLXRyZWUtbm9kZScpKSB7XG4gICAgcmV0dXJuIGNvZXJjZU51bWJlclByb3BlcnR5KHBhcmVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGV2ZWwnKSEpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRoZSBhbmNlc3RvciBlbGVtZW50IGlzIHRoZSBjZGstdHJlZSBpdHNlbGZcbiAgICByZXR1cm4gMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc05vZGVFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gIGNvbnN0IGNsYXNzTGlzdCA9IGVsZW1lbnQuY2xhc3NMaXN0O1xuICByZXR1cm4gISEoY2xhc3NMaXN0Py5jb250YWlucygnY2RrLW5lc3RlZC10cmVlLW5vZGUnKSB8fCBjbGFzc0xpc3Q/LmNvbnRhaW5zKCdjZGstdHJlZScpKTtcbn1cbiJdfQ==