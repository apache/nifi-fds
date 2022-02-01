import { Router } from '@angular/router';
export declare class TdLayoutNavComponent {
    private _router;
    /**
     * toolbarTitle?: string
     *
     * Title set in toolbar.
     */
    toolbarTitle: string;
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
     * color?: 'accent' | 'primary' | 'warn'
     *
     * toolbar color option: primary | accent | warn.
     * If [color] is not set, primary is used.
     */
    color: 'accent' | 'primary' | 'warn';
    /**
     * navigationRoute?: string
     *
     * option to set the combined route for the icon, logo, and toolbarTitle.
     */
    navigationRoute: string;
    /**
     * Checks if router was injected.
     */
    get routerEnabled(): boolean;
    constructor(_router: Router);
    handleNavigationClick(): void;
}
