import { FormGroup } from '@angular/forms';
import { AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';

export abstract class FormBaseComponent<T> {

    protected formBase_formGroup: FormGroup = new FormGroup({});

    constructor() {}


    abstract formBase_buildForm(): void;
    // abstract formBase_dataToSubmit(data: T): void;


    // TODO: Figure out how to create an instance of the type, and assign the appropriate values
    // obtained from user input.

    // * Bind to form component
    form_onSubmit(_: FormGroup) {

        // attach my_type to form group object to map to .ts model
        // this.formGroup.value[this.base_globalSettingsService.objectTypeKey] = this.form_data_model[this.base_globalSettingsService.objectTypeKey];

        // let result: T = this.objectMapperService.deserializeObject(this.formGroup.value);

        // this.form_dataToSubmit(result);
    }

}
