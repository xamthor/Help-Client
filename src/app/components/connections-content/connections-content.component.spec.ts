import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionsContentComponent } from './connections-content.component';

describe('ConnectionsContentComponent', () => {
  let component: ConnectionsContentComponent;
  let fixture: ComponentFixture<ConnectionsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionsContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
