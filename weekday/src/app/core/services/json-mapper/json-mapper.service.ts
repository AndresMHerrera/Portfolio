import 'reflect-metadata';
import { JSON_META_DATA_KEY, IJsonMetaData } from './interface/json.metadata.interface';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class JsonMapperService {

    constructor() { }

    public deserialize<T>(classReference: { new(): T}, jsonObject: any): T | T[] {
        if (Array.isArray(jsonObject))  {
            return this.deserializeArray(classReference, jsonObject);
        }
        else {
            return this.deserializeObject(classReference, jsonObject);
        }
    }

    public serialize<T>(payload: T | T[]): any {
        if (Array.isArray(payload)) {
            let result: any[] = [];
            payload.forEach((item) => {
                result.push(this.serializeObject<T>(item));
            });
            return result;
        }
        else {
            return this.serializeObject(payload);
        }
    }

	public isPrimitive(obj): boolean {

        let typeOfObject: string = typeof obj;
        let result: boolean = false;

        if (typeOfObject == 'string' || typeOfObject == 'number' || typeOfObject == 'boolean') {
            return true;
        }

        result = (obj instanceof String || obj === String ||
            obj instanceof Number || obj === Number ||
            obj instanceof Boolean || obj === Boolean);

        return result;
    }

	public getClazz(target: any, propertyKey: string): any {
        return Reflect.getMetadata("design:type", target, propertyKey);
	}

	public getJsonProperty<T>(target: any, propertyKey: string):  IJsonMetaData<T> {
		return Reflect.getMetadata(JSON_META_DATA_KEY, target, propertyKey);
    }

    public deserializeArray<T>(classReference: { new(): T}, jsonArray: any[]): T[] {
        let result: T[] = [];
        jsonArray.forEach((jsonObject) => {
            result.push(this.deserializeObject(classReference, jsonObject));
        });

        return result;
    }

    public isArray(object) {
        let result: boolean = false;

        if (object === Array) {
            result = true;
        }
        else if (Array.isArray(object)) {
            result = true;
        }

        return result;
    }

	public deserializeObject<T>(classReference: { new(): T}, jsonObject: any): T {

        let classInstance =  undefined;

        if (!classReference || !jsonObject)
            return undefined;

        if (classReference == Date.prototype.constructor) {
            classInstance = new Date(jsonObject);
            return classInstance;
        }
        else {
            classInstance = new classReference();
        }

        Object.keys(classInstance).forEach((key) => {

            let propertyMetadataFn:(IJsonMetaData: IJsonMetaData<T>) => any = (propertyMetadata)=> {
                let jsonPropertyName = propertyMetadata.name || key;
                let innerJson = jsonObject ? jsonObject[jsonPropertyName] : undefined;
                let clazz = this.getClazz(classInstance, key);

                // Handle Array
                if (this.isArray(clazz)) {
                    let metadata = this.getJsonProperty(classInstance, key);

                    if (metadata.clazz || this.isPrimitive(clazz)) {
                        if (innerJson && this.isArray(innerJson)) {
                            return innerJson.map(
                                (item)=> this.deserializeObject(metadata.clazz, item)
                            );
                        }
                        else {
                            return undefined;
                        }
                    }

                    else {
                        return innerJson;
                    }
                }

                // Handle Object
                else if (!this.isPrimitive(clazz) && clazz) {
                    return this.deserializeObject(clazz, innerJson);
                }

                // Handle Primitive types
                else {
                    return jsonObject ? jsonObject[jsonPropertyName] : undefined;
                }
            };

            let propertyMetadata:IJsonMetaData<any> = this.getJsonProperty(classInstance, key);

            // Only map fields that have Metadata else set the classInstance[key] to undefined.
            if (propertyMetadata) {
                classInstance[key] = propertyMetadataFn(propertyMetadata);
            }
            else {
                classInstance[key] = undefined;
            }
        });

        return classInstance;
    }

    public serializeObject<T>(payload: T): any {

        let serializedObject: any = {};

        if (!payload) {
            return serializedObject;
        }

        Object.keys(payload).forEach((key) => {

            let propertyMetadataFn:(IJsonMetaData) => any = (propertyMetadata)=> {
                if (Array.isArray(payload[key])) {
                    let mappedArray = (payload[key] as Array<T>).map(value => {
                        let res =  this.serializeObject(value);
                        console.log('From array map');
                        console.log(res);
                        console.log(value);
                        return res;
                    });

                    console.log('mappedArray');
                    console.log(mappedArray);

                    return mappedArray;
                }
                else if (!this.isPrimitive(payload[key])) {
                    // if its a class
                    return this.serializeObject(payload[key]);
                }
                else {
                    return payload[key];
                }
            };

            let propertyMetadata:IJsonMetaData<any> = this.getJsonProperty(payload, key);

            // console.log('** propertyMetadata **');
            // console.log(propertyMetadata);

            // map only if there's propertyMetadata
            if (propertyMetadata) {
                serializedObject[propertyMetadata.name] = propertyMetadataFn(propertyMetadata);
            }
        });

        return serializedObject;
    }
}
