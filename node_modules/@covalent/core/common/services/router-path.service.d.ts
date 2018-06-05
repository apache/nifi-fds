import { Router } from '@angular/router';
export declare class RouterPathService {
    private _router;
    private static _previousRoute;
    constructor(_router: Router);
    getPreviousRoute(): string;
}
