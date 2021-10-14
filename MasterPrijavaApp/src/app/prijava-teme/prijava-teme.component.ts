import { Component, OnInit } from '@angular/core';
import { PrijavaService } from '../services/prijava.service';
import { Router } from '@angular/router';
import { Prijava } from '../models/prijava';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-prijava-teme',
  templateUrl: './prijava-teme.component.html',
  styleUrls: ['./prijava-teme.component.css']
})
export class PrijavaTemeComponent implements OnInit {

  constructor(private prijavaServis: PrijavaService, private router: Router) { }

  ngOnInit(): void {
  }
  prijava: Prijava

  imePrezime: string;
  brojIndeksa: number;
  modul: string;
  rukovodilac: string;
  rukovodilacChoice: string;
  nazivPredmetaRukovodioca: string;
  naslovCirilica: string;
  naslovEngleski: string;
  clanKomisije1: string;
  clanKomisije2: string;

  posaljiPrijavu() {
    if (confirm("Da li zelite da prosledite Vasu prijavu?"))
    this.prijavaServis.posaljiPrijavu(this.prijava)
    //.subscribe((res: any) => {
          this.router.navigate(['/biografija']);
    };
   
    
} 
  


