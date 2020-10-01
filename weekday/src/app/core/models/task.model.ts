import { TaskStatusModel } from './task-status.model';
import { TimeEstimateModel } from './time-estimate.model';
import { mappable } from '../decorators/mappable.decorator';

export class TaskModel {

    // tslint:disable-next-line: variable-name
    private my_type: string = 'TaskModel';

    // @JsonProperty('name', String)
    name: string = undefined;

    // @JsonProperty('description', String)
    description: string = undefined;

    // @JsonProperty('status', TaskStatusModel)
    status: TaskStatusModel = undefined;

    // @JsonProperty('timeEstimate', TimeEstimateModel)
    timeEstimate: TimeEstimateModel = undefined;

    // @JsonProperty('timeline', TimeLineModel)
    // timeLine: TimeLineModel = undefined;
}
