import {useState, useEffect} from 'react';
import Section from '@/components/common/Section';
import {getTechnology, techStripTechnologyIds} from '@/data/technologies';
import TechBadge from './TechBadge';

function TechnologyGroup({decorative = false, isMobile = false}) {
    return (
        <div
            aria-hidden={decorative || undefined}
            style={{
                display: 'flex',
                alignItems: 'center',
                paddingRight: isMobile ? '20px' : '32px',
                gap: isMobile ? '20px' : '32px',
                boxSizing: 'border-box',
            }}
        >
            {techStripTechnologyIds.map((technologyId) => {
                const technology = getTechnology(technologyId);

                if (!technology) {
                    return null;
                }

                return (
                    <TechBadge
                        key={technologyId}
                        technology={technology}
                        decorative={decorative}
                        isMobile={isMobile}
                    />
                );
            })}
        </div>
    );
}

export default function TechStrip() {
    const [isHovered, setIsHovered] = useState(false);
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 1200
    );

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth <= 640;

    return (
        <>
            <style>{`
                @keyframes tech-strip-scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
            `}</style>

            <Section
                spacing="none"
                contained={false}
                aria-label="Kullandığım teknolojiler"
                style={{
                    overflow: 'hidden',
                    backgroundColor: '#ffffff',
                    boxSizing: 'border-box',
                }}
            >
                <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                        display: 'flex',
                        width: 'max-content',
                        padding: '8px 0',
                        animation: `tech-strip-scroll ${isMobile ? '18s' : '22s'} linear infinite`,
                        animationPlayState: isHovered ? 'paused' : 'running',
                        boxSizing: 'border-box',
                    }}
                >
                    <TechnologyGroup isMobile={isMobile} />
                    <TechnologyGroup decorative isMobile={isMobile} />
                    <TechnologyGroup isMobile={isMobile} />
                    <TechnologyGroup isMobile={isMobile} />
                </div>
            </Section>
        </>
    );
}
