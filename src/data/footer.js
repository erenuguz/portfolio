import {navigationLinks} from './navigation';

export const footerData = {
    name: 'Eren Uğuz',
    role: 'Full-Stack Yazılım Mühendisi',
    copyrightName: 'Eren Uğuz',

    columns: [
        {
            title: 'Keşfet',
            links: [...navigationLinks, {label: 'İletişim', href: '#contact'}],
        },
        {
            title: 'Sosyal',
            links: [
                {
                    label: 'GitHub',
                    href: 'https://github.com/erenuguz',
                    external: true,
                },
            ],
        },
    ],

    socials: [
        {
            platform: 'GitHub',
            href: 'https://github.com/erenuguz',
            icon: 'github',
        },
    ],
};
