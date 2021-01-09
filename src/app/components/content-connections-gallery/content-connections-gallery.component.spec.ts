import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentConnectionsGalleryComponent } from './content-connections-gallery.component';

describe('ContentConnectionsGalleryComponent', () => {
  let component: ContentConnectionsGalleryComponent;
  let fixture: ComponentFixture<ContentConnectionsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentConnectionsGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentConnectionsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
