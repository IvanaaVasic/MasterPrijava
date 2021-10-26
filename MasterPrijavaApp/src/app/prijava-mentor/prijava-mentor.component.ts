import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prijava-mentor',
  templateUrl: './prijava-mentor.component.html',
  styleUrls: ['./prijava-mentor.component.css'],
})
export class PrijavaMentorComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  daljeMentor() {
    this.router.navigate(['/biografijaMentor']);
  }
}
