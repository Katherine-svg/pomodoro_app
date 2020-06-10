export enum Role {
    User = 'User',
    Admin = 'Admin'
  }

export class User {
    id: number;
    username: string;
    password: string;
    email: string;
    role: Role;
    token?: string;
}

export class Task {
  task: string;
  startTime: Date;
  pomodoro: Intervals[]
  endTime?: Date;
  id?: number;

  constructor(task: string
    , startTime: Date
    , pomodoro: Intervals[] = []
    , id?: number ){

    this.task = task;
    this.startTime = startTime;
    this.pomodoro = pomodoro;
    this.id = id;
  }

  addPomodoro(time: Intervals) {
    this.pomodoro.push(time);
  }

  getPomodoro() {
   return this.pomodoro;
  }
}

export class Intervals {
  type: string;
  startTime: Date;
  timeInSeconds: number;
  id?: number;

  constructor(type: string
    , startTime: Date
    , timeInSeconds: number
    , id?: number ){

    this.type = type;
    this.startTime = startTime;
    this.timeInSeconds = timeInSeconds;
    this.id = id;
  }
}