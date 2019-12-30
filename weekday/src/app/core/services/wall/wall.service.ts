import { Observable } from 'rxjs';
import { WallModel } from './../../models/wall.model';
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

    getWallsByUser(userId: number): Observable<WallModel[]> {
        // const url: string =  this.globalSettings.hostURL + `/walls/${userId}`;
        const url: string =  this.globalSettings.hostURL + `/walls`;
        return this.networkService.get<WallModel>(url) as Observable<WallModel[]>;
    }
}
