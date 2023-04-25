import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericDancerComponent } from './generic-dancer.component';

describe('GenericDancerComponent', () => {
  let component: GenericDancerComponent;
  let fixture: ComponentFixture<GenericDancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericDancerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericDancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
