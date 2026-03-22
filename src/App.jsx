import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProviderWrapper } from '@/components/ThemeProvider';

function App() {
  return (
    <ThemeProviderWrapper defaultTheme="dark" storageKey="vite-ui-theme">
      <Helmet>
        <title>Shaban shaikh - Flutter Developer Portfolio</title>
        <meta name="description" content="Professional portfolio of Shaban shaikh, a Flutter developer with 1 year experience at Asecnsify Technology Kolhapur. Specialized in Flutter web and app development, Firebase, and Cloudinary." />
      </Helmet> 
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProviderWrapper>
  );
}

export default App;