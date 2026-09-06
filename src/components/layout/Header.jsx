import {theme} from '@/styles/theme';

export default function Header() {
    const styles = {
        header: {
            backgroundColor: theme.colors.header,
            borderBottom: `1px solid ${theme.colors.border}`,
            position: 'sticky',
            top: 0,
            zIndex: 50,
        },
        container: {
            width: '100%',

            margin: '0 auto',
            boxSizing: 'border-box',
            padding: `${theme.spacing[2]} ${theme.spacing[8]}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        logo: {
            fontSize: theme.typography.fontSize['4xl'],
            fontWeight: theme.typography.fontWeight.bold,
            color: theme.colors.text.primary,
            textDecoration: 'none',
            letterSpacing: '-0.025em',
            fontFamily: theme.typography.fontFamily.heading,
        },
        nav: {
            display: 'flex',
            gap: theme.spacing[6],
            listStyle: 'none',
            margin: 0,
            padding: 0,
            fontFamily: theme.typography.fontFamily.sans,
        },
        link: {
            fontSize: theme.typography.fontSize.sm,
            fontWeight: theme.typography.fontWeight.semibold,
            textDecoration: 'none',
            letterSpacing: '0.16em',
        },
    };

    const navItems = [
        {label: 'Hakkımda', href: '#about'},
        {label: 'Yetenekler', href: '#skills'},
        {label: 'Projeler', href: '#projects'},
        {label: 'İletişim', href: '#contact'},
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
                </ul>
            </div>
        </header>
    );
}
