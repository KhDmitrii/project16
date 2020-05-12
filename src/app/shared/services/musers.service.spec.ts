import { TestBed } from '@angular/core/testing';

import { MusersService } from './musers.service';

describe('MusersService', () => {
  let service: MusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
