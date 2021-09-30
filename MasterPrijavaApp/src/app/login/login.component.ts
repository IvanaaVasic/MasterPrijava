import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../models/korisnik';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  korisnici: Korisnik[];

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  korisnickoIme: string;
  lozinka: string;

  login() {
    console.log('zovem servis');
    this.loginService.login(this.korisnickoIme, this.lozinka).subscribe();
  }
}
