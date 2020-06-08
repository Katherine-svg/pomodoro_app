import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(f: NgForm) {
    console.log(f.value.username)
    console.log(f.value.password)
    sessionStorage.setItem("currentuser", f.value.username)
    this.router.navigate(['/pomodoro-clock'])
  }

}
