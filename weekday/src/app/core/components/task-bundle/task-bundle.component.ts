import { TaskModel } from './../../models/task.model';
import { TaskService } from './../../services/task/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-task-bundle',
    templateUrl: './task-bundle.component.html',
    styleUrls: ['./task-bundle.component.scss']
})
export class TaskBundleComponent implements OnInit {

    constructor(public taskService: TaskService) { }

    ngOnInit() {
        this.taskService.getTasksForWall(0).subscribe(
            (tasks: TaskModel[]) => {
                console.log(tasks);
            }
        );
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
