import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './pages/public/public.component';
import { PublicHomeComponent } from './pages/public/public-home/public-home.component';

import { LoginComponent } from './pages/authentication/login/login.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'overview/:id', component: OverviewComponent },
  { path: 'public-farms', component: PublicComponent },
  { path: 'public-home', component: PublicHomeComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: '**', redirectTo: 'overview', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
