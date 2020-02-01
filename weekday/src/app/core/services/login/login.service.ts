import { Injectable } from '@angular/core';
import { Subject, Observable, PartialObserver, Observer } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    // true, if user logged in
    // false, if user logged out
    private userHasLoggedInOrOutNotifier: Subject<boolean>;

    constructor() {
        this.userHasLoggedInOrOutNotifier = new Subject();
    }

    public subscribeForUserLoginNotifications(observer: PartialObserver<boolean>): void {
        this.userHasLoggedInOrOutNotifier.subscribe(observer);
    }

    public login(): boolean {
        let result: boolean = true;

        this.userHasLoggedInOrOutNotifier.next(true);

        return result;
    }

    public logout(): boolean {
        let result: boolean = false;

        this.userHasLoggedInOrOutNotifier.next(false);

        return result;
    }
}
