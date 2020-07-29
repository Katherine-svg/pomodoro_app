import { Component, OnInit } from '@angular/core';
import { Task, Intervals } from 'src/app/shared/models/model';

@Component({
  selector: 'app-pomodoro-clock',
  templateUrl: './pomodoro-clock.component.html',
  styleUrls: ['./pomodoro-clock.component.css']
})
export class PomodoroClockComponent implements OnInit {

  // fix pomodoro

  // boolean whether user is logged in or not so I can know the set up of this pomodoro
      // when user doesnt have an account. they can only use one pomodoro at a time
      // when user has an account. they can see statistics and their behavior in this info
  isThereUser:boolean = sessionStorage.getItem("currentuser") ? true : false;

  // TODO look to see if there is any major changes I need to make
  // TODO look for when to persist to database and how to manage exiting pomodoro component

  // task form variables
  goal: string
  task: Task
  status: string
  
  // pomodoro clock variables
  time: number = 0
  interval: any

  secondsToMinutes: any = 0

  hour: number
  minutes: number
  seconds: number

  sString
  mString

  active: boolean = false
/*
// time stamps
setTime: number
// a pomodoro is 25 minutes ie 1500 sec
pomodoro: number = 1500

// breaks under 4 pomodoros are 5 minutes
shortBreak: number = 300

// a break after 4 pomodoro is 30 minutes
longBreak: number = 1800
*/

// time stamps
setTime: number
// a pomodoro is 25 minutes ie 1500 sec
pomodoro: number = 4

// breaks under 4 pomodoros are 5 minutes
shortBreak: number = 3

// a break after 4 pomodoro is 30 minutes
longBreak: number = 5
// tracking pomodoros

pomodoroComplete: number = 0
pomodoroCount: number = 1
pomodoroTotal: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  // pomodoro clock methods

  start() {
   this.interval = setInterval(() => {
      this.timeCount(this.time)
      this.time++;
    }, 1500)
  }

  timeCount(time: number) {
    
    if (this.pomodoroComplete == 0) {
      
      this.status =  "pomodoro number " + this.pomodoroCount + "."

      this.active = true
      this.secondsToMin(this.time)

      if (time == this.pomodoro) {
                  this.pomodoroCount++
                  this.pomodoroComplete++
                  this.resetTime("pomodoro", this.time)
      }

      console.log("pomodoro"+time)

    }
    else if (this.pomodoroCount <= 4 
              && this.pomodoroComplete == 1) {
      
      this.status = "short break"

      this.active = true
      this.secondsToMin(this.time)

      if (time == this.shortBreak) {
                    this.pomodoroComplete = 0
                    this.resetTime("short break", this.time)
      }
      
      console.log("break"+time)
      
    }
    else {
      
      this.status = "long break"

      this.active = true
      this.secondsToMin(this.time)

      console.log("long break pomodoroCount"+this.pomodoroCount)

      if (time == this.longBreak) {

                  // update pomodoro here to be sent to the database

                    this.pomodoroTotal += this.pomodoroCount
                    this.pomodoroCount = 1
                    this.pomodoroComplete = 0
                    this.resetTime("long break", this.time)
                    console.log(this.task)
      }
      console.log("long break"+time)
      
    }
  }

  pause() {
    clearInterval(this.interval);
  }

  resetTime(type, timeInSeconds) {

    console.log(type +" "+ timeInSeconds)
    console.log(new Intervals(type, new Date, timeInSeconds))

    this.task.addPomodoro(
      new Intervals(type, new Date, timeInSeconds)
    )
    this.reset()
  }

  reset() {
    clearInterval(this.interval);
    this.active = false
    this.time = 0
    this.secondsToMinutes = this.time

    //                                                                           <---- local reset
    this.localReset('');
  }

  secondsToMin(s:number) {

    // this.hour = Math.floor(s / 3600)

    // just in case I want to make the settings more flexible

    this.minutes = Math.floor(s % 3600 / 60)
    this.seconds = Math.floor(s % 3600 % 60)

    this.sString = `0${this.seconds}`
    this.mString =  `${this.minutes}`

    if (s < 60)
    this.secondsToMinutes = s
    else
    this.secondsToMinutes =  `${this.mString.slice(-2)} : ${this.sString.slice(-2)}`

    //                                                              <--- update
    this.localSave(this.task);

    // figure out a right place to save and a right place to clean local storage
  }

  // methods for goal : actual task to complete

  saveTask(f) {
    this.goal = f.value.task
    this.task = new Task(this.goal, new Date)

    this.localSave(this.task);
    // figure out how to use the local sotrage to temporarily 
    // store everything if the user doesnt have an account

    // get back the object by using JSON.parse()
  }

    stop() {
      this.reset();
      this.goal = null;
    }

  localSave(tasks) {
    localStorage.setItem('task', JSON.stringify(tasks));
  }

  localReset(reset) {
    localStorage.setItem('task', reset);
  }
}
