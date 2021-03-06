// TODO REMOVE
export class GlobalSettings {

    // tslint:disable-next-line: variable-name
    private static _shared: GlobalSettings;

    static get shared(): GlobalSettings {
        if (!GlobalSettings._shared) {
            GlobalSettings._shared = new GlobalSettings();
        }

        return GlobalSettings._shared;
    }

    private constructor() {}

    // tslint:disable-next-line: variable-name
    private _hostURL: string = 'http://localhost:3000';
    get hostURL(): string {
        return this._hostURL;
    }

    // tslint:disable-next-line: variable-name
    private _object_type_key: string = 'my_type';
    get objectTypeKey(): string {
        return this._object_type_key;
    }
}
