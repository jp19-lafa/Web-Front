import { Component, OnInit } from '@angular/core';
import { MicrosoftLoginService } from 'src/app/authentication/microsoft-login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private msService: MicrosoftLoginService) {
    console.log(this.msService.getStoredTokens());
  }

  ngOnInit() {
  }

}
