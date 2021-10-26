import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    this.prijavaServis.getPrijave().subscribe((lista) => {
      this.listaPrijava = lista;
    });
  }
  prikaziPrijavu(prijava) {
    console.log(prijava);
    this.router.navigate(['/prijavaMentor']);
  }
}
