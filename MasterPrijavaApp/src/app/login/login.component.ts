import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../models/korisnik';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  korisnici: Korisnik[];

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  korisnickoIme: string;
  lozinka: string;

  login() {
    this.loginService
      .login(this.korisnickoIme, this.lozinka)
      .subscribe((korisnik: Korisnik) => {
        if (korisnik.Tip == 'student') {
          this.router.navigate(['/prijava']);
        }
        localStorage.setItem('ulogovan', JSON.stringify(korisnik));
      });
  }
}
