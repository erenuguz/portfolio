import {theme} from '@/styles/theme';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/common/SectionHeader';
import ProjectRow from '@/components/sections/Projects/ProjectRow';
import {projectsData} from '@/data';

export default function Projects() {
    return (
        <Section id="projects" backgroundColor={theme.colors.surfaceAlt}>
            <SectionHeader eyebrow="Projeler" title="Öne çıkan çalışmalar." />

            <div
                style={{
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: theme.spacing[6],
                    alignItems: 'stretch',
                }}
            >
                {projectsData.map((project) => (
                    <ProjectRow key={project.name} project={project} />
                ))}
            </div>
        </Section>
    );
}
