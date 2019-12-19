import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './pages/public/public.component';
import { PublicHomeComponent } from './pages/public/public-home/public-home.component';

import { LoginComponent } from './pages/authentication/login/login.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { NodeDetailComponent } from './components/node-detail/node-detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'overview', component: OverviewComponent, children: [
    { path: '', component: NodeDetailComponent },
    { path: ':id', component: NodeDetailComponent }
  ]},
  // { path: 'public-farms', component: PublicComponent },
  // { path: 'public-home', component: PublicHomeComponent },
  { path: '**', redirectTo: 'overview', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
