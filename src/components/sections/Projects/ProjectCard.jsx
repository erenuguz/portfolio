// ProjectCard.jsx
import Card from '@/components/ui/Card';

const CARD_COLORS = [
    {bg: '#EDE9FE', accent: '#7C3AED'},
    {bg: '#BAE6FD', accent: '#0284C7'},
    {bg: '#A7F3D0', accent: '#059669'},
    {bg: '#FED7AA', accent: '#EA580C'},
    {bg: '#FBCFE8', accent: '#DB2777'},
];

export default function ProjectCard({
    name,
    description,
    tags,
    github,
    live,
    colorIndex = 0,
}) {
    const theme = CARD_COLORS[colorIndex % CARD_COLORS.length];

    return (
        <Card
            gap="14px"
            align="flex-start"
            style={{
                minWidth: '280px',
                maxWidth: '280px',
                height: '100%',
                flexShrink: 0,
                padding: '20px',
                overflow: 'hidden',
                backgroundColor: theme.bg,
                border: '1px solid #E5E2DA',
                display: 'flex',
                flexDirection: 'column',
                boxSizing: 'border-box',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    width: '100%',
                    height: '100%',
                    boxSizing: 'border-box',
                }}
            >
                <h3
                    style={{
                        fontFamily: 'system-ui, sans-serif',
                        fontSize: '15px',
                        fontWeight: 700,
                        color: '#1A1A1A',
                        margin: 0,
                    }}
                >
                    {name}
                </h3>

                <p
                    style={{
                        fontFamily: 'system-ui, sans-serif',
                        fontSize: '12px',
                        lineHeight: 1.6,
                        color: '#6B6B6B',
                        margin: 0,
                        flexGrow: 1,
                    }}
                >
                    {description}
                </p>

                <div style={{display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            style={{
                                fontFamily: 'system-ui, sans-serif',
                                fontSize: '11px',
                                fontWeight: 600,
                                color: '#4A4A4A',
                                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                border: '1px solid #E5E2DA',
                                borderRadius: '999px',
                                padding: '3px 10px',
                                letterSpacing: '0.02em',
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {(live || github) && (
                    <div
                        style={{
                            display: 'flex',
                            gap: '10px',
                            marginTop: 'auto',
                            paddingTop: '8px',
                            width: '100%',
                        }}
                    >
                        {live && (
                            <a
                                href={live}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    fontFamily: 'system-ui, sans-serif',
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    color: '#FAF9F6',
                                    backgroundColor: '#1A1A1A',
                                    padding: '7px 14px',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    flex: 1,
                                    textAlign: 'center',
                                }}
                            >
                                Canlı ↗
                            </a>
                        )}
                        {github && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    fontFamily: 'system-ui, sans-serif',
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    color: '#1A1A1A',
                                    backgroundColor: 'transparent',
                                    border: '1px solid #D1D5DB',
                                    padding: '7px 14px',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    flex: 1,
                                    textAlign: 'center',
                                }}
                            >
                                GitHub ↗
                            </a>
                        )}
                    </div>
                )}
            </div>
        </Card>
    );
}
