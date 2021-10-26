import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrazlozenjeMentorComponent } from './obrazlozenje-mentor.component';

describe('ObrazlozenjeMentorComponent', () => {
  let component: ObrazlozenjeMentorComponent;
  let fixture: ComponentFixture<ObrazlozenjeMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObrazlozenjeMentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrazlozenjeMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
