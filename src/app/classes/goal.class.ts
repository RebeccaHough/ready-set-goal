import Task from './task.class';
import Completion from '../interfaces/completion/completion.interface';

export default class Goal {
    name: string;
    description: string;
    attachedFiles: File[]; //todo
    completion: Completion
    tasks: Task[];

    constructor(name: string) {
        this.name = name;
        this.description = null;
        this.attachedFiles = null;
        this.completion = null;
        this.tasks = null;
    }
}
