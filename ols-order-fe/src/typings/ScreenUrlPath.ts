export type ScreenUrlPaths = '/' | '/sp' | '/blog' | 'lien-he' | 'gio-hang' | 'dang-nhap' | 'dang-ky';

export const ScreenUrlPath = {
  Root: '/',
  AllProduct: 'sp',
  Blog: '/blog',
  Contact: '/lien-he',
  Cart: 'gio-hang',
  Login: 'dang-nhap',
  Register: 'dang-ky',
} as const;
