import {theme} from '@/styles/theme';
import {timelineData} from '@/data';

export default function AboutTimeline() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                flex: '1 1 320px',
                gap: theme.spacing[8],
            }}
        >
            {timelineData.map((item) => (
                <div
                    key={`${item.period}-${item.role}`}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: theme.spacing[2],
                        paddingLeft: theme.spacing[4],
                        borderLeft: `2px solid ${theme.colors.border}`,
                    }}
                >
                    <span
                        style={{
                            fontSize: theme.typography.fontSize.sm,
                            fontWeight: theme.typography.fontWeight.semibold,
                            color: theme.colors.text.muted,
                            fontFamily: theme.typography.fontFamily.sans,
                        }}
                    >
                        {item.period}
                    </span>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'baseline',
                            gap: theme.spacing[2],
                            flexWrap: 'wrap',
                        }}
                    >
                        <h3
                            style={{
                                fontSize: theme.typography.fontSize.lg,
                                fontWeight:
                                    theme.typography.fontWeight.bold,
                                color: theme.colors.text.primary,
                                margin: 0,
                                fontFamily: theme.typography.fontFamily.sans,
                            }}
                        >
                            {item.role}
                        </h3>
                        <span
                            style={{
                                fontSize: theme.typography.fontSize.base,
                                color: theme.colors.text.secondary,
                                fontFamily: theme.typography.fontFamily.sans,
                            }}
                        >
                            — {item.company}
                        </span>
                    </div>
                    <p
                        style={{
                            fontSize: theme.typography.fontSize.sm,
                            color: theme.colors.text.secondary,
                            lineHeight: '1.6',
                            margin: 0,
                            marginTop: theme.spacing[1],
                            fontFamily: theme.typography.fontFamily.body,
                        }}
                    >
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    );
}
