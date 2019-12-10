import { Observable } from 'rxjs';
import { UserModel } from './../../models/user.model';
import { NetworkService } from './../network/network.service';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

    constructor(private networkService: NetworkService) {
        super();
    }

    getUser(): Observable<UserModel> {
        const url: string =  this.globalSettings.hostURL + '/user';
        return this.networkService.get<UserModel>(url);
    }
}
