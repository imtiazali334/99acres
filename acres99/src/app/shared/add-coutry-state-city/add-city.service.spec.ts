/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddCityService } from './add-city.service';

describe('AddCityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddCityService]
    });
  });

  it('should ...', inject([AddCityService], (service: AddCityService) => {
    expect(service).toBeTruthy();
  }));
});
