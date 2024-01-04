import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecompteComponent } from './decompte.component';

describe('DecompteComponent', () => {
  let component: DecompteComponent;
  let fixture: ComponentFixture<DecompteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecompteComponent]
    });
    fixture = TestBed.createComponent(DecompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
