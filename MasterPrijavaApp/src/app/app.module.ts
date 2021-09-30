import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrijavaTemeComponent } from './prijava-teme/prijava-teme.component';
import { ObrazlozenjeComponent } from './obrazlozenje/obrazlozenje.component';
import { BiografijaComponent } from './biografija/biografija.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrijavaTemeComponent,
    ObrazlozenjeComponent,
    BiografijaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
