import {theme} from '@/styles/theme';

const socialLinks = [
    {
        label: 'GitHub',
        href: 'https://github.com/erenuguz',
        external: true,
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/erenuguz',
        external: true,
    },
    {
        label: 'E-posta',
        href: 'mailto:erenn.uguz@gmail.com',
        external: false,
    },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const styles = {
        footer: {
            backgroundColor: theme.colors.footer,
            borderTop: `1px solid ${theme.colors.border}`,
            padding: `${theme.spacing[8]} ${theme.spacing[8]}`,
        },
        container: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        copyright: {
            fontSize: theme.typography.fontSize.xs,
            color: theme.colors.text.muted,
            fontFamily: theme.typography.fontFamily.mono,
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
            fontWeight: theme.typography.fontWeight.medium,
            color: theme.colors.text.secondary,
            textDecoration: 'none',
            transition: theme.transitions.fast,
            cursor: 'pointer',
        },
    };

    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.copyright}>
                    © {currentYear} Eren Uğuz. Tüm hakları saklıdır.
                </div>

                <nav aria-label="Sosyal medya bağlantıları">
                    <ul style={styles.nav}>
                        {socialLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="portfolio-link"
                                    style={styles.link}
                                    target={
                                        link.external ? '_blank' : undefined
                                    }
                                    rel={
                                        link.external
                                            ? 'noopener noreferrer'
                                            : undefined
                                    }
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </footer>
    );
}
