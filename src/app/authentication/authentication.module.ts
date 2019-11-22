//// Modules ////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';


//// Interceptors ////
import { TokenInterceptor } from './token.interceptor';

//// Services ////
import { AuthenticationService } from './authentication.service';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MicrosoftLoginService } from './microsoft-login.service';

@NgModule({
  declarations: [
    LoginComponent,
    AuthenticationComponent,
  ],
  providers: [
    MicrosoftLoginService,
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
    ReactiveFormsModule,
  ]
})
export class AuthenticationModule { }
