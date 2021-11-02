import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prijava } from '../models/prijava';
import { PrijavaService } from '../services/prijava.service';

@Component({
  selector: 'app-obrazlozenje-mentor',
  templateUrl: './obrazlozenje-mentor.component.html',
  styleUrls: ['./obrazlozenje-mentor.component.css'],
})
export class ObrazlozenjeMentorComponent implements OnInit {
  constructor(
    private router: Router,
    private prijavaService: PrijavaService,
    private activatedRoute: ActivatedRoute
  ) {}

  prijava: Prijava;

  komentar: string;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.prijava = this.prijavaService.getPrijavaById(parseInt(params.id));
    });
  }

  posaljiKomentar() {
    this.prijavaService
      .sendKomentar(this.komentar, this.prijava.Id)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
