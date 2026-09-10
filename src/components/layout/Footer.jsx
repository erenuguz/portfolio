import Icon from '@/components/ui/Icon';
import {footerData} from '@/data/footer';

import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="site-footer__container">
                <div className="site-footer__top">
                    <div className="site-footer__brand">
                        <span className="site-footer__name">
                            {footerData.name}
                        </span>

                        <span className="site-footer__role">
                            {footerData.role}
                        </span>
                    </div>

                    <div className="site-footer__columns">
                        {/* Dinamik Kolonlar (Örn: Menü, Projeler) */}
                        {footerData.columns.map((column) => (
                            <div
                                key={column.title}
                                className="site-footer__column"
                            >
                                <span className="site-footer__column-title">
                                    {column.title}
                                </span>

                                {column.links.map((link) => (
                                    <a
                                        key={`${column.title}-${link.label}`}
                                        href={link.href}
                                        className="site-footer__link"
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
                                ))}
                            </div>
                        ))}

                        {/* YENİ 4. Kolon: İletişim & Ekstralar */}
                        <div className="site-footer__column">
                            <span className="site-footer__column-title">
                                İletişim
                            </span>
                            <a
                                href="mailto:eren@example.com"
                                className="site-footer__link"
                            >
                                Bana E-posta Gönder
                            </a>
                            <span className="site-footer__link site-footer__link--static">
                                Karaman, Türkiye
                            </span>
                            <a
                                href="/cv.pdf"
                                target="_blank"
                                className="site-footer__link"
                            >
                                Özgeçmiş (CV) İndir
                            </a>
                        </div>
                    </div>
                </div>

                <div className="site-footer__bottom">
                    <span className="site-footer__copyright">
                        © {currentYear} {footerData.copyrightName}. Tüm hakları
                        saklıdır.
                    </span>

                    <div className="site-footer__socials">
                        {/* Sosyal medya verilerinde LinkedIn olduğundan emin ol */}
                        {footerData.socials.map((social) => (
                            <a
                                key={social.platform}
                                href={social.href}
                                className="site-footer__social"
                                aria-label={social.platform}
                                title={social.platform}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon name={social.icon} size={18} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
