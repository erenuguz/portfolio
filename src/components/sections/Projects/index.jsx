import {useState, useEffect} from 'react';
import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';
import {projectsData} from '@/data/projects';
import useHorizontalDrag from '@/hooks/useHorizontalDrag';
import ProjectCard from './ProjectCard';

export default function Projects() {
    const {containerRef, isDragging, dragHandlers} = useHorizontalDrag();
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 1200
    );

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth <= 640;
    const isTablet = windowWidth <= 1100;

    const horizontalPadding = isMobile
        ? '24px'
        : isTablet
          ? '48px'
          : 'calc((100vw - 1024px) / 2)';

    const projectList = (
        <div
            ref={containerRef}
            {...dragHandlers}
            style={{
                display: 'flex',
                width: '100%',
                padding: `16px ${horizontalPadding} 32px ${horizontalPadding}`,
                gap: '24px',
                overflowX: 'auto',
                overscrollBehaviorX: 'contain',
                scrollSnapType: isDragging ? 'none' : 'x mandatory',
                scrollPaddingInlineStart: horizontalPadding,
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                cursor: isDragging ? 'grabbing' : 'grab',
                userSelect: isDragging ? 'none' : 'auto',
                touchAction: 'pan-x',
                boxSizing: 'border-box',
            }}
        >
            {projectsData.map((project, index) => (
                <div
                    key={project.id}
                    style={{
                        display: 'flex',
                        minWidth: isMobile
                            ? 'min(300px, calc(100vw - 48px))'
                            : '320px',
                        maxWidth: isMobile
                            ? 'min(300px, calc(100vw - 48px))'
                            : '320px',
                        scrollSnapAlign: 'start',
                        boxSizing: 'border-box',
                    }}
                >
                    <ProjectCard
                        {...project}
                        colorIndex={index}
                        isMobile={isMobile}
                    />
                </div>
            ))}
        </div>
    );

    return (
        <Section
            id="projects"
            width="content"
            fullBleed={projectList}
            style={{
                boxSizing: 'border-box',
            }}
        >
            <SectionHeader
                title="Öne çıkan çalışmalar."
                description="Üzerinde çalıştığım bazı projeler."
            />
        </Section>
    );
}
