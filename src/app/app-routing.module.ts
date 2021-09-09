import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiografijaComponent } from './biografija/biografija.component';
import { LoginComponent } from './login/login.component';
import { ObrazlozenjeComponent } from './obrazlozenje/obrazlozenje.component';
import { PrijavaTemeComponent } from './prijava-teme/prijava-teme.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'prijava', component: PrijavaTemeComponent},
  {path: 'obrazlozenje', component: ObrazlozenjeComponent},
  {path: 'biografija', component: BiografijaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
