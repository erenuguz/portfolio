import { footerData } from '@/data/footer';

const CDN_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

// devicon'da gerçekten var olan versiyonlar (manifestten doğrulandı).
const SOCIAL_ICON_SLUGS = {
    github: 'github/github-original',
    linkedin: 'linkedin/linkedin-original',
    twitter: 'twitter/twitter-original',
    x: 'twitter/twitter-original',
};

function MailIcon() {
    // E-posta bir marka değil, jenerik bir simge — devicon'da karşılığı yok.
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" stroke="#6B6B6B" strokeWidth="1.6" />
            <path d="M3.5 6L12 13L20.5 6" stroke="#6B6B6B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function SocialLink({ platform, href }) {
    const slug = SOCIAL_ICON_SLUGS[platform?.toLowerCase()];

    return (
        <a
            href={href}
            aria-label={platform}
            target="_blank"
            rel="noreferrer"
            className="ft-social"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
        >
            {platform?.toLowerCase() === 'mail' || platform?.toLowerCase() === 'email' ? (
                <MailIcon />
            ) : slug ? (
                <img src={`${CDN_BASE}/${slug}.svg`} alt={platform} width={18} height={18} loading="lazy" />
            ) : null}
        </a>
    );
}

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#FFFFFF' }}>
            <style>{`
                .ft-container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 72px 64px 32px;
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                }
                .ft-top {
                    display: flex;
                    justify-content: space-between;
                    gap: 48px;
                    flex-wrap: wrap;
                }
                .ft-columns {
                    display: flex;
                    gap: 56px;
                    flex-wrap: wrap;
                }
                .ft-social {
                    color: #6B6B6B;
                    opacity: 0.7;
                    transition: opacity 0.15s ease;
                }
                .ft-social:hover {
                    opacity: 1;
                }
                @media (max-width: 640px) {
                    .ft-container { padding: 56px 24px 24px; gap: 32px; }
                    .ft-top { flex-direction: column; gap: 32px; }
                    .ft-bottom { flex-direction: column; align-items: flex-start !important; gap: 16px !important; }
                }
            `}</style>

            <div className="ft-container">
                <div className="ft-top">
                    {/* Marka */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxWidth: '280px' }}>
                        <span
                            style={{
                                fontFamily: 'Georgia, "Times New Roman", serif',
                                fontSize: '20px',
                                fontWeight: 700,
                                color: '#1A1A1A',
                            }}
                        >
                            Eren Uğuz
                        </span>
                        <span
                            style={{
                                fontFamily: 'system-ui, sans-serif',
                                fontSize: '13px',
                                lineHeight: 1.6,
                                color: '#6B6B6B',
                            }}
                        >
                            Full-Stack Yazılım Mühendisi
                        </span>
                    </div>

                    {/* Link sütunları */}
                    <div className="ft-columns">
                        {footerData.columns.map((column) => (
                            <div
                                key={column.title}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '12px',
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: 'system-ui, sans-serif',
                                        fontSize: '13px',
                                        fontWeight: 600,
                                        color: '#1A1A1A',
                                    }}
                                >
                                    {column.title}
                                </span>

                                {column.links.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        style={{
                                            fontFamily: 'system-ui, sans-serif',
                                            fontSize: '13px',
                                            color: '#6B6B6B',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Alt bar: telif hakkı + sosyal ikonlar */}
                <div
                    className="ft-bottom"
                    style={{
                        borderTop: '1px solid #E5E2DA',
                        paddingTop: '24px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '16px',
                    }}
                >
                    <span
                        style={{
                            fontFamily: 'system-ui, sans-serif',
                            fontSize: '12px',
                            color: '#6B6B6B',
                        }}
                    >
                        {footerData.copyright}
                    </span>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        {footerData.socials?.map((social) => (
                            <SocialLink key={social.platform} platform={social.platform} href={social.href} />
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}