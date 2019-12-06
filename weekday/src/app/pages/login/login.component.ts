import { LoginService } from './../../core/services/login/login.service';
import { ROUTE_PATHS } from './../../routing/route-paths';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(public router: Router, public loginService: LoginService) { }

    ngOnInit() {
    }

    signUp(): void {
        this.router.navigate([ROUTE_PATHS.SIGNUP]);
    }

    onLogin(): void {
        this.loginService.login();
        this.router.navigate([ROUTE_PATHS.HOME]);
    }

}
