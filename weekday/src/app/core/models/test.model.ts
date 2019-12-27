import { Test2Model } from './test-2.model';
import { JsonObject, JsonProperty } from 'json2typescript';
import { mappable } from '../decorators/mappable.decorator';

@mappable
@JsonObject('TestModel')
export class TestModel {

    // tslint:disable-next-line: variable-name
    private my_type: string = 'TestModel';

    @JsonProperty('my_name', String)
    name: string = undefined;

    @JsonProperty('phone', Number)
    phone: number = undefined;

    @JsonProperty('nestedObject', Test2Model)
    nestedObject: Test2Model = undefined;

    @JsonProperty('nestedArray', [Test2Model])
    nestedArray: Test2Model[] = undefined;
}
