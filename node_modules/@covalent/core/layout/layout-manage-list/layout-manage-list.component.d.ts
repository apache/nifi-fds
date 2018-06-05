import { MatSidenav } from '@angular/material/sidenav';
import { ILayoutTogglable } from '../layout-toggle.class';
export declare class TdLayoutManageListComponent implements ILayoutTogglable {
    sidenav: MatSidenav;
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
     *
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
     * Defaults to "257px".
     *
     * https://github.com/angular/material2/tree/master/src/lib/sidenav
     */
    sidenavWidth: string;
    /**
     * Checks if `ESC` should close the sidenav
     * Should only close it for `push` and `over` modes
     */
    readonly disableClose: boolean;
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     */
    toggle(): Promise<void>;
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     */
    open(): Promise<void>;
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     */
    close(): Promise<void>;
}
