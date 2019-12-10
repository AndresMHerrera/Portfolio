import { UserService } from './../../core/services/user/user.service';
import { LoginService } from './../../core/services/login/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    // tslint:disable-next-line: no-inferrable-types
    public display: boolean = false;

    // tslint:disable-next-line: no-inferrable-types
    public checked2: boolean = false;

    constructor(public router: Router, public route: ActivatedRoute, public loginService: LoginService, public userService: UserService) { }

    ngOnInit() {
        console.log('HomeComponent - ngOnInit');

        this.userService.getUser().subscribe(
            (value) => {
                console.log('HomeComponent -------------------------');
                console.log(value);
            }
        );
    }

    logout(): void {
        this.loginService.logout();
        this.router.navigate(['../'], { relativeTo: this.route });
    }

    onDisplaySideMenu(): void {
        this.display = !this.display;
    }

}
