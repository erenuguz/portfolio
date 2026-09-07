export default function ClosingCTA() {
    return (
        <section
            style={{
                backgroundColor: '#1A1A1A',
                padding: '56px 32px',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: '900px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '24px',
                }}
            >
                <h2
                    style={{
                        fontFamily: 'Georgia, "Times New Roman", serif',
                        fontSize: '26px',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        margin: 0,
                    }}
                >
                    Birlikte bir şeyler inşa edelim.
                </h2>

                <a
                    href="#contact"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        backgroundColor: '#FFFFFF',
                        color: '#1A1A1A',
                        fontFamily: 'system-ui, sans-serif',
                        fontSize: '15px',
                        fontWeight: 600,
                        padding: '12px 20px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        flexShrink: 0,
                    }}
                >
                    İletişime geç
                    <span aria-hidden="true">›</span>
                </a>
            </div>
        </section>
    );
}
