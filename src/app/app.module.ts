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
import { PublicHomeComponent } from './pages/public/public-home/public-home.component';
import { PublicFooterComponent } from './pages/public/public-footer/public-footer.component';
import { WaterTemperatureComponent } from './pages/public/charts/water-temperature/water-temperature.component';
import { AirTemperatureComponent } from './pages/public/charts/air-temperature/air-temperature.component';
import { LightIntensistyComponent } from './pages/public/charts/light-intensisty/light-intensisty.component';
import { AirHumidityComponent } from './pages/public/charts/air-humidity/air-humidity.component';
import { WaterPhComponent } from './pages/public/charts/water-ph/water-ph.component';

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
    WaterPhComponent
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
