import Icon from '@/components/ui/Icon';
import {footerData} from '@/data/footer';
import './FooterContact.css';

export default function FooterContact({onContactOpen}) {
    return (
        <div className="footer-contact">
            <h3 className="footer-contact__title">Hızlı iletişim</h3>

            {footerData.contact.email ? (
                <a
                    href={`mailto:${footerData.contact.email}`}
                    className="footer-contact__link"
                >
                    <span className="footer-contact__icon">
                        <Icon name="mail" size={18} />
                    </span>
                    <span>{footerData.contact.email}</span>
                </a>
            ) : (
                <button
                    type="button"
                    onClick={onContactOpen}
                    className="footer-contact__link footer-contact__link--button"
                >
                    <span className="footer-contact__icon">
                        <Icon name="mail" size={18} />
                    </span>
                    <span>İletişim formunu aç</span>
                </button>
            )}

            <div className="footer-contact__link footer-contact__link--static">
                <span className="footer-contact__icon">
                    <Icon name="location" size={18} />
                </span>
                <span>{footerData.contact.location}</span>
            </div>
        </div>
    );
}
