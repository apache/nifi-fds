import { ElementRef } from '@angular/core';
interface IFsDocument extends HTMLDocument {
    fullscreenElement: Element;
    webkitFullscreenElement: Element;
    mozFullscreenElement: Element;
    msFullscreenElement: Element;
    webkitExitFullscreen: () => void;
    mozCancelFullScreen: () => void;
    msExitFullscreen: () => void;
}
export declare class TdFullscreenDirective {
    private _document;
    private _el;
    fullScreenIsActive: boolean;
    constructor(_document: IFsDocument, _el: ElementRef);
    fsChangeHandler(event: Event): void;
    toggleFullScreen(): void;
    enterFullScreen(): void;
    exitFullScreen(): void;
    private _getFullScreenElement;
}
export {};
