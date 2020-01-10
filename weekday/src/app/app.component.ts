import { Router } from '@angular/router';
import { PartialObserver } from 'rxjs';
import { LoginService } from './core/services/login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'weekday';

    // tslint:disable-next-line: no-inferrable-types
    isUserLoggedIn: boolean = false;
    observer: PartialObserver<boolean>;

    constructor(private loginService: LoginService, public router: Router) {

        this.observer = {
            next: (x: boolean) => {
                console.log(`observer 1: ${x}`);
                this.isUserLoggedIn = x;
            }
        };

        this.loginService.subscribeForUserLoginNotifications(this.observer);
    }

    ngOnInit(): void {
        this.router.navigate(['']);
    }
}
