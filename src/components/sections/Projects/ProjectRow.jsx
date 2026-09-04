import {theme} from '@/styles/theme';
import {GithubButton, LiveButton} from '@/components/ui/Buttons';
import Text from '@/components/common/Text';
import ProjectTag from '@/components/sections/Projects/ProjectTag';
import Title from '@/components/common/Title';

export default function ProjectRow({project}) {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                padding: `${theme.spacing[8]} 0`,
                borderBottom: `1px solid ${theme.colors.border}`,
                gap: theme.spacing[6],
                flexWrap: 'wrap',
            }}
        >
            {/* Sol Taraf: Proje Detayları */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: theme.spacing[1],
                    flex: '1 1 600px',
                }}
            >
                <Title customStyle={{fontSize: theme.typography.fontSize.xl}}>
                    {project.name}
                </Title>

                <Text>{project.description}</Text>

                <ProjectTag tags={project.tags} />
            </div>

            {/* Sağ Taraf: Aksiyon Butonları */}
            <div
                style={{
                    display: 'flex',
                    gap: theme.spacing[4],
                    flexShrink: 0,
                }}
            >
                {project.github && <GithubButton href={project.github} />}
                {project.live && <LiveButton href={project.live} />}
            </div>
        </div>
    );
}
