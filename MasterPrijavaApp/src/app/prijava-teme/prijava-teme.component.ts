import { Component, OnInit } from '@angular/core';
import { PrijavaService } from '../services/prijava.service';
import { Router } from '@angular/router';
import { Prijava } from '../models/prijava';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-prijava-teme',
  templateUrl: './prijava-teme.component.html',
  styleUrls: ['./prijava-teme.component.css'],
})
export class PrijavaTemeComponent implements OnInit {
  constructor(private prijavaServis: PrijavaService, private router: Router) {
    this.mentori = [];
  }

  ngOnInit(): void {
    this.prijavaServis
      .getMentori()
      .subscribe((mentori: { Id: number; Ime: string }[]) => {
        this.mentori = mentori;
      });
  }

  mentori: { Id: number; Ime: string }[];
  imePrezime: string;
  brojIndeksa: string;
  modul: string;
  idRukovodioca: string;
  rukovodilacChoice: string;
  nazivPredmetaRukovodioca: string;
  naslovCirilica: string;
  naslovEngleski: string;
  clanKomisije1: string;
  clanKomisije2: string;
  mentor: string;

  posaljiPrijavu() {
    if (confirm('Da li zelite da prosledite Vasu prijavu?')) {
      const prijava = new Prijava();

      prijava.ImePrezime = this.imePrezime;
      prijava.Indeks = this.brojIndeksa;
      prijava.Modul = this.modul;
      prijava.IdRukovodioca = Number(this.idRukovodioca);
      prijava.Rukovodilac = this.mentori.find(
        (m) => m.Id === Number(this.idRukovodioca)
      ).Ime; // Izbaciti kad i polje iz modela prijava
      prijava.RukovodilacAngazovan = this.rukovodilacChoice;
      prijava.RukovodilacPredmet = this.nazivPredmetaRukovodioca;
      prijava.NaslovSrb = this.naslovCirilica;
      prijava.NaslovEng = this.naslovEngleski;
      prijava.PredlogMentor = this.mentor;
      prijava.PredlogDrugiClan = this.clanKomisije1;
      prijava.PredlogTreciClan = this.clanKomisije2;

      this.prijavaServis.startPrijava(prijava);
    }

    this.router.navigate(['/biografija']);
  }
}
