import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  register() {
  this.router.navigate(['/login']);
  }
}
