import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './authentication/login/login.component';
import { AuthenticationComponent } from './authentication/authentication/authentication.component';
import { OverviewComponent } from './pages/overview/overview.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'overview/:id', component: OverviewComponent },
  { path: '**', redirectTo: 'overview', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
