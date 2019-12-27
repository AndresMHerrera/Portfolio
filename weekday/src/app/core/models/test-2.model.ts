import { JsonObject, JsonProperty } from 'json2typescript';
import { mappable } from '../decorators/mappable.decorator';

@mappable
@JsonObject('Test2Model')
export class Test2Model {

    // tslint:disable-next-line: variable-name
    private my_type: string = 'Test2Model';

    @JsonProperty('name', String)
    name: string = undefined;
}
