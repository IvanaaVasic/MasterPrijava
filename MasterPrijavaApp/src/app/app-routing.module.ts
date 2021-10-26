import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiografijaMentorComponent } from './biografija-mentor/biografija-mentor.component';
import { BiografijaComponent } from './biografija/biografija.component';
import { LoginComponent } from './login/login.component';
import { MentorComponent } from './mentor/mentor.component';
import { ObrazlozenjeMentorComponent } from './obrazlozenje-mentor/obrazlozenje-mentor.component';
import { ObrazlozenjeComponent } from './obrazlozenje/obrazlozenje.component';
import { PrijavaMentorComponent } from './prijava-mentor/prijava-mentor.component';
import { PrijavaTemeComponent } from './prijava-teme/prijava-teme.component';
import { UspesnaPrijavaComponent } from './uspesna-prijava/uspesna-prijava.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'prijava', component: PrijavaTemeComponent },
  { path: 'obrazlozenje', component: ObrazlozenjeComponent },
  { path: 'biografija', component: BiografijaComponent },
  { path: 'mentor', component: MentorComponent },
  { path: 'uspesno', component: UspesnaPrijavaComponent },
  { path: 'prijavaMentor/:id', component: PrijavaMentorComponent },
  { path: 'biografijaMentor/:id', component: BiografijaMentorComponent },
  { path: 'obrazlozenjeMentor/:id', component: ObrazlozenjeMentorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
