import { Component, HostListener} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmarkSquare } from '@fortawesome/free-solid-svg-icons';
import { burgerAnimation } from './nav-bar.animations';
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
  constructor(private observeSubjectMenuBurger$ : BurgerMenuService) { }
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
      this.observeSubjectMenuBurger$.setObserveMenuBurger(false);
      this.burgerMenuIsOpen = 'desactive';
      this.faBars = faBars;
    }else{
      this.observeSubjectMenuBurger$.setObserveMenuBurger(true);
      this.burgerMenuIsOpen = 'active';
      this.faBars = faXmarkSquare;
    }
  }

  @HostListener('window:resize', ['$event'])
    onResize(event: Event){
      if((event.target as Window).innerWidth > 990){
        this.burgerMenuIsOpen = 'desactive';
        this.observeSubjectMenuBurger$.setObserveMenuBurger(false);
        this.faBars = faBars;
      }
    }
}
