export default function StatusCard({ status }) {
    const isSuccess = status.badgeVariant === 'success' || !status.badgeVariant;

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                padding: '32px 0',
                borderBottom: '1px solid #E5E2DA',
            }}
        >
            {/* Üst Satır: Başlık (Sol) ve Rozet (Sağ) */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '12px',
                }}
            >
                <div>
                    <h3
                        style={{
                            fontFamily: 'Georgia, "Times New Roman", serif', // Editoryal bir hava katar
                            fontSize: '22px',
                            fontWeight: 700,
                            color: '#1A1A1A',
                            margin: 0,
                        }}
                    >
                        {status.title}
                    </h3>
                    <p
                        style={{
                            fontFamily: 'system-ui, sans-serif',
                            fontSize: '14px',
                            color: '#6B6B6B',
                            margin: '4px 0 0 0',
                        }}
                    >
                        {status.subtitle}
                    </p>
                </div>

                {/* Durum Rozeti */}
                <span
                    style={{
                        fontFamily: 'system-ui, sans-serif',
                        fontSize: '11px',
                        fontWeight: 700,
                        color: isSuccess ? '#1E7B34' : '#4A4A4A',
                        backgroundColor: isSuccess ? '#E6F4EA' : '#F3F2EE',
                        padding: '6px 12px',
                        borderRadius: '999px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                    }}
                >
                    {status.badge}
                </span>
            </div>

            {/* Açıklama Metni */}
            <p
                style={{
                    fontFamily: 'system-ui, sans-serif',
                    fontSize: '15px',
                    lineHeight: 1.6,
                    color: '#555555',
                    margin: 0,
                }}
            >
                {status.description}
            </p>

            {/* İstatistikler (Eğer varsa, zarif bir şekilde yan yana) */}
            {status.stats && status.stats.length > 0 && (
                <div style={{ display: 'flex', gap: '32px', marginTop: '8px' }}>
                    {status.stats.map((stat) => (
                        <div key={stat.label} style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                            <span
                                style={{
                                    fontFamily: 'system-ui, sans-serif',
                                    fontSize: '16px',
                                    fontWeight: 700,
                                    color: '#1A1A1A',
                                }}
                            >
                                {stat.value}
                            </span>
                            <span
                                style={{
                                    fontFamily: 'system-ui, sans-serif',
                                    fontSize: '13px',
                                    color: '#6B6B6B',
                                }}
                            >
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}