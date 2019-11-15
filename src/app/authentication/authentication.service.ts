import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable, throwError, Observer } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Tokens } from './token.model';
import { Router } from '@angular/router';
import * as Msal from 'msal/dist/msal';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private userLoginStateObserver: Observer<boolean>;
  public userLoginState: Observable<boolean>;
  myMSALObj: any;

  private msalConfig = {
    auth: {
      clientId: '70da46a1-aa1c-4c23-86d5-15a047c09909',
      authority: 'https://login.microsoftonline.com/33d8cf3c-2f14-48c0-9ad6-5d2825533673',
      redirectURI: "http://localhost:4200/",
      graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
      graphScopes: ["30998aad-bc60-41d4-a602-7d4c14d95624/user_impersonation"],

    },
    cache: {
      cacheLocation: "localStorage",
      storeAuthStateInCookie: true
    }
  };

  constructor(private http: HttpClient, private router: Router) {
    this.userLoginState = new Observable<boolean>((observer) => {
      this.userLoginStateObserver = observer;
    });
  }

  //#region Microsoft login

  //#endregion

  login(user: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${environment.api}/auth/login`, user)
      .pipe(
        tap(tokens => this.storeTokens(tokens)),
        mapTo(true),
        catchError(error => {
          return throwError(error);
        }));
  }

  logout() {
    this.removeTokens();
    return true;
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  refreshToken() {
    return this.http.post<any>(`${environment.api}/auth/refresh`, {
      'refreshToken': this.getRefreshToken()
    }).pipe(
      tap((tokens) => this.storeTokens(tokens)),
      mapTo(true),
      catchError(error => {
        this.logout();
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeTokens(tokens: Tokens) {
    // this.userLoginStateObserver.next(true);
    localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refresh);
  }

  private removeTokens() {
    // this.userLoginStateObserver.next(false);
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }
}
