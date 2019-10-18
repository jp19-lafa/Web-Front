//// Modules ////
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationModule } from './authentication/authentication.module';

//// Routing Module ////
import { AppRoutingModule } from './app-routing.module';

//// Components ////
import { AppComponent } from './app.component';
import { PublicComponent } from './pages/public/public.component';
import { PublicNavigationComponent } from './pages/public-navigation/public-navigation.component';
import { NavigationComponent } from './global/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    PublicNavigationComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthenticationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
