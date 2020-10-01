import { mappable } from '../decorators/mappable.decorator';

export class TaskStatusModel {

    // tslint:disable-next-line: variable-name
    private my_type: string = 'TaskStatusModel';

    // @JsonProperty('label', String)
    label: string = undefined;

    // @JsonProperty('color', String)
    color: string = undefined;
}
