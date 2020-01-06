import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/providers/interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() member: Member;
  constructor() { }

  ngOnInit() {
  }

}
