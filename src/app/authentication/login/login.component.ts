import { Component, OnInit } from '@angular/core';
import { faEnvelope, faLock, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public faEnvelope = faEnvelope;
  public faLock = faLock;

  constructor() { }

  ngOnInit() {
  }

}
