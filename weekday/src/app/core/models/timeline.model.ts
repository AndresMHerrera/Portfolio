import { JsonObject, JsonProperty } from 'json2typescript';
import { mappable } from '../decorators/mappable.decorator';

@mappable
@JsonObject('TimeLineModel')
export class TimeLineModel {

    // tslint:disable-next-line: variable-name
    private my_type: string = 'TimeLineModel';

    @JsonProperty('startDate', Date)
    startDate: Date = undefined;

    @JsonProperty('endDate', Date)
    endDate: Date = undefined;
}
