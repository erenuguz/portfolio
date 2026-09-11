import {useState, useEffect} from 'react';
import Section from '@/components/common/Section';
import Button from '@/components/ui/Button';
import HeroTechCloud from './HeroTechCloud';

export default function Hero({onContactOpen}) {
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 1200
    );
    const [isBtnHovered, setIsBtnHovered] = useState(false);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isTablet = windowWidth <= 900;
    const isMobile = windowWidth <= 640;

    return (
        <Section
            id="home"
            width="wide"
            style={{
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#FAF9F6',
                boxSizing: 'border-box',
            }}
        >
            {/* Arka plan yeşil radial-gradient dokusu */}
            <div
                style={{
                    position: 'absolute',
                    top: '-10%',
                    left: '40%',
                    width: '80vw',
                    height: '80vw',
                    maxWidth: '800px',
                    maxHeight: '800px',
                    background:
                        'radial-gradient(circle at 60% 40%, rgba(61, 220, 132, 0.06) 0%, rgba(250, 249, 246, 0) 65%), radial-gradient(circle at 20% 60%, rgba(26, 26, 26, 0.03) 0%, rgba(250, 249, 246, 0) 60%)',
                    borderRadius: '50%',
                    zIndex: 0,
                    pointerEvents: 'none',
                }}
            />

            <div
                style={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    alignItems: isTablet ? 'flex-start' : 'center',
                    justifyContent: 'space-between',
                    flexDirection: isTablet ? 'column' : 'row',
                    gap: isTablet ? '40px' : '64px',
                    width: '100%',
                    boxSizing: 'border-box',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        maxWidth: isTablet ? '680px' : '560px',
                        flex: isTablet ? '1 1 auto' : '1 1 500px',
                        alignItems: 'flex-start',
                        flexDirection: 'column',
                        gap: isMobile ? '24px' : '32px',
                    }}
                >
                    {/* Durum Rozeti */}
                    <div
                        style={{
                            display: 'inline-flex',
                            padding: '6px 6px 6px 16px',
                            color: '#1a1a1a',
                            backgroundColor: '#ffffff',
                            border: '1px solid #eaeaea',
                            borderRadius: '999px',
                            alignItems: 'center',
                            gap: '12px',
                            fontSize: '14px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                        }}
                    >
                        <span>Durum</span>
                        <span
                            style={{
                                display: 'inline-flex',
                                padding: '4px 10px',
                                color: '#1e7b34',
                                backgroundColor: '#e6f4ea',
                                borderRadius: '999px',
                                alignItems: 'center',
                                gap: '4px',
                                fontSize: '13px',
                                fontWeight: 600,
                            }}
                        >
                            Projelere Açık
                            <span aria-hidden="true">›</span>
                        </span>
                    </div>

                    <h1
                        style={{
                            margin: 0,
                            color: '#1a1a1a',
                            fontFamily: "Georgia, 'Times New Roman', serif",
                            fontSize: isMobile ? '38px' : '48px',
                            fontWeight: 700,
                            lineHeight: 1.15,
                        }}
                    >
                        Merhaba, ben Eren.
                    </h1>

                    <p
                        style={{
                            margin: 0,
                            color: '#6b6b6b',
                            fontSize: isMobile ? '16px' : '17px',
                            lineHeight: 1.6,
                        }}
                    >
                        Ölçeklenebilir uygulamalar ve temiz arayüzler
                        geliştiriyorum.{' '}
                        <strong style={{color: '#1a1a1a'}}>Backend</strong> ve{' '}
                        <strong style={{color: '#1a1a1a'}}>frontend</strong>{' '}
                        arasında rahat hareket eden, çözüm odaklı bir
                        yazılımcıyım.
                    </p>

                    <div
                        style={{
                            display: 'flex',
                            alignItems: isMobile ? 'stretch' : 'center',
                            flexDirection: isMobile ? 'column' : 'row',
                            gap: isMobile ? '12px' : '20px',
                            flexWrap: 'wrap',
                            width: isMobile ? '100%' : 'auto',
                        }}
                    >
                        <div style={{width: isMobile ? '100%' : 'auto'}}>
                            <Button
                                href="#projects"
                                size="large"
                                icon="chevronRight"
                                style={{width: isMobile ? '100%' : 'auto'}}
                            >
                                Projelerim
                            </Button>
                        </div>

                        <div style={{width: isMobile ? '100%' : 'auto'}}>
                            <Button
                                variant="secondary"
                                size="large"
                                onClick={onContactOpen}
                                onMouseEnter={() => setIsBtnHovered(true)}
                                onMouseLeave={() => setIsBtnHovered(false)}
                                style={{
                                    width: isMobile ? '100%' : 'auto',
                                    backgroundColor: isBtnHovered
                                        ? '#F5F5F5'
                                        : 'transparent',
                                    border: `1px solid ${isBtnHovered ? '#D4D4D4' : '#E5E5E5'}`,
                                    color: '#1a1a1a',
                                    boxShadow: 'none',
                                    transition: 'all 0.2s ease',
                                }}
                            >
                                İletişime geç
                            </Button>
                        </div>
                    </div>
                </div>

                <HeroTechCloud />
            </div>
        </Section>
    );
}
