import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/providers/interfaces';
import { NodeDataService } from 'src/app/providers/API/node-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @Input() members: Member[] = [];
  constructor(private nodeDataSvc: NodeDataService) {
    this.nodeDataSvc.getAllsUsersFromAdmin().subscribe(users => {
      this.members = users;
    });
  }

  ngOnInit() {
  }

}
