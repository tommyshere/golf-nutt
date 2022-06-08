import { TestBed } from '@angular/core/testing';

import { DailyboardService } from './dailyboard.service';

describe('DailyboardService', () => {
  let service: DailyboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
