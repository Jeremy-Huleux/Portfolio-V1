import { Component,HostListener, OnInit} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmarkSquare } from '@fortawesome/free-solid-svg-icons';
import { accueilColleActive, burgerAnimation} from './nav-bar.animations';
import { BurgerMenuService } from '../../services/burgerMenu.service';
import { PlatformService } from '../../services/platform.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations : [burgerAnimation, accueilColleActive]
})
export class NavBarComponent implements OnInit{
  faBars = faBars;
  burgerMenuIsOpen!: string;
  headNavBar: string = "headNavBar";
  activeAccueil : string = "";
  activeProjets : string = "";
  activeApropos : string = "";
  activeContact : string = "";
  activeDiplome : string = "";
  activeCompetences: string = "";
  positionAccueil!: any;
  positionProjets!: any;
  positionApropos!: any;
  positionContact!: any;
  positionDiplome!: any;
  positionCompetences!: any;
  scroll!: any;
  colleActif! : string;
  color!: string;
  onAccueil : string = "";



  


  constructor(private MenuBurger$ : BurgerMenuService, private platformService: PlatformService) { }
  /**
   * fonction permettant d'activer ou non le menu burger 
   * Set à l'observable BehaviorSubject créer pour l'occasion
   * change l'icone 
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
  onScroll(){
    // On change la navbar dès que le scroll est activé "navBar" à "navBar colle"
    if(document.documentElement.scrollTop > 0){
      this.headNavBar = 'headNavBar colle';
    }else if(document.documentElement.scrollTop === 0) {
      this.headNavBar = 'headNavBar';
    }
    // on initialise scroll
    this.scroll = document.documentElement.scrollTop;
    // on définit les variables positions 
    // (elle récupère chaque position des sections via leurs id voir HTML home-page)
    this.positionAccueil = document.getElementById('accueil')?.getBoundingClientRect();
    this.positionProjets = document.getElementById('projets')?.getBoundingClientRect();
    this.positionDiplome = document.getElementById('diplomes')?.getBoundingClientRect();
    this.positionApropos = document.getElementById('apropos')?.getBoundingClientRect();
    this.positionCompetences = document.getElementById('competences')?.getBoundingClientRect();
    this.positionContact = document.getElementById('contact')?.getBoundingClientRect();
    // On verifie si on est dans la section accueil
    if( this.positionAccueil && 
      this.positionAccueil.top <= 80 &&
      Math.abs(this.positionAccueil.top) < this.positionAccueil.height + 70
        ){
          // On active la class="active" uniquement sur le 
          //<a></a> faisant l'ancre avec la section via un [class]="variable"
      this.activeAccueil = "active";
      this.activeProjets = "";
      this.activeDiplome = "";
      this.activeApropos = "";
      this.activeContact = "";
      this.activeCompetences = "";
      this.onAccueil = "accueilActif";
      this.color = "--clr: #d1eb3e";
    }
    // On verifie si on est dans la section Projets
    if( this.positionProjets && 
      this.positionProjets.top <= 80 &&
      Math.abs(this.positionProjets.top) < this.positionProjets.height + 70
      ){
      this.colleActif = "desactivationTransition"; // On désactive la transition du <a></a> accueil 
      this.activeAccueil = "";
      this.activeProjets = "active";
      this.activeDiplome = "";
      this.activeApropos = "";
      this.activeContact = "";
      this.activeCompetences = "";
      this.onAccueil = "";
      this.color = "--clr: #16b84e";
    }
    // On verifie si on est dans la section Accueil avec une marge "anti bug de rush scroll rapide vers le haut"
    if( this.positionAccueil && 
      this.positionAccueil.top <= 80 &&
      Math.abs(this.positionAccueil.top) < this.positionAccueil.height - 140
    ){
        this.colleActif = "activationTransition"; //si oui on active la transition dans le <a>Accueil</a>
      }
    // On vérifie si on est dans la section aPropos
    if( this.positionApropos && 
      this.positionApropos.top <= 80 &&
      Math.abs(this.positionApropos.top) < this.positionApropos.height + 70
      ){
      this.activeAccueil = "";
      this.activeProjets = "";
      this.activeApropos = "active";
      this.activeDiplome = "";
      this.activeContact = "";
      this.activeCompetences = "";
      this.onAccueil = "";
      this.color = "--clr: #112e42";
    }
    // On vérifie si on est dans la section Contact
    if( this.positionContact && 
      this.positionContact.top <= 80 &&
      Math.abs(this.positionContact.top) < this.positionContact.height + 70
      ){
      this.activeAccueil = "";
      this.activeProjets = "";
      this.activeApropos = "";
      this.activeDiplome = "";
      this.activeContact = "active";
      this.activeCompetences = "";
      this.onAccueil = "";
      this.color = "--clr: #f7c59f";
    }
    if( this.positionDiplome && 
      this.positionDiplome.top <= 80 &&
      Math.abs(this.positionDiplome.top) < this.positionDiplome.height + 70
      ){
      this.activeAccueil = "";
      this.activeProjets = "";
      this.activeApropos = "";
      this.activeDiplome = "active";
      this.activeContact = "";
      this.activeCompetences = "";
      this.onAccueil = "";
      this.color = "--clr: #520052";
    }
    if( this.positionCompetences && 
      this.positionCompetences.top <= 80 &&
      Math.abs(this.positionCompetences.top) < this.positionCompetences.height + 70
      ){
      this.activeAccueil = "";
      this.activeProjets = "";
      this.activeApropos = "";
      this.activeDiplome = "";
      this.activeContact = "";
      this.activeCompetences = "active";
      this.onAccueil = "";
      this.color = "--clr: #121212";
    }

  }
// à l'init de la page on verifie si on est dans la vue client si oui on
// lance le listener et on set accueil a actif 
  ngOnInit(){
    if(this.platformService.isOnVue()){
      this.onScroll();
      if(this.scroll < this.positionAccueil.height + 
        0){
        this.activeAccueil = "active";
        this.activeProjets = "";
        this.activeApropos = "";
        this.activeDiplome = "";
        this.activeContact = "";
        this.activeCompetences = "";
        this.onAccueil = "accueilActif";
        this.color = "--clr: #d1eb3e";
      }
    }  
  }
}


