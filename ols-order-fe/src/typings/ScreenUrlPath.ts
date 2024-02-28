export type ScreenUrlPath = | '/' | '/sp' | '/blog' | 'lien-he';

export const ScreenUrlPath = {
    Root: '/',
    AllProduct: 'sp',
    Blog: '/blog',
    Contact: '/lien-he'
} as const