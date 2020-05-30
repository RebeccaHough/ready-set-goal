import Goal from './goal.class';
import Colour from '../interfaces/completion/colour.type';

export default class Project {
    name: string;
    colour: Colour;
    description: string;
    attachedFiles: File[]; //todo
    complete: boolean;
    active: boolean;
    showOnCalendar: boolean;
    goals: Goal[];

    constructor(name: string) {
        this.name = name;
        this.description = null;
        this.attachedFiles = null;
        this.colour = "green",
        this.complete = false;
        this.active = true,
        this.showOnCalendar = true,
        this.goals = null;
    }
}
