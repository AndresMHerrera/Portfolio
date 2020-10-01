export const JSON_META_DATA_KEY = "jsonProperty";
export interface IJsonMetaData<T> {
    name?: string,
    clazz?: {new(): T}
}
