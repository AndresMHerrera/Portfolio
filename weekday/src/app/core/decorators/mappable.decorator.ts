import { AllModelsUtility } from './../util/all.models.util';


// export function mappable(constructor: Function) {
export function mappable(constructor: any) {

    console.log('START mappable.decorator');

    console.log(constructor);

    let key: string = constructor.prototype.constructor.name;
    AllModelsUtility.shared.models[key] = constructor;

    console.log(AllModelsUtility.shared.models);

    console.log('END mappable.decorator');
}
