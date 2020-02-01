import { LoginModel } from './../../core/models/login.model';
import { LoginService } from './../../core/services/login/login.service';
import { ROUTE_PATHS } from './../../routing/route-paths';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBaseComponent } from 'src/app/core/components/forms/form-base.component';
import { InputTagFormControlComponentParams } from 'src/app/core/components/forms/input-tag-form-control/input-tag-form-control.component';
import { Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent extends FormBaseComponent<LoginModel> implements OnInit {

    public usernameFormControl: InputTagFormControlComponentParams<LoginModel>;
    public passwordFormControl: InputTagFormControlComponentParams<LoginModel>;
    public loginModel: LoginModel = new LoginModel();

    constructor(public router: Router, public loginService: LoginService) {
        super();
    }

    ngOnInit() {
        console.log('LoginComponent - ngOnInit');
        this.formBase_buildForm();
    }

    signUp(): void {
        this.router.navigate([ROUTE_PATHS.SIGNUP]);
    }

    onLogin(): void {
        this.loginService.login();
        this.router.navigate([ROUTE_PATHS.HOME]);
    }

    formBase_buildForm(): void {

        console.log('formBase_buildForm');

        this.usernameFormControl = new InputTagFormControlComponentParams(this.formBase_formGroup, 'username', this.loginModel, 'username', [Validators.required], 'username' );
        this.passwordFormControl = new InputTagFormControlComponentParams(this.formBase_formGroup, 'password', this.loginModel, 'password', [Validators.required], 'password', 'password' );
    }

    test() {
        console.log(this.formBase_formGroup);
    }

}
