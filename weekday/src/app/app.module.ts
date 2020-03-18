import './core/util/init.util';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { InviteTeamMembersComponent } from './pages/invite-team-members/invite-team-members.component';
import { PageComponent } from './core/components/page/page.component';
import { NavigationBarComponent } from './core/components/navigation-bar/navigation-bar.component';

// import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TaskBundleComponent } from './core/components/task-bundle/task-bundle.component';
import { TaskStatusPipe } from './core/pipes/task-status.pipe';
import {DialogModule} from 'primeng/dialog';
import { InputTagFormControlComponent } from './core/components/forms/input-tag-form-control/input-tag-form-control.component';
import { DialogComponent } from './core/components/dialog/dialog.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        SignupComponent,
        InviteTeamMembersComponent,
        PageComponent,
        NavigationBarComponent,
        TaskBundleComponent,
        TaskStatusPipe,
        InputTagFormControlComponent,
        DialogComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        // InputTextModule,
        ButtonModule,
        BrowserAnimationsModule,
        SidebarModule,
        ToggleButtonModule,
        FormsModule,
        HttpClientModule,
        DialogModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
