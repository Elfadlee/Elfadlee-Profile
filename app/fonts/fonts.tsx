import localFont from 'next/font/local';



export const secondaryFont = localFont({
  src: [
    { path: './Oswald-Regular.ttf', weight: '400' },
    { path: './Oswald-Medium.ttf', weight: '500' },
    { path: './Oswald-Bold.ttf', weight: '700' },
  ],
  display: 'swap',
});

export const ArabicFont = localFont({
  src: './Cairo-VariableFont_slnt,wght.ttf',
  display: 'swap',
}); 

export const AlmaraiFont = localFont({
  src: [
    { path: './Almarai-ExtraBold.ttf', weight: '400' },
    { path: './Almarai-Regular.ttf', weight: '500' },
    { path: './Almarai-Bold.ttf', weight: '700' },
  ],
  display: 'swap',
});
