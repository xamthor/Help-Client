import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTopViewComponent } from './content-top-view.component';

describe('ContentTopViewComponent', () => {
  let component: ContentTopViewComponent;
  let fixture: ComponentFixture<ContentTopViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTopViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTopViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
