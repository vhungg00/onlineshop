export const ScreenId = {
    Home: 'OLSHOME',
    Cart: 'OLSCART'
} as const;

export type ScreenIdKey = keyof typeof ScreenId;