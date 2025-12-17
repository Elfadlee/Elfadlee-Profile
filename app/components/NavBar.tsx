'use client';

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Drawer,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useLang } from '@/app/i18n/LanguageContext';




const navLinks = [
  { key: 'home', id: 'home' },
  { key: 'about', id: 'about' },
  { key: 'portfolio', id: 'portfolio' },
  { key: 'contact', id: 'contact' },
];



export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: theme.palette.background.default,
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* LOGO */}
            <Box sx={{ mr: 'auto', p: 2 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 400,
                  background: theme.palette.primary.main,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: (theme) => theme.typography.button.fontFamily,
                }}

              >
                {/* Najeh Elfadlee */}
                {t.nav.logoTitle}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontWeight: 400,
                  mt: 0.2,
                  background: theme.palette.primary.main,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: (theme) => theme.typography.button.fontFamily,

                }}

              >
                {/* Web & App Developer */}
                {t.nav.logoDescription}
              </Typography>
            </Box>



            {/* DESKTOP NAV */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 4 }}>
                {navLinks.map((link) => (
                  <Button
                    key={link.id}
                    onClick={() => handleScroll(link.id)}
                    disableRipple

                    sx={{
                      fontFamily: (theme) => theme.typography.fontFamily,
                      textTransform: 'none',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      color: 'text.primary',
                      position: 'relative',
                      px: 0,

                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        bottom: -4,
                        width: '0%',
                        height: '2px',
                        backgroundColor: 'primary.main',
                        transition: 'width 0.3s ease',
                      },

                      '&:hover::after': {
                        width: '100%',
                      },

                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    {t.nav[link.key as keyof typeof t.nav]}
                  </Button>
                ))}
              </Box>
            )}

            {/* MOBILE MENU */}
            {isMobile && (
              <IconButton onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}
            <Button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              sx={{
                ml: 2,
                fontSize: '0.8rem',
                fontWeight: 600,
                minWidth: 'auto',
                background: 'rgba(99,102,241,0.08)',
                color: 'text.primary',
                textTransform: 'none',
                p: 0,

                transition: 'all 0.2s ease',

                '&:hover': {
                  background: 'rgba(99,102,241,0.16)',
                  transform: 'translateY(-1px)', 
                },

                '&:active': {
                  transform: 'translateY(0)', 
                },
              }}
            >
              {lang === 'en' ? 'Arabic' : 'English'}
            </Button>


          </Toolbar>
        </Container>
      </AppBar>

      {/* DRAWER */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: 'rgba(255,255,255,0.75)',
            backdropFilter: 'blur(22px)',
            borderLeft: '1px solid rgba(0,0,0,0.08)',
            boxShadow: '-30px 0 80px rgba(0,0,0,0.25)',
            px: 3,
            py: 3,
          },
        }}
      >
        {/* HEADER */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 5,
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 700,
              letterSpacing: '0.18em',
              color: 'text.secondary',
            }}
          >
            NAVIGATION
          </Typography>

          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              border: '1px solid rgba(0,0,0,0.1)',
              borderRadius: 2,
            }}
          >
            ✕
          </IconButton>
        </Box>

        {/* LINKS */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          {navLinks.map((link, i) => (
            <Button
              key={link.id}
              onClick={() => {
                handleScroll(link.id);
                setOpen(false);
              }}
              disableRipple
              sx={{
                justifyContent: 'flex-start',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                color: 'text.primary',
                px: 2,
                py: 1.6,
                borderRadius: 2,
                position: 'relative',
                overflow: 'hidden',
                fontFamily: (theme) => theme.typography.fontFamily,

                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: 12,
                  right: 12,
                  bottom: 6,
                  height: 1,
                  background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.15), transparent)',
                  opacity: 0,
                },

                '&:hover': {
                  backgroundColor: 'rgba(99,102,241,0.08)',
                  pl: 3,
                },

                '&:hover::after': {
                  opacity: 1,
                },
              }}
            >
              {t.nav[link.key as keyof typeof t.nav]}
            </Button>
          ))}
        </Box>
      </Drawer>





    </>
  );
}
