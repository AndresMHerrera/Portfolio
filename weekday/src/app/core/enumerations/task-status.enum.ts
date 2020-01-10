export enum TASK_STATUS {
    DONE = 'DONE',
    IN_PROGRESS = 'IN_PROGRESS',
    IN_REVIEW = 'IN_REVIEW'
}

export const TASK_STATUS_LABEL_MAP = {
    // tslint:disable-next-line: object-literal-key-quotes
    'DONE' : 'Done',
    // tslint:disable-next-line: object-literal-key-quotes
    'IN_PROGRESS' : 'Working On It',
    // tslint:disable-next-line: object-literal-key-quotes
    'IN_REVIEW' : 'Reviewing'
};
