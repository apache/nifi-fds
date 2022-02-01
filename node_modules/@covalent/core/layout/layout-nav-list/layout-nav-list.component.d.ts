import { Router } from '@angular/router';
import { MatSidenav, MatDrawerToggleResult } from '@angular/material/sidenav';
import { ILayoutTogglable } from '../layout-toggle.class';
export declare class TdLayoutNavListComponent implements ILayoutTogglable {
    private _router;
    sidenav: MatSidenav;
    /**
     * toolbarTitle?: string
     *
     * Title set in toolbar.
     */
    toolbarTitle: string;
    /**
     * icon?: string
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
     * color?: 'accent' | 'primary' | 'warn'
     *
     * toolbar color option: primary | accent | warn.
     * If [color] is not set, primary is used.
     */
    color: 'accent' | 'primary' | 'warn';
    /**
     * mode?: 'side', 'push' or 'over'
     *
     * The mode or styling of the sidenav.
     * Defaults to "side".
     * See "MatSidenav" documentation for more info.
     *
     * https://github.com/angular/material2/tree/master/src/lib/sidenav
     */
    mode: 'side' | 'push' | 'over';
    /**
     * opened?: boolean
     * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
     * Defaults to "true".
     *
     * See "MatSidenav" documentation for more info.
     *
     * https://github.com/angular/material2/tree/master/src/lib/sidenav
     */
    opened: boolean;
    /**
     * sidenavWidth?: string
     *
     * Sets the "width" of the sidenav in either "px" or "%"
     * Defaults to "350px".
     *
     * https://github.com/angular/material2/tree/master/src/lib/sidenav
     */
    sidenavWidth: string;
    /**
     * containerAutosize?: boolean
     *
     * Sets "autosize" of the sidenav-container.
     * Defaults to "false".
     *
     * See documentation for more info and potential performance risks.
     *
     * https://github.com/angular/material2/blob/master/src/lib/sidenav/sidenav.md#resizing-an-open-sidenav
     */
    containerAutosize: boolean;
    /**
     * navigationRoute?: string
     *
     * option to set the combined route for the icon, logo, and toolbarTitle.
     */
    navigationRoute: string;
    /**
     * Checks if `ESC` should close the sidenav
     * Should only close it for `push` and `over` modes
     */
    get disableClose(): boolean;
    /**
     * Checks if router was injected.
     */
    get routerEnabled(): boolean;
    constructor(_router: Router);
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
