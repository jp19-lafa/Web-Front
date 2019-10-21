import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as Chart from 'chart.js';
import { PublicDataService } from '../public-data.service';

@Component({
  selector: 'app-public-graph',
  templateUrl: './public-graph.component.html',
  styleUrls: ['./public-graph.component.scss']
})
export class PublicGraphComponent implements OnInit {
  @ViewChild('chartCanvas', { static: false }) chartCanvas: ElementRef;
  context: CanvasRenderingContext2D;
  chart: any;
  constructor(private publicDataSvc: PublicDataService) { }

  ngAfterViewInit(): void {
    this.context = this.chartCanvas.nativeElement.getContext('2d');
    this.createTempChart();
  }
  ngOnInit() {
  }

  updateChart() {

  }

  createTempChart() {
    this.chart = new Chart(this.context, {
      type: 'line',
      data: {
        labels: ['Now', '1 hour ago', '2 hours ago', '3 hours ago', '4 hours ago'],
        datasets: [{
          label: 'temperature of the water',
          fill: false,
          data: this.publicDataSvc.activePage.tempDataSet,
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
          text: 'Temperature in °C from the last 4 hours'
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
