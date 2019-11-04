import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Chart from 'chart.js';
import { PublicDataService } from '../../public-data.service';

@Component({
  selector: 'app-air-humidity',
  templateUrl: './air-humidity.component.html',
  styleUrls: ['./air-humidity.component.scss']
})
export class AirHumidityComponent implements OnInit {
  @ViewChild('canvasContext', { static: false }) canvas: ElementRef;
  context: CanvasRenderingContext2D;
  chart: any;

  constructor(private publicDataSvc: PublicDataService) { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.context = this.canvas.nativeElement.getContext('2d');
    this.createHumidityChart();
  }

  createHumidityChart() {
    this.chart = new Chart(this.context, {
      type: 'line',
      data: {
        labels: this.publicDataSvc.AirHumSensorTimes,
        datasets: [{
          label: 'Relative Air Humidity in %',
          fill: false,
          data: this.publicDataSvc.AirHumSensorValues,
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
          text: 'Air Humidity '
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              suggestedMin: 0,
              suggestedMax: 100,
            }
          }]
        }
      }
    });
  }

}
