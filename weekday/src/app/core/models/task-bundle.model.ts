import { TaskModel } from './task.model';

export class TaskBundleModel {

    // tslint:disable-next-line: variable-name
    private my_type: string = 'TaskBundleModel';

    // @JsonProperty('name', String)
    name: string = undefined;

    // @JsonProperty('tasks', [TaskModel])
    tasks: TaskModel[] = undefined;
}
