import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrijavaMentorComponent } from './prijava-mentor.component';

describe('PrijavaMentorComponent', () => {
  let component: PrijavaMentorComponent;
  let fixture: ComponentFixture<PrijavaMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrijavaMentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrijavaMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
