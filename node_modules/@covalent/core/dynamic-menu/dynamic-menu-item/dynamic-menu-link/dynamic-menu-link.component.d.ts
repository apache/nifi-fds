import { EventEmitter } from '@angular/core';
import { IMenuItem, ITdDynamicMenuLinkClickEvent } from '../../dynamic-menu.component';
export declare class TdDynamicMenuLinkComponent {
    item: IMenuItem;
    itemClicked: EventEmitter<ITdDynamicMenuLinkClickEvent>;
    emitClicked(): void;
}
