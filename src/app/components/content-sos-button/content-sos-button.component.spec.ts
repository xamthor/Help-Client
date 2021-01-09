import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSosButtonComponent } from './content-sos-button.component';

describe('ContentSosButtonComponent', () => {
  let component: ContentSosButtonComponent;
  let fixture: ComponentFixture<ContentSosButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSosButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSosButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
