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
            color: theme.colors.text.secondary,
            textDecoration: 'none',
            transition: theme.transitions.fast,
            cursor: 'pointer',
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
                            href="#"
                            style={styles.link}
                            onMouseEnter={(e) =>
                                (e.target.style.color =
                                    theme.colors.text.primary)
                            }
                            onMouseLeave={(e) =>
                                (e.target.style.color =
                                    theme.colors.text.secondary)
                            }
                        >
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            style={styles.link}
                            onMouseEnter={(e) =>
                                (e.target.style.color =
                                    theme.colors.text.primary)
                            }
                            onMouseLeave={(e) =>
                                (e.target.style.color =
                                    theme.colors.text.secondary)
                            }
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            href="mailto:eren@example.com"
                            style={styles.link}
                            onMouseEnter={(e) =>
                                (e.target.style.color =
                                    theme.colors.text.primary)
                            }
                            onMouseLeave={(e) =>
                                (e.target.style.color =
                                    theme.colors.text.secondary)
                            }
                        >
                            E-posta
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
