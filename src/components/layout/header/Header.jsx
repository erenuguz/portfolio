import Logo from './components/Logo';
import Nav from './components/Nav';
import IconGroup from './components/IconGroup';
import CTAButton from './components/CTAButton';

import './Header.css';

function Header({onContactOpen}) {
    return (
        <header className="header">
            <div className="header__inner">
                <div className="header__logo">
                    <Logo />
                </div>

                <div className="header__actions">
                    <Nav className="header__nav" />
                    <IconGroup />
                    <CTAButton onContactOpen={onContactOpen} />
                </div>
            </div>
        </header>
    );
}
export default Header;
