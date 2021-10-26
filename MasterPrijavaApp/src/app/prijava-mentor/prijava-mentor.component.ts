import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prijava } from '../models/prijava';
import { PrijavaService } from '../services/prijava.service';

@Component({
  selector: 'app-prijava-mentor',
  templateUrl: './prijava-mentor.component.html',
  styleUrls: ['./prijava-mentor.component.css'],
})
export class PrijavaMentorComponent implements OnInit {
  constructor(
    private router: Router,
    private prijavaService: PrijavaService,
    private activatedRoute: ActivatedRoute
  ) {}

  prijava: Prijava = new Prijava();

  mentori: { Id: number; Ime: string }[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.prijava = this.prijavaService.getPrijavaById(parseInt(params.id));
    });

    this.prijavaService
      .getMentori()
      .subscribe((mentori: { Id: number; Ime: string }[]) => {
        this.mentori = mentori;
      });
  }

  daljeMentor() {
    this.router.navigate([`/biografijaMentor/${this.prijava.Id}`]);
  }
}
