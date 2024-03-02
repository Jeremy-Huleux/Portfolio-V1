import { trigger, state, style} from '@angular/animations';

export const burgerIsActive = 
    trigger('activation', [
        state('ouvert', 
            style({ 
                'margin-top': '280px'
            })),
        state('ferme', 
            style({ 
                'margin-top': '0px' 
            }))
        ]
    );