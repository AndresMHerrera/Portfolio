import { JsonProperty } from 'json2typescript';
import { mappable } from '../decorators/mappable.decorator';

@mappable
export class TaskModel {

    // tslint:disable-next-line: variable-name
    private my_type: string = 'TaskModel';

    @JsonProperty('name', String)
    name: string = undefined;

    @JsonProperty('description', String)
    description: string = undefined;
}
