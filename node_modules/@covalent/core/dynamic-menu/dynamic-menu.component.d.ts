import { EventEmitter } from '@angular/core';
export interface IMenuTrigger {
    id?: string;
    text?: string;
    icon?: string;
    svgIcon?: string;
    iconClasses?: string[];
}
export interface IMenuItem {
    id?: string;
    text: string;
    icon?: string;
    svgIcon?: string;
    iconClasses?: string[];
    children?: IMenuItem[];
    link?: string;
    newTab?: boolean;
    action?: string;
}
export interface ITdDynamicMenuLinkClickEvent {
    text: string;
    action: string;
}
export declare class TdDynamicMenuComponent {
    trigger: IMenuTrigger;
    items: IMenuItem[];
    itemClicked: EventEmitter<ITdDynamicMenuLinkClickEvent>;
    emitClicked(event: ITdDynamicMenuLinkClickEvent): void;
}
