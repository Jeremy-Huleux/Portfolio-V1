import { Component, HostListener, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./commons/nav-bar/nav-bar.component";
import { FooterComponent } from "./commons/footer/footer.component";
import { BurgerMenuService } from './services/burgerMenu.service';
import { burgerIsActive } from './app.animation';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [burgerIsActive]
})

export class AppComponent implements OnInit{
  appModule!: any;
  title = 'Porte Folio';
  private burgerIsOpen!: boolean;//verification si le menu est ouvert
  //On inject le service dans une variable 
  readonly observeSubjectBurgerMenu = inject(BurgerMenuService); 
  burgerMenuIsOpen!: string; //set une valeur pour notre trigger style animation angular
  private ecransMid! : boolean; //verification si l'écran est de taille moyenne
  constructor(){}

  /**
   * ngDoCheck vérifie le changement de statement de la variable
   * ici @burgerIsOpen
   * Si il change alors il verifie si c'est true si oui 
   * execute la fonction ouvertureMenu() sinon fermetureMenu()
   */

  ngDoCheck(){
    if(this.burgerIsOpen){
      this.ouvertureMenu();
    }else{
      this.fermetureMenu();
    }
  }

  /**
   * à l'initialisation de la page on s'inscrit à
   * @MenuBurger$ qui est un BehaviorSubject que l'on peut observer.
   * Du fait que se soit un BehaviorSubject, 
   * on peut récupérer la valeur émise
   */

  ngOnInit(){
    this.observeSubjectBurgerMenu.MenuBurger$.subscribe((valeur) => {
      this.burgerIsOpen = valeur;
    })
  }
  /**
  * Ecouteur d'evenement
  * @param event ,variable qui détiens les evenements 
  * du changement de taille de fenêtre
  * lorsque la taille de l'écrans est inférieur à 990px (voir nav-bar.css)
  * et que l'écrans est supérieur à 576px (voir nav-bar.css)
  * on considère que l'écrans est de taille moyenne donc on set
  * @ecransMid à true
  */
  @HostListener('window:resize', ['$event'])
    onResize(event: Event){
        if((event.target as Window).innerWidth < 990 
            && (event.target as Window).innerWidth > 576){
              this.ecransMid = true;
        }else{
          this.ecransMid = false;
        }
  }
  /**
   * On ouvre le menu
   * @ecransMid est true alors l'écrans et de taille moyenne
   * on met donc les propriétés css adéquate
   */
  ouvertureMenu(){
    if(this.ecransMid){
      this.burgerMenuIsOpen = 'ouvertMid';
    }else{
      this.burgerMenuIsOpen = 'ouvert';
    }
  }
  /**
   * On ferme le menu
   * @ecransMid est true alors l'écrans et de taille moyenne
   * on met donc les propriétés css adéquate
   */
  fermetureMenu(){
    if(this.ecransMid){
      this.burgerMenuIsOpen = 'fermeMid';
    }else{
      this.burgerMenuIsOpen = 'ferme';
    }
  }
}
