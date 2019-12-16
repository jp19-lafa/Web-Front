import { Component, OnInit } from '@angular/core';
import { PublicDataService, PublicNode } from 'src/app/pages/public/public-data.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
  publicNodes: PublicNode[] = [];
  constructor(private publicDataSvc: PublicDataService) {
    window.scroll(0, 0);
  }
  ngOnInit() {
    //this.getAllNodes();
    this.getPublicNodes();
  }

  getPublicNodes() {
    this.publicDataSvc.getPublicData().subscribe(nodes => {
      this.publicNodes = nodes;
      this.publicDataSvc.publicNodes = this.publicNodes;
    });
  }
}