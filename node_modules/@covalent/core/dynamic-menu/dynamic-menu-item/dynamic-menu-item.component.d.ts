import { EventEmitter } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { IMenuItem, ITdDynamicMenuLinkClickEvent } from '../dynamic-menu.component';
export declare class TdDynamicMenuItemComponent {
    items: IMenuItem[];
    itemClicked: EventEmitter<ITdDynamicMenuLinkClickEvent>;
    childMenu: MatMenu;
    emitClicked(event: ITdDynamicMenuLinkClickEvent): void;
}
