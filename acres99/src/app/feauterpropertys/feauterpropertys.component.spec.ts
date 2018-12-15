/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FeauterpropertysComponent } from './feauterpropertys.component';

describe('FeauterpropertysComponent', () => {
  let component: FeauterpropertysComponent;
  let fixture: ComponentFixture<FeauterpropertysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeauterpropertysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeauterpropertysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
