'use client';

import { Box, Container, Typography, Link } from '@mui/material';
import { useLang } from '@/app/i18n/LanguageContext';
import NextLink from 'next/link';

export default function Footer() {
  const { t } = useLang();
  return (
    <Box
      component="footer"
      sx={(theme) => ({
        mt: 'auto',
        py: 3,
        background: `linear-gradient(90deg,
          ${theme.palette.primary.dark} 0%,
          ${theme.palette.primary.main} 50%,
          ${theme.palette.secondary.main} 100%)`,
        color: 'rgba(255,255,255,0.85)',
      })}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
          flexDirection: { xs: 'column', md: 'row' },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        {/* LEFT */}
        <Typography variant="body2" sx={{fontFamily: (theme) => theme.typography.fontFamily}}>
          © {new Date().getFullYear()} {t.Footer.rights  }
        </Typography>

        {/* RIGHT */}
        <Box sx={{ display: 'flex', gap: 3  , fontFamily: (theme) => theme.typography.fontFamily }}>
          {/* Privacy Policy */}
          <Link
           component={NextLink}
            href="/privacy-policy"
            underline="none"
            sx={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: '0.875rem',
              '&:hover': {
                color: '#fff',
                textDecoration: 'underline',
                
              },
            }}
          >
            {/* Privacy Policy */}
            {t.Footer.linkOne }
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/Elfadlee"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: '0.875rem',
              '&:hover': {
                color: '#fff',
                textDecoration: 'underline',
              },
            }}
          >
            {/* GitHub */}
            {t.Footer.linkTwo }
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/najeh-elfadlee/"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: '0.875rem',
              '&:hover': {
                color: '#fff',
                textDecoration: 'underline',
              },
            }}
          >
            {/* LinkedIn */}
            {t.Footer.linkThree }
          </Link>
        </Box>

      </Container>
    </Box>
  );
}
