import {footerData} from '@/data/footer';
import './FooterIdentity.css';

export default function FooterIdentity() {
    return (
        <div className="footer-identity">
            <div>
                <h2 className="footer-identity__name">{footerData.name}</h2>
                <p className="footer-identity__role">{footerData.role}</p>
            </div>

            {footerData.tagline && (
                <p className="footer-identity__tagline">
                    {footerData.tagline}
                </p>
            )}
        </div>
    );
}
