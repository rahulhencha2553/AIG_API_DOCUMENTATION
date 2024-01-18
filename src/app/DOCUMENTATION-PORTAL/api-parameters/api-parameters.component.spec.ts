import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiParametersComponent } from './api-parameters.component';

describe('ApiParametersComponent', () => {
  let component: ApiParametersComponent;
  let fixture: ComponentFixture<ApiParametersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiParametersComponent]
    });
    fixture = TestBed.createComponent(ApiParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
