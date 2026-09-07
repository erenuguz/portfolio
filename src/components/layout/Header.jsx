export default function Header() {
    const styles = {
        header: {
            backgroundColor: '#FFFFFF',
            borderBottom: '1px solid #E5E2DA',
            position: 'sticky',
            top: 0,
            zIndex: 50,
        },
        container: {
            maxWidth: '1280px',
            width: '100%',
            margin: '0 auto',
            boxSizing: 'border-box',
            padding: '16px 32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        logo: {
            fontSize: '28px',
            fontWeight: 700,
            color: '#1A1A1A',
            textDecoration: 'none',
            letterSpacing: '-0.025em',
            fontFamily: 'Georgia, "Times New Roman", serif',
        },
        nav: {
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            fontFamily: 'system-ui, -apple-system, sans-serif',
        },
        link: {
            fontSize: '13px',
            fontWeight: 600,
            color: '#4A4A4A',
            textDecoration: 'none',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
        },
        ctaButton: {
            fontSize: '13px',
            fontWeight: 600,
            color: '#FFFFFF',
            backgroundColor: '#1A1A1A',
            padding: '10px 20px',
            borderRadius: '6px',
            textDecoration: 'none',
            letterSpacing: '0.04em',
        },
    };

    const navItems = [
        {label: 'Hakkımda', href: '#about'},
        {label: 'Yetenekler', href: '#skills'},
        {label: 'Projeler', href: '#projects'},
    ];

    return (
        <header style={styles.header}>
            <div style={styles.container}>
                {/* Logo Bölümü */}
                <a href="#home" style={styles.logo}>
                    Eren Uğuz
                </a>

                {/* Navigasyon Linkleri */}
                <ul style={styles.nav}>
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className="portfolio-link"
                                style={styles.link}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="#contact" style={styles.ctaButton}>
                            İletişim
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
