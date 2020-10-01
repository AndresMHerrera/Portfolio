import { DialogComponentParam } from './../../core/components/dialog/dialog.component';
import { LoginService } from './../../core/services/login/login.service';
import { ROUTE_PATHS } from './../../routing/route-paths';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBaseComponent } from 'src/app/core/components/forms/form-base.component';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent extends FormBaseComponent {

    public dialogComponentParam: DialogComponentParam = new DialogComponentParam('Username & Password');

    constructor(public router: Router,
                public loginService: LoginService,
                formBuilder: FormBuilder) {
        super(formBuilder);
    }

    base_onLoadPageData(): void {
        // intentionally blank
    }

    form_onBuildForm(): void {
        this.form_formGroup = this.form_formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    form_onSubmitForm(): void {
        if (this.form_formGroup.valid) {
            this.loginService.login();
            this.router.navigate([ROUTE_PATHS.HOME]);
        } else {
            this.onToggleDialog();
        }
    }

    form_onCancelForm(): void {
        throw new Error("Method not implemented.");
    }

    onSignUp(): void {
        this.router.navigate([ROUTE_PATHS.SIGNUP]);
    }

    onToggleDialog() {
        this.dialogComponentParam.visible = !this.dialogComponentParam.visible;
    }
}
