import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './pages/public/public.component';
import { PublicHomeComponent } from './pages/public/public-home/public-home.component';


const routes: Routes = [
  { path: 'public-farms', component: PublicComponent },
  { path: 'public-home', component: PublicHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
