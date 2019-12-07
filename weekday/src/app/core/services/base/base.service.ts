import { GlobalSettings } from './../../models/global-settings/global-settings.module';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export abstract class BaseService {

    protected globalSettings: GlobalSettings = GlobalSettings.shared;

    constructor() { }
}
