import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PublicDataService } from '../../public-data.service';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-water-ph',
  templateUrl: './water-ph.component.html',
  styleUrls: ['./water-ph.component.scss']
})
export class WaterPhComponent implements OnInit {
  @ViewChild('canvasContext', { static: false }) canvas: ElementRef;
  context: CanvasRenderingContext2D;
  chart: any;
  constructor(private publicDataSvc: PublicDataService) { }

  ngAfterViewInit(): void {
    this.context = this.canvas.nativeElement.getContext('2d');
    this.createPhChart();
  }

  ngOnInit() {
  }

  createPhChart() {
    console.log('Creating ph chart');
    console.log(this.publicDataSvc.WaterPhSensorTimes);
    console.log(this.publicDataSvc.WaterPhSensorValues);
    this.chart = new Chart(this.context, {
      type: 'line',
      data: {
        labels: this.publicDataSvc.WaterPhSensorTimes,
        datasets: [{
          label: 'Acidic <-> Neutral <-> Alkaline',
          fill: false,
          data: this.publicDataSvc.WaterPhSensorValues,
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
          text: 'Water ph'
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              suggestedMin: 0,
              suggestedMax: 14,
            }
          }]
        }
      }
    });
  }
}
