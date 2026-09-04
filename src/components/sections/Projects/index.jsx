import {theme} from '@/styles/theme';
import Subtitle from '@/components/common/Subtitle';
import Title from '@/components/common/Title';
import ProjectRow from '@/components/sections/Projects/ProjectRow';
import {projectsData} from '@/data';

export default function Projects() {
    return (
        <section
            style={{
                padding: `${theme.spacing[24]} ${theme.spacing[8]}`,
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: theme.colors.surfaceAlt,
            }}
            id="projects"
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: theme.layout.contentMaxWidth,
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                }}
            >
                <Subtitle>PROJELER</Subtitle>

                <Title>Öne çıkan çalışmalar.</Title>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                    }}
                >
                    {projectsData.map((project) => (
                        <ProjectRow key={project.name} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
