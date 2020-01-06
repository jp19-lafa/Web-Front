//// Modules ////
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationModule } from './providers/authentication/authentication.module';
import { SentryErrorHandler } from './providers/error/sentry';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//// Routing Module ////
import { AppRoutingModule } from './app-routing.module';

//// Components ////
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NodeListItemComponent } from './components/node-list-item/node-list-item.component';
import { ControllerComponent } from './components/controller/controller.component';
import { ValueCardComponent } from './components/value-card/value-card.component';
import { GraphComponent } from './components/graph/graph.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';

//// Pages ////
import { OverviewComponent } from './pages/overview/overview.component';
import { PublicComponent } from './pages/public/public.component';
import { PublicNavigationComponent } from './pages/public/public-navigation/public-navigation.component';
import { PublicNodeCardComponent } from './pages/public/public-node-card/public-node-card.component';
import { PublicDataService } from './pages/public/public-data.service';
import { PublicHomeComponent } from './pages/public/public-home/public-home.component';
import { PublicFooterComponent } from './pages/public/public-footer/public-footer.component';
import { WaterTemperatureComponent } from './pages/public/charts/water-temperature/water-temperature.component';
import { AirTemperatureComponent } from './pages/public/charts/air-temperature/air-temperature.component';
import { LightIntensistyComponent } from './pages/public/charts/light-intensisty/light-intensisty.component';
import { AirHumidityComponent } from './pages/public/charts/air-humidity/air-humidity.component';
import { WaterPhComponent } from './pages/public/charts/water-ph/water-ph.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AddFarmComponent } from './pages/add-farm/add-farm.component';
import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './pages/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    PublicNavigationComponent,
    NavigationComponent,
    PublicNodeCardComponent,
    PublicHomeComponent,
    PublicFooterComponent,
    WaterTemperatureComponent,
    AirTemperatureComponent,
    LightIntensistyComponent,
    AirHumidityComponent,
    WaterPhComponent,
    OverviewComponent,
    NodeListItemComponent,
    ControllerComponent,
    ValueCardComponent,
    GraphComponent,
    PopUpComponent,
    AdminPageComponent,
    AddFarmComponent,
    UsersComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthenticationModule,
    FontAwesomeModule
  ],
  providers: [
    PublicDataService,
    { provide: ErrorHandler, useClass: SentryErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
