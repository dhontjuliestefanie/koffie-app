import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KoffieDetailComponent } from './features/koffie/koffie-detail/koffie-detail.component';
import { KoffieComponent } from './features/koffie/koffie/koffie.component';
import { LoginComponent } from './features/login/login/login.component';
import { TheeComponent } from './features/thee/thee/thee.component';

const routes: Routes = [
  { path: 'home', component: KoffieComponent },
  { path: 'thee', component: TheeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'koffie-detail/:naam', component: KoffieDetailComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
