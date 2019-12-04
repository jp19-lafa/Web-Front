import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-value-card',
  templateUrl: './value-card.component.html',
  styleUrls: ['./value-card.component.scss']
})
export class ValueCardComponent implements OnInit {
  @Input() type: string;
  constructor() { }

  ngOnInit() {
  }

}
