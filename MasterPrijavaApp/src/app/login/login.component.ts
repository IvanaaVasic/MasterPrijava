import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../models/korisnik';
import { Prijava } from '../models/prijava';
import { LoginService } from '../services/login.service';
import { PrijavaService } from '../services/prijava.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  korisnici: Korisnik[];

  constructor(
    private loginService: LoginService,
    private router: Router,
    private prijavaServis: PrijavaService
  ) {}

  ngOnInit(): void {}

  korisnickoIme: string;
  lozinka: string;

  login() {
    this.loginService
      .login(this.korisnickoIme, this.lozinka)
      .subscribe((korisnik: Korisnik) => {
        if (korisnik.Tip == 'student') {
          this.ucitajPrijave(korisnik);
        }
        if (korisnik.Tip == 'mentor') {
          this.router.navigate(['/mentor']);
        }
        // else alert('Netacni podaci ili nepostojeci korisnik. Molimo obratite se studentskoj sluzbi')
        localStorage.setItem('ulogovan', JSON.stringify(korisnik));
      });
  }

  ucitajPrijave(korisnik: Korisnik) {
    this.prijavaServis.getPrijave().subscribe((lista: Prijava[]) => {
      this.prijavaServis.svePrijave = lista;
      const prijava = this.prijavaServis.getPrijavaByStudentId(korisnik.Id);
      if (prijava) {
        this.router.navigate([`pregled-prijave/${prijava.Id}`]);
      } else {
        this.router.navigate(['/prijava']);
      }
    });
  }
}
