import { AllModelsUtility } from './../../util/all.models.util';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { JsonConvert, OperationMode, ValueCheckingMode } from 'json2typescript';
import { BaseService } from '../base/base.service';

@Injectable({
    providedIn: 'root'
})
export class JsonMapperService extends BaseService {

    private jsonConvert: JsonConvert;

    constructor() {
        super();
        this.jsonConvert = new JsonConvert();
        // this.jsonConvert.operationMode = OperationMode.LOGGING;
    }

    public deserializeObject<T>(jsonObject: any): T {
        // tslint:disable-next-line: no-string-literal
        return this.jsonConvert.deserializeObject<T>(jsonObject,
            AllModelsUtility.shared.models[jsonObject[this.globalSettings.objectTypeKey]]);
    }
}
