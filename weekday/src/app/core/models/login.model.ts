import { JsonProperty, JsonObject } from 'json2typescript';
import { mappable } from '../decorators/mappable.decorator';

@mappable
@JsonObject('LoginModel')
export class LoginModel {

    // tslint:disable-next-line: variable-name
    private my_type: string = 'LoginModel';

    @JsonProperty('username', String)
    username: string = undefined;

    @JsonProperty('password', String)
    password: string = undefined;

    constructor(username: string = '', password: string = '') {
        this.username = username;
        this.password = password;
    }

}
