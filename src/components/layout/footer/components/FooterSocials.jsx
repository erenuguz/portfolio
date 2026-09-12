import Icon from '@/components/ui/Icon';
import {footerData} from '@/data/footer';
import './FooterSocials.css';

export default function FooterSocials() {
    const activeSocials = footerData.socials.filter((social) => social.href);

    return (
        <div className="footer-socials">
            {activeSocials.map((social) => (
                <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="footer-socials__item"
                >
                    <Icon name={social.icon} size={18} />
                </a>
            ))}
        </div>
    );
}
