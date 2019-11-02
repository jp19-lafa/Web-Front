import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Chart from 'chart.js';
import { PublicDataService } from '../../public-data.service';

@Component({
  selector: 'app-light-intensisty',
  templateUrl: './light-intensisty.component.html',
  styleUrls: ['./light-intensisty.component.scss']
})
export class LightIntensistyComponent implements OnInit {
  @ViewChild('canvasContext', { static: false }) canvas: ElementRef;
  context: CanvasRenderingContext2D;
  chart: any;

  constructor(private publicDataSvc: PublicDataService) { }

  ngAfterViewInit(): void {
    this.context = this.canvas.nativeElement.getContext('2d');
    this.createLightChart();
  }

  ngOnInit() {
  }
  createLightChart() {
    this.chart = new Chart(this.context, {
      type: 'line',
      data: {
        labels: ['Now', '1 hour ago', '2 hours ago', '3 hours ago', '4 hours ago'],
        datasets: [{
          label: 'Intensity in %',
          fill: false,
          data: ['12', '52', '34', '12'],//this.publicDataSvc.ActiveNodeData.sensors.lightstr
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
          text: 'Light Intensity'
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
