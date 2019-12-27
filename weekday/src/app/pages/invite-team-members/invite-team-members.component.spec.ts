import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteTeamMembersComponent } from './invite-team-members.component';

xdescribe('InviteTeamMembersComponent', () => {
    let component: InviteTeamMembersComponent;
    let fixture: ComponentFixture<InviteTeamMembersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InviteTeamMembersComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InviteTeamMembersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
