import { MatSidenav, MatDrawerToggleResult } from '@angular/material/sidenav';
import { ILayoutTogglable } from './layout-toggle.class';
export declare class TdLayoutComponent implements ILayoutTogglable {
    sidenav: MatSidenav;
    /**
     * mode?: 'side', 'push' or 'over'
     *
     * The mode or styling of the sidenav.
     * Defaults to "over".
     * See "MatSidenav" documentation for more info.
     *
     * https://github.com/angular/material2/tree/master/src/lib/sidenav
     */
    mode: 'side' | 'push' | 'over';
    /**
     * opened?: boolean
     *
     * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
     * Defaults to "false".
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
     * Defaults to "320px".
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
     * Checks if `ESC` should close the sidenav
     * Should only close it for `push` and `over` modes
     */
    readonly disableClose: boolean;
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
