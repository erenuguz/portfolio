import {theme} from '@/styles/theme';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/common/SectionHeader';
import AboutContent from '@/components/sections/About/AboutContent';
import AboutTimeline from '@/components/sections/About/AboutTimeline';

export default function About() {
    return (
        <Section id="about" backgroundColor={theme.colors.surfaceAlt}>
            <SectionHeader eyebrow="Hakkımda" title="Biraz kendimden." />

            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    gap: theme.spacing[8],
                }}
            >
                <AboutContent />
                <AboutTimeline />
            </div>
        </Section>
    );
}
