import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmarkSquare } from '@fortawesome/free-solid-svg-icons';
import { burgerAnimation } from './nav-bar.animations';




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


  constructor() { }

  /**
   * fonction permettant d'activer ou non le menu burger 
   * (visible uniquement sur petit ecran)
   * fonctionne avec le module browserModule (animation)
   * avec le fichier animation.ts
   */
  afficherBurgerMenu(){
      // si le menu burger est overt alors 
      // mettre a 'desactive' sinon a 'active' et vis versa &
      // mettre l'icone croix (faXmarkSquare) sinon mets faBars (burger) 
      // et vis versa
      if(this.burgerMenuIsOpen === 'active'){
        this.burgerMenuIsOpen = 'desactive';
        this.faBars = faBars;
      }else{
        this.burgerMenuIsOpen = 'active';
        this.faBars = faXmarkSquare;
      }
  }
}
