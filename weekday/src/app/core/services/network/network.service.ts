import { JsonMapperService } from './../json-mapper/json-mapper.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base/base.service';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NetworkService extends BaseService {

    constructor(private httpClient: HttpClient, private jsonMapperService: JsonMapperService) {
        super();
    }

    public get<T>(url: string): Observable<T | T[]> {

        return this.httpClient.get<T>(url).pipe(
            retry(3),
            // map((json) => this.jsonMapperService.deserialize<T>(json))
        );
    }
}
