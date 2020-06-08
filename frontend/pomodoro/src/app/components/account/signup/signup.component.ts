import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email
  username
  password
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  register(s: NgForm) {
    console.log(s.value.email)
    console.log(s.value.username)
    console.log(s.value.password)
  this.router.navigate(['/login']);
  }
}
