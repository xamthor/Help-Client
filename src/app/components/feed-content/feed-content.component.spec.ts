import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedContentComponent } from './feed-content.component';

describe('FeedContentComponent', () => {
  let component: FeedContentComponent;
  let fixture: ComponentFixture<FeedContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
