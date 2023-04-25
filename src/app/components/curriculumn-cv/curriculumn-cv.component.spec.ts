import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumnCvComponent } from './curriculumn-cv.component';

describe('CurriculumnCvComponent', () => {
  let component: CurriculumnCvComponent;
  let fixture: ComponentFixture<CurriculumnCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculumnCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurriculumnCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
