import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../models/korisnik';
import { Prijava } from '../models/prijava';
import { PrijavaService } from '../services/prijava.service';

@Component({
  selector: 'app-obrazlozenje',
  templateUrl: './obrazlozenje.component.html',
  styleUrls: ['./obrazlozenje.component.css'],
})
export class ObrazlozenjeComponent implements OnInit {
  constructor(private prijavaService: PrijavaService, private router: Router) {}

  ulogovanKorisnik: Korisnik;

  brojIndeksa: string;
  imePrezime: string;
  modul: string;

  predmet: string;
  oblast: string;
  cilj: string;
  ocekivaniRezultat: string;

  ngOnInit(): void {
    this.ulogovanKorisnik = JSON.parse(localStorage.getItem('ulogovan'));

    this.brojIndeksa = this.prijavaService.prijava.Indeks;
    this.imePrezime = this.prijavaService.prijava.ImePrezime;
    this.modul = this.prijavaService.prijava.Modul;

    const ulogovanKorisnik: Korisnik = JSON.parse(
      localStorage.getItem('ulogovan')
    );

    this.prijavaService
      .fetchPrijavaByStudentId(ulogovanKorisnik.Id)
      .subscribe((nadjenePrijave: Prijava[]) => {
        if (nadjenePrijave.length === 1) {
          const prijava: Prijava = nadjenePrijave[0];

          this.predmet = prijava.Predmet;
          this.oblast = prijava.Oblast;
          this.cilj = prijava.Cilj;
          this.ocekivaniRezultat = prijava.OcekivaniRezultat;
        }
      });
  }

  posaljiObrazac() {
    // ako vec postoji posalji update upit
    // ako ne postoji onda posalji kao i do sada
    this.prijavaService
      .fetchPrijavaByStudentId(this.ulogovanKorisnik.Id)
      .subscribe((nadjenePrijave: Prijava[]) => {
        if (nadjenePrijave.length === 0) {
          this.posaljiNovuPrijavu();
        } else {
          const nadjenaPrijava: Prijava = nadjenePrijave[0];
          this.izmeniPostojecuPrijavu(nadjenaPrijava.Id);
        }
      });

    this.router.navigate(['/uspesno']);
  }

  izmeniPostojecuPrijavu(id: number) {
    this.prijavaService
      .updateAndSubmit(
        id,
        this.predmet,
        this.oblast,
        this.cilj,
        this.ocekivaniRezultat
      )
      .subscribe(() => {});
  }

  posaljiNovuPrijavu() {
    this.prijavaService
      .addObrazlozenjeAndSubmit(
        this.predmet,
        this.oblast,
        this.cilj,
        this.ocekivaniRezultat
      )
      .subscribe(() => {});
  }
}
