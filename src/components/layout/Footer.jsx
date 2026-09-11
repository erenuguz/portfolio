import Icon from '@/components/ui/Icon';
import {footerData} from '@/data/footer';

import './Footer.css';

export default function Footer({onContactOpen}) {
    const currentYear = new Date().getFullYear();

    const activeSocials = footerData.socials.filter((social) => social.href);

    return (
        <footer className="site-footer">
            <div className="site-footer__container">
                <div className="site-footer__main">
                    <div className="site-footer__identity">
                        <div>
                            <h2 className="site-footer__name">
                                {footerData.name}
                            </h2>

                            <p className="site-footer__role">
                                {footerData.role}
                            </p>
                        </div>

                        <p className="site-footer__tagline">
                            {footerData.tagline}
                        </p>
                    </div>

                    <div className="site-footer__contact">
                        <h3 className="site-footer__contact-title">
                            Hızlı iletişim
                        </h3>

                        {footerData.contact.email ? (
                            <a
                                href={`mailto:${footerData.contact.email}`}
                                className="site-footer__contact-item"
                            >
                                <Icon name="mail" size={18} />

                                <span>{footerData.contact.email}</span>
                            </a>
                        ) : (
                            <button
                                type="button"
                                className="site-footer__contact-item site-footer__contact-button"
                                onClick={onContactOpen}
                            >
                                <Icon name="mail" size={18} />
                                <span>İletişim formunu aç</span>
                            </button>
                        )}

                        <div className="site-footer__contact-item">
                            <Icon name="location" size={18} />

                            <span>{footerData.contact.location}</span>
                        </div>
                    </div>
                </div>

                <div className="site-footer__actions">
                    <div className="site-footer__socials">
                        {activeSocials.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                className="site-footer__action"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon name={social.icon} size={17} />

                                <span>{social.label}</span>
                            </a>
                        ))}
                    </div>

                    {footerData.cvUrl && (
                        <a
                            href={footerData.cvUrl}
                            className="site-footer__action site-footer__cv"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon name="download" size={17} />
                            <span>CV İndir</span>
                        </a>
                    )}
                </div>

                <div className="site-footer__bottom">
                    <span>
                        © {currentYear} {footerData.name}
                    </span>

                    <span className="site-footer__separator">•</span>

                    <span>Tüm hakları saklıdır.</span>
                </div>
            </div>
        </footer>
    );
}
