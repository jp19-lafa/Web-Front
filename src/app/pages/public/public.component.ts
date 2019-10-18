import { Component, OnInit } from '@angular/core';
import { Node, PublicDataService } from 'src/app/pages/public/public-data.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
  nodes: Node[] = [];
  constructor(private publicDataSvc: PublicDataService) {
    this.nodes = this.publicDataSvc.nodes;
  }

  ngOnInit() {
  }

}
