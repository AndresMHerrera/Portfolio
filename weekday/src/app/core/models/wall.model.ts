import { mappable } from '../decorators/mappable.decorator';

export class WallModel {

    // tslint:disable-next-line: variable-name
    private my_type: string = 'WallModel';

    // @JsonProperty('title', String)
    title: string = undefined;

    // @JsonProperty('description', String)
    description: string = undefined;
}
