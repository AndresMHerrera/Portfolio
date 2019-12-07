import { NetworkService } from './../network/network.service';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';

@Injectable({
    providedIn: 'root'
})
export class WallService extends BaseService {

    constructor(private networkService: NetworkService) {
        super();
    }

    getWallsByUser(userId: number): any {
        const url: string =  this.globalSettings.hostURL + `/walls/${userId}`;
        return this.networkService.get(url);
    }
}
