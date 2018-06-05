import { NgModel } from '@angular/forms';
export declare class TdAutoTrimDirective {
    private _model;
    constructor(_model: NgModel);
    /**
     * Listens to host's (blur) event and trims value.
     */
    onBlur(event: Event): void;
}
