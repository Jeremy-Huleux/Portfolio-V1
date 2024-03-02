import { trigger, state, style} from '@angular/animations';
/**
 * on déclare les prioriétés css qui change 
 * dans @activation  qui est présent dans le html
 * selon le state de @burgerMenuIsOpen présent aussi dans le html
 * On Way Binding
 */
export const burgerIsActive = 
    trigger('activation', [
        state('ouvert', //le state de burgerMenuIsOpen 
            style({ 
                'margin-top': '280px' //On redéfini le CSS
            })),
        state('ferme', 
            style({ 
                'margin-top': '0px' 
            })),
        state('ouvertMid', 
            style({ 
                'margin-right': '300px' 
            })),
        state('fermeMid', 
            style({ 
                'margin-right': '0px' 
            }))
        ]
    );


