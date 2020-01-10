import { TaskBundleModel } from './../../models/task-bundle.model';
import { TaskModel } from './../../models/task.model';
import { Observable } from 'rxjs';
import { NetworkService } from './../network/network.service';
import { Injectable } from '@angular/core';
import { BaseNetworkService } from '../base/base-network.service';

@Injectable({
    providedIn: 'root'
})
export class TaskService extends BaseNetworkService {

    constructor(networkService: NetworkService) {
        super(networkService);
    }

    public getTaskBundlesForWall(wallId: number): Observable<TaskBundleModel[]> {
        const url: string =  this.globalSettings.hostURL + '/tasks';
        return this.networkService.get<TaskBundleModel>(url) as Observable<TaskBundleModel[]>;
    }

}
