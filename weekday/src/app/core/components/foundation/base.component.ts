import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

export abstract class BaseComponent implements OnInit {

    constructor() {}

    ngOnInit() {
        this.base_onLoadPageData();
    }

    abstract base_onLoadPageData(): void;
}
