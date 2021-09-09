import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrazlozenjeComponent } from './obrazlozenje.component';

describe('ObrazlozenjeComponent', () => {
  let component: ObrazlozenjeComponent;
  let fixture: ComponentFixture<ObrazlozenjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObrazlozenjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrazlozenjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
