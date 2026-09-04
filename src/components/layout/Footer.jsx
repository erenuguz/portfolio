import {theme} from '@/styles/theme';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const styles = {
        footer: {
            backgroundColor: theme.colors.footer,
            borderTop: `1px solid ${theme.colors.border}`,
            padding: `${theme.spacing[8]} ${theme.spacing[8]}`,
            fontFamily: theme.typography.fontFamily.sans,
        },
        container: {
            width: '100%',
            maxWidth: theme.layout.contentMaxWidth,
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        copyright: {
            fontSize: theme.typography.fontSize.sm,
            color: theme.colors.text.muted,
        },
        nav: {
            display: 'flex',
            gap: theme.spacing[6],
            listStyle: 'none',
            margin: 0,
            padding: 0,
        },
        link: {
            fontSize: theme.typography.fontSize.sm,
            fontWeight: theme.typography.fontWeight.medium,
            textDecoration: 'none',
        },
    };

    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                {/* Sol Taraf: Telif Hakkı */}
                <div style={styles.copyright}>
                    © {currentYear} Eren. Tüm hakları saklıdır.
                </div>

                {/* Sağ Taraf: Sosyal Linkler */}
                <ul style={styles.nav}>
                    <li>
                        <a
                            href="https://github.com/erenuguz"
                            className="portfolio-link"
                            style={styles.link}
                        >
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/erenuguz"
                            className="portfolio-link"
                            style={styles.link}
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            href="mailto:erenn.uguz@gmail.com"
                            className="portfolio-link"
                            style={styles.link}
                        >
                            E-posta
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
