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
    }

    public deserialize<T>(json: any): T | T[] {

        if (!Array.isArray(json)) {
            return this.deserializeObject<T>(json);
        } else {
            return this.deserializeArray<T>(json);
        }
    }

    public deserializeObject<T>(jsonObject: any): T {

        return this.jsonConvert.deserializeObject<T>(jsonObject,
            AllModelsUtility.shared.models[jsonObject[this.globalSettings.objectTypeKey]]);
    }

    public deserializeArray<T>(jsonArray: any[]): T[] {

        if (jsonArray && jsonArray.length > 0) {

            return this.jsonConvert.deserializeArray<T>(jsonArray,
                AllModelsUtility.shared.models[jsonArray[0][this.globalSettings.objectTypeKey]]);
        } else {
            return [];
        }
    }
}
