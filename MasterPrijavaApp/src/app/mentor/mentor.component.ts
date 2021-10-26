import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prijava } from '../models/prijava';
import { PrijavaService } from '../services/prijava.service';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css'],
})
export class MentorComponent implements OnInit {
  listaPrijava;

  constructor(private prijavaServis: PrijavaService, private router: Router) {}

  ngOnInit(): void {
    this.ucitajPrijave();
  }

  ucitajPrijave() {
    this.prijavaServis.getPrijave().subscribe((lista: Prijava[]) => {
      this.listaPrijava = lista;
      this.prijavaServis.svePrijave = lista;
    });
  }

  prikaziPrijavu(prijava: Prijava) {
    this.router.navigate([`/prijavaMentor/${prijava.Id}`]);
  }
}
