import { OnInit, OnDestroy, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { MatDrawerToggleResult } from '@angular/material/sidenav';
import { TdLayoutComponent } from '../layout.component';
export declare class TdNavigationDrawerMenuDirective {
}
export declare class TdNavigationDrawerToolbarDirective {
}
export declare class TdNavigationDrawerComponent implements OnInit, OnDestroy {
    private _layout;
    private _router;
    private _sanitize;
    private _closeSubscription;
    private _menuToggled;
    private _backgroundImage;
    readonly menuToggled: boolean;
    _drawerMenu: QueryList<TdNavigationDrawerMenuDirective>;
    _toolbar: QueryList<TdNavigationDrawerToolbarDirective>;
    /**
     * Checks if there is a [TdNavigationDrawerMenuDirective] has content.
     */
    readonly isMenuAvailable: boolean;
    /**
     * Checks if there is a [TdNavigationDrawerToolbarDirective] has content.
     */
    readonly isCustomToolbar: boolean;
    /**
     * Checks if there is a background image for the toolbar.
     */
    readonly isBackgroundAvailable: boolean;
    /**
     * sidenavTitle?: string
     * Title set in sideNav.
     */
    sidenavTitle: string;
    /**
     * icon?: string
     *
     * icon name to be displayed before the title
     */
    icon: string;
    /**
     * logo?: string
     *
     * logo icon name to be displayed before the title.
     * If [icon] is set, then this will not be shown.
     */
    logo: string;
    /**
     * avatar?: string
     *
     * avatar url to be displayed before the title
     * If [icon] or [logo] are set, then this will not be shown.
     */
    avatar: string;
    /**
     * color?: string
     *
     * toolbar color option: primary | accent | warn.
     * If [color] is not set, default is used.
     */
    color: string;
    /**
     * navigationRoute?: string
     *
     * option to set the combined route for the icon, logo, and sidenavTitle.
     */
    navigationRoute: string;
    /**
     * backgroundUrl?: SafeResourceUrl
     *
     * image to be displayed as the background of the toolbar.
     * URL used will be sanitized, but it should be always from a trusted source to avoid XSS.
     */
    backgroundUrl: any;
    readonly backgroundImage: SafeStyle;
    /**
     * name?: string
     *
     * string to be displayed as part of the navigation drawer sublabel.
     * if [email] is not set, then [name] will be the toggle menu text.
     */
    name: string;
    /**
     * email?: string
     *
     * string to be displayed as part of the navigation drawer sublabel in the [toggle] menu text.
     * if [email] and [name] are not set, then the toggle menu is not rendered.
     */
    email: string;
    /**
     * Checks if router was injected.
     */
    readonly routerEnabled: boolean;
    constructor(_layout: TdLayoutComponent, _router: Router, _sanitize: DomSanitizer);
    ngOnInit(): void;
    ngOnDestroy(): void;
    toggleMenu(): void;
    handleNavigationClick(): void;
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     */
    toggle(): Promise<MatDrawerToggleResult>;
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     */
    open(): Promise<MatDrawerToggleResult>;
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     */
    close(): Promise<MatDrawerToggleResult>;
}
