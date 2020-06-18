import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-managment',
  templateUrl: './log-managment.component.html',
  styleUrls: ['./log-managment.component.css']
})
export class LogManagmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getUser() {
    return sessionStorage.getItem("currentuser") || ''
  }

}
