import { trigger, state, style} from '@angular/animations';

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
    