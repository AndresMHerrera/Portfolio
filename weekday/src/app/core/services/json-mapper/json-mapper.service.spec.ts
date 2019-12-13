import { TestBed } from '@angular/core/testing';

import { JsonMapperService } from './json-mapper.service';

describe('JsonMapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonMapperService = TestBed.get(JsonMapperService);
    expect(service).toBeTruthy();
  });
});
