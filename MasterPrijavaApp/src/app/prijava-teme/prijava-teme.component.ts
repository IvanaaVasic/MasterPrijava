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
  constructor(private prijavaServis: PrijavaService, private router: Router) {}

  ngOnInit(): void {}

  imePrezime: string;
  brojIndeksa: string;
  modul: string;
  rukovodilac: string;
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
      prijava.Rukovodilac = this.rukovodilac;
      prijava.RukovodilacAngazovan = this.rukovodilacChoice;
      prijava.RukovodilacPredmet = this.nazivPredmetaRukovodioca;
      prijava.NaslovSrb = this.naslovCirilica;
      prijava.NaslovEng = this.naslovEngleski;
      prijava.PredlogMentor = this.mentor;
      prijava.PredlogDrugiClan = this.clanKomisije1;
      prijava.PredlogTreciClan = this.clanKomisije2;

      this.prijavaServis.startPrijava(prijava);

      //  this.prijavaServis.posaljiPrijavu(prijava).subscribe((response) => {
      //    console.log(response)
      //  })
    }

    //.subscribe((res: any) => {
    this.router.navigate(['/biografija']);
  }
}
