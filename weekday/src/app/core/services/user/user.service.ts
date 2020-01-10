import { NetworkService } from './../network/network.service';
import { Observable } from 'rxjs';
import { UserModel } from './../../models/user.model';
import { Injectable } from '@angular/core';
import { BaseNetworkService } from '../base/base-network.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseNetworkService {

    constructor(networkService: NetworkService) {
        super(networkService);
    }

    public getUser(): Observable<UserModel> {
        const url: string =  this.globalSettings.hostURL + '/user';
        return this.networkService.get<UserModel>(url) as Observable<UserModel>;
    }
}
