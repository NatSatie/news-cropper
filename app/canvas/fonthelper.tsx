'use client'

import {
    Inter, Roboto, Open_Sans, Montserrat, Lato,
    Oswald, Playfair_Display, Poppins, Noto_Sans, Roboto_Condensed
} from 'next/font/google';

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
export const roboto = Roboto({ weight: '400', subsets: ['latin'], variable: '--font-roboto' });
export const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });
export const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
export const lato = Lato({ weight: '400', subsets: ['latin'], variable: '--font-lato' });
export const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });
export const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
export const poppins = Poppins({ weight: '400', subsets: ['latin'], variable: '--font-poppins' });
export const noto = Noto_Sans({ subsets: ['latin'], variable: '--font-noto' });
export const robotoCond = Roboto_Condensed({ subsets: ['latin'], variable: '--font-roboto-cond' });
// TODO: add a cleanup function to remove unused font variables from the body class when a new font is selected
export interface FontOption {
    name: string;
    variable: string;
    value: any;
}

// Array for your dropdown menu
export const fontOptions = [
    { name: 'Inter', variable: 'var(--font-inter)', value: inter },
    { name: 'Roboto', variable: 'var(--font-roboto)', value: roboto },
    { name: 'Open Sans', variable: 'var(--font-open-sans)', value: openSans },
    { name: 'Montserrat', variable: 'var(--font-montserrat)', value: montserrat },
    { name: 'Lato', variable: 'var(--font-lato)', value: lato },
    { name: 'Oswald', variable: 'var(--font-oswald)', value: oswald },
    { name: 'Playfair Display', variable: 'var(--font-playfair)', value: playfair },
    { name: 'Poppins', variable: 'var(--font-poppins)', value: poppins },
    { name: 'Noto Sans', variable: 'var(--font-noto)', value: noto },
    { name: 'Roboto Condensed', variable: 'var(--font-roboto-cond)', value: robotoCond },
] as FontOption[];