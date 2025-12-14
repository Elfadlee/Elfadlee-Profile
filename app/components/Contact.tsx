'use client';

import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  useTheme,
  useMediaQuery,


} from '@mui/material';
import { useState } from 'react';
import MagAlert from './MsgAlert';
import { useLang } from '@/app/i18n/LanguageContext';


export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [alertType, setAlertType] =
    useState<'success' | 'error'>('success');
  const { t } = useLang();



  const fadeInUp = {
    opacity: 0,
    transform: 'translateY(30px)',
    animation: 'fadeInUp 1s ease forwards',

    '@keyframes fadeInUp': {
      to: {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const isFormValid =
    form.name.trim() &&
    form.email.trim() &&
    form.subject.trim() &&
    form.message.trim();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!isFormValid) return;

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),

    });

    if (res.ok) {
      setAlertMsg(' Message sent successfully');
      setAlertType('success');
      setAlertOpen(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    } else {
      setAlertMsg('Something went wrong');
      setAlertType('error');
      setAlertOpen(true);
    }
  };

  // BUTTON STYLE (USED IN MOBILE & DESKTOP)
  const buttonSx = {
    mt: 2,
    px: 6,
    py: 1.4,
    borderRadius: 50,
    fontWeight: 600,
    textTransform: 'none',
    color: '#fff',
    transition: 'all 0.8s ease',

    background: isFormValid
      ? 'linear-gradient(135deg,#6f7cff,#9d7bff)'
      : 'rgba(48, 5, 105, 0.25)',

    // DESKTOP ONLY HOVER
    '@media (hover: hover) and (pointer: fine)': {
      ...(isFormValid && {
        '&:hover': {
          background: 'linear-gradient(135deg,#5f6cff,#8d6bff)',
          boxShadow: '0 12px 30px rgba(9, 16, 104, 0.45)',
          transform: 'translateY(-2px)',
        },
      }),
    },

    '&.Mui-disabled': {
      color: '#fff',
      opacity: 0.9,
      cursor: 'not-allowed',
      background: 'rgba(48, 5, 105, 0.25)',
    },
  };

  const mobileFields = [
    { name: 'name', label: t.contact.name },
    { name: 'email', label: t.contact.email },
    { name: 'subject', label: t.contact.subject },
  ];


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
        position: 'relative',
        py: { xs: 10, md: 14 },
        overflow: 'hidden',
        mt: { xs: 1, md: 6 },
      }}
    >
      {/* GRID OVERLAY */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.3,
          pointerEvents: 'none',

        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight={300}
          color="common.white"
          sx={{ ...fadeInUp, fontFamily: (theme) => theme.typography.fontFamily }}

        >
          {/* Let’s Work Together */}
          {t.contact.title}
        </Typography>

        <Box
          sx={{
            mt: 2,
            width: 60,
            height: 4,
            bgcolor: 'rgba(255,255,255,0.5)',
            mx: 'auto',
            mb: 4,
            borderRadius: 2,
            ...fadeInUp,


          }}
        />

        <Typography
          textAlign="center"
          color="common.white"
          sx={{ mb: 6, ...fadeInUp, fontFamily: (theme) => theme.typography.fontFamily, fontWeight: 400 }}

        >
          {/* Ready to turn your ideas into reality? */}
          {t.contact.subtitleOne}
          <br />
          {/* Let’s bring it to life with purpose and clarity. */}
          {t.contact.subtitleTwo}
        </Typography>

        {/* GLASS CARD */}
        <Box
          sx={{
            p: { xs: 3.5, md: 1 },
            borderRadius: 5,
            backdropFilter: 'blur(18px)',
            border: '1px solid rgba(3, 3, 78, 0.25)',
            boxShadow: '0 40px 120px rgba(0,0,0,0.25)',
          }}
        >
          {isMobile ? (
            /*  MOBILE GRID */
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, pt: 2 }}>
              {mobileFields.map((field) => (
                <Box key={field.name} sx={{ width: '100%' }}>
                  <TextField
                    fullWidth
                    label={field.label}   // ✅ مترجم
                    name={field.name}
                    value={(form as any)[field.name]}
                    onChange={handleChange}
                    variant="filled"
                    InputProps={{ disableUnderline: true }}
                    sx={{
                      ...fadeInUp,
                      background: 'white !important',
                      borderRadius: '5px',
                      border: 'none',


                      '& input': {
                        fontFamily: (theme) => theme.typography.fontFamily,
                      },
                      '& label': {
                        fontFamily: (theme) => theme.typography.fontFamily,
                      },
                    }}
                  />


                </Box>
              ))}

              <Box sx={{ width: '100%' }}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label={t.contact.message}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  variant="filled"
                  InputProps={{ disableUnderline: true }}
                  sx={{
                    ...fadeInUp,
                    background: 'white !important',
                    borderRadius: '5px',
                    border: 'none',
                    '& textarea': {
                      fontFamily: (theme) => theme.typography.fontFamily,
                    },
                    '& label': {
                      fontFamily: (theme) => theme.typography.fontFamily,
                    },
                  }}
                />
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Button
                  onClick={handleSubmit}
                  disabled={!isFormValid}
                  sx={{
                    ...buttonSx,
                    mt: 2,
                    fontFamily: (theme) => theme.typography.fontFamily,
                  }}
                >
                  {t.contact.button}
                </Button>
              </Box>
            </Box>
          ) : (

            /*  MOBILE GRID  end */


            /*  DESKTOP FLEX */


            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, md: 1, m: 3, mt: 5, ...fadeInUp }}>
              <Box sx={{ display: 'flex', gap: 3 }}>
                <TextField
                  fullWidth
                  label={t.contact.name}
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  variant="filled"
                  sx={{
                    background: 'white !important', borderRadius: '5px', border: 'none',
                    fontFamily: (theme) => theme.typography.fontFamily, fontWeight: 400
                  }}

                  InputProps={{ disableUnderline: true }}
                />
                <TextField
                  fullWidth
                  label={t.contact.email}
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  variant="filled"
                  sx={{
                    background: 'white !important', borderRadius: '5px', border: 'none',
                    fontFamily: (theme) => theme.typography.fontFamily
                  }}
                  InputProps={{ disableUnderline: true }}
                />
              </Box>

              <TextField
                fullWidth
                label={t.contact.subject}
                name="subject"
                value={form.subject}
                onChange={handleChange}
                variant="filled"
                sx={{
                  background: 'white !important', borderRadius: '5px', border: 'none',
                  fontFamily: (theme) => theme.typography.fontFamily
                }}
                InputProps={{ disableUnderline: true }}
              />

              <TextField
                fullWidth
                multiline
                rows={5}
                label={t.contact.message}
                name="message"
                value={form.message}
                onChange={handleChange}
                variant="filled"
                sx={{
                  background: 'white !important', borderRadius: '5px', border: 'none',
                  fontFamily: (theme) => theme.typography.fontFamily
                }}
                InputProps={{ disableUnderline: true }}
              />

              <Box textAlign="center" >
                <Button
                  onClick={handleSubmit}
                  disabled={!isFormValid}
                  sx={{ ...buttonSx, fontFamily: (theme) => theme.typography.button.fontFamily }}
                >
                  {/* Send Message */}
                  {t.contact.button}
                </Button>
              </Box>
            </Box>
          )}
        </Box>


      </Container>

      <MagAlert
        open={alertOpen}
        onClose={() => setAlertOpen(false)}
        message={alertMsg}
        severity={alertType}
      />
    </Box>
  );
}
