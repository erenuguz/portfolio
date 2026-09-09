import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import {projectsData} from '@/data/projects';
import useHorizontalDrag from '@/hooks/useHorizontalDrag';

import ProjectCard from './ProjectCard';
import './Projects.css';

export default function Projects() {
    const {containerRef, isDragging, dragHandlers} = useHorizontalDrag();

    const scrollerClasses = [
        'projects__scroller',
        isDragging && 'projects__scroller--dragging',
    ]
        .filter(Boolean)
        .join(' ');

    const projectList = (
        <div ref={containerRef} className={scrollerClasses} {...dragHandlers}>
            {projectsData.map((project, index) => (
                <div key={project.id} className="project-card-wrapper">
                    <ProjectCard {...project} colorIndex={index} />
                </div>
            ))}
        </div>
    );

    return (
        <Section
            id="projects"
            width="content"
            className="projects"
            fullBleed={projectList}
        >
            <SectionHeader
                title="Öne çıkan çalışmalar."
                description="Üzerinde çalıştığım bazı projeler."
            />
        </Section>
    );
}
