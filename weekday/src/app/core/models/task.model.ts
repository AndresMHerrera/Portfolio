import { TimeEstimateModel } from './time-estimate.model';
import { TaskStatusConverter } from './../services/json-mapper/converters/task-status.converter';
import { TASK_STATUS } from './../enumerations/task-status.enum';
import { TimeLineModel } from './timeline.model';
import { JsonProperty, JsonObject } from 'json2typescript';
import { mappable } from '../decorators/mappable.decorator';

@mappable
@JsonObject('TaskModel')
export class TaskModel {

    // tslint:disable-next-line: variable-name
    private my_type: string = 'TaskModel';

    @JsonProperty('name', String)
    name: string = undefined;

    @JsonProperty('description', String)
    description: string = undefined;

    @JsonProperty('status', TaskStatusConverter)
    status: TASK_STATUS = undefined;

    @JsonProperty('timeEstimate', TimeEstimateModel)
    timeEstimate: TimeEstimateModel = undefined;

    // @JsonProperty('timeline', TimeLineModel)
    // timeLine: TimeLineModel = undefined;
}
