import { ROUTE_PATHS } from './../../routing/route-paths';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    constructor(public router: Router) { }

    ngOnInit() {
    }

    submit(): void {
        this.router.navigate([ROUTE_PATHS.HOME]);
    }

}
