//// Modules ////
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationModule } from './providers/authentication/authentication.module';
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

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    OverviewComponent,
    NodeListItemComponent,
    ControllerComponent,
    ValueCardComponent,
    GraphComponent,
    PopUpComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
