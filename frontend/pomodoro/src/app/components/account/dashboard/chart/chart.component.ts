import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  yMarkers = [{ label: 'Marker', value: 15, options: { labelPos: 'left' } }];
  yRegions = [
    { label: 'Region', start: 30, end: 50, options: { labelPos: 'right' } }
  ];

  barChartColor = ['#a8026f', '#db2d43', '#e76838'];
  barChartData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],

    datasets: [
      {
        name: 'Some Data',
        values: [25, 40, 30, 35, 8, 52, 87]
      },
      {
        name: 'Another Set',
        values: [25, 50, -10, 15, 18, 32, 76]
      },
      {
        name: 'Yet Another',
        values: [15, 20, -3, -15, 58, 12, 0]
      }
    ]
  };

}
