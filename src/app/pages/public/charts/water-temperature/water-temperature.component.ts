import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Chart from 'chart.js';
import { PublicDataService, PublicNode } from '../../public-data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-water-temperature',
  templateUrl: './water-temperature.component.html',
  styleUrls: ['./water-temperature.component.scss']
})
export class WaterTemperatureComponent implements OnInit {
  @ViewChild('canvasContext', { static: false }) canvas: ElementRef;
  context: CanvasRenderingContext2D;
  chart: any;

  constructor(private publicDataSvc: PublicDataService) { }

  ngAfterViewInit(): void {
    this.context = this.canvas.nativeElement.getContext('2d');
    this.createTempChart();
  }

  ngOnInit() { }
  createTempChart() {
    this.chart = new Chart(this.context, {
      type: 'line',
      data: {
        labels: this.publicDataSvc.activePage.sensors.watertemp.history.map(time => {
          let formatted = new Date(time.timestamp).getHours() + ':' + new Date(time.timestamp).getMinutes().toString();
          return formatted;
        }) || [],
        datasets: [{
          label: 'Temperature in °C',
          fill: false,
          data: this.publicDataSvc.activePage.sensors.watertemp.history.map(value => value.value) || [],
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
          text: 'Water Temperature '
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
