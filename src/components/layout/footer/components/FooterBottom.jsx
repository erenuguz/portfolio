import {footerData} from '@/data/footer';
import './FooterBottom.css';

export default function FooterBottom() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer-bottom">
            <span>
                © {currentYear} {footerData.name}
            </span>
            <span className="footer-bottom__dot">•</span>
            <span>Tüm hakları saklıdır.</span>
        </div>
    );
}
