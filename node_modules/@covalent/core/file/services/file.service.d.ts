import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface IUploadExtras {
    headers?: {
        [name: string]: string | string[];
    };
    params?: {
        [param: string]: string | string[];
    };
}
export declare class TdFileService {
    private readonly _http;
    private _progressSubject;
    private _progressObservable;
    /**
     * Gets progress observable to keep track of the files being uploaded.
     * Needs to be supported by backend.
     */
    get progress(): Observable<number>;
    /**
     * Creates a new instance
     * @param _http the http client instance
     * @breaking-change 3.0.0 remove 'Optional' decorator once the legay upload method is removed
     */
    constructor(_http: HttpClient);
    /**
     * Uploads a file to a URL.
     */
    send(url: string, method: string, body: File | FormData, { headers, params }?: IUploadExtras): Observable<HttpEvent<any>>;
    private handleEvent;
}
