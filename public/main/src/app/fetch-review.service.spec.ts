import { TestBed } from '@angular/core/testing';

import { FetchReviewService } from './fetch-review.service';

describe('FetchReviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchReviewService = TestBed.get(FetchReviewService);
    expect(service).toBeTruthy();
  });
});
