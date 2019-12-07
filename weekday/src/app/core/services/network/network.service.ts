import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base/base.service';

@Injectable({
    providedIn: 'root'
})
export class NetworkService extends BaseService {

    constructor(private httpClient: HttpClient) {
        super();
    }

    public get(url: string): any {
        return this.httpClient.get(url);
    }
}
