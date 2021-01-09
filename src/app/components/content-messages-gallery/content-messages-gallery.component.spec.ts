import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMessagesGalleryComponent } from './content-messages-gallery.component';

describe('ContentMessagesGalleryComponent', () => {
  let component: ContentMessagesGalleryComponent;
  let fixture: ComponentFixture<ContentMessagesGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentMessagesGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentMessagesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
