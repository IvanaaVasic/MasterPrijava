import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prijava } from '../models/prijava';
import { PrijavaService } from '../services/prijava.service';

@Component({
  selector: 'app-biografija-mentor',
  templateUrl: './biografija-mentor.component.html',
  styleUrls: ['./biografija-mentor.component.css'],
})
export class BiografijaMentorComponent implements OnInit {
  constructor(
    private router: Router,
    private prijavaService: PrijavaService,
    private activatedRoute: ActivatedRoute
  ) {}

  prijava: Prijava;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.prijava = this.prijavaService.getPrijavaById(parseInt(params.id));
      console.log(this.prijava);
    });
  }
  bioNext() {
    this.router.navigate([`/obrazlozenjeMentor/${this.prijava.Id}`]);
  }
}
