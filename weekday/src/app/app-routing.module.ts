import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { signupRouterConfig } from './routing/signup-router-config';

const indexRoute: Route = {
    path: '',
    component: LoginComponent
};

const fallbackRoute: Route = {
    path: '**',
    component: LoginComponent
};


const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    ...signupRouterConfig,
    {
        path: 'home',
        component: HomeComponent
    },
    indexRoute,
    fallbackRoute
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
