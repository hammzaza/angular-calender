import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {DayPilot} from "daypilot-pro-angular";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DataService {

  events: any[] = [
    {
      id: "1",
      start: DayPilot.Date.today().addHours(10),
      end: DayPilot.Date.today().addHours(12),
      text: "Event 1",
      barColor: "#6d9eeb"
    },
    {
      id: "2",
      start: DayPilot.Date.today().addHours(13),
      end: DayPilot.Date.today().addHours(15),
      text: "Event 2",
      barColor: "#93c47d"
    },
    {
      id: "3",
      start: DayPilot.Date.today().addHours(15).addMinutes(30),
      end: DayPilot.Date.today().addHours(18),
      text: "Event 3",
      barColor: "#ffd966"
    },
    {
      id: "4",
      start: DayPilot.Date.today().addDays(1).addHours(11),
      end: DayPilot.Date.today().addDays(1).addHours(14),
      text: "Event 4",
      barColor: "#e06666"
    }
  ];

  constructor(private http : HttpClient){
  }

  getEvents(from: DayPilot.Date, to: DayPilot.Date): Observable<any[]> {
    // simulating an HTTP request
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.events);
      }, 200);
    });

    // return this.http.get("/api/events?from=" + from.toString() + "&to=" + to.toString());
  }
}