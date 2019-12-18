import { Component, OnInit } from '@angular/core';
import { NewNode } from 'src/app/providers/interfaces';

@Component({
  selector: 'app-add-farm',
  templateUrl: './add-farm.component.html',
  styleUrls: ['./add-farm.component.scss']
})
export class AddFarmComponent implements OnInit {
  newNode: NewNode;
  constructor() { }

  ngOnInit() {
  }

}
