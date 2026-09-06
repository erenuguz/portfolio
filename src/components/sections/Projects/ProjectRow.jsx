import {theme} from '@/styles/theme';
import {GithubButton, LiveButton} from '@/components/ui/Buttons';
import Card from '@/components/ui/Card';
import Text from '@/components/common/Text';
import Title from '@/components/common/Title';
import ProjectTag from '@/components/sections/Projects/ProjectTag';

export default function ProjectRow({project}) {
    const hasGithubLink = Boolean(project.github) && project.github !== '#';

    const hasLiveLink = Boolean(project.live) && project.live !== '#';

    const hasAnyLink = hasGithubLink || hasLiveLink;

    return (
        <Card
            as="article"
            style={{
                height: '100%',
                justifyContent: 'space-between',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: theme.spacing[4],
                }}
            >
                <Title as="h3" variant="card">
                    {project.name}
                </Title>

                <Text variant="card">{project.description}</Text>

                <ProjectTag tags={project.tags} />
            </div>

            {hasAnyLink && (
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: theme.spacing[3],
                        flexWrap: 'wrap',
                        paddingTop: theme.spacing[2],
                        marginTop: 'auto',
                    }}
                >
                    {hasGithubLink && <GithubButton href={project.github} />}

                    {hasLiveLink && <LiveButton href={project.live} />}
                </div>
            )}
        </Card>
    );
}
