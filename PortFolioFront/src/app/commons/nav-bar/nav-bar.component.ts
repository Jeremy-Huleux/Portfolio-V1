import { Component, HostListener} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmarkSquare } from '@fortawesome/free-solid-svg-icons';
import { burgerAnimation} from './nav-bar.animations';
import { BurgerMenuService } from '../../services/burgerMenu.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations : [burgerAnimation]
})
export class NavBarComponent{
  faBars = faBars;
  burgerMenuIsOpen!: string;
  headNavBar: string = "headNavBar";
  constructor(private MenuBurger$ : BurgerMenuService) { }
  /**
   * fonction permettant d'activer ou non le menu burger 
   * (visible uniquement sur petit ecran)
   * fonctionne avec le module browserModule (animation)
   * avec le fichier animation.ts
   * si le menu burger est overt alors 
   * mettre a 'desactive' sinon a 'active' et vis versa 
   * mettre l'icone croix (faXmarkSquare) sinon mets faBars (burger) 
   * on a créer un subjectMenuBurger (fonctionne comme un observable mais settable)
   * pour que les autres composant puissent savori si le menu est open
   * et vis versa
   */
  afficherBurgerMenu(){
    if(this.burgerMenuIsOpen === 'active'){
      this.MenuBurger$.setObserveMenuBurger(false);
      this.burgerMenuIsOpen = 'desactive';
      this.faBars = faBars;
    }else{
      this.MenuBurger$.setObserveMenuBurger(true);
      this.burgerMenuIsOpen = 'active';
      this.faBars = faXmarkSquare;
    }
  }

  /**
  * Ecouteur d'evenement
  * @param event ,variable qui détiens les evenements du changement de taille de fenêtre
  * lorsque la taille de l'écrans dépasse 990px (voir css)
  * on ferme le menu, car lorsqu'il a été ouvert grâce au bouton
  * une animation angular/typeScript se déclanche pour changer le css
  * donc la propriété css @media ne fonctionne plus
  */

  @HostListener('window:resize', ['$event'])
    onResize(event: Event){
      if((event.target as Window).innerWidth > 990){
        this.burgerMenuIsOpen = 'desactive';
        this.MenuBurger$.setObserveMenuBurger(false);
        this.faBars = faBars;
      }
    }

  @HostListener('window:scroll', ['$event'])
  onScroll(scroll: Event){
    if(document.documentElement.scrollTop > 0){
      this.headNavBar = 'headNavBar colle';
    }else if(document.documentElement.scrollTop === 0) {
      this.headNavBar = 'headNavBar';
    }
  }
      
}
