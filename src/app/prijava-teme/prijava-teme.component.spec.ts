import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrijavaTemeComponent } from './prijava-teme.component';

describe('PrijavaTemeComponent', () => {
  let component: PrijavaTemeComponent;
  let fixture: ComponentFixture<PrijavaTemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrijavaTemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrijavaTemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
