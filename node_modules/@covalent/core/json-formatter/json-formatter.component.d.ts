import { ChangeDetectorRef } from '@angular/core';
import { Dir } from '@angular/cdk/bidi';
export declare class TdJsonFormatterComponent {
    private _changeDetectorRef;
    private _dir;
    /**
     * Max length for property names. Any names bigger than this get trunctated.
     */
    private static KEY_MAX_LENGTH;
    /**
     * Max length for preview string. Any names bigger than this get trunctated.
     */
    private static PREVIEW_STRING_MAX_LENGTH;
    /**
     * Max tooltip preview elements.
     */
    private static PREVIEW_LIMIT;
    private _key;
    private _data;
    private _children;
    private _open;
    private _levelsOpen;
    /**
     * levelsOpen?: number
     * Levels opened by default when JS object is formatted and rendered.
     */
    levelsOpen: number;
    readonly open: boolean;
    /**
     * key?: string
     * Tag to be displayed next to formatted object.
     */
    key: string;
    /**
     * data: any
     * JS object to be formatted.
     */
    data: any;
    readonly children: string[];
    readonly isRTL: boolean;
    constructor(_changeDetectorRef: ChangeDetectorRef, _dir: Dir);
    /**
     * Refreshes json-formatter and rerenders [data]
     */
    refresh(): void;
    /**
     * Toggles collapse/expanded state of component.
     */
    toggle(): void;
    isObject(): boolean;
    isArray(): boolean;
    hasChildren(): boolean;
    /**
     * Gets parsed value depending on value type.
     */
    getValue(value: any): string;
    /**
     * Gets type of object.
     * returns 'null' if object is null and 'date' if value is object and can be parsed to a date.
     */
    getType(object: any): string;
    /**
     * Generates string representation depending if its an object or function.
     * see: http://stackoverflow.com/a/332429
     */
    getObjectName(): string;
    /**
     * Creates preview of nodes children to render in tooltip depending if its an array or an object.
     */
    getPreview(): string;
    private parseChildren;
}
