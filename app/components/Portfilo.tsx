'use client';

import {
  Box,
  Container,
  Typography,
  Chip,
  Card,
  CardContent,
} from '@mui/material';

import { motion } from 'framer-motion';
import { useLang } from '@/app/i18n/LanguageContext';

const MotionCard = motion(Card);



export default function FeaturedWork() {

  const { t } = useLang();


  const projects = [

    {
      title: t.featuredWork.BoxThreeHeadline,
      desc: t.featuredWork.BoxThreeDescription,
      tags: ['React.js', 'Next.js', 'TypeScript', 'Material UI', 'Firebase', 'Node.js'],
      accent: false,
    },

    {
      title: t.featuredWork.BoxTwoHeadline,
      desc: t.featuredWork.BoxTwoDescription,
      tags: ['React Native', 'Expo', 'React Native Paper', 'API Integration'],
      accent: true,
    },

    {
      title: t.featuredWork.BoxOneHeadline,
      desc: t.featuredWork.BoxOneDescription,
      tags: ['Localization', 'Translation', 'Cultural Adaptation', 'i18n'],
      accent: false,
    },

  ];


  return (
    <Box sx={{ py: { xs: 10, md: 10 } }}>
      <Container maxWidth="lg" >

        {/*  TITLE */}
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h5"

            sx={{
              fontWeight: 600, color: 'primary.main',

              fontFamily: (theme) => theme.typography.fontFamily,


            }}

          >
            {/* Featured Work */}
            {t.featuredWork.title}
          </Typography>

          <Box
            sx={{
              width: 80,
              height: 4,
              bgcolor: 'primary.main',
              mx: 'auto',
              mt: 2,
              borderRadius: 2,
            }}
          />
        </Box>

        {/* CARDS */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 10, md: '80px' },
          }}
        >
          {projects.map((item, i) => (
            <Box
              key={i}
              sx={{
                flex: 1,
                display: 'flex',
              }}
            >

              <MotionCard
                // desktop hover
                whileHover={{ y: -6 }}

                //mobile touch 
                whileTap={{ y: -6 }}

                transition={{ type: 'spring', stiffness: 200 }}
                sx={{
                  borderRadius: 4,
                  boxShadow: item.accent
                    ? '0 25px 80px rgba(120,100,255,0.35)'
                    : '0 20px 60px rgba(0,0,0,0.12)',
                  transform: item.accent ? 'scale(1.05)' : 'scale(1)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                {/* IMAGE */}
                <Box
                  sx={{
                    height: 40,

                  }}
                />

                {/* CONTENT */}
                <CardContent
                  sx={{
                    px: 3,
                    py: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >

                  <Typography variant="h6" fontWeight={700} mb={2}>
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    mb={3}
                    lineHeight={1.7}
                  >
                    {item.desc}
                  </Typography>

                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: {
                        xs: 'repeat(2, 1fr)',
                        sm: 'auto',
                      },
                      gap: 1.5,
                    }}
                  >

                    {item.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        variant="outlined"
                        size="medium"
                        sx={{
                          minWidth: 120,
                          justifyContent: 'center',
                          fontWeight: 500,
                          borderRadius: '999px',
                        }}
                      />

                    ))}
                  </Box>
                </CardContent>
              </MotionCard>
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
}
