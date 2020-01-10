import { NetworkService } from './../network/network.service';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
    providedIn: 'root'
})
export abstract class BaseNetworkService extends BaseService {

    constructor(protected networkService: NetworkService) {
        super();
    }
}
