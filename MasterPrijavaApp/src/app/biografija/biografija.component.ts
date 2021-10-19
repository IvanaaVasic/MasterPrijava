import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrijavaService } from '../services/prijava.service';

@Component({
  selector: 'app-biografija',
  templateUrl: './biografija.component.html',
  styleUrls: ['./biografija.component.css'],
})
export class BiografijaComponent {
  constructor(private prijavaService: PrijavaService, private router: Router) {}

  biografija: string;

  addBio() {
    this.prijavaService.addBio(this.biografija);

    this.router.navigate(['/obrazlozenje']);
  }
}
