import { TaskModel } from './../../models/task.model';
import { Observable } from 'rxjs';
import { NetworkService } from './../network/network.service';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';

@Injectable({
    providedIn: 'root'
})
export class TaskService extends BaseService {

    constructor(private networkService: NetworkService) {
        super();
    }

    public getTasksForWall(wallId: number): Observable<TaskModel[]> {
        const url: string =  this.globalSettings.hostURL + '/tasks';
        return this.networkService.get<TaskModel>(url) as Observable<TaskModel[]>;
    }

}
