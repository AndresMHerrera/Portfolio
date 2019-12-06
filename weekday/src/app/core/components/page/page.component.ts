import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'page-component',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

    pageFullHeightStyle: string[] = ['height-without-navbar', 'logged-out-background'];
    pageNotFullHeightStyle: string[] = ['height-with-navbar', 'logged-in-background'];
    pageStyle: string[];

    // tslint:disable-next-line: no-inferrable-types
    private _isContentFullHeight: boolean = true;

    @Input() public get isContentFullHeight(): boolean {
        return this._isContentFullHeight;
    }

    public set isContentFullHeight(v: boolean) {
        this.pageStyle = v ? this.pageFullHeightStyle : this.pageNotFullHeightStyle;
        this._isContentFullHeight = v;
    }

    constructor() { }

    ngOnInit() {

    }

}
