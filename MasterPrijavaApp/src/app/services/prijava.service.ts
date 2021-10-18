import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prijava } from '../models/prijava';

@Injectable({
  providedIn: 'root'
})
export class PrijavaService {
  baseUri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  prijava: Prijava

  posaljiPrijavu(prijava: Prijava){
      
      this.http.post(`${this.baseUri}/posaljiPrijavu`, prijava).subscribe
  }

}
