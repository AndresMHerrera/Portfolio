import { JsonProperty, JsonObject } from 'json2typescript';
import { mappable } from '../decorators/mappable.decorator';

@mappable
@JsonObject('UserModel')
export class WallModel {

    // tslint:disable-next-line: variable-name
    private my_type: string = 'WallModel';

    @JsonProperty('title', String)
    title: string = undefined;

    @JsonProperty('description', String)
    description: string = undefined;
}
