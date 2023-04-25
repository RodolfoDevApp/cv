import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTooltipComponent } from './generic-tooltip.component';

describe('GenericTooltipComponent', () => {
  let component: GenericTooltipComponent;
  let fixture: ComponentFixture<GenericTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericTooltipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
