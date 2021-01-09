import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInputsComponent } from './login-inputs.component';

describe('LoginInputsComponent', () => {
  let component: LoginInputsComponent;
  let fixture: ComponentFixture<LoginInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
