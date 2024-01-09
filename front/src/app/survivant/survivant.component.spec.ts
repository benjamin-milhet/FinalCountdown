import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvivantComponent } from './survivant.component';

describe('SurvivantComponent', () => {
  let component: SurvivantComponent;
  let fixture: ComponentFixture<SurvivantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurvivantComponent]
    });
    fixture = TestBed.createComponent(SurvivantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
