import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biografija-mentor',
  templateUrl: './biografija-mentor.component.html',
  styleUrls: ['./biografija-mentor.component.css'],
})
export class BiografijaMentorComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  bioNext() {
    this.router.navigate(['/obrazlozenjeMentor']);
  }
}
