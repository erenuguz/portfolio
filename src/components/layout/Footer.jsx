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
                    </div>
                </div>

                <div className="site-footer__bottom">
                    <span className="site-footer__copyright">
                        © {currentYear} {footerData.copyrightName}. Tüm hakları
                        saklıdır.
                    </span>

                    <div className="site-footer__socials">
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
