import { PartialObserver } from 'rxjs';
import { LoginService } from './core/services/login/login.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'weekday';

    // tslint:disable-next-line: no-inferrable-types
    isUserLoggedIn: boolean = false;

    observer: PartialObserver<boolean>;

    constructor(private loginService: LoginService) {

        this.observer = {
            next: (x: boolean) => {
                console.log(`observer 1: ${x}`);
                this.isUserLoggedIn = x;
            }
        };

        this.loginService.subscribeForUserLoginNotifications(this.observer);
    }
}
