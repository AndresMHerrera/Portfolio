import 'reflect-metadata';
import { IJsonMetaData, JSON_META_DATA_KEY } from './../interface/json.metadata.interface';

export function JsonProperty<T>(metadata?:IJsonMetaData<T>|string): any {
    if (metadata instanceof String || typeof metadata === "string"){
        return Reflect.metadata(JSON_META_DATA_KEY, {
            name: metadata,
            clazz: undefined
        });
    } else {
        let metadataObj = <IJsonMetaData<T>>metadata;
        return Reflect.metadata(JSON_META_DATA_KEY, {
            name: metadataObj ? metadataObj.name : undefined,
            clazz: metadataObj ? metadataObj.clazz : undefined
        });
    }
}
