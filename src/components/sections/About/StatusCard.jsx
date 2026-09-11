import {useState} from 'react';

export default function StatusCard({status}) {
    const [isHovered, setIsHovered] = useState(false);

    const isSuccess = status.badgeVariant === 'success';

    return (
        <article
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                padding: '24px 28px',
                backgroundColor: '#F7F6F3',
                borderRadius: '16px',
                border: '1px solid rgba(0, 0, 0, 0.03)',
                boxShadow: isHovered
                    ? '0 8px 24px rgba(0, 0, 0, 0.04)'
                    : 'none',
                transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                boxSizing: 'border-box',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '4px',
                    paddingRight: '80px',
                    boxSizing: 'border-box',
                }}
            >
                <div style={{minWidth: 0}}>
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
                        {status.title}
                    </h3>

                    <p
                        style={{
                            margin: '4px 0 0',
                            color: '#6b6b6b',
                            fontSize: '14px',
                            lineHeight: 1.5,
                        }}
                    >
                        {status.subtitle}
                    </p>
                </div>

                <span
                    style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        padding: '6px 12px',
                        color: isSuccess ? '#1e7b34' : '#4a4a4a',
                        backgroundColor: isSuccess ? '#e6f4ea' : '#EAE8E1',
                        borderRadius: '999px',
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.02)',
                    }}
                >
                    {status.badge}
                </span>
            </div>

            <p
                style={{
                    margin: 0,
                    color: '#555555',
                    fontSize: '15px',
                    lineHeight: 1.6,
                }}
            >
                {status.description}
            </p>

            {status.stats?.length > 0 && (
                <div
                    style={{
                        display: 'flex',
                        marginTop: 'auto',
                        paddingTop: '16px',
                        alignItems: 'baseline',
                        gap: '24px',
                        flexWrap: 'wrap',
                        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                    }}
                >
                    {status.stats.map((stat) => (
                        <div
                            key={stat.label}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                gap: '2px',
                            }}
                        >
                            <span
                                style={{
                                    color: '#1a1a1a',
                                    fontSize: '18px',
                                    fontWeight: 700,
                                }}
                            >
                                {stat.value}
                            </span>

                            <span
                                style={{
                                    color: '#6b6b6b',
                                    fontSize: '12px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.04em',
                                }}
                            >
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </article>
    );
}
