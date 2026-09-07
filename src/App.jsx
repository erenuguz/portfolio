import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TechStrip from '@/components/sections/TechStrip';
import Skills from '@/components/sections/Skills';
import About from '@/components/sections/About';

import Projects from '@/components/sections/Projects';

import Contact from '@/components/sections/Contact';

export default function App() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <TechStrip />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}
