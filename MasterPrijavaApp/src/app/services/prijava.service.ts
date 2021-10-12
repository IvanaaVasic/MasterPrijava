import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prijava } from '../models/prijava';

@Injectable({
  providedIn: 'root'
})
export class PrijavaService {
  baseUri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  posaljiPrijavu( 
    imePrezime: string,
    brojIndeksa: number,
    modul: string,
    rukovodilac: string,
    rukovodilacChoice: string,
    nazivPredmetaRukovodioca: string,
    naslovCirilica: string,
    naslovEngleski: string,
    clanKomisije1: string,
    clanKomisije2: string){

      const prijavaData = {
    imePrezime: imePrezime,
    brojIndeksa: brojIndeksa,
    modul: modul,
    rukovodilac: rukovodilac,
    rukovodilacChoice: rukovodilacChoice,
    nazivPredmetaRukovodioca: nazivPredmetaRukovodioca,
    naslovCirilica: naslovCirilica,
    naslovEngleski: naslovEngleski,
    clanKomisije1: clanKomisije1,
    clanKomisije2: clanKomisije2
      };
      return this.http.post(`${this.baseUri}/prijava`, prijavaData).subscribe
  }

}
