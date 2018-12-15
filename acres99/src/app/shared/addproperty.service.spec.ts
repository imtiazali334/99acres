/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddpropertyService } from './addproperty.service';

describe('AddpropertyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddpropertyService]
    });
  });

  it('should ...', inject([AddpropertyService], (service: AddpropertyService) => {
    expect(service).toBeTruthy();
  }));
});
