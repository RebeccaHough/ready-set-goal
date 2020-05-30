import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent{
  calendarUrl: string = 'https://calendar.google.com/calendar/embed?src=5jm2g4t17u5u6ghom0ufc66av4%40group.calendar.google.com&ctz=Europe%2FOslo'; //time-zones?
  sanitizedCalendarUrl: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.sanitizedCalendarUrl = sanitizer.bypassSecurityTrustResourceUrl(this.calendarUrl);
  }

}
