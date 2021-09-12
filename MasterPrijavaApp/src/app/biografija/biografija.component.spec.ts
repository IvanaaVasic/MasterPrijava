import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiografijaComponent } from './biografija.component';

describe('BiografijaComponent', () => {
  let component: BiografijaComponent;
  let fixture: ComponentFixture<BiografijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiografijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiografijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
