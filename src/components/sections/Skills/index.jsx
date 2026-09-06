import {theme} from '@/styles/theme';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/common/SectionHeader';
import SkillsColumn from '@/components/sections/Skills/SkillsColumn';
import {skillsData} from '@/data';

export default function Skills() {
    return (
        <Section id="skills" backgroundColor={theme.colors.background}>
            <SectionHeader
                eyebrow="Yeteneklerim"
                title="Kullandığım teknolojiler."
            />

            <div
                style={{
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: theme.spacing[6],
                    alignItems: 'stretch',
                }}
            >
                {skillsData.map((category) => (
                    <SkillsColumn key={category.title} category={category} />
                ))}
            </div>
        </Section>
    );
}
