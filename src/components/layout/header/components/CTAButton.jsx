import ctaData from '../data/ctaData';
import './CTAButton.css';

function CTAButton({onContactOpen}) {
    return (
        <button type="button" onClick={onContactOpen} className="cta-button">
            {ctaData.label}
        </button>
    );
}

export default CTAButton;
