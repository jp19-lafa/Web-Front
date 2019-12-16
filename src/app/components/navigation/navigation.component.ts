import { Component, OnInit } from '@angular/core';
import { faChevronDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle, faBell } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public faPlus = faPlus;
  public faBell = faBell;
  public faUserCircle = faUserCircle;
  public faChevronDown = faChevronDown;

  constructor() { }

  ngOnInit() {
  }

}
