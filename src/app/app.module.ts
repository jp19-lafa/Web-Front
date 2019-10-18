import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './pages/public/public.component';
import { PublicNavigationComponent } from './pages/public-navigation/public-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    PublicNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
