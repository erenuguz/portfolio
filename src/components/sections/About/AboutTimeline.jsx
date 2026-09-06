import {theme} from '@/styles/theme';
import Card from '@/components/ui/Card';
import Text from '@/components/common/Text';
import Title from '@/components/common/Title';
import {timelineData} from '@/data';

export default function AboutTimeline() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: theme.spacing[4],
                minWidth: 0,
            }}
        >
            {timelineData.map((item) => (
                <Card
                    as="article"
                    key={`${item.period}-${item.role}`}
                    style={{
                        borderLeft: `3px solid ${theme.colors.accentLine}`,
                    }}
                >
                    <span
                        style={{
                            fontFamily: theme.typography.fontFamily.mono,
                            fontSize: theme.typography.fontSize.xs,
                            fontWeight: theme.typography.fontWeight.bold,
                            lineHeight: theme.typography.lineHeight.normal,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: theme.colors.text.muted,
                        }}
                    >
                        {item.period}
                    </span>

                    <Title as="h3" variant="card">
                        {item.role}
                    </Title>

                    <Text
                        as="span"
                        variant="small"
                        style={{
                            color: theme.colors.text.muted,
                        }}
                    >
                        {item.company}
                    </Text>

                    <Text variant="card">{item.description}</Text>
                </Card>
            ))}
        </div>
    );
}
