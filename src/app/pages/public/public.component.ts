import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Node, PublicDataService } from 'src/app/pages/public/public-data.service';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
  @ViewChild('tempChart', { static: false }) tempCanvas: ElementRef;
  @ViewChild('waterLevelChart', { static: false }) waterLevelCanvas: ElementRef;
  TempContext: CanvasRenderingContext2D;
  WaterLevelContext: CanvasRenderingContext2D;
  tempChart: any;
  waterLevelChart: any;
  nodes: Node[] = [];
  constructor(private publicDataSvc: PublicDataService) {
    this.nodes = this.publicDataSvc.nodes;
  }
  ngAfterViewInit(): void {
    this.TempContext = this.tempCanvas.nativeElement.getContext('2d');
    this.WaterLevelContext = this.waterLevelCanvas.nativeElement.getContext('2d');
    this.createTempChart();
    this.createWaterLevelChart();
  }
  ngOnInit() { }

  createWaterLevelChart() {
    this.waterLevelChart = new Chart(this.WaterLevelContext, {
      type: 'bar',
      data: {
        labels: ['Now', '1 hour ago', '2 hours ago', '3 hours ago', '4 hours ago'],
        datasets: [{
          label: 'Level 1',
          fill: true,
          data: this.publicDataSvc.activePage.lvl1DataSet,
          backgroundColor: [
            'rgb(0,191,255)'
          ],
          borderColor: [
            'rgb(0,191,255)'
          ],
          borderWidth: 2
        },
        {
          label: 'Level 2',
          fill: true,
          data: this.publicDataSvc.activePage.lvl2DataSet,
          backgroundColor: [
            'rgb(0,0,255)'
          ],
          borderColor: [
            'rgb(0,0,255)'
          ],
          borderWidth: 2
        },
        {
          label: 'Level 3',
          fill: true,
          data: this.publicDataSvc.activePage.lvl3DataSet,
          backgroundColor: [
            'rgb(0,0,128)'
          ],
          borderColor: [
            'rgb(0,0,128)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Waterlevel in mm from the last 4 hours'
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              suggestedMin: 0,
              suggestedMax: 50,
            }
          }]
        }
      }
    });
  }
  createTempChart() {
    this.tempChart = new Chart(this.TempContext, {
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
