/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddCoutryService } from './add-coutry.service';

describe('AddCoutryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddCoutryService]
    });
  });

  it('should ...', inject([AddCoutryService], (service: AddCoutryService) => {
    expect(service).toBeTruthy();
  }));
});
