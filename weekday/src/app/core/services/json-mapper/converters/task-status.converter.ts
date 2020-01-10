import { TASK_STATUS } from './../../../enumerations/task-status.enum';
import { JsonConverter, JsonCustomConvert } from 'json2typescript';

@JsonConverter
export class TaskStatusConverter implements JsonCustomConvert<TASK_STATUS> {

    serialize(value: TASK_STATUS): string {
        return value as string;
    }
    deserialize(value: string): TASK_STATUS {
        return TASK_STATUS[value];
    }
}
