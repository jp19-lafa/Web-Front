import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Chart from 'chart.js';
import { PublicDataService } from '../../public-data.service';

@Component({
  selector: 'app-air-temperature',
  templateUrl: './air-temperature.component.html',
  styleUrls: ['./air-temperature.component.scss']
})
export class AirTemperatureComponent implements OnInit {
  @ViewChild('canvasContext', { static: false }) canvas: ElementRef;
  context: CanvasRenderingContext2D;
  chart: any;
  tempValues;
  tempTimes: [];

  constructor(private publicDataSvc: PublicDataService) { }

  ngAfterViewInit(): void {
    this.context = this.canvas.nativeElement.getContext('2d');
    this.createTempChart();
  }

  ngOnInit() {
    this.mapSensorData();
  }

  mapSensorData() {
    this.tempValues = this.publicDataSvc.ActiveNodeData.sensors.airhumidity.map(value => {
      console.log(value);
    })
  }

  createTempChart() {
    this.chart = new Chart(this.context, {
      type: 'line',
      data: {
        labels: this.publicDataSvc.AirTempSensorTimes,
        datasets: [{
          label: 'Temperature in °C',
          fill: false,
          data: this.publicDataSvc.AirTempSensorValues,//this.publicDataSvc.ActiveNodeData.sensors.watertemp
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
