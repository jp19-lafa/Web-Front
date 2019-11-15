//// Modules ////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//// Interceptors ////
import { TokenInterceptor } from './token.interceptor';

//// Services ////
import { AuthenticationService } from './authentication.service';

@NgModule({
  declarations: [],
  providers: [
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
  ]
})
export class AuthenticationModule { }
