import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrijavaService } from '../services/prijava.service';

@Component({
  selector: 'app-obrazlozenje',
  templateUrl: './obrazlozenje.component.html',
  styleUrls: ['./obrazlozenje.component.css'],
})
export class ObrazlozenjeComponent implements OnInit {
  constructor(private prijavaService: PrijavaService, private router: Router) {}

  ngOnInit(): void {
    this.brojIndeksa = this.prijavaService.prijava.Indeks;
    this.imePrezime = this.prijavaService.prijava.ImePrezime;
    this.modul = this.prijavaService.prijava.Modul;
  }

  brojIndeksa: string;
  imePrezime: string;
  modul: string;

  predmet: string;
  oblast: string;
  cilj: string;
  ocekivaniRezultat: string;

  posaljiObrazac() {
    this.prijavaService
      .addObrazlozenjeAndSubmit(
        this.predmet,
        this.oblast,
        this.cilj,
        this.ocekivaniRezultat
      )
      .subscribe((response) => {
        console.log('Vraceni odgobor je: ' + response);
      });

    this.router.navigate(['/uspesno']);
  }
}
