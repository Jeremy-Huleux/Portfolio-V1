import { trigger, state, style, transition, animate} from '@angular/animations';

export const burgerAnimation = 
    trigger('activation', [
        state('active', 
            style({ 
                height: '280px'
            })),
        state('desactive', 
            style({ 
                height: '0px' 
            }))
        ]
    );