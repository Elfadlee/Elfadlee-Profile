'use client';

import { Box, Typography, Button, useTheme } from '@mui/material';
import { useLang } from '@/app/i18n/LanguageContext';
import { AlmaraiFont } from '@/app/fonts/fonts';

export default function Hero() {
  const theme = useTheme();
  const { t } = useLang();

  const fadeInUp = {
    opacity: 0,
    transform: 'translateY(24px)',
    animation: 'fadeInUp 1s ease forwards',
    '@keyframes fadeInUp': {
      to: {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
  };


  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box

      style={{
        background: `linear-gradient(135deg,
          ${theme.palette.primary.main} 0%,
          ${theme.palette.secondary.main} 50%,
          ${theme.palette.primary.light} 100%
        )`,
      }}
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',

        animation: 'heroFadeIn 1.2s ease-out',
        '@keyframes heroFadeIn': {
          from: {
            opacity: 0,
            transform: 'scale(0.985)',
          },
          to: {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
      }}
    >
      {/* GRID OVERLAY */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: { xs: '32px 32px', md: '40px 40px' },
          opacity: 0.3,
          pointerEvents: 'none',
        }}
      />

      {/* CONTENT */}
      <Box
        sx={{
          zIndex: 2,
          color: 'common.white',
          px: { xs: 2, sm: 3 },
          mt: { xs: -10, md: 7 },
        }}
      >
        {/* EYEBROW */}
        <Typography
          sx={{
            ...fadeInUp,
            animationDelay: '0.75s',
            maxWidth: { xs: '100%', sm: 520, md: 650 },
            mx: 'auto',
            opacity: 0.9,
            mb: { xs: 4, md: 5 },
            fontSize: { xs: '0.95rem', md: '1.1rem' },
            lineHeight: 1.7,
            fontFamily: (theme) => theme.typography.fontFamily,
            fontWeight: 700,
          }}
        >
          {t.hero.eyebrow}
        </Typography>

        {/* TITLE */}
        <Typography
          className={AlmaraiFont.className}
          sx={{
            ...fadeInUp,
            animationDelay: '0.5s',
            fontWeight: 600,
            lineHeight: 1.3,
            mb: { xs: 2.5, md: 3 },
            fontSize: {
              xs: '2.4rem',
              sm: '3rem',
              md: '3.5rem',
            },
          }}
        >
          {t.hero.title1}
          <br />
          {t.hero.title2}
          <br />
          {t.hero.title3}
        </Typography>

        {/* DESCRIPTION */}
        <Typography
          sx={{
            ...fadeInUp,
            animationDelay: '0.75s',
            maxWidth: { xs: '100%', sm: 520, md: 650 },
            mx: 'auto',
            opacity: 0.9,
            mb: { xs: 4, md: 5 },
            fontSize: { xs: '1.3rem', md: '1.1rem' },
            lineHeight: 1.7,
            fontFamily: (theme) => theme.typography.fontFamily,
          }}
        >
          {t.hero.desc}
        </Typography>

        {/* CTA */}
        <Button
          onClick={() => scrollTo('portfolio')}
          sx={{
            fontFamily: (theme) => theme.typography.fontFamily,
            ...fadeInUp,
            animationDelay: '0.95s',
            px: { xs: 3, md: 4 },
            py: { xs: 1.2, md: 1.5 },
            borderRadius: 50,
            color: '#fff',
            border: '2px solid rgba(255,255,255,0.4)',
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)',
            fontWeight: 600,
            fontSize: { xs: '0.95rem', md: '1rem' },
            textTransform: 'none',
            transition: 'all 0.3s ease',
            mt: { xs: 10, md: 1.5 },

            '&:hover': {
              transform: 'translateY(-3px)',
              background: 'rgba(255,255,255,0.25)',
            },
          }}
        >
          {t.hero.cta}
        </Button>
      </Box>
    </Box>
  );
}
