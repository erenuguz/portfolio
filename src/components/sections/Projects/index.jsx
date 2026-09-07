// Projects.jsx
'use client';
import { useRef } from 'react';
import { projectsData } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
    const scrollRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const onMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
        scrollRef.current.style.cursor = 'grabbing';
        scrollRef.current.style.userSelect = 'none';
    };

    const onMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.2;
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const stopDragging = () => {
        isDragging.current = false;
        if (scrollRef.current) {
            scrollRef.current.style.cursor = 'grab';
            scrollRef.current.style.userSelect = '';
        }
    };

    return (
        <section
            id="projects"
            style={{
                backgroundColor: '#FFFFFF',
                borderBottom: '1px solid rgba(0,0,0,0.06)',
                padding: '48px 0',
            }}
        >
            <style>{`
                .projects-scroll {
                    scroll-behavior: smooth;
                    -webkit-overflow-scrolling: touch;
                    scroll-snap-type: x mandatory;
                    cursor: grab;
                }
                .projects-scroll::-webkit-scrollbar { display: none; }
                .projects-scroll { scrollbar-width: none; }

                .project-card-wrap {
                    scroll-snap-align: start;
                    transition: transform 0.3s ease, opacity 0.3s ease;
                }
                .project-card-wrap:hover {
                    transform: translateY(-4px);
                }
            `}</style>

            <div
                style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    padding: '0 32px 0 32px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                    }}
                >
                    <span
                        aria-hidden="true"
                        style={{
                            width: '3px',
                            height: '40px',
                            backgroundColor: '#1E7B34',
                            borderRadius: '999px',
                            flexShrink: 0,
                        }}
                    />
                    <div>
                        <h2
                            style={{
                                fontFamily: 'Georgia, "Times New Roman", serif',
                                fontSize: '26px',
                                fontWeight: 700,
                                color: '#1A1A1A',
                                margin: 0,
                            }}
                        >
                            Öne çıkan çalışmalar.
                        </h2>
                        <p
                            style={{
                                fontFamily: 'system-ui, sans-serif',
                                fontSize: '15px',
                                color: '#6B6B6B',
                                margin: '4px 0 0 0',
                            }}
                        >
                            Üzerinde çalıştığım bazı projeler.
                        </p>
                    </div>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="projects-scroll"
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={stopDragging}
                onMouseLeave={stopDragging}
                style={{
                    display: 'flex',
                    gap: '16px',
                    overflowX: 'auto',
                    padding: '24px 32px 16px 32px',
                    marginTop: '8px',
                }}
            >
                {projectsData.map((project, index) => (
                    <div key={project.name} className="project-card-wrap">
                        {/* colorIndex prop'u eklendi */}
                        <ProjectCard {...project} colorIndex={index} />
                    </div>
                ))}

                <div style={{ minWidth: '16px', flexShrink: 0 }} />
            </div>
        </section>
    );
}