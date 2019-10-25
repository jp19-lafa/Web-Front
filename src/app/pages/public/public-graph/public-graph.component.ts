import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as Chart from 'chart.js';
import { Nodes, PublicDataService } from '../public-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-public-graph',
  templateUrl: './public-graph.component.html',
  styleUrls: ['./public-graph.component.scss']
})
export class PublicGraphComponent implements OnInit {
  @ViewChild('chartCanvas', { static: false }) chartCanvas: ElementRef;
  context: CanvasRenderingContext2D;
  chart: any;
  nodeInfo: Nodes;
  tempValues: number[] = [];
  constructor(private publicDataSvc: PublicDataService, private http: HttpClient) { }

  ngAfterViewInit(): void {
    this.context = this.chartCanvas.nativeElement.getContext('2d');
    this.createTempChart();
  }
  ngOnInit() {
  }

  createTempChart() {
    this.chart = new Chart(this.context, {
      type: 'line',
      data: {
        labels: ['Now', '1 hour ago', '2 hours ago', '3 hours ago', '4 hours ago'],
        datasets: [{
          label: 'temperature of the water',
          fill: false,
          data: this.publicDataSvc.activePage.sensors.airtemp,
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
