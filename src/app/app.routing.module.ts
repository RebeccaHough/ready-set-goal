import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ProjectComponent } from './components/project/project.component';

const routes: Routes = [
    {
        path: 'project',
        component: ProjectComponent
    },
    {
        path: 'calendar',
        component: CalendarComponent
    },
    {
        path: '',
        redirectTo: 'project',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'project',
        pathMatch: 'full'
    }
];

@NgModule({
  //{ enableTracing: true }
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }