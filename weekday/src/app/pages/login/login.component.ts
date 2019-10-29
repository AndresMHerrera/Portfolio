import { ROUTE_PATHS } from './../../routing/route-paths';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(public router: Router) { }

    ngOnInit() {
    }

    signUp(): void {
        this.router.navigate([ROUTE_PATHS.SIGNUP]);
    }

    login(): void {
        this.router.navigate([ROUTE_PATHS.HOME]);
    }

}
