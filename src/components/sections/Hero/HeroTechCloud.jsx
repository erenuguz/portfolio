import {useState, useEffect} from 'react';
import Icon from '@/components/ui/Icon';
import {getTechnology, heroTechnologies} from '@/data/technologies';

const ORBIT_CONFIGS = {
    // Merkez (80px)
    android: {
        top: '50%',
        left: '50%',
        width: 80,
        height: 80,
        color: '#3ddc84',
        delay: '0ms',
        duration: '5s',
        zIndex: 3,
        boxShadow: '0 15px 35px rgba(61, 220, 132, 0.2)',
    },
    // İç Yörünge (64px / Yarıçap 110px)
    react: {
        top: '50%',
        left: 'calc(50% + 110px)',
        width: 64,
        height: 64,
        color: '#61dafb',
        delay: '400ms',
        duration: '4s',
        zIndex: 2,
        boxShadow: '0 10px 25px rgba(97, 218, 251, 0.15)',
    },
    javascript: {
        top: 'calc(50% + 95px)',
        left: 'calc(50% - 55px)',
        width: 64,
        height: 64,
        color: '#f7df1e',
        delay: '800ms',
        duration: '4.2s',
        zIndex: 2,
        boxShadow: 'none',
    },
    python: {
        top: 'calc(50% - 95px)',
        left: 'calc(50% - 55px)',
        width: 64,
        height: 64,
        color: '#387eb8',
        delay: '1200ms',
        duration: '5.5s',
        zIndex: 2,
        boxShadow: 'none',
    },
    // Dış Yörünge (48px / Yarıçap 190px)
    git: {
        top: 'calc(50% + 95px)',
        left: 'calc(50% + 164px)',
        width: 48,
        height: 48,
        color: '#f1502f',
        delay: '200ms',
        duration: '3.5s',
        zIndex: 2,
        boxShadow: 'none',
    },
    sql: {
        top: 'calc(50% + 190px)',
        left: '50%',
        width: 48,
        height: 48,
        color: '#4479a1',
        delay: '600ms',
        duration: '4.5s',
        zIndex: 2,
        boxShadow: 'none',
    },
    firebase: {
        top: 'calc(50% + 95px)',
        left: 'calc(50% - 164px)',
        width: 48,
        height: 48,
        color: '#ffa000',
        delay: '1000ms',
        duration: '3.8s',
        zIndex: 2,
        boxShadow: 'none',
    },
    figma: {
        top: 'calc(50% - 95px)',
        left: 'calc(50% - 164px)',
        width: 48,
        height: 48,
        color: '#f24e1e',
        delay: '1400ms',
        duration: '4.8s',
        zIndex: 2,
        boxShadow: 'none',
    },
    node: {
        top: 'calc(50% - 190px)',
        left: '50%',
        width: 48,
        height: 48,
        color: '#339933',
        delay: '1800ms',
        duration: '4s',
        zIndex: 2,
        boxShadow: 'none',
    },
    java: {
        top: 'calc(50% - 95px)',
        left: 'calc(50% + 164px)',
        width: 48,
        height: 48,
        color: '#e76f00',
        delay: '2200ms',
        duration: '3.5s',
        zIndex: 2,
        boxShadow: 'none',
    },
};

export default function HeroTechCloud() {
    const [hoveredId, setHoveredId] = useState(null);
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 1200
    );

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isTablet = windowWidth <= 900;
    const isMobile = windowWidth <= 640;

    return (
        <>
            <style>{`
                @keyframes hero-float {
                    0%, 100% { translate: 0 0; }
                    50% { translate: 0 -12px; }
                }
            `}</style>

            <ul
                aria-label="Kullandığım teknolojiler"
                style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: isTablet ? '600px' : '520px',
                    height: isMobile ? '440px' : isTablet ? '480px' : '520px',
                    margin: 0,
                    padding: 0,
                    flex: isTablet ? '1 1 auto' : '1 1 400px',
                    alignSelf: isTablet ? 'center' : 'auto',
                    listStyle: 'none',
                    transform: isMobile ? 'scale(0.85)' : 'none',
                    transformOrigin: 'center',
                    boxSizing: 'border-box',
                }}
            >
                {/* İç Yörünge Çizgisi */}
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '220px',
                        height: '220px',
                        transform: 'translate(-50%, -50%)',
                        border: '1px dashed rgba(26, 26, 26, 0.08)',
                        borderRadius: '50%',
                        zIndex: 0,
                        pointerEvents: 'none',
                    }}
                />

                {/* Dış Yörünge Çizgisi */}
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '380px',
                        height: '380px',
                        transform: 'translate(-50%, -50%)',
                        border: '1px dashed rgba(26, 26, 26, 0.08)',
                        borderRadius: '50%',
                        zIndex: 0,
                        pointerEvents: 'none',
                    }}
                />

                {heroTechnologies.map((item) => {
                    const technology = getTechnology(item.technologyId);
                    if (!technology) return null;

                    const config = ORBIT_CONFIGS[item.position] || {
                        top: '50%',
                        left: '50%',
                        width: 50,
                        height: 50,
                        color: '#1a1a1a',
                        delay: '0ms',
                        duration: '4s',
                        zIndex: 2,
                        boxShadow: 'none',
                    };

                    const isHovered = hoveredId === item.technologyId;

                    return (
                        <li
                            key={item.technologyId}
                            title={technology.name}
                            onMouseEnter={() => setHoveredId(item.technologyId)}
                            onMouseLeave={() => setHoveredId(null)}
                            style={{
                                position: 'absolute',
                                top: config.top,
                                left: config.left,
                                width: `${config.width}px`,
                                height: `${config.height}px`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: config.color,
                                backgroundColor: '#ffffff',
                                border: '1px solid #e5e2da',
                                borderRadius: '50%',
                                zIndex: isHovered ? 20 : config.zIndex,
                                transform: `translate(-50%, -50%) ${isHovered ? 'scale(1.12)' : 'scale(1)'}`,
                                boxShadow: isHovered
                                    ? '0 12px 28px rgba(0, 0, 0, 0.12)'
                                    : config.boxShadow,
                                animation: 'hero-float ease-in-out infinite',
                                animationDuration: config.duration,
                                animationDelay: config.delay,
                                transition:
                                    'transform 180ms ease, box-shadow 180ms ease',
                                cursor: 'default',
                            }}
                        >
                            <Icon
                                name={technology.icon}
                                size={item.iconSize}
                                title={technology.name}
                            />
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
