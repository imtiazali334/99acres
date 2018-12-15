/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EnquiryService } from './enquiry.service';

describe('EnquiryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnquiryService]
    });
  });

  it('should ...', inject([EnquiryService], (service: EnquiryService) => {
    expect(service).toBeTruthy();
  }));
});
