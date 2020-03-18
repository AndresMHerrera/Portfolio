import { FormGroup, ValidatorFn, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

export class InputTagFormControlComponentParams<T> {
    constructor(public formGroup: FormGroup,
                public formControlName: string,
                public data: T,
                public modelProperty: string,
                public validators: ValidatorFn[],
                public label: string,
                public type: string = 'text',
                public placeholder: string = '') {

                    const control: FormControl = new FormControl(this.data[this.modelProperty], this.validators);
                    this.formGroup.addControl(this.formControlName, control);
                }
}

@Component({
    selector: 'app-input-tag-form-control',
    templateUrl: './input-tag-form-control.component.html',
    styleUrls: ['./input-tag-form-control.component.scss']
})
export class InputTagFormControlComponent<T> implements OnInit {

    @Input() params: InputTagFormControlComponentParams<T>;
    public control: FormControl;

    constructor() { }

    ngOnInit() {
        this.control = this.params.formGroup.controls[this.params.formControlName] as FormControl;
    }
}
