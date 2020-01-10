import { WallModel } from './../../core/models/wall.model';
import { UserModel } from './../../core/models/user.model';
import { WallService } from './../../core/services/wall/wall.service';
import { UserService } from './../../core/services/user/user.service';
import { LoginService } from './../../core/services/login/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { switchMap, tap } from 'rxjs/operators';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    // tslint:disable-next-line: no-inferrable-types
    public display: boolean = false;

    public user: UserModel = undefined;
    public walls: WallModel[] = [];
    public selectedWall: WallModel = undefined;

    constructor(public router: Router,
                public route: ActivatedRoute,
                public loginService: LoginService,
                public wallService: WallService,
                public userService: UserService) { }

    ngOnInit() {

        this.userService.getUser().pipe(
            tap((user: UserModel) => {
                this.user = user;
            }),
            switchMap(() => this.wallService.getWallsByUser(0))
        ).subscribe(
            (walls: WallModel[]) => {
                this.walls = walls;
                if (this.walls.length > 0) {
                    this.selectedWall = this.walls[0];
                }

                console.log(this.user);
                console.log(this.walls);
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
