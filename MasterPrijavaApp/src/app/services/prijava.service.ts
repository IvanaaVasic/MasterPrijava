import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prijava } from '../models/prijava';

@Injectable({
  providedIn: 'root',
})
export class PrijavaService {
  baseUri = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  // [mentor] Sve prijave koje ce da se ucitaju kada mentor izlistava prijave
  svePrijave: Prijava[]; // undefined

  // [student] Prijava koja se koristi da se napravi nova i posalje u bazu
  prijava: Prijava = null;

  /**
   * Ova metoda 'zapocinje' prijavu, odnosno upisuje sve podatke sa prve stranice prijave,
   *  nakon toga je samo potrebnon dodavati podatke u property prijava u ovom servisu
   *  i nakon popunjnavanja svih podataka, tek tada poslati na backend i upisatu u bazu
   */
  startPrijava(prijava: Prijava) {
    this.prijava = prijava;
  }

  addBio(biografija: string) {
    this.prijava.Biografija = biografija;
  }

  addObrazlozenjeAndSubmit(
    predmet: string,
    oblast: string,
    cilj: string,
    ocekivaniRezultat: string
  ) {
    this.prijava.Predmet = predmet;
    this.prijava.Oblast = oblast;
    this.prijava.Cilj = cilj;
    this.prijava.OcekivaniRezultat = ocekivaniRezultat;

    return this.http.put(`${this.baseUri}/posaljiPrijavu`, this.prijava);
  }
  //ova metoda dohvata sve prijave koje mentor moze da lista
  getPrijave() {
    return this.http.get(`${this.baseUri}/prijave`);
  }

  getMentori() {
    return this.http.get(`${this.baseUri}/mentori`);
  }

  // vraca prijavu iz preloadovanih svih prijava
  getPrijavaById(id: number): Prijava {
    return this.svePrijave.find((p) => p.Id === id);
  }

  // vraca prijavu (promise) direktno sa backenda
  fetchPrijavaById(id: number) {
    return this.http.get(`${this.baseUri}/prijava?id=${id}`);
  }

  // vraca prazan niz ako nnije pronadjena prijava, ili vraca niz sa 1 prijavom ako je pronadjena u bazi
  fetchPrijavaByStudentId(studentId: number) {
    return this.http.get(
      `${this.baseUri}/prijavaByStudent?studentId=${studentId}`
    );
  }

  getPrijavaByStudentId(id: number) {
    return this.svePrijave.find((p) => p.StudentId === id);
  }

  sendKomentar(komentar: string, id: number) {
    return this.http.put(`${this.baseUri}/komentar`, { komentar, id });
  }

  updateAndSubmit(
    id: number,
    predmet: string,
    oblast: string,
    cilj: string,
    ocekivaniRezultat: string
  ) {
    this.prijava.Id = id;
    this.prijava.Predmet = predmet;
    this.prijava.Oblast = oblast;
    this.prijava.Cilj = cilj;
    this.prijava.OcekivaniRezultat = ocekivaniRezultat;

    return this.http.put(`${this.baseUri}/izmeniPrijavu`, this.prijava);
  }
}
