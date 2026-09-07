import {aboutData} from '@/data/about';
import StatusCard from '@/components/sections/About/StatusCard';

export default function HeroPreview() {
    return (
        <div
            style={{
                width: '100%',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5E2DA',
                borderRadius: '16px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
                padding: '32px',
                display: 'flex',
                gap: '32px',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
            }}
        >
            <div
                style={{
                    flex: '1 1 380px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                }}
            >
                <h3
                    style={{
                        fontFamily: 'Georgia, "Times New Roman", serif',
                        fontSize: '20px',
                        fontWeight: 700,
                        color: '#1A1A1A',
                        margin: 0,
                    }}
                >
                    Biraz kendimden.
                </h3>

                {aboutData.bio.map((paragraph, i) => (
                    <p
                        key={i}
                        style={{
                            fontFamily: 'system-ui, sans-serif',
                            fontSize: '14px',
                            lineHeight: 1.7,
                            color: '#6B6B6B',
                            margin: 0,
                        }}
                    >
                        {paragraph}
                    </p>
                ))}
            </div>

            <div style={{flex: '1 1 320px', maxWidth: '380px'}}>
                <StatusCard status={aboutData.status} />
            </div>
        </div>
    );
}
