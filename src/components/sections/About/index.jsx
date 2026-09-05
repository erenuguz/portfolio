import {theme} from '@/styles/theme';
import Subtitle from '@/components/common/Subtitle';
import Title from '@/components/common/Title';
import AboutContent from '@/components/sections/About/AboutContent';
import AboutTimeline from '@/components/sections/About/AboutTimeline';

export default function About() {
    return (
        <section
            style={{
                padding: `${theme.spacing[24]} ${theme.spacing[8]}`,
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: theme.colors.surfaceAlt,
            }}
            id="about"
        >
            <div
                style={{
                    width: '100%',
                    
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                }}
            >
                <Subtitle>HAKKIMDA</Subtitle>

                <Title>Biraz kendimden.</Title>

                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: theme.spacing[16],
                        width: '100%',
                    }}
                >
                    {/* Metinler */}
                    <AboutContent />

                    {/* Timeline */}
                    <AboutTimeline />
                </div>
            </div>
        </section>
    );
}
