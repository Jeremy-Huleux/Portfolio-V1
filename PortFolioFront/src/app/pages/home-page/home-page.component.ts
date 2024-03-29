import { Component, OnInit, afterNextRender} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'; 
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  imports: [FontAwesomeModule]
})
export class HomePageComponent implements OnInit {
  facebook = faFacebookF;
  twitter = faXTwitter;
  linkedin = faLinkedinIn;
  calendar = faCalendarDays;
  constructor() { }


/**
 * à l'initialisation de la page on set
 */
  ngOnInit() {


  }
}
