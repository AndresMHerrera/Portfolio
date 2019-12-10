import { UserModel } from './../../models/user.model';
import { AllModelsUtility } from './../../util/all.models.util';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base/base.service';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { JsonConvert, OperationMode, ValueCheckingMode } from 'json2typescript';

@Injectable({
    providedIn: 'root'
})
export class NetworkService extends BaseService {

    jsonConvert: JsonConvert;

    constructor(private httpClient: HttpClient) {
        super();
        this.jsonConvert = new JsonConvert();
        // this.jsonConvert.operationMode = OperationMode.LOGGING;
    }

    // tslint:disable-next-line: no-shadowed-variable
    public get<T>(url: string): Observable<T> {
        return this.httpClient.get<T>(url).pipe(
            retry(3),
            tap((x) => console.log(UserModel)),
            map((json) => this.jsonConvert.deserializeObject<T>(json, AllModelsUtility.shared.models['UserModel']))
        );
    }
}
