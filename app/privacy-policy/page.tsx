'use client';

import { Container, Typography, Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useRouter } from 'next/navigation';
import { useLang } from '@/app/i18n/LanguageContext';

export default function PrivacyPolicyPage() {
  const router = useRouter();
  const { t, isRTL } = useLang();

  return (
    <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 } }}>
      {/* BACK BUTTON */}
      <IconButton
        onClick={() => router.back()}
        sx={{
          mb: 4,
          color: 'text.secondary',
          alignSelf: 'flex-start',
          '&:hover': {
            color: 'text.primary',
            backgroundColor: 'transparent',
          },
        }}
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>

      <Box display="flex" flexDirection="column" gap={4} dir={isRTL ? 'rtl' : 'ltr'}>
        <Typography variant="h4" fontWeight={700}>
          {t.privacy.title}
        </Typography>

        <Typography variant="body1">{t.privacy.p1}</Typography>
        <Typography variant="body1">{t.privacy.p2}</Typography>
        <Typography variant="body1">{t.privacy.p3}</Typography>

        <Typography variant="body2" color="text.secondary">
          {t.privacy.updated}: {new Date().getFullYear()}
        </Typography>
      </Box>
    </Container>
  );
}
