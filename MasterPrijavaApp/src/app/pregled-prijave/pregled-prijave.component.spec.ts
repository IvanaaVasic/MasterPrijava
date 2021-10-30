import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledPrijaveComponent } from './pregled-prijave.component';

describe('PregledPrijaveComponent', () => {
  let component: PregledPrijaveComponent;
  let fixture: ComponentFixture<PregledPrijaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregledPrijaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregledPrijaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
