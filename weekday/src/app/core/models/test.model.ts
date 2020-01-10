import { Test2Model } from './test-2.model';
import { JsonObject, JsonProperty, JsonConverter, JsonCustomConvert } from 'json2typescript';
import { mappable } from '../decorators/mappable.decorator';

export enum TEST_ENUM {
    DONE = 'DONE',
    IN_PROGRESS = 'IN_PROGRESS',
    IN_REVIEW = 'IN_REVIEW'
}

@JsonConverter
export class TestConverter implements JsonCustomConvert<TEST_ENUM> {

    serialize(value: TEST_ENUM): any {
        return value;
    }
    deserialize(value: string): TEST_ENUM {
        return TEST_ENUM[value];
    }
}

@mappable
@JsonObject('TestModel')
export class TestModel {

    // tslint:disable-next-line: variable-name
    private my_type: string = 'TestModel';

    @JsonProperty('my_name', String)
    name: string = undefined;

    @JsonProperty('phone', Number)
    phone: number = undefined;

    @JsonProperty('status', TestConverter)
    status: TEST_ENUM = undefined;

    @JsonProperty('nestedObject', Test2Model)
    nestedObject: Test2Model = undefined;

    @JsonProperty('nestedArray', [Test2Model])
    nestedArray: Test2Model[] = undefined;
}
