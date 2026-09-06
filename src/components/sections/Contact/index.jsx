import {theme} from '@/styles/theme';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/common/SectionHeader';
import ContactContent from '@/components/sections/Contact/ContactContent';
import ContactForm from '@/components/sections/Contact/ContactForm';

export default function Contact() {
    return (
        <Section id="contact" backgroundColor={theme.colors.background}>
            <SectionHeader eyebrow="İletişim" title="Konuşalım." />

            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: theme.spacing[6],
                }}
            >
                <ContactContent />
                <ContactForm />
            </div>
        </Section>
    );
}
