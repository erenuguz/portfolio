import {useState, useEffect} from 'react';
import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import {aboutData} from '@/data/about';
import StatusCard from './StatusCard';

export default function About() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Section
            id="about"
            width="content"
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: isMobile ? '36px' : '48px',
                boxSizing: 'border-box',
            }}
        >
            <SectionHeader title="Biraz kendimden." />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px',
                    maxWidth: '800px',
                }}
            >
                {aboutData.bio.map((paragraph) => (
                    <p
                        key={paragraph}
                        style={{
                            margin: 0,
                            color: '#555555',
                            fontSize: '16px',
                            lineHeight: 1.75,
                        }}
                    >
                        {paragraph}
                    </p>
                ))}
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile
                        ? '1fr'
                        : 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px',
                }}
            >
                {aboutData.statuses.map((status) => (
                    <StatusCard key={status.id} status={status} />
                ))}
            </div>
        </Section>
    );
}
