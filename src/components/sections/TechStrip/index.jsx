import Section from '@/components/common/Section';
import {getTechnology, techStripTechnologyIds} from '@/data/technologies';
import TechBadge from './TechBadge';
import './TechStrip.css';

function TechnologyGroup({decorative = false}) {
    return (
        <div
            className="tech-strip__group"
            aria-hidden={decorative || undefined}
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
                    />
                );
            })}
        </div>
    );
}

export default function TechStrip() {
    return (
        <Section
            spacing="none"
            contained={false}
            className="tech-strip"
            aria-label="Kullandığım teknolojiler"
        >
            <div className="tech-strip__track">
                <TechnologyGroup />
                <TechnologyGroup decorative />
                <TechnologyGroup />
                <TechnologyGroup />
            </div>
        </Section>
    );
}
