import { TASK_STATUS, TASK_STATUS_LABEL_MAP } from './../enumerations/task-status.enum';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'taskStatus'
})
export class TaskStatusPipe implements PipeTransform {

    transform(value: TASK_STATUS): string {

        return TASK_STATUS_LABEL_MAP[value];
    }

}
