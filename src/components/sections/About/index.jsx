import { aboutData } from '@/data/about';
import StatusCard from './StatusCard';

export default function About() {
    return (
        <section
            id="about"
            style={{
                backgroundColor: '#FFFFFF',
                borderBottom: '1px solid #E5E2DA',
                padding: '80px 32px',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: '800px', // Okuma kolaylığı için biraz daraltıldı
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '48px',
                }}
            >
                {/* Section header */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                    }}
                >
                    <span
                        aria-hidden="true"
                        style={{
                            width: '3px',
                            height: '40px',
                            backgroundColor: '#1E7B34',
                            borderRadius: '999px',
                            flexShrink: 0,
                        }}
                    />
                    <div>
                        <h2
                            style={{
                                fontFamily: 'Georgia, "Times New Roman", serif',
                                fontSize: '28px',
                                fontWeight: 700,
                                color: '#1A1A1A',
                                margin: 0,
                            }}
                        >
                            Biraz kendimden.
                        </h2>
                    </div>
                </div>

                {/* Bio Paragrafları (Üstte) */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px',
                    }}
                >
                    {aboutData.bio.map((paragraph, i) => (
                        <p
                            key={i}
                            style={{
                                fontFamily: 'system-ui, sans-serif',
                                fontSize: '16px',
                                lineHeight: 1.75,
                                color: '#555555',
                                margin: 0,
                            }}
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>

                {/* Dinamik Statü/Deneyim Listesi (Altta, Alt Alta) */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {aboutData.statuses.map((statusItem) => (
                        <StatusCard
                            key={statusItem.id || statusItem.title}
                            status={statusItem}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}