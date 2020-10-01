import { mappable } from '../decorators/mappable.decorator';

export class TimeEstimateModel {

    // tslint:disable-next-line: variable-name
    private my_type: string = 'TimeEstimateModel';

    // @JsonProperty('value', Number)
    value: number = undefined;

    // @JsonProperty('unit', String)
    unit: string = undefined;
}
