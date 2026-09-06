import {theme} from '@/styles/theme';
import {ProjectsButton, ContactButton} from '@/components/ui/Buttons';
import Subtitle from '@/components/common/Subtitle';
import Title from '@/components/common/Title';
import Text from '@/components/common/Text';

export default function Hero() {
    return (
        <section
            id="home"
            style={{
                display: 'flex',
                justifyContent: 'center',
                padding: theme.layout.heroPadding,
                backgroundColor: theme.colors.background,
                borderBottom: `1px solid ${theme.colors.border}`,
            }}
        >
            <div
                style={{
                    width: '100%',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: theme.spacing[8],
                }}
            >
                <div
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: theme.spacing[2],
                        padding: `${theme.spacing[1]} ${theme.spacing[3]}`,
                        color: theme.colors.status.success,
                        backgroundColor: theme.colors.status.successSoft,
                        borderRadius: theme.borderRadius.full,
                        fontFamily: theme.typography.fontFamily.mono,
                        fontSize: theme.typography.fontSize.xs,
                        fontWeight: theme.typography.fontWeight.bold,
                        lineHeight: theme.typography.lineHeight.normal,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                    }}
                >
                    <span
                        aria-hidden="true"
                        style={{
                            width: '8px',
                            height: '8px',
                            flexShrink: 0,
                            backgroundColor: theme.colors.status.success,
                            borderRadius: theme.borderRadius.full,
                        }}
                    />
                    Projelere açık
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: theme.spacing[3],
                    }}
                >
                    <Subtitle>Yazılım Mühendisi</Subtitle>

                    <Title as="h1" variant="hero">
                        <span
                            style={{
                                color: theme.colors.text.primary,
                            }}
                        >
                            Merhaba,
                        </span>

                        <span
                            style={{
                                color: theme.colors.action.link,
                            }}
                        >
                            {' '}
                            ben Eren.
                        </span>
                    </Title>
                </div>

                <Text
                    style={{
                        maxWidth: theme.layout.readableWidth,
                    }}
                >
                    Ölçeklenebilir uygulamalar ve temiz arayüzler
                    geliştiriyorum. Backend ve frontend arasında rahat hareket
                    eden, çözüm odaklı bir yazılımcıyım.
                </Text>

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
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
