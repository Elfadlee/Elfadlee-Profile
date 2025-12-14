// app/theme/theme.ts
import { createTheme } from '@mui/material/styles';
import { secondaryFont,ArabicFont} from '@/app/fonts/fonts'


export default function getTheme(
  direction: 'ltr' | 'rtl',
  lang: 'en' | 'ar'
) {
  return createTheme({
    direction,

    palette: {
      primary: {
        main: '#1a237e',
        light: '#8fa3f4',
        dark: '#4b5bdc',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#8b5cf6',
      },
      background: {
        default: '#ffffff',
      },
      text: {
        primary: '#0f172a',
      },
    },

   

    typography: {

      fontFamily:
        lang === 'ar'
          ? ArabicFont.style.fontFamily  
          : 'sans-serif', 
          

      fontSize: lang === 'ar' ? 16 : 14,

    button: {
    fontFamily:
            lang === 'ar'
              ? ArabicFont.style.fontFamily
              : secondaryFont.style.fontFamily,
          
          textTransform: 'none',
           fontSize: lang === 'ar' ? 15 : 15,
        },

      

    
      h1: {
        fontWeight: 700,
        fontSize: lang === 'ar' ? '4.5rem' : '4.5rem',
      },
      h2: {
        fontWeight: 600,
        fontSize: lang === 'ar' ? '2rem' : '1.75rem',
      },
      h3: {
        fontWeight: 600,
      },

      // 📝 النصوص
      body1: {
        fontSize: lang === 'ar' ? '1.05rem' : '1rem',
        lineHeight: 1.8,
      },
      body2: {
        fontSize: lang === 'ar' ? '0.95rem' : '0.9rem',
      },
    },
  });
}
