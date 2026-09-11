import {useState} from 'react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const GRADIENTS = {
    violet: 'linear-gradient(135deg, #f3e8ff 0%, #d8b4fe 100%)',
    blue: 'linear-gradient(135deg, #e0f2fe 0%, #7dd3fc 100%)',
    green: 'linear-gradient(135deg, #dcfce7 0%, #86efac 100%)',
    orange: 'linear-gradient(135deg, #ffedd5 0%, #fdba74 100%)',
    pink: 'linear-gradient(135deg, #fce7f3 0%, #f9a8d4 100%)',
};

const COLOR_KEYS = ['violet', 'blue', 'green', 'orange', 'pink'];

export default function ProjectCard({
    name,
    description,
    tags = [],
    github,
    live,
    colorIndex = 0,
    isMobile = false,
}) {
    const [isHovered, setIsHovered] = useState(false);
    const colorKey = COLOR_KEYS[colorIndex % COLOR_KEYS.length];
    const backgroundGradient = GRADIENTS[colorKey];

    return (
        <Card
            as="article"
            interactive
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                width: '100%',
                minHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: 0,
                backgroundColor: '#ffffff',
                borderBottom: '1px solid #eaeaea',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: isHovered
                    ? '0 12px 24px rgba(0, 0, 0, 0.08)'
                    : '0 4px 12px rgba(0, 0, 0, 0.03)',
                transform: isHovered ? 'translateY(-4px)' : 'none',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxSizing: 'border-box',
            }}
        >
            <div
                style={{
                    height: isMobile ? '120px' : '140px',
                    width: '100%',
                    background: backgroundGradient,
                    borderBottom: '1px solid rgba(0, 0, 0, 0.03)',
                    flexShrink: 0,
                }}
            />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '24px',
                    gap: '16px',
                    flexGrow: 1,
                    boxSizing: 'border-box',
                }}
            >
                <h3
                    style={{
                        margin: 0,
                        color: '#1a1a1a',
                        fontFamily: "Georgia, 'Times New Roman', serif",
                        fontSize: '20px',
                        fontWeight: 700,
                        lineHeight: 1.3,
                    }}
                >
                    {name}
                </h3>

                <p
                    style={{
                        margin: 0,
                        color: '#555555',
                        fontSize: '14px',
                        lineHeight: 1.6,
                        flexGrow: 1,
                    }}
                >
                    {description}
                </p>

                {tags.length > 0 && (
                    <div
                        style={{
                            display: 'flex',
                            gap: '8px',
                            flexWrap: 'wrap',
                        }}
                    >
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                style={{
                                    padding: '4px 12px',
                                    color: '#4a4a4a',
                                    backgroundColor: '#f7f6f3',
                                    border: '1px solid rgba(0, 0, 0, 0.05)',
                                    borderRadius: '16px',
                                    fontSize: '11px',
                                    fontWeight: 600,
                                    letterSpacing: '0.02em',
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {(live || github) && (
                    <div
                        style={{
                            display: 'flex',
                            width: '100%',
                            paddingTop: '12px',
                            gap: '12px',
                        }}
                    >
                        {live && (
                            <div style={{flex: 1}}>
                                <Button
                                    href={live}
                                    size="small"
                                    icon="arrowUpRight"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        width: '100%',
                                        borderRadius: '16px',
                                        justifyContent: 'center',
                                    }}
                                >
                                    Canlı
                                </Button>
                            </div>
                        )}

                        {github && (
                            <div style={{flex: 1}}>
                                <Button
                                    href={github}
                                    variant="secondary"
                                    size="small"
                                    icon="arrowUpRight"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        width: '100%',
                                        borderRadius: '16px',
                                        justifyContent: 'center',
                                    }}
                                >
                                    GitHub
                                </Button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </Card>
    );
}
