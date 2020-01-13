import { JsonProperty, JsonObject } from 'json2typescript';
import { mappable } from '../decorators/mappable.decorator';

@mappable
@JsonObject('TaskStatusModel')
export class TaskStatusModel {

    // tslint:disable-next-line: variable-name
    private my_type: string = 'TaskStatusModel';

    @JsonProperty('label', String)
    label: string = undefined;

    @JsonProperty('color', String)
    color: string = undefined;
}
