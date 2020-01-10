import { TaskStatusPipe } from './task-status.pipe';

xdescribe('TaskStatusPipe', () => {
    it('create an instance', () => {
        const pipe = new TaskStatusPipe();
        expect(pipe).toBeTruthy();
    });
});
