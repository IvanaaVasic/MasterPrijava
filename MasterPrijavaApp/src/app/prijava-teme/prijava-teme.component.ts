import { Component, OnInit } from '@angular/core';
import { PrijavaService } from '../services/prijava.service';
import { Router } from '@angular/router';
import { Prijava } from '../models/prijava';

@Component({
  selector: 'app-prijava-teme',
  templateUrl: './prijava-teme.component.html',
  styleUrls: ['./prijava-teme.component.css']
})
export class PrijavaTemeComponent implements OnInit {

  constructor(private prijavaServis: PrijavaService, private router: Router) { }

  ngOnInit(): void {
  }

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

  posaljiPrijavu(){
    this.prijavaServis
    .posaljiPrijavu(this.imePrezime, this.brojIndeksa, this.modul, 
      this.rukovodilac, this.rukovodilacChoice, this.nazivPredmetaRukovodioca,
      this.naslovCirilica, this.naslovEngleski, this.clanKomisije1, this.clanKomisije2)
    .subscribe((prijava: Prijava) => {
      
          this.router.navigate(['/biografija']);
    )};
   
    
} 
  


