import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UspesnaPrijavaComponent } from './uspesna-prijava.component';

describe('UspesnaPrijavaComponent', () => {
  let component: UspesnaPrijavaComponent;
  let fixture: ComponentFixture<UspesnaPrijavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UspesnaPrijavaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UspesnaPrijavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
