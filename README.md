Najeh Elfadlee – Personal Portfolio

Live Website:
https://www.elfadlee.com

This is my personal portfolio website, built to showcase my work, technical skills, and professional experience as a Front-End Developer.

The project is designed with a strong focus on:

Clean and modern UI/UX

Performance and scalability

Multilingual support (English and Arabic with full RTL / LTR handling)

Maintainable, well-structured, and refactored code

Real-world production best practices

Tech Stack

Next.js (App Router)

React.js

TypeScript

Material UI (MUI)

Framer Motion (animations)

next/font (local font optimization)

Features

Fully responsive design (mobile, tablet, and desktop)

English and Arabic language support with RTL / LTR handling

Custom locally hosted fonts for optimal performance

Animated sections (Hero, About, Featured Work)

Contact form integrated with an API route

Clean, component-based architecture

Scalable structure suitable for future expansion

Project Structure (Simplified)

app/
├─ components/
│ ├─ Navbar.tsx
│ ├─ Hero.tsx
│ ├─ AboutSection.tsx
│ ├─ FeaturedWork.tsx
│ ├─ ContactSection.tsx
│ └─ Footer.tsx
│
├─ fonts/
│ ├─ fonts.ts
│ ├─ Cairo-VariableFont_slnt,wght.ttf
│ ├─ Almarai-.ttf
│ ├─ Oswald-.ttf
│ └─ NotoSerifDisplay-VariableFont_wdth,wght.ttf
│
├─ i18n/
│ ├─ en.ts
│ ├─ ar.ts
│ └─ LanguageContext.tsx
│
├─ api/
│ └─ contact/route.ts
│
└─ page.tsx

Fonts Used

All fonts are loaded locally using next/font/local to ensure optimal performance and avoid external requests.

Cairo – Arabic UI text

Almarai – Arabic headings and emphasis

Oswald – English secondary typography

Noto Serif Display – Name and branding typography

Getting Started

Install dependencies:

npm install

Run the development server:

npm run dev

Open:

http://localhost:3000

Deployment

The project is production-ready and deployed on Vercel.

Build command:

npm run build

Deployment is automatically triggered on push through GitHub integration.

Notes

This project is part of an ongoing refactoring and optimization process.

Components are intentionally structured for scalability and maintainability.

No UI libraries are used other than Material UI.

Sensitive configuration, credentials, and private data have been removed.

License

All rights reserved.

This source code is shared for portfolio and demonstration purposes only.

The project is not open source.

Redistribution, modification, or commercial use is not permitted without explicit written permission from the author.

© 2025 Najeh Elfadlee
