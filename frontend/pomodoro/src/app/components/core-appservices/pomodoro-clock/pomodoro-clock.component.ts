import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pomodoro-clock',
  templateUrl: './pomodoro-clock.component.html',
  styleUrls: ['./pomodoro-clock.component.css']
})
export class PomodoroClockComponent implements OnInit {
// pomodoro clock variables
  time: number = 0
  interval

  secondsToMinutes: any = 0

  hour: number
  minutes: number
  seconds: number

  sString
  mString

  active: boolean = false

// task form variables

goal: string

  constructor() { }

  ngOnInit(): void {
    
  }

  // pomodoro clock methods

  start() {
   this.interval = setInterval(() => {
      this.time++;

      if (this.time < 60)
      this.secondsToMinutes = this.time
      else if (!(this.time > 1500))
      this.secondsToMin(this.time)
      else
      this.reset()
    }, 1500)
    this.active = true
  }
  pause() {
    clearInterval(this.interval);
  }

  reset() {
    clearInterval(this.interval);
    this.time = 0
    this.secondsToMinutes = this.time
  }

  secondsToMin(s:number) {

    this.hour = Math.floor(s / 3600)
    this.minutes = Math.floor(s % 3600 / 60)
    this.seconds = Math.floor(s % 3600 % 60)

    this.sString = `0${this.seconds}`
    this.mString =  `0${this.minutes}`

    this.secondsToMinutes =  `${this.mString.slice(-2)} : ${this.sString.slice(-2)}`

  }

  // methods for goal : actual task to complete

  saveTask(f) {
    this.goal = f.value.task
    console.log(this.goal)
  }

}
