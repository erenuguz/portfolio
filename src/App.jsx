import {useState} from 'react';

import Footer from '@/components/layout/Footer';

import Header from '@/components/layout/header/Header';
import About from '@/components/sections/About';
import ClosingCTA from '@/components/sections/ClosingCTA';
import ContactModal from '@/components/sections/Contact';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Stats from '@/components/sections/Stats';
import TechStrip from '@/components/sections/TechStrip';

export default function App() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    function openContact() {
        setIsContactOpen(true);
    }

    function closeContact() {
        setIsContactOpen(false);
    }

    return (
        <>
            <Header onContactOpen={openContact} />
            <main>
                <Hero onContactOpen={openContact} />
                <About />
                <Stats />
                <TechStrip />
                <Skills />
                <Projects />
                <ClosingCTA onContactOpen={openContact} />
            </main>

            <Footer onContactOpen={openContact} />

            <ContactModal isOpen={isContactOpen} onClose={closeContact} />
        </>
    );
}
