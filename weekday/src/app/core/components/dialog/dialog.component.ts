import { Component, OnInit, Input } from '@angular/core';

export class DialogComponentParam {

    public title: string;
    public visible: boolean;

    constructor(title: string, visible = false) {
        this.title = title;
        this.visible = visible;
    }
}

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

    @Input() params: DialogComponentParam;

    constructor() { }

    ngOnInit() {

    }

}
