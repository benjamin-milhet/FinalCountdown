import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireComponent } from './formulaire.component';

describe('FormulaireComponent', () => {
  let component: FormulaireComponent;
  let fixture: ComponentFixture<FormulaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaireComponent]
    });
    fixture = TestBed.createComponent(FormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
