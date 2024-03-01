/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AProposPageComponent } from './a-propos-page.component';

describe('AProposPageComponent', () => {
  let component: AProposPageComponent;
  let fixture: ComponentFixture<AProposPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AProposPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AProposPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
