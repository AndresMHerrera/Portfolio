import {JsonObject, JsonProperty} from 'json2typescript';
import { mappable } from '../decorators/mappable.decorator';

@mappable
@JsonObject('UserModel')
export class UserModel {

    // tslint:disable-next-line: variable-name
    private my_type: string = 'UserModel';

    @JsonProperty('firstName', String)
    firstName: string = undefined;

    @JsonProperty('lastName', String)
    lastName: string = undefined;

    @JsonProperty('title', String)
    title: string = undefined;

    @JsonProperty('email', String)
    email: string = undefined;

    @JsonProperty('phone', Number)
    phone: number = undefined;
}
