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
import { PublicNavigationComponent } from './pages/public/public-navigation/public-navigation.component';
import { NavigationComponent } from './global/navigation/navigation.component';
import { PublicNodeCardComponent } from './pages/public/public-node-card/public-node-card.component';
import { PublicDataService } from './pages/public/public-data.service';
import { PublicGraphComponent } from './pages/public/public-graph/public-graph.component';
import { PublicHomeComponent } from './pages/public/public-home/public-home.component';
import { PublicFooterComponent } from './pages/public/public-footer/public-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    PublicNavigationComponent,
    NavigationComponent,
    PublicNodeCardComponent,
    PublicGraphComponent,
    PublicHomeComponent,
    PublicFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthenticationModule,
  ],
  providers: [PublicDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
