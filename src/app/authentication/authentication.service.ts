import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable, throwError, Observer } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Tokens } from './token.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private userLoginStateObserver: Observer<boolean>;
  public userLoginState: Observable<boolean>;

  constructor(private http: HttpClient, private router: Router) {
    this.userLoginState = new Observable<boolean>((observer) => {
      this.userLoginStateObserver = observer;
    });
  }

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
