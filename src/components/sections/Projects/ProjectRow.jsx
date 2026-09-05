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
                    gap: theme.spacing[4],
                }}
            >
                <Title style={{fontSize: theme.typography.fontSize.base}}>
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
                <GithubButton href={project.github} />
                <LiveButton href={project.live} />
            </div>
        </div>
    );
}
