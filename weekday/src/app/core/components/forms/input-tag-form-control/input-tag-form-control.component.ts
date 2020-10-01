import { FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-input-tag-form-control',
    templateUrl: './input-tag-form-control.component.html',
    styleUrls: ['./input-tag-form-control.component.scss']
})
export class InputTagFormControlComponent {

    @Input() control: FormControl;
    @Input() placeholder: string = '';
    @Input() label: string = '';
    @Input() type: string = 'text';

    constructor() { }
}
