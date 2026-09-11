import {useState, useEffect} from 'react';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import {navigationLinks} from '@/data/navigation';

export default function Header({onContactOpen}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 760);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function closeMenu() {
        setIsMenuOpen(false);
    }

    function toggleMenu() {
        setIsMenuOpen((currentValue) => !currentValue);
    }

    function handleContactClick() {
        closeMenu();
        onContactOpen();
    }

    return (
        <header
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 50,
                backgroundColor: 'rgba(255, 255, 255, 0.96)',
                borderBottom: '1px solid #e5e2da',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
            }}
        >
            <div
                style={{
                    position: 'relative',
                    display: 'flex',
                    width: '100%',
                    maxWidth: '1280px',
                    minHeight: isMobile ? '64px' : '72px',
                    margin: '0 auto',
                    padding: isMobile ? '10px 24px' : '14px 32px',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '32px',
                    boxSizing: 'border-box',
                }}
            >
                <a
                    href="#home"
                    onClick={closeMenu}
                    style={{
                        flexShrink: 0,
                        color: '#1a1a1a',
                        fontFamily: "Georgia, 'Times New Roman', serif",
                        fontSize: isMobile ? '24px' : '28px',
                        fontWeight: 700,
                        letterSpacing: '-0.025em',
                        textDecoration: 'none',
                    }}
                >
                    Eren Uğuz
                </a>

                {/* Mobil Hamburger Butonu */}
                <button
                    type="button"
                    aria-label={isMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
                    aria-expanded={isMenuOpen}
                    aria-controls="main-navigation"
                    onClick={toggleMenu}
                    style={{
                        display: isMobile ? 'inline-flex' : 'none',
                        width: '42px',
                        height: '42px',
                        padding: 0,
                        color: '#1a1a1a',
                        backgroundColor: '#ffffff',
                        border: '1px solid #e5e2da',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Icon name={isMenuOpen ? 'close' : 'menu'} size={22} />
                </button>

                {/* Menü / Navigasyon */}
                <nav
                    id="main-navigation"
                    aria-label="Ana navigasyon"
                    style={{
                        display: isMobile
                            ? isMenuOpen
                                ? 'flex'
                                : 'none'
                            : 'flex',
                        alignItems: isMobile ? 'stretch' : 'center',
                        flexDirection: isMobile ? 'column' : 'row',
                        gap: isMobile ? '20px' : '32px',
                        ...(isMobile
                            ? {
                                  position: 'absolute',
                                  top: 'calc(100% + 1px)',
                                  right: '24px',
                                  left: '24px',
                                  padding: '20px',
                                  backgroundColor: '#ffffff',
                                  border: '1px solid #e5e2da',
                                  borderRadius: '12px',
                                  boxShadow: '0 14px 36px rgba(0, 0, 0, 0.1)',
                              }
                            : {}),
                    }}
                >
                    <ul
                        style={{
                            display: 'flex',
                            alignItems: isMobile ? 'stretch' : 'center',
                            flexDirection: isMobile ? 'column' : 'row',
                            gap: isMobile ? '4px' : '32px',
                            margin: 0,
                            padding: 0,
                            listStyle: 'none',
                        }}
                    >
                        {navigationLinks.map((item) => {
                            const isHovered = hoveredLink === item.href;
                            return (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        onClick={closeMenu}
                                        onMouseEnter={() =>
                                            setHoveredLink(item.href)
                                        }
                                        onMouseLeave={() =>
                                            setHoveredLink(null)
                                        }
                                        style={{
                                            display: isMobile
                                                ? 'block'
                                                : 'inline-block',
                                            padding: isMobile
                                                ? '12px 4px'
                                                : '0',
                                            color: isHovered
                                                ? '#1a1a1a'
                                                : '#4a4a4a',
                                            fontSize: '13px',
                                            fontWeight: 600,
                                            letterSpacing: '0.12em',
                                            textDecoration: 'none',
                                            textTransform: 'uppercase',
                                            transition: 'color 160ms ease',
                                        }}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    <div style={{width: isMobile ? '100%' : 'auto'}}>
                        <Button
                            size="small"
                            onClick={handleContactClick}
                            style={{width: isMobile ? '100%' : 'auto'}}
                        >
                            İletişim
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
