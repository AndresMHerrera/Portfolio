import { TASK_STATUS } from './../../../enumerations/task-status.enum';

// export class TaskStatusConverter implements JsonCustomConvert<TASK_STATUS> {
export class TaskStatusConverter {

    serialize(value: TASK_STATUS): string {
        return value as string;
    }
    deserialize(value: string): TASK_STATUS {
        return TASK_STATUS[value];
    }
}
