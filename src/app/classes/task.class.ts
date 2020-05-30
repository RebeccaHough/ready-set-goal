import Completion from '../interfaces/completion/completion.interface';

export default class Task {
    name: string;
    description: string;
    attachedFiles: File[]; //todo
    completion: Completion
    subtasks: Task[];

    constructor(name: string) {
        this.name = name;
        this.description = null;
        this.attachedFiles = null;
        this.subtasks = null;
    }
}