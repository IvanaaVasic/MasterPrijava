import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../models/korisnik';
import { Prijava } from '../models/prijava';
import { PrijavaService } from '../services/prijava.service';

@Component({
  selector: 'app-biografija',
  templateUrl: './biografija.component.html',
  styleUrls: ['./biografija.component.css'],
})
export class BiografijaComponent implements OnInit {
  constructor(private prijavaService: PrijavaService, private router: Router) {}

  biografija: string;

  ngOnInit(): void {
    const ulogovanKorisnik: Korisnik = JSON.parse(
      localStorage.getItem('ulogovan')
    );

    this.prijavaService
      .fetchPrijavaByStudentId(ulogovanKorisnik.Id)
      .subscribe((nadjenePrijave: Prijava[]) => {
        if (nadjenePrijave.length === 1) {
          const prijava: Prijava = nadjenePrijave[0];
          this.biografija = prijava.Biografija;
        }
      });
  }

  addBio() {
    this.prijavaService.addBio(this.biografija);

    this.router.navigate(['/obrazlozenje']);
  }
}
