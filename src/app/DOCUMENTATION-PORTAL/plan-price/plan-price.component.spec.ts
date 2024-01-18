import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanPriceComponent } from './plan-price.component';

describe('PlanPriceComponent', () => {
  let component: PlanPriceComponent;
  let fixture: ComponentFixture<PlanPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanPriceComponent]
    });
    fixture = TestBed.createComponent(PlanPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
