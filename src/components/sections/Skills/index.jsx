import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import skillsData from '@/data/skills';
import {getTechnology} from '@/data/technologies';

import SkillCard from './SkillCard';
import './Skills.css';

export default function Skills() {
    return (
        <Section
            id="skills"
           width="content"
            
            containerClassName="skills__container"
        >
            <SectionHeader
                title="Kullandığım teknolojiler."
                description="Farklı katmanlarda çalışırken tercih ettiğim araçlar."
            />

            <div className="skills__categories">
                {skillsData.map((category) => (
                    <article key={category.title} className="skills__category">
                        <h3 className="skills__category-title">
                            {category.title}
                        </h3>

                        <div className="skills__list">
                            {category.technologyIds.map((technologyId) => {
                                const technology = getTechnology(technologyId);

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
                ))}
            </div>
        </Section>
    );
}
