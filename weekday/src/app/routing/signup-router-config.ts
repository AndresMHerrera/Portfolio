import { ROUTE_PATHS } from './route-paths';
import { InviteTeamMembersComponent } from './../pages/invite-team-members/invite-team-members.component';
import { SignupComponent } from './../pages/signup/signup.component';
import { Route } from '@angular/router';

export const signupRouterConfig: Route[] = [
    {
        path: ROUTE_PATHS.SIGNUP,
        component: SignupComponent
    },
    {
        path: 'invite',
        component: InviteTeamMembersComponent
    }
];
