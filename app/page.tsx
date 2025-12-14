'use client';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutSection from './components/About';

import FeaturedWork from './components/Portfilo';
import ContactSection from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <NavBar />

      <section id="home" style={{ scrollMarginTop: 100 }}>
        <Hero />
      </section>

      <section id="about" style={{ scrollMarginTop: 140 }}>
     <AboutSection />
      </section>

      <section id="portfolio" style={{ scrollMarginTop: 100 }}>
        <FeaturedWork />
      </section>

      <section id="contact" style={{ scrollMarginTop: 100 }}>
        <ContactSection />
      </section>

      <Footer />
    </>
     
    
  );
}