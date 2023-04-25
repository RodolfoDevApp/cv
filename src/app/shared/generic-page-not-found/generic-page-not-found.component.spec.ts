import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericPageNotFoundComponent } from './generic-page-not-found.component';

describe('GenericPageNotFoundComponent', () => {
  let component: GenericPageNotFoundComponent;
  let fixture: ComponentFixture<GenericPageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericPageNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
