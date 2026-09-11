import {useState, useEffect} from 'react';
import Icon from '@/components/ui/Icon';
import {footerData} from '@/data/footer';

export default function Footer({onContactOpen}) {
    const currentYear = new Date().getFullYear();
    const activeSocials = footerData.socials.filter((social) => social.href);

    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 1200
    );
    const [hoveredAction, setHoveredAction] = useState(null);
    const [isContactHovered, setIsContactHovered] = useState(false);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isTablet = windowWidth <= 760;
    const isMobile = windowWidth <= 480;

    return (
        <footer
            style={{
                color: '#1a1a1a',
                backgroundColor: '#ffffff',
                borderTop: '1px solid #e5e2da',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    maxWidth: '1280px',
                    margin: '0 auto',
                    padding: isTablet ? '56px 24px 24px' : '72px 32px 28px',
                    flexDirection: 'column',
                    gap: isTablet ? '32px' : '40px',
                    boxSizing: 'border-box',
                }}
            >
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: isTablet
                            ? '1fr'
                            : 'minmax(0, 1fr) minmax(240px, 340px)',
                        alignItems: 'start',
                        gap: isTablet ? '40px' : '80px',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            maxWidth: '560px',
                            flexDirection: 'column',
                            gap: isTablet ? '24px' : '32px',
                        }}
                    >
                        <div>
                            <h2
                                style={{
                                    margin: 0,
                                    color: '#1a1a1a',
                                    fontFamily:
                                        "Georgia, 'Times New Roman', serif",
                                    fontSize: '28px',
                                    fontWeight: 700,
                                    lineHeight: 1.2,
                                    letterSpacing: '-0.02em',
                                }}
                            >
                                {footerData.name}
                            </h2>

                            <p
                                style={{
                                    margin: '6px 0 0',
                                    color: '#6b6b6b',
                                    fontSize: '14px',
                                    lineHeight: 1.6,
                                }}
                            >
                                {footerData.role}
                            </p>
                        </div>

                        <p
                            style={{
                                maxWidth: '480px',
                                margin: 0,
                                color: '#3f3f3f',
                                fontFamily: "Georgia, 'Times New Roman', serif",
                                fontSize: isMobile ? '19px' : '21px',
                                fontStyle: 'italic',
                                lineHeight: 1.55,
                            }}
                        >
                            {footerData.tagline}
                        </p>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '14px',
                        }}
                    >
                        <h3
                            style={{
                                margin: '0 0 6px',
                                color: '#1a1a1a',
                                fontSize: '13px',
                                fontWeight: 700,
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                            }}
                        >
                            Hızlı iletişim
                        </h3>

                        {footerData.contact.email ? (
                            <a
                                href={`mailto:${footerData.contact.email}`}
                                onMouseEnter={() => setIsContactHovered(true)}
                                onMouseLeave={() => setIsContactHovered(false)}
                                style={{
                                    display: 'flex',
                                    width: 'fit-content',
                                    padding: 0,
                                    color: isContactHovered
                                        ? '#1a1a1a'
                                        : '#5a5a5a',
                                    background: 'none',
                                    border: 'none',
                                    alignItems: 'center',
                                    gap: '10px',
                                    fontSize: '14px',
                                    lineHeight: 1.5,
                                    textDecoration: 'none',
                                    transition: 'color 160ms ease',
                                }}
                            >
                                <span
                                    style={{
                                        display: 'inline-flex',
                                        color: '#1e7b34',
                                        flexShrink: 0,
                                    }}
                                >
                                    <Icon name="mail" size={18} />
                                </span>
                                <span>{footerData.contact.email}</span>
                            </a>
                        ) : (
                            <button
                                type="button"
                                onClick={onContactOpen}
                                onMouseEnter={() => setIsContactHovered(true)}
                                onMouseLeave={() => setIsContactHovered(false)}
                                style={{
                                    display: 'flex',
                                    width: 'fit-content',
                                    padding: 0,
                                    color: isContactHovered
                                        ? '#1a1a1a'
                                        : '#5a5a5a',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    alignItems: 'center',
                                    gap: '10px',
                                    fontSize: '14px',
                                    lineHeight: 1.5,
                                    transition: 'color 160ms ease',
                                }}
                            >
                                <span
                                    style={{
                                        display: 'inline-flex',
                                        color: '#1e7b34',
                                        flexShrink: 0,
                                    }}
                                >
                                    <Icon name="mail" size={18} />
                                </span>
                                <span>İletişim formunu aç</span>
                            </button>
                        )}

                        <div
                            style={{
                                display: 'flex',
                                width: 'fit-content',
                                padding: 0,
                                color: '#5a5a5a',
                                alignItems: 'center',
                                gap: '10px',
                                fontSize: '14px',
                                lineHeight: 1.5,
                            }}
                        >
                            <span
                                style={{
                                    display: 'inline-flex',
                                    color: '#1e7b34',
                                    flexShrink: 0,
                                }}
                            >
                                <Icon name="location" size={18} />
                            </span>
                            <span>{footerData.contact.location}</span>
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        display: 'flex',
                        padding: '24px 0',
                        borderTop: '1px solid #dedbd2',
                        borderBottom: '1px solid #dedbd2',
                        alignItems: isTablet ? 'stretch' : 'center',
                        justifyContent: 'space-between',
                        flexDirection: isTablet ? 'column' : 'row',
                        gap: '24px',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: isMobile ? 'stretch' : 'center',
                            flexDirection: isMobile ? 'column' : 'row',
                            gap: '10px',
                            flexWrap: 'wrap',
                            width: isTablet ? '100%' : 'auto',
                        }}
                    >
                        {activeSocials.map((social) => {
                            const isHovered = hoveredAction === social.label;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onMouseEnter={() =>
                                        setHoveredAction(social.label)
                                    }
                                    onMouseLeave={() => setHoveredAction(null)}
                                    style={{
                                        display: 'inline-flex',
                                        minHeight: '40px',
                                        padding: '9px 14px',
                                        color: isHovered
                                            ? '#ffffff'
                                            : '#3f3f3f',
                                        backgroundColor: isHovered
                                            ? '#1a1a1a'
                                            : 'transparent',
                                        border: `1px solid ${isHovered ? '#1a1a1a' : '#d8d5cc'}`,
                                        borderRadius: '8px',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '8px',
                                        fontSize: '13px',
                                        fontWeight: 600,
                                        textDecoration: 'none',
                                        width: isMobile ? '100%' : 'auto',
                                        transform: isHovered
                                            ? 'translateY(-1px)'
                                            : 'none',
                                        transition: 'all 160ms ease',
                                        boxSizing: 'border-box',
                                    }}
                                >
                                    <Icon name={social.icon} size={17} />
                                    <span>{social.label}</span>
                                </a>
                            );
                        })}
                    </div>

                    {footerData.cvUrl && (
                        <a
                            href={footerData.cvUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => setHoveredAction('cv')}
                            onMouseLeave={() => setHoveredAction(null)}
                            style={{
                                display: 'inline-flex',
                                minHeight: '40px',
                                padding: '9px 14px',
                                color:
                                    hoveredAction === 'cv'
                                        ? '#ffffff'
                                        : '#3f3f3f',
                                backgroundColor:
                                    hoveredAction === 'cv'
                                        ? '#1a1a1a'
                                        : 'transparent',
                                border: `1px solid ${hoveredAction === 'cv' ? '#1a1a1a' : '#d8d5cc'}`,
                                borderRadius: '8px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                fontSize: '13px',
                                fontWeight: 600,
                                textDecoration: 'none',
                                flexShrink: 0,
                                width: isMobile
                                    ? '100%'
                                    : isTablet
                                      ? 'fit-content'
                                      : 'auto',
                                transform:
                                    hoveredAction === 'cv'
                                        ? 'translateY(-1px)'
                                        : 'none',
                                transition: 'all 160ms ease',
                                boxSizing: 'border-box',
                            }}
                        >
                            <Icon name="download" size={17} />
                            <span>CV İndir</span>
                        </a>
                    )}
                </div>

                <div
                    style={{
                        display: 'flex',
                        color: '#77736a',
                        alignItems: isMobile ? 'flex-start' : 'center',
                        flexDirection: isMobile ? 'column' : 'row',
                        gap: isMobile ? '4px' : '8px',
                        fontSize: '12px',
                        lineHeight: 1.5,
                    }}
                >
                    <span>
                        © {currentYear} {footerData.name}
                    </span>

                    {!isMobile && <span style={{color: '#aaa59a'}}>•</span>}

                    <span>Tüm hakları saklıdır.</span>
                </div>
            </div>
        </footer>
    );
}
