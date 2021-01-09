import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupNameComponent } from './setup-name.component';

describe('SetupNameComponent', () => {
  let component: SetupNameComponent;
  let fixture: ComponentFixture<SetupNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
