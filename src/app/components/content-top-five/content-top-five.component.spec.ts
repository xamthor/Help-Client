import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTopFiveComponent } from './content-top-five.component';

describe('ContentTopFiveComponent', () => {
  let component: ContentTopFiveComponent;
  let fixture: ComponentFixture<ContentTopFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTopFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTopFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
