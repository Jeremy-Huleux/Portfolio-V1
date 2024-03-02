import { trigger, state, style} from '@angular/animations';
/**
 * on déclare les prioriétés css qui change 
 * dans @activation  qui est présent dans le html
 * selon le state de @burgerMenuIsOpen présent aussi dans le html
 * On Way Binding
 */
export const burgerAnimation = 
    trigger('activation', [
        state('active', //le state de burgerMenuIsOpen 
            style({ 
                height: '280px' //le style height est défini à 280px
            })),
        state('desactive', 
            style({ 
                height: '0px' 
            }))
        ]
    );
    