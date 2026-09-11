import { useState, useEffect } from 'react';
import Section from '@/components/common/Section';
import Button from '@/components/ui/Button';

export default function ClosingCTA({ onContactOpen }) {
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 1200
    );
    const [isGhostHovered, setIsGhostHovered] = useState(false);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isTablet = windowWidth <= 900;
    const isMobile = windowWidth <= 640;

    return (
        <Section
            width="content"
            tone="dark"
            style={{
                background: 'radial-gradient(circle at 20% 50%, #151e18 0%, #0a0a0a 100%)',
                backgroundColor: '#0a0a0a',
                padding: isMobile ? '64px 0' : '96px 0',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                boxSizing: 'border-box'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: isTablet ? 'flex-start' : 'center',
                    justifyContent: 'space-between',
                    flexDirection: isTablet ? 'column' : 'row',
                    gap: isTablet ? '32px' : '48px',
                    width: '100%',
                    boxSizing: 'border-box'
                }}
            >
                <h2
                    style={{
                        maxWidth: '600px',
                        margin: 0,
                        color: '#ffffff',
                        fontFamily: "Georgia, 'Times New Roman', serif",
                        fontSize: isMobile ? '32px' : '42px',
                        fontWeight: 700,
                        lineHeight: 1.2,
                        letterSpacing: '-0.01em'
                    }}
                >
                    Birlikte bir şeyler inşa edelim.
                </h2>

                <div
                    style={{
                        display: 'flex',
                        alignItems: isMobile ? 'stretch' : 'center',
                        flexDirection: isMobile ? 'column' : 'row',
                        gap: isMobile ? '12px' : '16px',
                        flexWrap: 'wrap',
                        flexShrink: 0,
                        width: isMobile ? '100%' : 'auto'
                    }}
                >
                    <div style={{ width: isMobile ? '100%' : 'auto' }}>
                        <Button
                            variant="light"
                            size="large"
                            icon="chevronRight"
                            onClick={onContactOpen}
                            style={{
                                width: isMobile ? '100%' : 'auto',
                                justifyContent: 'center'
                            }}
                        >
                            İletişime geç
                        </Button>
                    </div>

                    <div style={{ width: isMobile ? '100%' : 'auto' }}>
                        <Button
                            href="https://github.com/erenuguz"
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="secondary"
                            size="large"
                            onMouseEnter={() => setIsGhostHovered(true)}
                            onMouseLeave={() => setIsGhostHovered(false)}
                            style={{
                                width: isMobile ? '100%' : 'auto',
                                justifyContent: 'center',
                                backgroundColor: isGhostHovered
                                    ? 'rgba(255, 255, 255, 0.08)'
                                    : 'transparent',
                                border: `1px solid ${
                                    isGhostHovered
                                        ? 'rgba(255, 255, 255, 0.4)'
                                        : 'rgba(255, 255, 255, 0.25)'
                                }`,
                                color: '#ffffff',
                                boxShadow: 'none',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            GitHub'a git
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
}