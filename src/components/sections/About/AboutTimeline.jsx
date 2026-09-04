import {theme} from '@/styles/theme';
import {timelineData} from '@/data'; // Veriyi data dosyasından alıyoruz

export default function AboutTimeline() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: theme.spacing[8],
            }}
        >
            {timelineData.map((item, index) => (
                <div
                    key={index}
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
                                    theme.typography.fontWeight.semibold,
                                color: theme.colors.text.primary,
                                margin: 0,
                            }}
                        >
                            {item.role}
                        </h3>
                        <span
                            style={{
                                fontSize: theme.typography.fontSize.base,
                                color: theme.colors.text.secondary,
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
                        }}
                    >
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    );
}
