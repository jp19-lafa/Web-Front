import { Component, OnInit, Input } from '@angular/core';
import { Sensor } from 'src/app/interfaces';

@Component({
  selector: 'app-value-card',
  templateUrl: './value-card.component.html',
  styleUrls: ['./value-card.component.scss']
})
export class ValueCardComponent implements OnInit {
  @Input() sensor: Sensor;
  constructor() { }

  ngOnInit() { }

}
