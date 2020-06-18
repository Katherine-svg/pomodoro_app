import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  show: boolean = true
  showc: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  chart() {
    this.show = true
    this.showc = false
  }

  calendar() {
    this.show = false
    this.showc = true
  }
}
