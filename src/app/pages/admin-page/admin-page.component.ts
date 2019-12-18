import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  showAddFarm: boolean;
  showUsers: boolean;
  constructor(private router: Router) {
    this.showAddFarm = true;
    this.showUsers = false;
  }

  ngOnInit() {
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
