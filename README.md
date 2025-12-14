Najeh Elfadlee – Personal Portfolio

This is my personal portfolio website, built to showcase my work, skills, and experience as a front-end / full-stack developer.

The project is designed with a strong focus on:

- Clean, modern UI/UX
- Performance and scalability
- Multilingual support (English / Arabic – RTL & LTR)
- Professional code structure and refactoring best practices


- Tech Stack

- Next.js (App Router)
- React.js
- TypeScript
- Material UI (MUI)
- Framer Motion - (animations)
- next/font (local fonts)



-  Features

- Fully responsive design (mobile / tablet / desktop)
- English & Arabic language support with RTL/LTR handling
- Custom local fonts (Arabic & English)
- Animated sections (Hero, About, Featured Work)
- Contact form with API route
- Clean component-based architecture



-  Project Structure (Simplified)


app/
 ├─ components/
 │   ├─ Navbar.tsx
 │   ├─ Hero.tsx
 │   ├─ AboutSection.tsx
 │   ├─ FeaturedWork.tsx
 │   ├─ ContactSection.tsx
 │   └─ Footer.tsx
 │
 ├─ fonts/
 │   ├─ fonts.ts
 │   ├─ Cairo-VariableFont_slnt,wght.ttf
 │   ├─ Almarai-*.ttf
 │   ├─ Oswald-*.ttf
 │   └─ NotoSerifDisplay-VariableFont_wdth,wght.ttf
 │
 ├─ i18n/
 │   ├─ en.ts
 │   ├─ ar.ts
 │   └─ LanguageContext.tsx
 │
 ├─ api/
 │   └─ contact/route.ts
 │
 └─ page.tsx




-  Fonts Used

- Cairo  – Arabic UI text
- Almarai – Arabic headings / strong text
- Oswald – English secondary typography
- Noto Serif Display – Name / branding text

All fonts are loaded locally using `next/font/local` for optimal performance.



- Getting Started

Install dependencies:

bash
npm install


Run the development server:

bash
npm run dev


Open:


http://localhost:3000




- Deployment

The project is ready for deployment on Vercel .

- bash
npm run build
-



- Notes

- This project is part of an ongoing refactoring and optimization process.
- Components are intentionally structured for scalability and maintainability.
- No UI libraries other than MUI are used.



License

All rights reserved.

This source code is shared for portfolio and demonstration purposes only.

The project is not open source.

Redistribution, modification, or commercial use is not permitted without explicit written permission from the author.

Sensitive configuration, credentials, and private data have been removed.

© 2025 Najeh Elfadlee
