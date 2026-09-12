import logoData from '../data/logoData';
import './Logo.css';

function Logo({closeMenu}) {
    return (
        <a href={logoData.href} onClick={closeMenu} className="logo">
            {logoData.src ? (
                <img
                    src={logoData.src}
                    alt={logoData.alt}
                    className="logo__image"
                />
            ) : (
                <span className="logo__text">{logoData.text}</span>
            )}
        </a>
    );
}

export default Logo;
