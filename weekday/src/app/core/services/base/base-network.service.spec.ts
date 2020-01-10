import { TestBed } from '@angular/core/testing';

import { BaseNetworkService } from './base-network.service';

xdescribe('BaseNetworkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseNetworkService = TestBed.get(BaseNetworkService);
    expect(service).toBeTruthy();
  });
});
