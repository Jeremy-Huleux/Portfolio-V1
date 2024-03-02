import { Component, OnInit, inject } from '@angular/core';
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
  burgerIsOpen!: boolean;
  appModule!: any;
  title = 'Porte Folio';
  readonly observeSubjectBurgerMenu = inject(BurgerMenuService);
  burgerMenuIsOpen!: string;

  constructor(){}

  ouvertureMenuBurger(valeur: boolean){
    if(valeur){
      this.burgerMenuIsOpen = 'ouvert';
    }else{
      this.burgerMenuIsOpen = 'ferme';
    }
  }

  ngDoCheck(){
    if(this.burgerIsOpen){
      this.burgerMenuIsOpen = 'ouvert';
    }else{
      this.burgerMenuIsOpen = 'ferme';
    }
  }

  ngOnInit(){
    this.observeSubjectBurgerMenu.observeSubjectMenuBurger$.subscribe((valeur) => {
      this.burgerIsOpen = valeur;
    })
  }
}
