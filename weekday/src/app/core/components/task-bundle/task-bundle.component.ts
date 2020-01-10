import { TaskBundleModel } from './../../models/task-bundle.model';
import { TaskModel } from './../../models/task.model';
import { TaskService } from './../../services/task/task.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-task-bundle',
    templateUrl: './task-bundle.component.html',
    styleUrls: ['./task-bundle.component.scss']
})
export class TaskBundleComponent implements OnInit {

    @Input() taskBundle: TaskBundleModel;

    constructor(public taskService: TaskService) { }

    ngOnInit() {
        console.log('TaskBundleComponent');
        console.log(this.taskBundle);
    }

    public onCreateNewTask(): void {
        alert('onCreateNewTask');
    }

    public onCreateNewTaskBundle(): void {
        alert('onCreateNewTaskBundle');
    }

    public onCollapseBundle(): void {
        alert('onCollapseBundle');
    }
}
