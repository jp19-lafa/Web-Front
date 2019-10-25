import { Component, OnInit } from '@angular/core';
import { Nodes, PublicDataService } from 'src/app/pages/public/public-data.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
  nodes: Nodes[] = [];
  constructor(private publicDataSvc: PublicDataService) {
    window.scroll(0, 0);
  }
  ngOnInit() {
    this.getAllNodes();
  }

  getAllNodes() {
    this.publicDataSvc.getAllNodes().subscribe((nodes) => {
      this.nodes = nodes;
      this.publicDataSvc.nodes = this.nodes;
    });
  }
}