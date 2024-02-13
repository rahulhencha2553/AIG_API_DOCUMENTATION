import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationVerifiedComponent } from './verification-verified.component';

describe('VerificationVerifiedComponent', () => {
  let component: VerificationVerifiedComponent;
  let fixture: ComponentFixture<VerificationVerifiedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerificationVerifiedComponent]
    });
    fixture = TestBed.createComponent(VerificationVerifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
