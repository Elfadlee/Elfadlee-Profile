'use client';

import {
  Box,
  Container,
  Typography,
  Chip,
  Card,
  CardMedia,


} from '@mui/material';
import { keyframes } from '@mui/material/styles';
import { useLang } from '@/app/i18n/LanguageContext';



const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default function AboutSection() {
  const { t } = useLang();
  const baseText = {
    fontFamily: (theme: any) => theme.typography.fontFamily,
  };

  return (
    <Box
      sx={{
        p: { xs: 2, md: 14 },
        mt: { xs: 8, md: 2 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">

        {/* ===== SECTION TITLE ===== */}
        <Box textAlign="center" mb={10}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              color: 'primary.main',
              animation: `${fadeUp} 0.9s ease forwards`,
              animationDelay: '0.1s',
              opacity: 0,
              pb: 2,
              ...baseText,

            }}
          >
            {/* About Me */}
            {t.about.title}
          </Typography>

          <Box
            sx={{
              width: 50,
              height: 4,
              backgroundColor: 'primary.main',
              mx: 'auto',
              borderRadius: 2,
              animation: `${fadeUp} 0.9s ease forwards`,
              animationDelay: '0.2s',
              opacity: 0,
            }}
          />
        </Box>

        {/* ===== CONTENT ROW ===== */}
        <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 4,
                py: 1,
              }}
            >
          {/* ===== IMAGE ===== */}
          <Box sx={{ width: { xs: '100%', md: '30%' } }}>
            <Card
              sx={{
                height: 380,
                borderRadius: 6,
                boxShadow: '0 30px 80px rgba(0,0,0,0.15)',
                overflow: 'hidden',
                animation: `${fadeUp} 0.9s ease forwards`,
                animationDelay: '0.3s',
                opacity: 0,
              }}
            >


              <CardMedia
                component="img"
                image="/Coding2.jpg"
                alt="About me"
                sx={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                }}
              />
            </Card>
          </Box>

          {/* ===== TEXT ===== */}
         <Box
              sx={{
                width: { xs: '100%', md: '60%' },
                ml: { md: 6 },
                mt: { xs: 8, md: 0 },
              }}
            >

            <Typography
              variant="h4"
              sx={{
                ...baseText,
                fontWeight: 400,
                mb: 3,
                color: 'text.primary',
                animation: `${fadeUp} 0.9s ease forwards`,
                animationDelay: '0.4s',
                opacity: 0,
                textAlign: { xs: 'center', md: 'left' }, // ✅ mobile only
              }}
            >
              {/* Driven by a passion for crafting meaningful digital experiences. */}
              {t.about.headline}
            </Typography>

            <Typography
              sx={{
                color: 'text.secondary',
                mb: 3,
                lineHeight: 1.8,
                animation: `${fadeUp} 0.9s ease forwards`,
                animationDelay: '0.5s',
                opacity: 0,
                textAlign: { xs: 'center', md: 'left' }, // ✅ mobile only
                ...baseText,
                fontWeight: 500,
              }}
            >

              {/* With a strong focus on intentional design and modern web and application development practices, I build digital products
                  that seamlessly blend usability with refined visual quality. */}
              {t.about.p1}
            </Typography>

            <Typography
              sx={{
                color: 'text.secondary',
                mb: 4,
                lineHeight: 1.8,
                animation: `${fadeUp} 0.9s ease forwards`,
                animationDelay: '0.6s',
                opacity: 0,
                textAlign: { xs: 'center', md: 'left' }, // ✅ mobile only
                ...baseText,
                fontWeight: 500,
              }}
            >
              {/* I believe exceptional digital experiences come from truly understanding users,
                addressing real-world problems, and carefully refining every detail along the way. */}
              {t.about.p2}
            </Typography>

            {/* ===== SKILLS ===== */}
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                animation: `${fadeUp} 0.9s ease forwards`,
                animationDelay: '0.7s',
                opacity: 0,
                pt: 3,
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              {[
                t.about.ServicesOne,
                t.about.ServicesTwo,
                t.about.ServicesThree,
                t.about.ServicesFour,

              ].map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  variant="outlined"
                  sx={{
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    px: 2,
                    py: 1,
                    fontSize: '0.8rem',
                    ...baseText,
                    fontWeight: 500,

                    // FIX: same size on mobile only
                    width: { xs: 280, md: 'auto' },
                    justifyContent: 'center',
                    textAlign: 'center',
                    cursor: 'default',
                    pointerEvents: 'none',
                    userSelect: 'none',

                    transition: 'all 0.3s ease',

                    '&:hover': {
                      backgroundColor: 'rgba(63,81,181,0.06)',
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box >
      </Container>
    </Box>
  );
}
