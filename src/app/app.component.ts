import { Component } from '@angular/core';
// import {MatDialog} from '@angular/material/dialog';
// import { DialogComponent } from './components/dialog/dialog.component';
import Project from './classes/project.class';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Ready Set Goal';
    projects: Project[] = [];
    currentProject: Project;

    // public dialog: MatDialog
    constructor() {
        this.projects = [new Project("My First Project")];
        this.currentProject = this.projects[0];
    }

    openDialog(): void {
        // const dialogRef = this.dialog.open(DialogComponent, {
        //     width: '250px',
        //     data: {create: "Task", date: "idk"}
        // });

        // dialogRef.afterClosed().subscribe(result => {
        //     console.log('The dialog was closed');
        //     this.date = result;
        // });
    }

}
