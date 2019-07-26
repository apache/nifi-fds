import { Observable } from 'rxjs';
export interface IUploadOptions {
    url: string;
    method: 'post' | 'put';
    file?: File;
    headers?: {
        [key: string]: string;
    };
    formData?: FormData;
}
export declare class TdFileService {
    private _progressSubject;
    private _progressObservable;
    /**
     * Gets progress observable to keep track of the files being uploaded.
     * Needs to be supported by backend.
     */
    readonly progress: Observable<number>;
    constructor();
    /**
     * params:
     * - options: IUploadOptions {
     *     url: string,
     *     method: 'post' | 'put',
     *     file?: File,
     *     headers?: {[key: string]: string},
     *     formData?: FormData
     * }
     *
     * Uses underlying [XMLHttpRequest] to upload a file to a url.
     * Will be depricated when Angular fixes [Http] to allow [FormData] as body.
     */
    upload(options: IUploadOptions): Observable<any>;
}
