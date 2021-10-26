import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiografijaMentorComponent } from './biografija-mentor.component';

describe('BiografijaMentorComponent', () => {
  let component: BiografijaMentorComponent;
  let fixture: ComponentFixture<BiografijaMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiografijaMentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiografijaMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
