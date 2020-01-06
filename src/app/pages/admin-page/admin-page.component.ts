import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NodeDataService } from 'src/app/providers/api/node-data.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  showAddFarm: boolean;
  showUsers: boolean;
  members: number;
  nodes: number;
  constructor(private router: Router, private nodeDataSvc: NodeDataService) {
    this.showAddFarm = true;
    this.showUsers = false;
  }

  ngOnInit() {
    this.nodeDataSvc.getAllsUsersFromAdmin().subscribe(users => { this.members = users.length; });
    this.nodeDataSvc.getAllMyNodes().then(nodes => { this.nodes = nodes.length; });
  }

  addFarm() {
    console.log('click');
    this.showAddFarm = true;
    this.showUsers = false;
  }
  users() {
    console.log('click');
    this.showAddFarm = false;
    this.showUsers = true;
  }
  goToOverview() {
    this.router.navigate(['/overview']);
  }

}
