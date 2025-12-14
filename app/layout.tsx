'use client';

import './globals.css';
import ThemeRegistry from './theme/ThemeRegistry';
import type { ReactNode } from 'react';
import LanguageProvider, { useLang } from './i18n/LanguageContext';
import { ArabicFont, secondaryFont } from './fonts/fonts';

function Body({ children }: { children: ReactNode }) {
  const { lang } = useLang();

  return (
    <body
      className={
        lang === 'ar'
          ? ArabicFont.className
          : secondaryFont.className
      }
    >
      <ThemeRegistry>{children}</ThemeRegistry>
    </body>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <LanguageProvider>
        <Body>{children}</Body>
      </LanguageProvider>
    </html>
  );
}
