import {Component, ViewChild, AfterViewInit} from "@angular/core";
import {DayPilot, DayPilotCalendarComponent} from "daypilot-pro-angular";
import {DataService} from "./data.service";{}

@Component({
  selector: 'calendar-component',
  template: `<daypilot-calendar [config]="config" [events]="events" #calendar></daypilot-calendar>`,
  styles: [``]
})
export class CalendarComponent implements AfterViewInit {

  @ViewChild("calendar")
  calendar: DayPilotCalendarComponent;

  events: any[] = [];

  config: any = {
    days: 15,
    startDate: DayPilot.Date.today().firstDayOfWeek(),
    timeRangeSelectedHandling: "Disabled",
    eventDeleteHandling: "Disabled",
  };

  constructor(private ds: DataService) {
  }

  ngAfterViewInit(): void {
    var from = this.calendar.control.visibleStart();
    var to = this.calendar.control.visibleEnd();
    this.ds.getEvents(from, to).subscribe(result => {
      this.events = result;
    });
  }

}

