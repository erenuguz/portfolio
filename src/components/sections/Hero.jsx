import {theme} from '@/styles/theme';
import {ProjectsButton, ContactButton} from '@/components/ui/Buttons';
import Subtitle from '@/components/common/Subtitle';
import Title from '@/components/common/Title';
import Text from '@/components/common/Text';

export default function Hero() {
    
    const statusBadgeComponent = (
        <div
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: theme.spacing[2],
                padding: `${theme.spacing[1]} ${theme.spacing[3]}`,
                fontSize: theme.typography.fontSize.sm,
                fontWeight: theme.typography.fontWeight.medium,
                color: theme.colors.text.secondary,
                marginBottom: theme.spacing[8],
            }}
        >
            <span
                style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#10b981',
                    borderRadius: theme.borderRadius.full,
                    boxShadow: '0 0 0 2px rgba(16, 185, 129, 0.2)',
                }}
            ></span>
            Projelere açık
        </div>
    );

    return (
        <section
            style={{
                padding: `${theme.spacing[12]} ${theme.spacing[8]}`,
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: theme.colors.surfaceAlt,
            }}
            id="home"
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: theme.layout.contentMaxWidth,
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                }}
            >
                {/* Durum Notu */}
                {statusBadgeComponent}

                {/* Başlıklar */}
                <Subtitle>YAZILIM MÜHENDİSİ</Subtitle>

                <Title>
                    <span>Merhaba,</span>
                    <span> ben Eren.</span>
                </Title>

                {/* Açıklama */}
                <Text>
                    Ölçeklenebilir uygulamalar ve temiz arayüzler
                    geliştiriyorum. Backend ve frontend arasında rahat hareket
                    eden, çözüm odaklı bir yazılımcıyım.
                </Text>

                {/* Butonlar */}
                <div
                    style={{
                        display: 'flex',
                        gap: theme.spacing[4],
                        flexWrap: 'wrap',
                    }}
                >
                    <ProjectsButton />
                    <ContactButton />
                </div>
            </div>
        </section>
    );
}
