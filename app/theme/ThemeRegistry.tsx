'use client';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { useLang } from '../i18n/LanguageContext';
import theme from './theme'; // نعدّل theme شوي

const ltrCache = createCache({
  key: 'mui-ltr',
  prepend: true,
});

const rtlCache = createCache({
  key: 'mui-rtl',
  prepend: true,
  stylisPlugins: [rtlPlugin],
});

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isRTL, lang } = useLang();

const activeTheme = theme(
  isRTL ? 'rtl' : 'ltr',
  lang
);


  return (
    <CacheProvider value={isRTL ? rtlCache : ltrCache}>
      <ThemeProvider theme={activeTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
