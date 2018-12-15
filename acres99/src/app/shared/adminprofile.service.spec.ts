/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminprofileService } from './adminprofile.service';

describe('AdminprofileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminprofileService]
    });
  });

  it('should ...', inject([AdminprofileService], (service: AdminprofileService) => {
    expect(service).toBeTruthy();
  }));
});
