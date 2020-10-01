
import { mappable } from '../decorators/mappable.decorator';

export class LoginModel {

    // tslint:disable-next-line: variable-name
    private my_type: string = 'LoginModel';

    username: string = undefined;

    password: string = undefined;

    constructor(username: string = '', password: string = '') {
        this.username = username;
        this.password = password;
    }

}
