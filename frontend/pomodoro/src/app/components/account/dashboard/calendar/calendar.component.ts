import { Component, OnInit } from '@angular/core';
import { CalendarView } from 'angular-calendar';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  // https://stackblitz.com/run?file=demo%2Ftemplate.html

  view: CalendarView = CalendarView.Week;

  CalendarView = CalendarView;

  // try to make this editable
  // of course change the styling
  viewDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    // console.log(this.viewDate)
  }

  

}
