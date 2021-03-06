import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'Calculate',
                title    : 'Calculate',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'equalizer',
                url      : '/sample',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'login',
                title    : 'login',
                // translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'equalizer',
                url      : '/login'
            },
            {
                id       : 'register',
                title    : 'register',
                // translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'equalizer',
                url      : '/register'
            },
        ]
    }
];
