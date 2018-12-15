/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddStateService } from './add-state.service';

describe('AddStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddStateService]
    });
  });

  it('should ...', inject([AddStateService], (service: AddStateService) => {
    expect(service).toBeTruthy();
  }));
});
