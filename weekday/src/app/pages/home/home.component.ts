import { LoginService } from './../../core/services/login/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(public router: Router, public route: ActivatedRoute, public loginService: LoginService) { }

    ngOnInit() {
    }

    logout(): void {
        this.loginService.logout();
        this.router.navigate(['../'], { relativeTo: this.route });
    }

}
