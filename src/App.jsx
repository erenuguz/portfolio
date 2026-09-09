import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import About from '@/components/sections/About';
import ClosingCTA from '@/components/sections/ClosingCTA';
import Contact from '@/components/sections/Contact';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Stats from '@/components/sections/Stats';
import TechStrip from '@/components/sections/TechStrip';

export default function App() {
    return (
        <>
            <Header />

            <main>
                <Hero />
                <About />
                <Stats />
                <TechStrip />
                <Skills />
                <Projects />
                <ClosingCTA />
                <Contact />
            </main>

            <Footer />
        </>
    );
}
