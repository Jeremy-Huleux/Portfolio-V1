/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BurgerMenuService } from './burgerMenu.service';

describe('Service: BurgerMenu', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BurgerMenuService]
    });
  });

  it('should ...', inject([BurgerMenuService], (service: BurgerMenuService) => {
    expect(service).toBeTruthy();
  }));
});
