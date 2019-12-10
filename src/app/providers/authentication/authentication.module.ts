//// Modules ////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

//// Interceptors ////
import { TokenInterceptor } from './token.interceptor';

//// Services ////
import { AuthenticationService } from './authentication.service';
import { MicrosoftLoginService } from './microsoft-login.service';

//// Components ////
import { LoginComponent } from 'src/app/pages/authentication/login/login.component';

@NgModule({
  declarations: [
    LoginComponent,
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
