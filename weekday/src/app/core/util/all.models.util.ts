export class AllModelsUtility {

    // tslint:disable-next-line: variable-name
    private static _shared: AllModelsUtility;

    static get shared(): AllModelsUtility {
        if (!AllModelsUtility._shared) {
            AllModelsUtility._shared = new AllModelsUtility();
        }
        return AllModelsUtility._shared;
    }

    private constructor() {}

    public models = {};
}
