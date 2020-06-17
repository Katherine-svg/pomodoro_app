import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  username: any;

  status: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  
  }

  login(f: NgForm) {

    this.loginForm = new FormGroup({
      'username': new FormControl(this.username, [
        Validators.required
        // , Validators.minLength(4)
      ])
    });

    this.status = this.loginForm.status

    if (!(f.value.username == "")) {
   // console.log(f.value.username)
   // console.log(f.value.password)
    sessionStorage.setItem("currentuser", f.value.username)
    this.router.navigate(['/pomodoro-clock'])
  }
  }

}
