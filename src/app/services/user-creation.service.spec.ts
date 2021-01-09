import { TestBed } from '@angular/core/testing';

import { UserCreationService } from './user-creation.service';

describe('UserCreationService', () => {
  let service: UserCreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
