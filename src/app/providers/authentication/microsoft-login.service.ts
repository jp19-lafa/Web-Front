import { Injectable } from '@angular/core';
import { UserAgentApplication } from "msal";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MicrosoftLoginService {
  private scopes: string[];
  private msal;
  private config = {
    auth: {
      clientID: '70da46a1-aa1c-4c23-86d5-15a047c09909',
      authority: 'https://login.microsoftonline.com/33d8cf3c-2f14-48c0-9ad6-5d2825533673',
      redirectUri: 'http://localhost:4200/authentication',
    },
    options: {
      cacheLocation: "localStorage",
      storeAuthStateInCookie: true,
    },
    cache: {}
  }
  constructor(private router: Router) {
    this.createUserAgentApplication();
  }

  createUserAgentApplication() {
    this.msal = new UserAgentApplication(
      this.config.auth.clientID,
      this.config.auth.authority,
      tokenCallback => { console.log('tokencallback') },
      { redirectUri: this.config.auth.redirectUri });
    this.scopes = ["user.read"];
  }

  mslogin() {
    this.msal.loginPopup(this.scopes).then(res => {
      console.log('request', res);
      this.storeTokens(res);
    });
  }
  storeTokens(token: string) {
    return localStorage.setItem('JWT_TOKEN', token);
  }
  getStoredTokens() {
    return console.log(localStorage.getItem('JWT_TOKEN'));
  }
}
