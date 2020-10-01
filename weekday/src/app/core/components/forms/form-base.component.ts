import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BaseComponent } from '../foundation/base.component';

export abstract class FormBaseComponent extends BaseComponent implements OnInit {

    protected form_formGroup: FormGroup;

    constructor(public form_formBuilder: FormBuilder) {
        super();
    }

    ngOnInit() {
        super.ngOnInit();
        this.form_onBuildForm();
    }

    abstract form_onBuildForm(): void;
    abstract form_onSubmitForm(): void;
    abstract form_onCancelForm(): void;
}
