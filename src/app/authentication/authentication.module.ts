//// Modules ////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { OAuthModule, OAuthService, UrlHelperService, OAuthLogger } from 'angular-oauth2-oidc';


//// Interceptors ////
import { TokenInterceptor } from './token.interceptor';

//// Services ////
import { AuthenticationService } from './authentication.service';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  providers: [
    OAuthService,
    UrlHelperService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['http://localhost:4200/'],
        sendAccessToken: true
      }
    }),
    ReactiveFormsModule,
  ]
})
export class AuthenticationModule { }
