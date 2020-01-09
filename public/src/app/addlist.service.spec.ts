import { TestBed } from '@angular/core/testing';

import { AddlistService } from './addlist.service';

describe('AddlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddlistService = TestBed.get(AddlistService);
    expect(service).toBeTruthy();
  });
});
