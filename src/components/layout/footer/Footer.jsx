import FooterIdentity from './components/FooterIdentity';
import FooterContact from './components/FooterContact';
import FooterSocials from './components/FooterSocials';
import FooterCV from './components/FooterCV';
import FooterBottom from './components/FooterBottom';
import './Footer.css';

export default function Footer({onContactOpen}) {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__top">
                    <div className="footer__left">
                        <FooterIdentity />
                        <FooterSocials />
                    </div>
                    <FooterContact onContactOpen={onContactOpen} />
                </div>

                <div className="footer__actions">
                    <FooterCV />
                </div>

                <FooterBottom />
            </div>
        </footer>
    );
}
