import { TaskModel } from './task.model';
import { TaskStatusConverter } from '../services/json-mapper/converters/task-status.converter';
import { TASK_STATUS } from '../enumerations/task-status.enum';
import { JsonProperty, JsonObject } from 'json2typescript';
import { mappable } from '../decorators/mappable.decorator';

@mappable
@JsonObject('TaskBundleModel')
export class TaskBundleModel {

    // tslint:disable-next-line: variable-name
    private my_type: string = 'TaskBundleModel';

    @JsonProperty('name', String)
    name: string = undefined;

    @JsonProperty('tasks', [TaskModel])
    tasks: TaskModel[] = undefined;
}
