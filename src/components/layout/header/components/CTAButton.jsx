import ctaData from '../data/ctaData';
import './CTAButton.css';

function CTAButton() {
    return (
        <a href={ctaData.href} className="cta-button">
            {ctaData.label}
        </a>
    );
}

export default CTAButton;
