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
    this.chart = new Chart(this.context, {
      type: 'line',
      data: {
        labels: this.publicDataSvc.activePage.sensors.waterph.history.map(time => {
          let formatted = new Date(time.timestamp).getHours() + ':' + new Date(time.timestamp).getMinutes().toString();
          return formatted;
        }) || [],
        datasets: [{
          label: 'Acidic <-> Neutral <-> Alkaline',
          fill: false,
          data: this.publicDataSvc.activePage.sensors.waterph.history.map(value => value.value) || [],
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
