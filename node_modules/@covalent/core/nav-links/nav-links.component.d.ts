import { EventEmitter } from '@angular/core';
export interface ITdNavNode {
    label: string;
    show?: boolean;
}
export interface ITdNavHeader extends ITdNavNode {
    children: ITdLink[];
}
export interface ITdNavExpansion extends ITdNavHeader {
    collapsable?: boolean;
}
export interface ITdLink extends ITdNavNode {
    link: {
        href: string;
        openInNewTab?: boolean;
    } | {
        routerLink: string | string[];
        openInNewTab?: boolean;
    };
    icon: {
        fontSet?: string;
        name: string;
    };
}
export declare class TdNavLinksComponent {
    private _uniqueId;
    private _collapsedSet;
    id: string;
    /**
     * Links to be rendered by component.
     */
    links: Array<ITdNavExpansion | ITdNavHeader | ITdLink>;
    /**
     * Event trigger after a navigation click
     */
    afterNavigation: EventEmitter<ITdLink>;
    _linkClicked(link: ITdLink): void;
    _href(link: ITdLink): string;
    _routerLink(link: ITdLink): string | string[];
    /**
     * @param link
     * Toggles expand/collapse state of expansion link.
     * Only applied when `collapsable` is true
     */
    _toggle(link: ITdNavExpansion): void;
    /**
     * @param link
     * Returns true if the state of provided expansion link is collapsed.
     */
    _isCollapsed(link: ITdNavExpansion): boolean;
}
