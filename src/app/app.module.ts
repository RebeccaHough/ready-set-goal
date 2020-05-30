import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';

import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatDialog} from '@angular/material/dialog';

import { AppComponent } from './app.component';
// import { DialogComponent } from './components/dialog/dialog.component';
import { TaskComponent } from './components/task/task.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ProjectComponent } from './components/project/project.component';

const MaterialModules = [
  MatListModule,
  MatInputModule,
  MatIconModule,
  MatExpansionModule,
  MatSidenavModule
]

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    CalendarComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ...MaterialModules
  ],
  // entryComponents: [
  //   DialogComponent
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
