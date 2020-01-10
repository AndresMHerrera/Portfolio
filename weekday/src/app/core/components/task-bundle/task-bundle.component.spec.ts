import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBundleComponent } from './task-bundle.component';

xdescribe('TaskBundleComponent', () => {
    let component: TaskBundleComponent;
    let fixture: ComponentFixture<TaskBundleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TaskBundleComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TaskBundleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
