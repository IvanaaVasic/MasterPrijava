import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prijava } from '../models/prijava';
import { PrijavaService } from '../services/prijava.service';

@Component({
  selector: 'app-pregled-prijave',
  templateUrl: './pregled-prijave.component.html',
  styleUrls: ['./pregled-prijave.component.css'],
})
export class PregledPrijaveComponent implements OnInit {
  constructor(
    private router: Router,
    private prijavaService: PrijavaService,
    private activatedRoute: ActivatedRoute
  ) {}

  prijava: Prijava;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.prijavaService
        .fetchPrijavaById(parseInt(params.id))
        .subscribe((prijava: Prijava) => {
          this.prijava = prijava;
        });
    });
  }

  izmeniPrijavu() {}
}
