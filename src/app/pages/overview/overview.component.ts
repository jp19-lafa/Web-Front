import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  nodes = ['Development node 1', 'Development node 2', 'Development node 3', 'Development node 4'];
  clickedNode: String;
  @ViewChild('chartCanvas', { static: false }) chartCanvas: ElementRef;
  context: CanvasRenderingContext2D;
  chart;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.context = this.chartCanvas.nativeElement.getContext('2d');
    this.createChart();
  }
  selectNode(event) {
    this.clickedNode = event.target.innerText;
    console.log('clicked', this.clickedNode);
  }

  createChart() {
    this.chart = new Chart(this.context, {
      type: 'line',
      data: {
        labels: 'label',
        datasets: [{
          label: 'Temperature in °C',
          fill: false,
          data: ['5', '10', '20', '30', '40', '30', '0'],
          backgroundColor: [
            'rgba(76, 175, 80, 1)'
          ],
          borderColor: [
            'rgba(76, 175, 80, 1)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Air Temperature'
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              suggestedMin: -10,
              suggestedMax: 40,
            }
          }]
        }
      }
    });
  }

}
