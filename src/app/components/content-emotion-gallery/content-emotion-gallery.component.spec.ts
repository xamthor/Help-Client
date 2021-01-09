import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentEmotionGalleryComponent } from './content-emotion-gallery.component';

describe('ContentEmotionGalleryComponent', () => {
  let component: ContentEmotionGalleryComponent;
  let fixture: ComponentFixture<ContentEmotionGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentEmotionGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentEmotionGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
