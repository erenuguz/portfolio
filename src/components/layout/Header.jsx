import {theme} from '@/styles/theme';

export default function Header() {
    const styles = {
        header: {
            backgroundColor: theme.colors.header,
            borderBottom: `1px solid ${theme.colors.border}`,
            position: 'sticky',
            top: 0,
            zIndex: 50,
            fontFamily: theme.typography.fontFamily.sans,
        },
        container: {
            padding: `${theme.spacing[2]} ${theme.spacing[8]}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        logo: {
            fontSize: theme.typography.fontSize.xl,
            fontWeight: theme.typography.fontWeight.bold,
            color: theme.colors.text.primary,
            textDecoration: 'none',
            letterSpacing: '-0.025em',
        },
        nav: {
            display: 'flex',
            gap: theme.spacing[6],
            listStyle: 'none',
        },
        link: {
            fontSize: theme.typography.fontSize.sm,
            fontWeight: theme.typography.fontWeight.medium,
            color: theme.colors.text.secondary,
            textDecoration: 'none',
            transition: theme.transitions.fast,
            cursor: 'pointer',
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
                <a href="#" style={styles.logo}>
                    Eren
                </a>

                {/* Navigasyon Linkleri */}
                <ul style={styles.nav}>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.href}
                                style={styles.link}
                                // Inline stillerde hover için onMouseEnter/Leave kullanılır
                                onMouseEnter={(e) =>
                                    (e.target.style.color =
                                        theme.colors.text.primary)
                                }
                                onMouseLeave={(e) =>
                                    (e.target.style.color =
                                        theme.colors.text.secondary)
                                }
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
