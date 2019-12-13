import { AllModelsUtility } from './../util/all.models.util';


// export function mappable(constructor: Function) {
export function mappable(constructor: any) {
    const key: string = constructor.prototype.constructor.name;
    AllModelsUtility.shared.models[key] = constructor;
}
