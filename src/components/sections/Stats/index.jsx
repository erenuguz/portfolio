import {useState, useEffect} from 'react';
import Section from '@/components/common/Section';
import {statsData} from '@/data/stats';
import StatItem from './StatItem';

export default function Stats() {
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 1200
    );

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isSmallMobile = windowWidth <= 420;
    const isTablet = windowWidth <= 760;
    const isNarrowDesktop = windowWidth <= 900;

    let containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: isNarrowDesktop ? '32px' : '64px',
        justifyContent: 'space-between',
        width: '100%',
        boxSizing: 'border-box',
    };

    if (isSmallMobile) {
        containerStyle = {
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '32px',
            width: '100%',
            boxSizing: 'border-box',
        };
    } else if (isTablet) {
        containerStyle = {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '40px 24px',
            width: '100%',
            boxSizing: 'border-box',
        };
    }

    return (
        <Section
            width="content"
            aria-label="Kariyer istatistikleri"
            style={{
                backgroundColor: '#faf9f6',
                boxSizing: 'border-box',
            }}
        >
            <div style={containerStyle}>
                {statsData.map((stat, index) => (
                    <StatItem
                        key={stat.label}
                        value={stat.value}
                        label={stat.label}
                        index={index}
                        isTablet={isTablet}
                        isSmallMobile={isSmallMobile}
                        isNarrowDesktop={isNarrowDesktop}
                    />
                ))}
            </div>
        </Section>
    );
}
