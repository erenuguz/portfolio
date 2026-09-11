import {useState, useEffect} from 'react';
import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import skillsData from '@/data/skills';
import {getTechnology} from '@/data/technologies';
import SkillCard from './SkillCard';

const CATEGORY_BACKGROUNDS = ['#fafaf8', '#f6f7f5', '#f8f6fa'];

export default function Skills() {
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 1200
    );

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth <= 640;
    const isTablet = windowWidth <= 900;

    const gridColumns = isMobile
        ? '1fr'
        : isTablet
          ? 'repeat(2, minmax(0, 1fr))'
          : 'repeat(3, minmax(0, 1fr))';

    return (
        <Section
            id="skills"
            width="content"
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: isMobile ? '36px' : '48px',
                boxSizing: 'border-box',
            }}
        >
            <SectionHeader
                title="Kullandığım teknolojiler."
                description="Farklı katmanlarda çalışırken tercih ettiğim araçlar."
            />

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: gridColumns,
                    gap: isTablet ? '20px' : '24px',
                    width: '100%',
                    boxSizing: 'border-box',
                }}
            >
                {skillsData.map((category, index) => {
                    const backgroundColor =
                        CATEGORY_BACKGROUNDS[
                            index % CATEGORY_BACKGROUNDS.length
                        ];

                    return (
                        <article
                            key={category.title}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px',
                                padding: '24px 28px',
                                borderRadius: '16px',
                                border: '1px solid rgba(0, 0, 0, 0.03)',
                                backgroundColor: backgroundColor,
                                boxSizing: 'border-box',
                            }}
                        >
                            <h3
                                style={{
                                    margin: 0,
                                    paddingBottom: '12px',
                                    color: '#1a1a1a',
                                    borderBottom:
                                        '1px solid rgba(0, 0, 0, 0.06)',
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    lineHeight: 1.5,
                                    letterSpacing: '0.02em',
                                }}
                            >
                                {category.title}
                            </h3>

                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '12px',
                                }}
                            >
                                {category.technologyIds.map((technologyId) => {
                                    const technology =
                                        getTechnology(technologyId);

                                    if (!technology) {
                                        return null;
                                    }

                                    return (
                                        <SkillCard
                                            key={technologyId}
                                            technology={technology}
                                        />
                                    );
                                })}
                            </div>
                        </article>
                    );
                })}
            </div>
        </Section>
    );
}
