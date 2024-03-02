import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BurgerMenuService {

  constructor() { }
  // Variable BehaviorSubject, il faut s'inscrire directement avec l'objet
  // BehaviorSubject permet de return la valeur changeante
  readonly MenuBurger$ = new BehaviorSubject<boolean>(false);
  
  // on change la valeur avec cette fonction
  setObserveMenuBurger(valeur: boolean){
    this.MenuBurger$.next(valeur);
  }
}
