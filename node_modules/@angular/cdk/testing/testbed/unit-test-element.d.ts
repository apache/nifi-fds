/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ElementDimensions, ModifierKeys, TestElement, TestKey, TextOptions, EventData } from '@angular/cdk/testing';
/** A `TestElement` implementation for unit tests. */
export declare class UnitTestElement implements TestElement {
    readonly element: Element;
    private _stabilize;
    constructor(element: Element, _stabilize: () => Promise<void>);
    blur(): Promise<void>;
    clear(): Promise<void>;
    click(...args: [ModifierKeys?] | ['center', ModifierKeys?] | [
        number,
        number,
        ModifierKeys?
    ]): Promise<void>;
    rightClick(...args: [ModifierKeys?] | ['center', ModifierKeys?] | [
        number,
        number,
        ModifierKeys?
    ]): Promise<void>;
    focus(): Promise<void>;
    getCssValue(property: string): Promise<string>;
    hover(): Promise<void>;
    mouseAway(): Promise<void>;
    sendKeys(...keys: (string | TestKey)[]): Promise<void>;
    sendKeys(modifiers: ModifierKeys, ...keys: (string | TestKey)[]): Promise<void>;
    text(options?: TextOptions): Promise<string>;
    getAttribute(name: string): Promise<string | null>;
    hasClass(name: string): Promise<boolean>;
    getDimensions(): Promise<ElementDimensions>;
    getProperty(name: string): Promise<any>;
    setInputValue(value: string): Promise<void>;
    selectOptions(...optionIndexes: number[]): Promise<void>;
    matchesSelector(selector: string): Promise<boolean>;
    isFocused(): Promise<boolean>;
    dispatchEvent(name: string, data?: Record<string, EventData>): Promise<void>;
    /**
     * Dispatches a pointer event on the current element if the browser supports it.
     * @param name Name of the pointer event to be dispatched.
     * @param clientX Coordinate of the user's pointer along the X axis.
     * @param clientY Coordinate of the user's pointer along the Y axis.
     * @param button Mouse button that should be pressed when dispatching the event.
     */
    private _dispatchPointerEventIfSupported;
    /** Dispatches all the events that are part of a mouse event sequence. */
    private _dispatchMouseEventSequence;
}
