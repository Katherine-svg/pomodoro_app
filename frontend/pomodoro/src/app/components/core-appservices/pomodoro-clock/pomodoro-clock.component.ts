import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pomodoro-clock',
  templateUrl: './pomodoro-clock.component.html',
  styleUrls: ['./pomodoro-clock.component.css']
})
export class PomodoroClockComponent implements OnInit {

  time: number = 0
  interval

  secondsToMinutes: any = 0

  hour: number
  minutes: number
  seconds: number

  sString
  mString

  active: boolean = false

  constructor() { }

  ngOnInit(): void {
    
  }

  start() {
   this.interval = setInterval(() => {
      this.time++;

      if (this.time < 60)
      this.secondsToMinutes = this.time
      else
      this.secondsToMin(this.time)
      
    }, 1500)
    this.active = true
  }
  pause() {
    clearInterval(this.interval);
  }

  reset() {
    clearInterval(this.interval);
    this.time = 0
    this.secondsToMin(this.time)
  }

  secondsToMin(s:number) {

    this.hour = Math.floor(s / 3600)
    this.minutes = Math.floor(s % 3600 / 60)
    this.seconds = Math.floor(s % 3600 % 60)

    this.sString = `0${this.seconds}`
    this.mString =  `0${this.minutes}`

    this.secondsToMinutes =  `${this.mString.slice(-2)} : ${this.sString.slice(-2)}`

  }

}
