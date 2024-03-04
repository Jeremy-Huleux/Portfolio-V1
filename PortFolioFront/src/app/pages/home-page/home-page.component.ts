import { Component, OnInit, afterNextRender} from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PlatformService } from '../../services/platform.service';
gsap.registerPlugin(ScrollTrigger);



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  text: string = 'Json Server' // On set un text qui sera rendu via GASP très visuel
  // on découpe le text dans un tableau de lettre 
  // On remplace les espaces par nbsp pour que 
  // les espaces soit intégré dans des span 
  // grâce au ternaire dans le map
  // \u00A0 signifie espace en unicode nbsp ne fonctionne à cause de la securité
  textSplit: string[] = this.text.split('').map(
    valeur => valeur === ' ' ? '\u00A0' : valeur // espace ? oui alors \u00A0 sinon garde t'as valeur
  ); 
  timeline = gsap.timeline();// on initialise GASP
  constructor(private platformService: PlatformService) { }


magicianisation(){
  this.timeline.from(".magique", { // on va cherche les elements de class = "magique"
    y: -500, //on set les paramètres de GASP ici on déplace en dehors de la vue
    opacity: 0, // ici on les rends transparent
    scrollTrigger : {
      trigger: "section",
      pin: true,
      scrub:1,
    },
    stagger: {
      amount: 1
    }
  })
}

/**
 * à l'initialisation de la page on set
 * le plugin GASP (plugin visuel)
 */
ngOnInit() {
  if(this.platformService.isOnVue()){
      this.magicianisation(); 
  }  
}

}
