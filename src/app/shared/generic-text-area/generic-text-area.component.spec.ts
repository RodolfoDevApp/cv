import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTextAreaComponent } from './generic-text-area.component';

describe('GenericTextAreaComponent', () => {
  let component: GenericTextAreaComponent;
  let fixture: ComponentFixture<GenericTextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericTextAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
