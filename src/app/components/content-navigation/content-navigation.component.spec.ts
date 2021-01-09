import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentNavigationComponent } from './content-navigation.component';

describe('ContentNavigationComponent', () => {
  let component: ContentNavigationComponent;
  let fixture: ComponentFixture<ContentNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
